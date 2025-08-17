import React from 'react';
import { IoMdTime, IoMdTrendingUp } from "react-icons/io";
import { TbChartBarPopular } from "react-icons/tb";
import { Link } from 'react-router';



const SortPosts = ({ setSortType }) => {
    return (
        <div className=' bg-secondary p-4 rounded-2xl justify-items-center flex-col space-y-2' >
            <h2 className='flex items-center text-2xl gap-1 justify-center pb-2 font-bold'><IoMdTrendingUp />Sort Posts</h2>
            <button onClick={()=> setSortType('popular')} className='text-xl btn flex items-center gap-1 hover:cursor-pointer hover:bg-blue-500 px-2 border-b-2'><TbChartBarPopular /> Most Popular</button>
            <button onClick={()=> setSortType('downVote')} className='text-xl btn flex items-center gap-1 hover:cursor-pointer hover:bg-blue-500 px-2'><IoMdTime />  Down-Vote</button>
        </div>
    );
};

export default SortPosts;