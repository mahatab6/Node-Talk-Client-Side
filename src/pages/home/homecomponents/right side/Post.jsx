import React from 'react';
import { FaAngleDown, FaAngleUp, FaRegComments } from "react-icons/fa";


const Post = () => {
    return (
        <div className='flex gap-3 bg-amber-400 p-5 rounded-2xl'>
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
                <div className=' group hover:cursor-pointer'>
                    <h1 className='text-xl hover-grup font-semibold mb-2 group-hover:text-blue-400'>The Future of AI in Web Development</h1>
                    <p className='hover-grup'>Artificial Intelligence is transforming how we approach web development. From automated testing to intelligent code completion, AI tools are becoming indispensable for modern developers.</p>
                </div>

                {/* tags-section */}
                <div>
                    <p>tag, hello, hihi</p>
                </div>

                {/* total vote and comment section */}
                <div className='flex space-x-2'>
                    <p className='flex items-center gap-2 '><FaRegComments /> 8 comments</p>
                    <p className='flex items-center'><FaAngleUp className='text-green-500' />20</p>
                    <p className='flex items-center'><FaAngleDown className='text-red-500' />5</p>
                </div>
            </div>
        </div>
    );
};

export default Post;