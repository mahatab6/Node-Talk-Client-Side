import React from 'react';
import useAuth from '../../hooks/useAuth';
import StatPieCharts from './StatPieCharts';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useAxiosToken from '../../hooks/useAxiosToken';
import { useForm } from 'react-hook-form';
import { IoMdAdd } from "react-icons/io";
import toast from 'react-hot-toast';
import LoadingPage from '../LoadingPage';


const AdminProfile = () => {

    const axiosSecureJWT = useAxiosToken();
    const { register, handleSubmit,reset } = useForm();
    const queryClient =useQueryClient();
    const {user, loading} = useAuth();

    const {data,refetch, isLoading}=useQuery({
        queryKey: ["user-count"],
        queryFn: async () =>{
            const res = await axiosSecureJWT.get('/total-user-info');
            return res.data;
        }
    })

    const {mutate} = useMutation({
        mutationFn: async (id)=>{
            const res = await axiosSecureJWT.delete(`/tags-delete/${id}`)
            return res.data;
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries(["user-count"])
            toast.success('Successfully deleted tag!');
        }
    })

    if(isLoading || loading){
        return <LoadingPage/>
    }


    const onSubmit = async(data) =>{
        const res =await axiosSecureJWT.post('/added-tags', data);
        if(res.data.insertedId){
            toast.success('Successfully tags added!');
            reset();
            refetch();

        }
        if (res.data?.message === "Tags already adding"){
            toast.error('This tag is already added!');
        }
    } 

    const handleDelete = (id)=>{
        mutate(id)
    }

    
    return (
        <div className='py-10 px-6'>

            <div>
                <h1 className='text-3xl font-bold mb-4'>Admin Profile</h1>
                <p className="text-lg mb-4">Manage your profile and platform settings</p>
            </div>

            <div className='bg-[#202338] p-6 rounded-2xl mb-4'>
                <h2 className='text-2xl font-bold mb-4'>Profile Information</h2>

                <div className='grid grid-cols-1 space-y-4'>
                    <div className='flex space-x-4 '>
                        <img src={user?.photoURL} alt="" className='w-20 rounded-full'/>
                        <div>
                            <h3 className='text-2xl font-bold'>{user?.displayName}</h3>
                            <p>{user?.email}</p>
                        </div>
                    </div>

                    
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <div className='text-center p-6 bg-[#2C2D4A] rounded-2xl hover:bg-indigo-800'>
                            <span className='text-2xl font-bold text-green-400'>{data?.postCount}</span>
                            <p>Posts</p>
                        </div>

                        <div className='text-center p-6 bg-[#2C2D4A] rounded-2xl hover:bg-indigo-800'>
                            <span className='text-2xl font-bold text-green-400'>{data?.commentCount}</span>
                            <p>Comments</p>
                        </div>

                        <div className='text-center p-6 bg-[#2C2D4A] rounded-2xl hover:bg-indigo-800'>
                            <span className='text-2xl font-bold text-green-400'>{data?.userCount}</span>
                            <p>Users</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-5'>
                <div className='bg-[#202338] p-6 rounded-2xl'>
                    <h2 className='text-2xl font-bold mb-4'>Platform Analytics</h2>
                    <StatPieCharts data ={data}/>
                </div>

                <div className='bg-[#202338] p-6 rounded-2xl'>
                    <h2 className='text-2xl font-bold mb-4'>Manage Tags</h2>

                    <form className='flex space-x-2' onSubmit={handleSubmit(onSubmit)}>

                        <input className='p-2 border w-full rounded-xl' type="text" placeholder="Add new tags........" {...register('tags')} />
                        <button className='p-2 bg-green-500 rounded-xl cursor-pointer' type="submit"><IoMdAdd size={30}/></button>
                    </form>

                    <div className='flex flex-wrap w-full mt-2'>
                        {
                            data?.tags.map((tag) => (
                                <div key={tag._id} className='relative group m-2 hover:cursor-pointer'>
                                    <span className='text-base font-black bg-indigo-600 px-3 py-1 m-1 rounded-2xl'>{tag.tags}</span>
                                     <button onClick={() => handleDelete(tag._id)} className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs px-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:cursor-pointer'title='Delete Tag'>✕</button>
                                </div>
                            ))
                        }
                    </div>
                
                </div>
            </div>
            
        </div>
    );
};

export default AdminProfile;