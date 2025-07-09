import React from 'react';
import DashboardText from '../../components/DashboardText';
import { FaRegComments } from "react-icons/fa";
import { Link } from 'react-router';
import { MdDelete } from "react-icons/md";



const MyPost = () => {
    return (
        <div className='px-6 '>
            <DashboardText/>

            <div className='p-10 bg-[#202338] rounded-2xl mb-10'>
                <h2 className='text-3xl font-bold mb-6'>My Posts (1)</h2>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-white font-bold text-xl'>
                                    <th></th>
                                    <th>Title</th>
                                    <th>Votes</th>
                                    <th>Comments</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>

                            <tbody>
                            
                                <tr className="hover:bg-white/5 font-bold">
                                    <th>1</th>
                                    <td><Link className='hover:text-blue-400'>15 life changing lessons from</Link></td>
                                    <td>0</td>
                                    <td><Link to=''><FaRegComments className='text-[#4ADE80]' size={30}/></Link></td>
                                    <td><Link to='/' ><MdDelete className='text-[#C084FC]' size={30}/></Link></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default MyPost;