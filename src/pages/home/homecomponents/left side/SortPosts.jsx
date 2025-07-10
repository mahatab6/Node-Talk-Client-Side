import React from 'react';
import { IoMdTime, IoMdTrendingUp } from "react-icons/io";
import { TbChartBarPopular } from "react-icons/tb";



const SortPosts = () => {
    return (
        <div className=' bg-secondary p-4 rounded-2xl justify-items-center flex-col ' >
            <h2 className='flex items-center text-2xl gap-1 justify-center pb-2 font-bold'><IoMdTrendingUp />Sort Posts</h2>
            <button className='text-xl flex items-center gap-1'><TbChartBarPopular /> Most Popular</button>
            <button className='text-xl flex items-center gap-1'><IoMdTime /> Most Recent</button>
        </div>
    );
};

export default SortPosts;