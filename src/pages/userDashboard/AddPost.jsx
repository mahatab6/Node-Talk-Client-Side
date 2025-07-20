import React, { useState } from 'react';
import DashboardText from '../../components/DashboardText';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import TagDropdown from './TagDropdown';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import useUserRole from '../../hooks/useUserRole';
import LoadingPage from '../LoadingPage';
import { Helmet } from 'react-helmet';
import useAxiosToken from '../../hooks/useAxiosToken';

const AddPost = () => {

    const {user, loading} = useAuth();
    const { register, handleSubmit, control } = useForm();
    const [upVote] =useState(0);
    const [downVote ] =useState(0);
    const [commentCount ] =useState(0);
    const axiosSecureJWT = useAxiosToken();
    const navigate = useNavigate();
    const {role, isLoading} = useUserRole();
  



    const {data, isLoading:pageloading} = useQuery({
        queryKey:["post-count", user?.email],
        queryFn: async () => {
            const res = await axiosSecureJWT.get(`/user-post-count/${user?.email}`)
            return res.data;
        },
        
    })

    

    if(pageloading ||isLoading || loading){
        return<LoadingPage/>
    }


    
    const onSubmit = data => {
        const fullData = {
            ...data,
            upVote,
            downVote,
            commentCount,
            createdAt: Date.now(),
        };

        axiosSecureJWT.post("/add-user-post", fullData)
            .then(res =>{
                if(res.data.insertedId){
                    toast.success('Your post has been added successfully!');
                    navigate('/dashboard/my-post');
                }
            })
        
    }

    const isLimitedPost = ((data?.result) >= 5 && (role?.role === "user"));

    const handleBecomeMember = () => {
    navigate('/membership');
    };


    return (
        <div className='px-6'>
            <Helmet>
                <title>NodeTalk - Add Post</title>
            </Helmet>
            <DashboardText/>

            {
                (isLimitedPost)? (
                    <div className="text-center space-y-4 min-h-screen justify-items-center  content-center">
                        <p className="text-red-500 font-semibold">
                            You’ve reached your limit of 5 posts. To add more, become a member.
                        </p>
                        <button onClick={handleBecomeMember} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Become a Member
                        </button>
                    </div>
                ) : (
                    <div className='p-10 bg-[#202338] rounded-2xl mb-10'>
                        <h1 className='text-3xl font-bold mb-6'>Create New Post</h1>

                        <form className='bg-[#2C2D4A] p-5 rounded-2xl' onSubmit={handleSubmit(onSubmit)}>

                            <div>
                                <label className=' block text-xl mb-2' htmlFor="">Author Image</label>
                                <div className='flex items-center gap-3'>    
                                    <img src={user?.photoURL} alt="" referrerPolicy='no-referrer' className='w-12 rounded-full'/>  
                                    <input className=' border w-full h-10 px-3 py-2 rounded-xl mb-2' type="text" value={user?.photoURL} readOnly placeholder={user?.photoURL} {...register("AuthorImage", {required: true})} />
                                </div>
                            </div>

                            <div>
                                <label className=' block text-xl mb-2' htmlFor="">Author Name</label>
                                <input className=' border w-full h-10 px-3 py-2 rounded-xl mb-2' type="text" value={user?.displayName} readOnly placeholder={user?.displayName} {...register("AuthorName", {required: true})} />
                            </div>

                            <div>
                                <label className=' block text-xl mb-2' htmlFor="">Author Email</label>
                                <input className=' border w-full h-10 px-3 py-2 rounded-xl mb-2' type="text" value={user?.email} readOnly placeholder={user?.email} {...register("AuthorEmail", {required: true})} />
                            </div>

                            <div>
                                <label className=' block text-xl mb-2' htmlFor="">Post Title</label>
                                <input required className=' border w-full h-10 px-3 py-2 rounded-xl mb-2' type="text" placeholder="Enter Your Post Title" {...register("PostTitle", {required: true})} />
                            </div>

                            <div>
                                <label className=' block text-xl mb-2' htmlFor="">Post Description</label>
                                <textarea required className='border w-full h-30 px-3 py-2 rounded-xl mb-2' placeholder='Enter Your Post Description' {...register("PostDescription", {required: true})} />

                            </div>

                            
                            <div>
                                <label className='block text-xl mb-2'>Post Tags</label>
                                <TagDropdown  control={control} name="tags" />
                            </div>

                            <input type="submit" className="mt-5 inline-flex hover:cursor-pointer items-center justify-center rounded-md text-xl font-medium  h-10 px-4 py-2 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700" value="Create Post" />
                        </form>
                    </div>
                )
            }
        </div>
    );
};

export default AddPost;