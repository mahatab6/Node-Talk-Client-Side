import React from 'react';
import DashboardText from '../../components/DashboardText';
import { FaRegComments } from "react-icons/fa";
import { Link } from 'react-router';
import { MdDelete } from "react-icons/md";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useAxiosToken from '../../hooks/useAxiosToken';
import Swal from 'sweetalert2';



const MyPost = () => {

    const axiosSecureJWT = useAxiosToken();
    const queryClient =useQueryClient();

    const {data, isLoading} = useQuery({
        queryKey: ['user-post'],
        queryFn: async () => {
            const res = await axiosSecureJWT.get('/specific-post');
            return res.data;
        }
    })

    const { mutate } = useMutation({
        mutationFn: async(id) => {
            const res = await axiosSecureJWT.delete(`/user-post-remove/${id}`)
            return res.data;
        },
        onSuccess: () =>{
            queryClient.invalidateQueries(["user-post"]);
            Swal.fire({
                title: "Post Deleted!",
                text: "The post has been successfully removed.",
                icon: "success"
            });
        },
    });

    if(isLoading){
        return <p>Loading.........</p>
    }


    const handleDelete = (id) =>{
        Swal.fire({
            title: "Are you sure you want to delete this post?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                mutate(id);
            }
            });
    }

    return (
        <div className='px-6 '>
            <DashboardText/>

            <div className='p-10 bg-[#202338] rounded-2xl mb-10'>
                <h2 className='text-3xl font-bold mb-6'>My Posts {data?.length}</h2>
                <div>
                    <div className="overflow-x-auto ">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-white font-bold text-xl'>
                                    <th></th>
                                    <th>Title</th>
                                    <th>Votes</th>
                                    <th>Comments</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            {
                                data?.map((post, index) => (
                                    <tbody key={post._id}>
                                        <tr className="hover:bg-white/5 font-bold">
                                            <th>{index + 1}</th>
                                            <td>
                                                <Link to={`/post-details/${post?._id}`} className='hover:text-blue-400'>
                                                    {post?.PostTitle}
                                                </Link>
                                            </td>
                                            <td>{post?.upVote}</td>
                                            <td>
                                                <Link to={`/dashboard/comments/${post?._id}`} className='flex items-center btn hover:bg-violet-500'> comment
                                                    <FaRegComments className='text-[#4ADE80]' size={30}/>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link onClick={()=>handleDelete(post?._id)} className='flex items-center btn hover:bg-red-600'>Delete
                                                    <MdDelete className='text-[#C084FC]' size={30}/>
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                ))
                            }
                        
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default MyPost;