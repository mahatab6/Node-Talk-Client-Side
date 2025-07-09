import React from 'react';
import useAuth from '../../hooks/useAuth';
import StatPieCharts from './StatPieCharts';

const AdminProfile = () => {

    const {user} = useAuth();
    return (
        <div className='py-10 px-6'>

            <div>
                <h1 className='text-3xl font-bold mb-4'>Admin Profile</h1>
                <p className="text-lg mb-4">Manage your profile and platform settings</p>
            </div>

            <div className='bg-[#202338] p-6 rounded-2xl'>
                <h2 className='text-2xl font-bold mb-4'>Profile Information</h2>

                <div className='grid grid-cols-1 space-y-4'>
                    <div className='flex space-x-4 '>
                        <img src={user?.photoURL} alt="" className='w-20 rounded-full'/>
                        <div>
                            <h3 className='text-2xl font-bold'>{user?.displayName}</h3>
                            <p>{user?.email}</p>
                        </div>
                    </div>

                    
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <div className='text-center p-6 bg-[#2C2D4A] rounded-2xl'>
                            <span className='text-2xl font-bold text-purple-400'>5</span>
                            <p>Posts</p>
                        </div>

                        <div className='text-center p-6 bg-[#2C2D4A] rounded-2xl'>
                            <span className='text-2xl font-bold text-cyan-400'>5</span>
                            <p>Comments</p>
                        </div>

                        <div className='text-center p-6 bg-[#2C2D4A] rounded-2xl'>
                            <span className='text-2xl font-bold text-green-400'>5</span>
                            <p>Users</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div>
               <StatPieCharts/>
            </div>
            
        </div>
    );
};

export default AdminProfile;