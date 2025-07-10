import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { TfiAnnouncement } from "react-icons/tfi";


const Announcements = () => {
    return (
        <div className=' bg-secondary  p-4 rounded-2xl justify-items-center flex-col' >
                    <h2 className='flex items-center text-2xl gap-1 justify-center pb-2 font-bold'><TfiAnnouncement />Announcements</h2>
                    <p>See your profile Announcements</p>
                    <button className='text-xl flex items-center gap-1'> View All <FaArrowRight /></button>
                   
        </div>
    );
};

export default Announcements;