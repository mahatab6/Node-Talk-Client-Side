import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FiUserPlus } from "react-icons/fi";
import useAxiosToken from '../../hooks/useAxiosToken';
import toast from 'react-hot-toast';


const ManageUsers = () => {

    const axiosSecureJWT = useAxiosToken();
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [limit] =useState(10);
 

    const {data,refetch} = useQuery({
        queryKey: ["user-stats", search, limit, page],
        queryFn: async ()=>{
            const res = await axiosSecureJWT.get('/manage-user-stats',{
                params: {search, limit, page }
            });
            return res.data
        }
    })

    const handleUserRole =async (id, newRole) => {
        const res =await axiosSecureJWT.patch(`/user-stats-change/${id}`, {role: newRole});
         if (res.data.modifiedCount){
            toast.success("Role updated successfully!");
            refetch();
         }
    }

    return (
        <div className='py-10 px-6'>
            <div>
                <h1 className='text-3xl font-bold mb-4'>Manage Users</h1>
                <p className="text-lg mb-2">View and manage all platform users</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-10'>
                <div className='md:col-span-2 p-6 bg-[#202338] rounded-2xl'>
                    <label className="input bg-[#343258] text-white w-full">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                            >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input onChange={(e)=> setSearch(e.target.value)} type="search" placeholder="Search users by email..." />
                    </label>
                </div>

                <div className='text-center p-6 hover:bg-indigo-800 bg-[#202338] rounded-2xl'>
                    <span className='text-xl font-bold'>{data?.totalUser}</span>
                    <p>Users Found</p>
                </div>
            </div>

            <div className='p-10 bg-[#202338] rounded-2xl mb-10'>
                <h2 className='text-3xl font-bold mb-6 inline-flex gap-2'><FiUserPlus /> All Users</h2>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-white font-bold text-xl'>
                                    
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Subscription</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>

                            {
                                data?.userStats.map((userInfo)=>(
                                    <>
                                    <tr key={userInfo?._id} className="font-bold hover:bg-indigo-800">
                                        <td>{userInfo?.email}</td>
                                        <td>{userInfo?.role}</td>
                                        <td>{userInfo?.role === "admin" ? <span className='bg-blue-600  p-2 rounded-2xl'>👑 admin</span> : userInfo.role === "paidmember" ?<span className='bg-yellow-400 p-2 rounded-2xl text-black'>🥇 Gold Member</span> :"BRONZE Member" }</td>
                                        <td>{userInfo.role === "admin" ? ( 
                                            <button onClick={()=> handleUserRole(userInfo._id, "user")} className='p-2 rounded-xl bg-red-600 hover:bg-red-700 cursor-pointer'>Remove Admin</button>
                                        ): (
                                            <button onClick={()=> handleUserRole(userInfo?._id, "admin")} className='p-2 rounded-xl cursor-pointer bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600'>Make Admin</button>
                                        )}
                                        </td>
                                    </tr>
                                    </>
                                )
                                )
                            }
                            
                            </tbody>

                        </table>

                        <div className="flex gap-2 justify-center mt-4">

                            <button disabled={page === 1} onClick={() => setPage(page - 1)} className="px-2 rounded disabled:opacity-50">
                                Prev
                            </button>

                            {Array.from({ length: Math.ceil(data?.totalUser / limit) }, (_, i) => (
                                <button key={i} onClick={() => setPage(i + 1)} className={`px-2 rounded ${ page === i + 1 ? 'bg-blue-500 text-white' : ''}`}
                                >
                                {i + 1}
                                </button>
                            ))}

                            <button disabled={page === Math.ceil(data?.totalUser / limit)} onClick={() => setPage(page + 1)} className="px-2 rounded disabled:opacity-50">
                                Next
                            </button>

                        </div>

                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='text-center hover:bg-indigo-800 p-6 bg-[#202338] rounded-2xl'>
                    <span className='text-xl font-bold'>{data?.adminCount}</span>
                    <p>Admins</p>
                </div>

                <div className='text-center hover:bg-indigo-800 p-6 bg-[#202338] rounded-2xl'>
                    <span className='text-xl font-bold'>{data?.paidMemberCount}</span>
                    <p>Premium Users</p>
                </div>

                <div className='text-center hover:bg-indigo-800 p-6 bg-[#202338] rounded-2xl'>
                    <span className='text-xl font-bold'>{data?.onlyUserCount}</span>
                    <p>Free Users</p>
                </div>
            </div>

        </div>
    );
};

export default ManageUsers;