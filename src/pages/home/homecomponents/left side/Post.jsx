import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaRegComments } from "react-icons/fa";
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { Link } from 'react-router';
import { formatDistanceToNow } from 'date-fns';
import LoadingPage from '../../../LoadingPage';


const Post = ({ sortType,search }) => {

    const axiosSecure = useAxiosSecure();
    const [page, setPage] = useState(1);
    const [limit] =useState(10);

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
    return <LoadingPage/>
    }

    if (error) {
    return <p>Error loading posts</p>;
    }

    return (
        <div className=''>
            {
                data?.post?.map((post)=>(
                    <> <Link to={`post-details/${post?._id}`} className="group">
                   
                    <div key={post._id} className="flex flex-col md:flex-row-reverse items-start md:items-center bg-secondary p-5 rounded-2xl mb-5 shadow-lg gap-5 hover:shadow-xl transition-shadow duration-300">
                        {/* Image */}
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <img
                            src={post?.postThumbnail}
                            alt={post?.PostTitle}
                            className="rounded-2xl w-full h-auto object-cover transform transition duration-500 hover:scale-102"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col space-y-3 md:w-2/3">
                            {/* Author Info */}
                            <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral">
                                <img src={post?.AuthorImage} alt={post?.AuthorName} className="w-full h-full object-cover"/>
                            </div>
                            <h2 className="text-lg md:text-xl font-medium">
                                By <span className="font-semibold">{post?.AuthorName}</span>
                            </h2>
                            {post?.createdAt && (
                                <p className="text-sm text-gray-400">
                                {formatDistanceToNow(new Date(parseInt(post?.createdAt)), { addSuffix: true })}
                                </p>
                            )}
                            </div>

                            {/* Post Title & Description */}
                            <h1 className="text-xl md:text-2xl font-semibold mb-2 transition-all">
                                {post?.PostTitle}
                            </h1>
                            <p className="text-gray-700 text-sm md:text-base">
                                {post?.PostDescription.length > 350
                                ? post?.PostDescription.slice(0, 350) + '...read more'
                                : post.PostDescription}
                            </p>
                           

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 pt-2">
                            <p className="text-sm md:text-base font-medium mr-2">Tags:</p>
                            {post?.tags?.map((tag, index) => (
                                <span
                                key={index}
                                className="text-white px-3 py-1 rounded-full bg-violet-700 text-xs md:text-sm"
                                >
                                {tag.value}
                                </span>
                            ))}
                            </div>

                            {/* Votes & Comments */}
                            <div className="flex flex-wrap gap-4 pt-2 items-center">
                            <p className="flex items-center gap-2 text-gray-600">
                                <FaRegComments size={20} /> {post?.commentCount} comments
                            </p>
                            <p className="flex items-center gap-1 text-green-500 font-medium">
                                <FaAngleUp size={20} /> {post?.upVote}
                            </p>
                            <p className="flex items-center gap-1 text-red-500 font-medium">
                                <FaAngleDown size={20} /> {post?.downVote}
                            </p>
                            </div>
                        </div>
                         
                    </div>
                    </Link>
                </>
                ))
            }
            
            <div className="flex gap-2 justify-center my-4">

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