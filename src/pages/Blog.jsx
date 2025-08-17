import React, { useState } from 'react'
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { formatDistanceToNow } from 'date-fns';
import LoadingPage from './LoadingPage';
import { Link } from 'react-router';
import { FaAngleDown, FaAngleUp, FaRegComments } from 'react-icons/fa';
import Search from './home/homecomponents/right side components/Search';
import { TbChartBarPopular } from 'react-icons/tb';
import { IoMdTime } from 'react-icons/io';


const Blog = () => {
    const axiosSecure = useAxiosSecure();
    const [page, setPage] = useState(1);
    const [sortType , setSortType] = useState();
    const [search, setSearch] = useState('')
    const [limit] =useState(12);

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
        <div className='w-11/12 mx-auto min-h-screen pb-10'>

            <div className="w-11/12 mx-auto py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search */}
            <div className="flex-1">
                <Search setSearch={setSearch} />
            </div>

            {/* Sort Buttons */}
            <div className="flex flex-wrap gap-3">
                <button
                onClick={() => setSortType('popular')}
                className="flex items-center gap-2 px-4 py-2 border-b-2 border-transparent text-lg font-medium hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 rounded-md"
                >
                <TbChartBarPopular className="text-xl" /> Most Popular
                </button>

                <button
                onClick={() => setSortType('downVote')}
                className="flex items-center gap-2 px-4 py-2 border-b-2 border-transparent text-lg font-medium hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 rounded-md"
                >
                <IoMdTime className="text-xl" /> Down-Vote
                </button>
            </div>
            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
            {data?.post?.map((post) => (
                <Link
                to={`/post-details/${post?._id}`}
                key={post?._id}
                className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                >
                {/* Image */}
                <div className="overflow-hidden rounded-t-2xl">
                    <img
                    src={post?.postThumbnail}
                    alt={post?.PostTitle}
                    className="w-full h-48 object-cover transform transition duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col  h-full">
                    {/* Author & Date */}
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral">
                            <img
                                src={post?.AuthorImage}
                                alt={post?.AuthorName}
                                className="w-full h-full object-cover"
                            />
                            </div>
                            <span className="text-sm font-medium">{post?.AuthorName || "Unknown"}</span>
                        </div>
                        {post?.createdAt && (
                            <span className="text-xs text-gray-400">
                            {formatDistanceToNow(new Date(parseInt(post?.createdAt)), { addSuffix: true })}
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h2 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 ">
                    {post?.PostTitle}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-700 text-sm md:text-base mb-3">
                    {post?.PostDescription.length > 120
                        ? post?.PostDescription.slice(0, 120) + "..."
                        : post?.PostDescription}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                    {post?.tags?.map((tag, idx) => (
                        <span
                        key={idx}
                        className="bg-violet-700 text-white px-3 py-1 rounded-full text-xs md:text-sm"
                        >
                        {tag.value}
                        </span>
                    ))}
                    </div>

                    {/* Votes & Comments */}
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                        <FaAngleUp className="text-green-500" />Up votes {post?.upVote || 0}
                    </span>
                    
                    <span className="flex items-center gap-1">
                        <FaRegComments /> {post?.commentCount || 0} comments
                    </span>
                    </div>

                    {/* View Post Button */}
                    <div>
                    <a
                        href={`/post-details/${post?._id}`}
                        className="inline-block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
                    >
                        View Post
                    </a>
                    </div>
                </div>
                </Link>
            ))}
            </div>

            
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

export default Blog