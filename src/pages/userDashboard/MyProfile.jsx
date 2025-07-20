import React from 'react';
import useAuth from '../../hooks/useAuth';
import DashboardText from '../../components/DashboardText';
import { FaRegUserCircle, FaStar } from 'react-icons/fa';
import Bronze from '../../assets/Bronze.png'
import { CiMedal } from "react-icons/ci";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import { Link } from 'react-router';
import { FaEye } from "react-icons/fa";
import useUserRole from '../../hooks/useUserRole';
import Gold from '../../assets/Gold.png'
import { useQuery } from '@tanstack/react-query';
import LoadingPage from '../LoadingPage';
import { Helmet } from 'react-helmet';
import useAxiosToken from '../../hooks/useAxiosToken';







const MyProfile = () => {
    const {user, loading} = useAuth();
    const axiosSecureJWT = useAxiosToken();
    const {role, isloading} = useUserRole();


    const {data:summary, isloading: dataLoading} = useQuery({
        queryKey:["user-summary"],
        queryFn: async () => {
            const res = await axiosSecureJWT.get(`/user-summary/${user?.email}`)
            return res.data;
        }
    })


  
    if(isloading || loading || dataLoading){
        return <LoadingPage/>
    }

   
    return (
        <div className='px-6 mb-10'>
            <Helmet>
                <title>NodeTalk - My profile</title>
            </Helmet>
            <DashboardText/>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='lg:col-span-2 flex space-x-6 rounded-xl p-6 bg-[#202338]'>

                    <div className="flex flex-col">
                        <div className="flex flex-wrap gap-x-2 gap-y-2">
                            <div className="relative flex-shrink-0">
                                {
                                    role?.role === 'user' && 
                                    
                                    <span className="absolute right-16 w-10 h-10 p-1 bg-white border rounded-full ">
                                        <img src={Bronze} className='w-12' alt="" referrerPolicy='no-referrer' />
                                    </span>
                                }
                                {
                                    role?.role === 'paidmember' && 

                                    <span className="absolute right-16 w-10 h-10 p-1 bg-white border rounded-full ">
                                        <img src={Gold} className='w-12' alt="" referrerPolicy='no-referrer' />
                                    </span>
                                }
                                {
                                    user?.photoURL? <img src={user?.photoURL} alt="" referrerPolicy='no-referrer' className="w-16 h-16 border rounded-full dark:bg-gray-500 dark:border-gray-300" /> : <FaRegUserCircle size={35}/>
                                }
                            </div>
                        </div>
                    </div>

                    <div className='flex-1'>
                        <h1 className='text-2xl font-bold mb-2'>{user?.displayName}</h1>
                        <p className=' mb-3'>{user?.email}</p>
                        {
                            role?.role === 'user' && <p className='flex items-center gap-1 bg-[#CB802D] p-1 rounded-2xl text-base w-40 mb-3'><CiMedal /> BRONZE MEMBER</p>
                        }

                        {
                            role?.role === 'paidmember' && <div className='flex my-3 items-center justify-items-center gap-4'>
                                <p className='flex items-center  gap-1 bg-yellow-400 text-black font-bold p-2 rounded-2xl text-base  '><CiMedal size={20} /> GOLD MEMBER </p> <p className='flex items-center bg-amber-500 text-black font-bold p-2 rounded-2xl text-base'> <FaStar size={20} />Premium</p>
                            </div> 
                        }
                        
                        <p>Joined {new Date(user?.metadata?.creationTime).toISOString().split('T')[0]}</p>
                    </div>
                </div>

                <div className='space-y-4'>

                    <div className=' flex items-center justify-between bg-[#202338] stats-card rounded-xl p-4 hover:bg-indigo-800'>
                        <div>
                            <p className='text-sm '>Total Posts</p>
                            <h2 className='text-2xl font-bold'>{summary?.totalPost}</h2>
                        </div>
                        <BsFileEarmarkPostFill size={40} className='text-[#60A5FA]'/>
                    </div>

                    <div className=' flex items-center justify-between bg-[#202338] stats-card rounded-xl p-4 hover:bg-indigo-800'>
                        <div>
                            <p className='text-sm '>Total Votes</p>
                            <h2 className='text-2xl font-bold'>{summary?.totalUpVote}</h2>
                        </div>
                        <IoMdTrendingUp size={40} className='text-[#4ADE80]'/>
                    </div>

                    <div className=' flex items-center justify-between bg-[#202338] stats-card rounded-xl p-4 hover:bg-indigo-800'>
                        <div>
                            <p className='text-sm '>Total Comments</p>
                            <h2 className='text-2xl font-bold'>{summary?.totalComment}</h2>
                        </div>
                        <FaRegComment size={40} className='text-[#C084FC]'/>
                    </div>

                </div>
            </div>
                
            <div className='mt-10  rounded-xl p-6 bg-[#202338]'>
                <h2 className='text-xl font-semibold mb-4'>Recent Posts</h2>
                {
                    summary?.recentPost?.map((post) => (
                        <div key={post._id} className='flex items-center justify-between p-4 bg-white/5 rounded-lg m-2'>
                            <div>
                                <h3 className=' text-base font-bold mb-1'>{post?.PostTitle}</h3>
                                <div className='flex items-center space-x-4 text-sm '>
                                    <span>Up-votes {post?.upVote}</span>
                                </div>
                            </div>

                            <div>
                                <Link to={`/post-details/${post?._id}`} className='flex items-center gap-2 btn hover:bg-indigo-400'><FaEye size={30}/>View</Link>
                            </div>
                        </div>
                    ) )
                }
            </div>
        </div>
    );
};

export default MyProfile;