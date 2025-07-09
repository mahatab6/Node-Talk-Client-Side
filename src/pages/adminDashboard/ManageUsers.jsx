import React from 'react';

const ManageUsers = () => {
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
                        <input  type="search" placeholder="Search users by name or email..." />
                    </label>
                </div>

                <div className='text-center p-6 bg-[#202338] rounded-2xl'>
                    <span className='text-xl font-bold'>5</span>
                    <p>Users Found</p>
                </div>
            </div>

        </div>
    );
};

export default ManageUsers;