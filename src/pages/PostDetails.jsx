import React from 'react';
import { useForm } from 'react-hook-form';
import { FaAngleDown, FaAngleUp, FaArrowLeft, FaRegComments } from 'react-icons/fa';
import { Link } from 'react-router';

const PostDetails = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);



    return (
        <div className='py-10 w-9/12 mx-auto'>
            <Link className='flex items-center gap-2 hover:text-blue-400 text-xl pb-10'><FaArrowLeft />Back to discussions</Link>

            <div className='flex gap-3 bg-amber-400 p-5 rounded-2xl mb-10'>
                {/* Vote section */}
                <div className='text-center space-y-1'>
                    <p className='btn rounded-full p-2 hover:bg-green-500'><FaAngleUp  size={25} /></p>
                    <p className=' font-bold text-xl'>25</p>
                    <p className='btn rounded-full p-2 hover:bg-red-500'><FaAngleDown size={25} /></p>
                </div>
    
                <div className='flex-col space-y-2'>
                    {/* author info */}
                    <div className='flex items-center space-x-3'>
                        <div className="avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-12 rounded-full">
                                <span className="text-xs">UI</span>
                            </div>
                        </div>
                        <h2 className='text-xl'>Michael Rodriguez</h2>
                        <p>5h ago</p>
                    </div>
    
                    {/* author-post-heading */}
                    <div className=''>
                        <h1 className='text-xl hover-grup font-semibold mb-2'>The Future of AI in Web Development</h1>
                        <p className='hover-grup'>Artificial Intelligence is transforming how we approach web development. From automated testing to intelligent code completion, AI tools are becoming indispensable for modern developers.</p>
                    </div>
    
                    {/* tags-section */}
                    <div>
                        <p>tag, hello, hihi</p>
                    </div>
    
                    {/* total vote and comment section */}
                    <div className='flex space-x-2'>
                        <p className='flex items-center gap-2 '><FaRegComments /> 8 comments</p>
                        <button className='btn bg-green-600'>Facebook</button>
                        <button className='btn bg-green-600'>Facebook</button>
                        <button className='btn bg-green-600'>Facebook</button>
                    </div>
                </div>
            </div>

            {/* Comments section */}
            <div className='bg-amber-300 p-5 rounded-2xl space-y-3 '>
                <h2 className='text-2xl font-bold'>Comments (0)</h2>
                <div className='flex gap-5'>
                   <div >
                        <div className=" avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-14 rounded-full">
                                <span className="text-xs">UI</span>
                            </div>
                        </div>
                   </div>

                    <div className=''>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <textarea {...register("comment")} className=' border w-full md:w-100 lg:w-xl rounded-2xl block py-5 p-1' placeholder='Share your thoughts...' />
                            <button type='submit' className='bg-green-500 p-2 rounded-2xl hover:cursor-pointer mt-3'>Post Comment</button>
                        </form>
                    </div>
                </div>

                <div className='text-center justify-items-center'>
                    <FaRegComments size={50}/>
                    <p className='text-xl'>No comments yet. Be the first to share your thoughts!</p>
                </div>

            </div>
        </div>
    );
};

export default PostDetails;