import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaRegComments } from "react-icons/fa";
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { Link } from 'react-router';
import { formatDistanceToNow } from 'date-fns';


const Post = ({ sortType,search }) => {

    const axiosSecure = useAxiosSecure();
    const [page, setPage] = useState(1);
    const [limit] =useState(5);

    const {data, isLoading, error} = useQuery({
            queryKey: ['user-post',search, sortType, page, limit],
            queryFn: async () => {
                const res = await axiosSecure.get('/public-post', {
                    params: {search, sort: sortType, page, limit }
                });
                return res.data;
            }
        })

    if (isLoading) {
    return <p>Loading...</p>;
    }

    if (error) {
    return <p>Error loading posts</p>;
    }

    return (
        <div className=''>
            {
                data.post.map((post)=>(

                    <div key={post._id} className='flex-col space-y-2  bg-secondary p-5 rounded-2xl mb-5'>
                        {/* author info */}
                        <div className='flex items-center space-x-3 '>
                            <div className="avatar avatar-placeholder">
                                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                                    <img src={post?.AuthorImage} alt="" />
                                </div>
                            </div>
                            <h2 className='text-xl'>{post?.AuthorName}</h2>
                            {post?.createdAt && (
                                <p>{formatDistanceToNow(new Date(parseInt(post?.createdAt)), { addSuffix: true })}</p>
                                )}
                        </div>

                        {/* author-post-heading */}
                        <Link to={`post-details/${post?._id}`} className=' group hover:cursor-pointer'>
                            <h1 className='text-xl hover-grup font-semibold mb-2 group-hover:font-bold'>{post?.PostTitle}</h1>
                            <p className='hover-grup'>{post?.PostDescription.length > 350 ? post?.PostDescription.slice(0,350)+'...read more' : post.PostDescription}</p>
                        </Link>

                        {/* tags-section */}
                        <div className="flex gap-2 flex-wrap pt-2"> <p className='text-xl'>Tags:</p>
                            {post?.tags?.map((tag, index) => (
                                <span key={index} className="text-white px-3 py-1 rounded-full bg-violet-700 text-sm">
                                {tag.value}
                                </span>
                            ))}
                        </div>
                 

                        {/* total vote and comment section */}
                        <div className='flex space-x-2 '>
                            <p className='flex items-center gap-2 '><FaRegComments /> {post?.commentCount} comments</p>
                            <p className='flex items-center'><FaAngleUp className='text-green-500' />{post?.upVote}</p>
                            <p className='flex items-center'><FaAngleDown className='text-red-500' />{post?.downVote}</p>
                        </div>
                    </div>
                ))
            }
            
            <div className="flex gap-2 justify-center mt-4">

                <button disabled={page === 1} onClick={() => setPage(page - 1)} className="px-2 bg-gray-300 rounded disabled:opacity-50">
                    Prev
                </button>

                {Array.from({ length: Math.ceil(data?.total / limit) }, (_, i) => (
                    <button key={i} onClick={() => setPage(i + 1)} className={`px-2 rounded ${ page === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                    {i + 1}
                    </button>
                ))}

                <button disabled={page === Math.ceil(data?.total / limit)} onClick={() => setPage(page + 1)} className="px-2 bg-gray-300 rounded disabled:opacity-50">
                    Next
                </button>

            </div>

        </div>
    );
};

export default Post;