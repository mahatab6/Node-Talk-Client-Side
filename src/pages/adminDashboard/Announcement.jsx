import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { FaBullhorn } from 'react-icons/fa';

const Announcement = () => {


    const {user} = useAuth();
    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        const fullData = {
            ...data,
        };

        console.log(fullData);
    }



    return (
        <div className='py-10 px-6'>
            <div>
                <h1 className='text-3xl font-bold mb-4'>Make Announcement</h1>
                <p className="text-lg mb-2">Create and publish announcements to all platform users</p>
            </div>

            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                <div className='p-10 bg-[#202338] rounded-2xl'>

                    <h1 className='text-3xl font-bold mb-6 flex items-center gap-3'><FaBullhorn /> Create New Announcement</h1>

                    <form className='bg-[#2C2D4A] p-5 rounded-2xl' onSubmit={handleSubmit(onSubmit)}>

                        <div>
                            <label className=' block text-xl mb-2' htmlFor="">Author Image</label>
                            <div className='flex items-center gap-3'>    
                                <img src={user?.photoURL} alt="" className='w-12 rounded-full'/>  
                                <input className=' border w-full h-10 px-3 py-2 rounded-xl mb-2' type="text" value={user?.photoURL} readOnly placeholder={user?.photoURL} {...register("Author Image", {required: true})} />
                            </div>
                        </div>

                        <div>
                            <label className=' block text-xl mb-2' htmlFor="">Author Name</label>
                            <input className=' border w-full h-10 px-3 py-2 rounded-xl mb-2' type="text" value={user?.displayName} readOnly placeholder={user?.displayName} {...register("Author Name", {required: true})} />
                        </div>

                        <div>
                            <label className=' block text-xl mb-2' htmlFor="">Announcement Title </label>
                            <input className=' border w-full h-10 px-3 py-2 rounded-xl mb-2' type="text" placeholder="Enter Your Announcement Title" {...register("Announcement Title", {required: true})} />
                        </div>

                        <div>
                            <label className=' block text-xl mb-2' htmlFor="">Description</label>
                            <textarea className='border w-full h-30 px-3 py-2 rounded-xl mb-2' placeholder='Enter Your Announcement Description' {...register("Description", {required: true})} />

                        </div>

                        <input type="submit" className="mt-5 inline-flex hover:cursor-pointer items-center justify-center rounded-md text-xl font-medium  h-10 px-4 py-2 w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700" value="Publish Announcement" />
                    </form>

                </div>


                <div className='p-10 bg-[#202338] rounded-2xl'>
                    <h1 className='text-3xl font-bold mb-6 flex items-center gap-3'> Recent Announcements</h1>

                    <div className=' space-y-2 bg-[#2C2D4A] p-5 rounded-2xl mb-2'>
                        <div className='flex items-center gap-3 '>
                            <img src={user?.photoURL} className=' rounded-full w-14' alt="" />
                            <div>
                                <h3 className='text-xl font-bold'>Name: Raju</h3>
                                <span className='text-xl'>24/05/2005 12:00 am</span>
                            </div>
                        </div>
                        <h3>Platform Maintenance Scheduled</h3>
                        <p>We will be performing scheduled maintenance on our platform this weekend from 2:00 AM to 6:00 AM EST...</p>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Announcement;