import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { FaBullhorn } from 'react-icons/fa';
import useAxiosToken from '../../hooks/useAxiosToken';
import toast from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import LoadingPage from '../LoadingPage';
import { Helmet } from 'react-helmet';

const Announcement = () => {


    const {user, loading} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const axiosSecureJWT = useAxiosToken();
    const queryClient = useQueryClient();


    const { data, refetch, isLoading } = useQuery({
        queryKey:["announcements"],
        queryFn: async ()=>{
            const res = await axiosSecureJWT.get('/all-announcements-page');
            return res.data;
        }
    })

    const {mutate} = useMutation({
        mutationFn: async (id) => {
            const res = await axiosSecureJWT.delete(`/announcement-delete/${id}`)
            return res.data
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries(['announcements'])
            Swal.fire("Deleted!", "The announcement has been deleted.", "success");
        }
    })


    if(isLoading || loading){
        return <LoadingPage/>
    }
    
    const onSubmit =async (data) => {
        const fullData = {
            ...data,
            createdAt: new Date().toISOString()
        };

        const res = await axiosSecureJWT.post('/announcement-public', fullData);
        if(res.data.insertedId){
            toast.success('Announcement is now public!');
            reset();
            refetch();
        }
    }

    const handleDelete = async (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "This announcement will be permanently deleted.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
            })
            .then((result) =>{
                if (result.isConfirmed){
                    mutate(id)
                }
            })
           
    }

    
    

    return (
        <div className='py-10 px-6'>
             <Helmet>
                <title>NodeTalk - Announcement</title>
            </Helmet>
            <div>
                <h1 className='text-3xl font-bold mb-4'>Make Announcement</h1>
                <p className="text-lg mb-2">Create and publish announcements to all platform users</p>
            </div>

            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                <div className='p-10 bg-[#202338] rounded-2xl'>

                    <h1 className='text-3xl font-bold mb-6 flex items-center gap-3'><FaBullhorn /> Create New Announcement</h1>

                    <form className='bg-[#2C2D4A] p-5 rounded-2xl' onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <label className=' block text-xl mb-2' htmlFor="">Author Image</label>
                            <div className='flex items-center gap-3'>    
                                <img src={user?.photoURL} alt="" className='w-12 rounded-full'/>  
                                <input className=' border w-full h-10 px-3 py-2 rounded-xl mb-2' type="text" value={user?.photoURL} readOnly placeholder={user?.photoURL} {...register("AuthorImage", {required: true})} />
                            </div>
                        </div>

                        <div>
                            <label className=' block text-xl mb-2' htmlFor="">Author Name</label>
                            <input className=' border w-full h-10 px-3 py-2 rounded-xl mb-2' type="text" value={user?.displayName} readOnly placeholder={user?.displayName} {...register("AuthorName", {required: true})} />
                        </div>

                        <div>
                            <label className=' block text-xl mb-2' htmlFor="">Announcement Title </label>
                            <input className=' border w-full h-10 px-3 py-2 rounded-xl mb-2' type="text" placeholder="Enter Your Announcement Title" {...register("AnnouncementTitle", {required: true})} />
                        </div>

                        <div>
                            <label className=' block text-xl mb-2' htmlFor="">Description</label>
                            <textarea className='border w-full h-30 px-3 py-2 rounded-xl mb-2' placeholder='Enter Your Announcement Description' {...register("Description", {required: true})} />

                        </div>

                        <input type="submit" className="mt-5 inline-flex hover:cursor-pointer items-center justify-center rounded-md text-xl font-medium  h-10 px-4 py-2 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700" value="Publish Announcement" />
                    </form>

                </div>


                <div className='p-10 bg-[#202338] rounded-2xl max-h-80 md:max-h-164 overflow-y-auto'>
                    <h1 className='text-3xl font-bold mb-6 flex items-center gap-3'> Recent Announcements</h1>

                    {
                        data?.map((recent)=>(
                            <div key={recent._id} className=' space-y-2 bg-[#2C2D4A] p-5 rounded-2xl mb-2'>
                                <div className='flex items-center gap-3 '>
                                    <img src={recent?.AuthorImage} className=' rounded-full w-14' alt="" />
                                    <div>
                                        <h3 className='text-xl font-bold'>{recent?.AuthorName}</h3>
                                        <span className='text-xl'> {new Date(recent?.createdAt).toLocaleString()}</span>
                                    </div>
                                </div>
                                <h3 className='text-xl'>{recent?.AnnouncementTitle}</h3>
                                <p>{recent?.Description}</p>
                                <hr />
                                <button onClick={() => handleDelete(recent?._id)} className="mt-3 bg-red-600 cursor-pointer hover:bg-red-700 text-white px-4 py-1 rounded"> Delete</button>
                            </div>
                        ))
                    }
                </div>

            </div>
            
        </div>
    );
};

export default Announcement;