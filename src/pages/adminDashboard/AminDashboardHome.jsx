import React from 'react';
import { FaRegComments, FaUsers } from "react-icons/fa";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router';




const AminDashboardHome = () => {
    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

                <div className='bg-[#282149] rounded-2xl'>
                    <div className='p-6 flex flex-row items-center justify-between space-y-0 pb-2'>
                        <h2>Total Users</h2>
                        <FaUsers className='bg-[#19A4E1] p-1 rounded-xl' size={30} />
                    </div>
                    <p className='text-2xl font-bold text-white p-6'>515</p>
                </div>

                <div className='bg-[#282149] rounded-2xl'>
                    <div className='p-6 flex flex-row items-center justify-between space-y-0 pb-2'>
                        <h2>Total Posts</h2>
                        <BsFileEarmarkPostFill className='bg-[#1FC365] p-1 rounded-xl' sers size={30} />
                    </div>
                    <p className='text-2xl font-bold text-white p-6'>515</p>
                </div>

                <div className='bg-[#282149] rounded-2xl'>
                    <div className='p-6 flex flex-row items-center justify-between space-y-0 pb-2'>
                        <h2>Total Comments</h2>
                        <FaRegComments className='bg-[#9D57F6] p-1 rounded-xl' size={30} />
                    </div>
                    <p className='text-2xl font-bold text-white p-6'>515</p>
                </div>

                <div className='bg-[#282149] rounded-2xl'>
                    <div className='p-6 flex flex-row items-center justify-between space-y-0 pb-2'>
                        <h2>Growth Rate</h2>
                        <FaArrowTrendUp className='bg-[#F35534] p-1 rounded-xl' size={30} />
                    </div>
                    <p className='text-2xl font-bold text-white p-6'>515</p>
                </div>

            </div>

            <div className='py-10 grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div className='bg-[#282149] rounded-2xl'>
                    <h2 className='text-white font-semibold text-2xl p-6'>Recent Activity</h2>
                    <div className=' space-y-2 px-6 pb-6'>
                        <div className='p-3 bg-slate-700/30 rounded-lg'>
                            <span className='flex items-center gap-2'><GoDotFill className='text-[#22C55E]' />New user registered: john.doe@email.com</span>
                        </div>
                        <div className='p-3 bg-slate-700/30 rounded-lg'>
                            <span className='flex items-center gap-2'><GoDotFill className='text-[#3B82F6]' />New post published: "Getting Started Guide"</span>
                        </div>
                        <div className='p-3 bg-slate-700/30 rounded-lg'>
                            <span className='flex items-center gap-2'><GoDotFill className='text-[#EAB308]' />Comment reported for review</span>
                        </div>
                       
                    </div>
                </div>

                <div className='bg-[#282149] rounded-2xl'>
                    <h2 className='text-white font-semibold text-2xl p-6'>Quick Actions</h2>
                    <div className='px-6 pb-6'>

                        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4'>
                            <Link
                                to="#"
                                className='h-20 flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg text-white font-medium hover:shadow-lg transition-shadow'>View Users
                            </Link>

                            <Link
                                to="#"
                                className='h-20 flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white font-medium hover:shadow-lg transition-shadow'>New Announcement
                            </Link>

                            <Link
                                to="#"
                                className='h-20 flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-white font-medium hover:shadow-lg transition-shadow'>Review Reports
                            </Link>

                            <Link
                                to="#"
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