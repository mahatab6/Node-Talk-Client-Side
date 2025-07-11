import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaAngleDown, FaAngleUp, FaArrowLeft, FaRegComments } from 'react-icons/fa';
import { Link, useParams } from 'react-router';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { Tooltip } from 'react-tooltip';
import { FacebookIcon, FacebookShareButton, LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon } from 'react-share';
import useAuth from '../hooks/useAuth';
import { FaUserAlt } from "react-icons/fa";
import { formatDistanceToNow } from 'date-fns';




const PostDetails = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {id} = useParams();
    const { register, handleSubmit } = useForm();
    
    

    const{ data: postData, isLoading } = useQuery({
        queryKey: ['specific-data'],
        queryFn: async () => {
            const res =await axiosSecure.get(`/post-details/${id}`)
            return res.data;
        }
    })

    if(isLoading){
        <p>loading.........</p>
    }


    const onSubmit = data => console.log(data);
    


    return (
        <div className='bg-[#191B2F] min-h-screen'>
            <div className='py-10 w-9/12 mx-auto'>
            <Link to='/' className='flex items-center text-white gap-2 hover:text-blue-400 text-xl pb-10'><FaArrowLeft />Back to discussions</Link>

            <div className=' gap-3 bg-[#202237] text-white p-5 rounded-2xl mb-10'>
                
    
                <div className='flex-col space-y-2'>
                    {/* author info */}
                    <div className='flex justify-between '>
                        <div className='flex items-center space-x-3'>
                            <div className="avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-12 rounded-full">
                                <img src={postData?.AuthorImage} alt="" />
                            </div>
                        </div>
                        <h2 className='text-xl'>{postData?.AuthorName}</h2>
                        {postData?.createdAt && (
                            <p>{formatDistanceToNow(new Date(parseInt(postData.createdAt)), { addSuffix: true })}</p>
                            )}
                        </div>

                        {/* Vote section */}
                        {
                            (user)? (
                                <div className='text-center space-y-1'>
                                    <p data-tooltip-id="my-tooltip" data-tooltip-content="UpVote" className='btn rounded-full p-2 hover:bg-green-500'><FaAngleUp  size={25} /></p>
                                    <p className=' font-bold text-xl'>25</p>
                                    <p data-tooltip-id="my-tooltip" data-tooltip-content="DownVote" className='btn rounded-full p-2 hover:bg-red-500'><FaAngleDown size={25} /></p>
                                    <Tooltip id='my-tooltip'/>
                                </div>
                            ) : (
                               <div className='text-center space-y-1'>
                                    <p data-tooltip-id="my-tooltip" data-tooltip-content="login again" disabled className='btn rounded-full p-2 hover:bg-green-500'><FaAngleUp  size={25} /></p>
                                    <p className=' font-bold text-xl'>25</p>
                                    <p data-tooltip-id="my-tooltip" data-tooltip-content="login again" disabled className='btn rounded-full p-2 hover:bg-red-500'><FaAngleDown size={25} /></p>
                                    <Tooltip id='my-tooltip'/>
                                </div>
                            )
                        }
                        
    
                    </div>
    
                    {/* author-post-heading */}
                    <div className=''>
                        <h1 className='text-xl lg:text-2xl hover-grup font-semibold mb-4'>{postData?.PostTitle}</h1>
                        <p style={{ whiteSpace: 'pre-wrap' }} className='hover-grup '>{postData?.PostDescription}</p>
                    </div>

                    <div className="flex gap-2 flex-wrap pt-2"> <p className='text-xl'>Tags:</p>
                            {postData?.tags?.map((tag, index) => (
                                <span key={index} className="text-white px-3 py-1 rounded-full bg-violet-700 text-sm">
                                {tag.value}
                                </span>
                            ))}
                    </div>

                    <p className='flex items-center gap-2 '><FaRegComments /> 8 comments</p>
    
                    {/* total vote and comment section */}
                    {
                        (user) ? (
                            <div className='flex space-x-2 pt-2'>
                                <FacebookShareButton  url={postData?._id} quote={postData?.PostTitle}>
                                    <FacebookIcon size={32} round />
                                </FacebookShareButton>
                                <LinkedinShareButton url={postData?._id} quote={postData?.PostTitle}>
                                    <LinkedinIcon size={32} round />
                                </LinkedinShareButton>
                                <TwitterShareButton url={postData?._id} quote={postData?.PostTitle}>
                                    <TwitterIcon size={32} round />
                                </TwitterShareButton>
                                
                            </div>
                        ) : (
                            <div className='flex space-x-2 pt-2'>
                                <FacebookShareButton disabled cursor-not-allowed url={postData?._id} quote={postData?.PostTitle}>
                                    <FacebookIcon  size={32} round />
                                </FacebookShareButton>
                                <LinkedinShareButton disabled cursor-not-allowed url={postData?._id} quote={postData?.PostTitle}>
                                    <LinkedinIcon size={32} round />
                                </LinkedinShareButton>
                                <TwitterShareButton disabled cursor-not-allowed url={postData?._id} quote={postData?.PostTitle}>
                                    <TwitterIcon size={32} round />
                                </TwitterShareButton>
                                
                            </div>
                        )
                    }

                </div>
                
            </div>

            {/* Comments section */}
            <div className='bg-[#202237] text-white p-5 rounded-2xl space-y-3 '>
                <h2 className='text-2xl font-bold'>Comments (0)</h2>
                <div className='flex flex-col md:flex-row gap-5'>
                   <div >
                        <div className=" avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-14 rounded-full">
                                {
                                    (user)? <img src={user?.photoURL} alt="" /> : <FaUserAlt size={35} />
                                }
                                
                            </div>
                        </div>
                   </div>

                    <div className=''>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <textarea {...register("comment")} className=' border w-full md:w-100 lg:w-xl rounded-2xl block py-5 p-1' placeholder='Share your thoughts...' />
                            {
                                (user)?(
                                    <button type='submit' className='bg-green-500 p-2 rounded-2xl hover:cursor-pointer mt-3'>Post Comment</button>
                                ): (
                                   <button disabled type='submit' className='bg-green-500 p-2 rounded-2xl mt-3 cursor-not-allowed opacity-50'> Post Comment </button>
                                )
                            }
                        </form>
                    </div>
                </div>

                <div className='text-center justify-items-center'>
                    <FaRegComments size={50}/>
                    <p className='text-xl'>No comments yet. Be the first to share your thoughts!</p>
                </div>

            </div>
        </div>
        </div>
    );
};

export default PostDetails;