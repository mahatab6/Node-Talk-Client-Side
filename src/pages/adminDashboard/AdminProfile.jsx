import React from 'react';
import useAuth from '../../hooks/useAuth';
import StatPieCharts from './StatPieCharts';
import { useQuery } from '@tanstack/react-query';
import useAxiosToken from '../../hooks/useAxiosToken';
import { useForm } from 'react-hook-form';
import { IoMdAdd } from "react-icons/io";


const AdminProfile = () => {

    const axiosSecureJWT = useAxiosToken();
    const { register, handleSubmit } = useForm();

    const {data}=useQuery({
        queryKey: ["user-count"],
        queryFn: async () =>{
            const res = await axiosSecureJWT.get('/total-user-info');
            return res.data;
        }
    })

    const onSubmit = data =>{
        console.log(data);
    } 

    const {user} = useAuth();
    return (
        <div className='py-10 px-6'>

            <div>
                <h1 className='text-3xl font-bold mb-4'>Admin Profile</h1>
                <p className="text-lg mb-4">Manage your profile and platform settings</p>
            </div>

            <div className='bg-[#202338] p-6 rounded-2xl mb-4'>
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
                        <div className='text-center p-6 bg-[#2C2D4A] rounded-2xl hover:bg-indigo-800'>
                            <span className='text-2xl font-bold text-green-400'>{data?.postCount}</span>
                            <p>Posts</p>
                        </div>

                        <div className='text-center p-6 bg-[#2C2D4A] rounded-2xl hover:bg-indigo-800'>
                            <span className='text-2xl font-bold text-green-400'>{data?.commentCount}</span>
                            <p>Comments</p>
                        </div>

                        <div className='text-center p-6 bg-[#2C2D4A] rounded-2xl hover:bg-indigo-800'>
                            <span className='text-2xl font-bold text-green-400'>{data?.userCount}</span>
                            <p>Users</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-5'>
                <div className='bg-[#202338] p-6 rounded-2xl'>
                    <h2 className='text-2xl font-bold mb-4'>Platform Analytics</h2>
                    <StatPieCharts data ={data}/>
                </div>

                <div className='bg-[#202338] p-6 rounded-2xl'>
                    <h2 className='text-2xl font-bold mb-4'>Manage Tags</h2>

                    <form className='flex space-x-2' onSubmit={handleSubmit(onSubmit)}>

                        <input className='p-2 border w-full rounded-xl' type="text" placeholder="Add new tags........" {...register('tags')} />
                        <button className='p-2 bg-green-500 rounded-xl cursor-pointer' type="submit"><IoMdAdd size={30}/></button>
                    </form>
                
                </div>
            </div>
            
        </div>
    );
};

export default AdminProfile;