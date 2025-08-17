import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../../hooks/useAxiosSecure'
import { Link } from 'react-router';

const Trends = () => {

    const axiosSecure = useAxiosSecure();
    
    const {data} = useQuery({
        queryKey:["Trends-topic"],
        queryFn: async () => {
            const res = await axiosSecure.get('/trends-topic');
            return res.data;
        }
    })

    console.log(data)

  return (
    <div>
        <h2 className="text-3xl font-bold my-4">What's Hot Right Now</h2>
        <p className="text-lg ">
          Be in the know with the latest buzz.
        </p>
        <div className="divider"></div>
        <div className="grid md:grid-cols-2 gap-6">
        {
            data?.slice(0,2).map((post) => (
            <div 
                key={post?._id} 
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
                <Link to={`post-details/${post?._id}`}>
                {/* Image Section */}
                <div className="overflow-hidden">
                    <img 
                    className="w-full h-64 md:h-80 object-cover transform transition duration-500 group-hover:scale-110 group-hover:rotate-1" 
                    src={post?.postThumbnail} 
                    alt={post?.PostTitle} 
                    />
                </div>

                {/* Content Section */}
                <div className="p-4 md:p-6">
                    <h1 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {post?.PostTitle}
                    </h1>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {post?.PostDescription.length > 150 ? (
                        <>
                        {post?.PostDescription.slice(0, 150)}...
                        <span className="text-indigo-500 font-medium hover:underline ml-1">
                            read more
                        </span>
                        </>
                    ) : post?.PostDescription}
                    </p>
                </div>
                </Link>
            </div>
            ))
        }
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
        {data?.slice(2).map((post) => (
            <Link to={`post-details/${post?._id}`} 
            key={post?._id} 
            className="card bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
            {/* Image Section */}
            <figure className="overflow-hidden">
                <img
                src={post?.postThumbnail}
                alt={post?.PostTitle}
                className="h-48 w-full object-cover transform transition duration-500 group-hover:scale-110"
                />
            </figure>

            {/* Content Section */}
            <div className="card-body p-4">
                <h1 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                {post?.PostTitle}
                </h1>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                {post?.PostDescription?.length > 120 
                    ? post?.PostDescription.slice(0, 120) + "..." 
                    : post?.PostDescription}
                </p>

                {/* Footer (Optional) */}
                <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                <span>⭐ {post?.upVote || 0} votes</span>
                <span>{post?.AuthorName || "Unknown"}</span>
                </div>
            </div>
            </Link>
        ))}
        </div>
    </div>
  )
}

export default Trends