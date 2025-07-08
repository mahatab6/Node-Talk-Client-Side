import React from 'react';
import useAuth from '../../hooks/useAuth';
import DashboardText from '../../components/DashboardText';
import { FaRegUserCircle } from 'react-icons/fa';
import Bronze from '../../assets/Bronze.png'
import { CiMedal } from "react-icons/ci";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { Link } from 'react-router';
import { FaEye } from "react-icons/fa";






const MyProfile = () => {
    const {user} = useAuth();
    return (
        <div className='px-6'>
            <DashboardText/>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='lg:col-span-2 flex space-x-6 rounded-xl p-6 bg-[#202338]'>

                    <div className="flex flex-col">
                        <div className="flex flex-wrap gap-x-2 gap-y-2">
                            <div className="relative flex-shrink-0">
                                <span className="absolute right-16 w-10 h-10 p-1 bg-white border rounded-full ">
                                    <img src={Bronze} className='w-12' alt="" />
                                </span>
                                {
                                    user?.photoURL? <img src={user?.photoURL} alt="" className="w-20 h-20 border rounded-full dark:bg-gray-500 dark:border-gray-300" /> : <FaRegUserCircle size={35}/>
                                }
                            </div>
                        </div>
                    </div>

                    <div className='flex-1'>
                        <h1 className='text-2xl font-bold mb-2'>{user?.displayName}</h1>
                        <p className=' mb-3'>{user?.email}</p>
                        <p className='flex items-center gap-1 bg-[#CB802D] p-1 rounded-2xl text-base w-40 mb-3'><CiMedal /> BRONZE MEMBER</p>
                        <p>Joined 7/8/2025</p>
                    </div>
                </div>

                <div className='space-y-4'>

                    <div className=' flex items-center justify-between bg-[#202338] stats-card rounded-xl p-4 hover:bg-indigo-800'>
                        <div>
                            <p className='text-sm '>Total Posts</p>
                            <h2 className='text-2xl font-bold'>0</h2>
                        </div>
                        <BsFileEarmarkPostFill size={40} className='text-[#60A5FA]'/>
                    </div>

                    <div className=' flex items-center justify-between bg-[#202338] stats-card rounded-xl p-4 hover:bg-indigo-800'>
                        <div>
                            <p className='text-sm '>Total Votes</p>
                            <h2 className='text-2xl font-bold'>0</h2>
                        </div>
                        <IoMdTrendingUp size={40} className='text-[#4ADE80]'/>
                    </div>

                    <div className=' flex items-center justify-between bg-[#202338] stats-card rounded-xl p-4 hover:bg-indigo-800'>
                        <div>
                            <p className='text-sm '>Total Comments</p>
                            <h2 className='text-2xl font-bold'>0</h2>
                        </div>
                        <FaRegComment size={40} className='text-[#C084FC]'/>
                    </div>

                </div>
            </div>
                
            <div className='mt-10 dashboard-card rounded-xl p-6 bg-[#202338]'>
                <h2 className='text-xl font-semibold mb-4'>Recent Posts</h2>
                <div className='flex items-center justify-between p-4 bg-white/5 rounded-lg'>
                    <div>
                        <h3 className=' text-base font-bold mb-1'>The Future of AI in Web Development</h3>
                        <div className='flex items-center space-x-4 text-sm '>
                            <span>0 votes</span>
                            <span>0 comments</span>
                            <span>7/8/2025</span>
                        </div>
                    </div>
                    
                    <div>
                        <Link><FaEye size={30}/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;