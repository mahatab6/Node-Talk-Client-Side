import React, { useState } from 'react';
import DashboardText from '../../components/DashboardText';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import TagDropdown from './TagDropdown';

const AddPost = () => {

    const {user} = useAuth();
    const { register, handleSubmit, control } = useForm();
    const [upVote,setUpVote] =useState(0);
    const [downVote ,setDownVote ] =useState(0);

    const onSubmit = data => {
        const fullData = {
            ...data,
            upVote,
            downVote,
        };

        console.log(fullData);
    }


    return (
        <div className='px-6'>
            <DashboardText/>

            <div className='p-10 bg-[#202338] rounded-2xl mb-10'>
                <h1 className='text-3xl font-bold mb-6'>Create New Post</h1>

                <form className='bg-[#2C2D4A] p-5 rounded-2xl' onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label className=' block text-xl mb-2' htmlFor="">Author Image</label>
                        <input className=' border w-full h-10 px-3 py-2 rounded-xl mb-2' type="text" value={user?.photoURL} readOnly placeholder={user?.photoURL} {...register("Author Image", {required: true})} />
                    </div>

                    <div>
                        <label className=' block text-xl mb-2' htmlFor="">Author Name</label>
                        <input className=' border w-full h-10 px-3 py-2 rounded-xl mb-2' type="text" value={user?.displayName} readOnly placeholder={user?.displayName} {...register("Author Name", {required: true})} />
                    </div>

                    <div>
                        <label className=' block text-xl mb-2' htmlFor="">Author Email</label>
                        <input className=' border w-full h-10 px-3 py-2 rounded-xl mb-2' type="text" value={user?.email} readOnly placeholder={user?.email} {...register("Author Email", {required: true})} />
                    </div>

                    <div>
                        <label className=' block text-xl mb-2' htmlFor="">Post Title</label>
                        <input className=' border w-full h-10 px-3 py-2 rounded-xl mb-2' type="text" placeholder="Enter Your Post Title" {...register("Post Title", {required: true})} />
                    </div>

                    <div>
                        <label className=' block text-xl mb-2' htmlFor="">Post Description</label>
                        <textarea className='border w-full h-30 px-3 py-2 rounded-xl mb-2' placeholder='Enter Your Post Description' {...register("Post Description", {required: true})} />

                    </div>

                    
                    <div>
                        <label className='block text-xl mb-2'>Post Tags</label>
                        <TagDropdown control={control} name="tags" />
                    </div>

                    <input type="submit" className="mt-5 inline-flex hover:cursor-pointer items-center justify-center rounded-md text-xl font-medium  h-10 px-4 py-2 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700" value="Create Post" />
                </form>
            </div>
        </div>
    );
};

export default AddPost;