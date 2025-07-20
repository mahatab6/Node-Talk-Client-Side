import React from 'react';
import { FaRegComments, FaUsers } from "react-icons/fa";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import useAxiosToken from '../../hooks/useAxiosToken';
import LoadingPage from '../LoadingPage';




const AminDashboardHome = () => {

    const axiosSecureJWT = useAxiosToken();

    const {data, isLoading}=useQuery({
        queryKey: ["user-count"],
        queryFn: async () =>{
            const res = await axiosSecureJWT.get('/total-user-info');
            return res.data;
        }
    })

    if(isLoading){
        return<LoadingPage/>
    }

    return (
        <div className='bg-[#1A1B30] p-6'>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                <div className='bg-[#282149] rounded-2xl'>
                    <div className='p-6 flex flex-row items-center justify-between space-y-0 pb-2'>
                        <h2>Total Users</h2>
                        <FaUsers className='bg-[#19A4E1] p-1 rounded-xl' size={30} />
                    </div>
                    <p className='text-2xl font-bold text-white p-6'>{data?.userCount}</p>
                </div>

                <div className='bg-[#282149] rounded-2xl'>
                    <div className='p-6 flex flex-row items-center justify-between space-y-0 pb-2'>
                        <h2>Total Posts</h2>
                        <BsFileEarmarkPostFill className='bg-[#1FC365] p-1 rounded-xl' sers size={30} />
                    </div>
                    <p className='text-2xl font-bold text-white p-6'>{data?.postCount}</p>
                </div>

                <div className='bg-[#282149] rounded-2xl'>
                    <div className='p-6 flex flex-row items-center justify-between space-y-0 pb-2'>
                        <h2>Total Comments</h2>
                        <FaRegComments className='bg-[#9D57F6] p-1 rounded-xl' size={30} />
                    </div>
                    <p className='text-2xl font-bold text-white p-6'>{data?.commentCount}</p>
                </div>

            </div>

            <div className='py-10 grid grid-cols-1 gap-6'>

                <div className='bg-[#282149] rounded-2xl'>
                    <h2 className='text-white font-semibold text-2xl p-6'>Quick Actions</h2>
                    <div className='px-6 pb-6'>

                        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4'>
                            <Link
                                to="/dashboard/manage-users"
                                className='h-20 flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg text-white font-medium hover:shadow-lg transition-shadow'>View Users
                            </Link>

                            <Link
                                to="/dashboard/make-announcement"
                                className='h-20 flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white font-medium hover:shadow-lg transition-shadow'>New Announcement
                            </Link>

                            <Link
                                to="/dashboard/reported-activities"
                                className='h-20 flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-white font-medium hover:shadow-lg transition-shadow'>Review Reports
                            </Link>

                            <Link
                                to="/dashboard/admin-profile"
                                className='h-20 flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white font-medium hover:shadow-lg transition-shadow'>Analytics
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AminDashboardHome;