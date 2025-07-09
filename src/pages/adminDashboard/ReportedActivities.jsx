import React from 'react';
import { FaRegCommentAlt } from "react-icons/fa";
import { Link } from 'react-router';


const ReportedActivities = () => {
    return (
        <div className='py-10 px-6'>
            <div>
                <h1 className='text-3xl font-bold mb-4'>Reported Activities</h1>
                <p className="text-lg mb-2">Review and take action on reported content and user behavior</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-10'>
                <div className='text-center p-6 bg-[#202338] rounded-2xl'>
                    <span className='text-xl font-bold text-yellow-300'>5</span>
                    <p>Pending Reports</p>
                </div>

                <div className='text-center p-6 bg-[#202338] rounded-2xl'>
                    <span className='text-xl font-bold text-red-500'>1</span>
                    <p>High Priority</p>
                </div>

                <div className='text-center p-6 bg-[#202338] rounded-2xl'>
                    <span className='text-xl font-bold text-green-500'>4</span>
                    <p>Resolved</p>
                </div>
            </div>

            <div className='p-6 bg-[#202338] rounded-2xl'>

                {/* Reported content owner */}
                <div className=''>
                    <div className='grid grid-cols-1 md:grid-cols-2 items-center mb-5 space-y-3'>
                        <div className='flex items-center gap-3'>
                            <FaRegCommentAlt size={30} />
                            <div>
                                <h2 className='text-xl font-bold'>Reported Comment</h2>
                                <p>Reported by Alice Johnson • 2024-01-15 14:30</p>
                            </div>
                        </div>
                        <div className='text-white inline-flex gap-3'>
                            <span className='p-1 px-2 rounded-xl bg-red-500'>HIGH</span>
                            <span className='p-1 px-2 rounded-xl bg-yellow-400'>PENDING</span>
                            <span className='p-1 px-2 rounded-xl bg-yellow-400'>MEDIUM</span>
                            <span className='p-1 px-2 rounded-xl bg-green-500'>RESOLVED</span>
                        </div>
                    </div>

                    {/* Reported user */}
                    <div className='grid grid-cols-1 md:grid-cols-2 items-center space-y-3'>
                        <div className=''>
                            <p className='pb-2'>Reported User</p>
                            <div className=' inline-flex gap-3'>

                               <div className="avatar avatar-placeholder">
                                    <div className="bg-neutral text-neutral-content w-8 rounded-full">
                                        <span className="text-xs">UI</span>
                                    </div>
                                </div>
                                <h3 className='text-xl font-bold'>Name:hello </h3>
                            </div>
                        </div>

                        <div className=''>
                            <p className='pb-2'>Report Reason</p>
                            <span className='p-1 px-2 rounded-xl border'>Harassment</span>
                        </div>
                    </div>

                    {/* Reported content */}
                    <div className='pb-2'>
                        <p className='pb-2'>Reported Content</p>
                        <div className='flex justify-between items-center p-2 bg-slate-700/30 border-l-4 border-red-600 rounded-2xl'>
                            <h3>This is an inappropriate comment that violates community guidelines...</h3>
                            <Link className='btn'>View Content</Link>
                        </div>
                    </div>

                    {/* Reported Comment */}
                    <div className='pb-2'>
                        <p className='pb-2'>Reported Comment</p>
                        <div className='flex justify-between items-center p-2 bg-slate-700/30 border-l-4 border-red-600 rounded-2xl'>
                            <h3>This is an inappropriate comment that violates community guidelines...</h3>
                            <Link className='btn'>View Comment</Link>
                        </div>
                    </div>

                    <hr />

                    {/* Reported action */}
                    <div className='pt-2 space-x-3'>
                        <Link className='btn bg-green-500'>Approve Report</Link>
                        <Link className='btn '>Dismiss</Link>
                        <Link className='btn bg-red-500'>Ban User</Link>
                        <Link className='btn  border-amber-300'>Send Warning</Link>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default ReportedActivities;