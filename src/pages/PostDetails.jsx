import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaAngleDown, FaAngleUp, FaArrowLeft, FaRegComments } from 'react-icons/fa';
import { Link, useParams } from 'react-router';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { Tooltip } from 'react-tooltip';
import { FacebookIcon, FacebookShareButton, LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon, } from 'react-share';
import useAuth from '../hooks/useAuth';
import { FaUserAlt } from "react-icons/fa";
import { formatDistanceToNow } from 'date-fns';
import toast from 'react-hot-toast';
import Comment from './Comment';
import LoadingPage from './LoadingPage';
import { Helmet } from 'react-helmet';




const PostDetails = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {id} = useParams();
    const { register, handleSubmit, reset } = useForm();
    const [uiload, setUiload] = useState(false);
    
    const{ data: postData, isLoading,refetch } = useQuery({
        queryKey: ['specific-data'],
        queryFn: async () => {
            const res =await axiosSecure.get(`/post-details/${id}`)
            return res.data;
        }
    })

    if(isLoading || loading){
        return <LoadingPage/>
    }


    const onSubmit = data => {
        const userComment = {
            ...data,
            postId: postData?._id,
            postTitle: postData?.PostTitle,
            freebackUser: user?.email,
            freebackPhoto: user?.photoURL,
            freebackName: user?.displayName,
            commentTime: Date.now()

        }
        axiosSecure.post('/comments', userComment)
        .then(res => {
            if(res.data.insertedId){
                toast.success("Your comment added");
                refetch()
                reset()
            }
        })
       
    }




    const handleVote =(id, voteType)=>{
        const votes = {
            postId: id,
            voterEmail: user?.email,
            voteType: voteType
        }
        axiosSecure.post('/vote', votes)
        .then(res => {
            toast(res.data.message); 
            refetch(); 
        })

        
    }

    const uiReload = () => {
        refetch()
        setUiload(true)
    }
    

    return (
        <div className='bg-background min-h-screen'>
            <Helmet>
                <title>NodeTalk - {postData?.PostTitle}</title>
            </Helmet>
            <div className='py-10 w-11/12  md:w-8/12 mx-auto'>
            <Link to='/' className='flex items-center gap-2 hover:text-blue-400 text-xl pb-10'><FaArrowLeft />Back to discussions</Link>

            <div className=' gap-3 bg-secondary p-5 rounded-2xl mb-10'>
                
    
                <div className='flex-col space-y-2'>
                    {/* Image */}
                    <div className=" ">
                        <img
                        src={postData?.postThumbnail}
                        alt={postData?.PostTitle}
                        className="rounded-2xl w-full h-auto object-cover"
                        />
                    </div>
                    {/* author info */}
                    <div className='flex justify-between '>
                        <div className='flex items-center space-x-3'>
                            <div className="avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-12 rounded-full">
                                <img src={postData?.AuthorImage} alt="" referrerPolicy='no-referrer' />
                            </div>
                        </div>
                        <h2 className='text-xl'>By {postData?.AuthorName}</h2>
                        {postData?.createdAt && (
                            <p>{formatDistanceToNow(new Date(parseInt(postData.createdAt)), { addSuffix: true })}</p>
                            )}
                        </div>

                        {/* Vote section */}
                        {
                            (user)? (
                                <div className='text-center space-y-1'>
                                    <p onClick={()=> handleVote(postData?._id, "up")} data-tooltip-id="my-tooltip" data-tooltip-content="UpVote" className='btn rounded-full p-2 hover:bg-green-500'><FaAngleUp  size={25} /></p>
                                    <p className=' font-bold text-xl'>{postData?.upVote}</p>
                                    <p onClick={()=> handleVote(postData?._id, "down")} data-tooltip-id="my-tooltip" data-tooltip-content="DownVote" className='btn rounded-full p-2 hover:bg-red-500'><FaAngleDown size={25} /></p>
                                    <Tooltip id='my-tooltip'/>
                                </div>
                            ) : (
                               <div className='text-center space-y-1'>
                                    <p data-tooltip-id="my-tooltip" data-tooltip-content="login again" disabled className='btn rounded-full p-2 hover:bg-green-500'><FaAngleUp  size={25} /></p>
                                    <p className=' font-bold text-xl'>{postData?.upVote}</p>
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
                                <span key={index} className="px-3 py-1 rounded-full bg-violet-700 text-white text-sm">
                                {tag.value}
                                </span>
                            ))}
                    </div>

                    <div className='flex space-x-2 '>
                        <p className='flex items-center gap-2 '><FaRegComments size={25} /> {postData?.commentCount} comments</p>
                        <p className='flex items-center'><FaAngleUp size={25} className='text-green-500' />{postData?.upVote}</p>
                        <p className='flex items-center'><FaAngleDown size={25} className='text-red-500' />{postData?.downVote}</p>
                    </div>
    
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
                                <FacebookShareButton  quote={postData?.PostTitle}>
                                    <FacebookIcon  size={32} round />
                                </FacebookShareButton>
                                <LinkedinShareButton  quote={postData?.PostTitle}>
                                    <LinkedinIcon size={32} round />
                                </LinkedinShareButton>
                                <TwitterShareButton  quote={postData?.PostTitle}>
                                    <TwitterIcon size={32} round />
                                </TwitterShareButton>
                                
                            </div>
                        )
                    }

                </div>
                
            </div>

            {/* Comments section */}
            <div className='bg-secondary p-5 rounded-2xl space-y-3 '>
                <h2 className='text-2xl font-bold'>Comments {postData?.commentCount}</h2>
                <div className='flex flex-col md:flex-row gap-5'>
                   <div >
                        <div className=" avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-14 rounded-full">
                                {
                                    (user)? <img src={user?.photoURL} alt="" referrerPolicy='no-referrer' /> : <FaUserAlt size={35} />
                                }
                                
                            </div>
                        </div>
                   </div>


                   {
                    (user)?(
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea name="comment" {...register("comment")} className=' border w-full md:w-100 lg:w-xl rounded-2xl block py-5 p-1' placeholder='Share your thoughts...' />
                        <button onClick={uiReload} type='submit' className='bg-green-500 p-2 rounded-2xl hover:cursor-pointer mt-3'>Post Comment</button>    
                    </form>
                    ):(
                        <div>
                            <h2 className='text-center font-bold text-2xl'>Login to join the discussion</h2>
                        </div>
                    )
                   } 
                </div>

                <Comment id={postData?._id} uiload={uiload}/>

            </div>
        </div>
        </div>
    );
};

export default PostDetails;