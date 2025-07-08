import React from 'react';
import Lottie from "lottie-react";
import forumanimation from '../../../assets/lottie/Animation - 1751941734750.json'


const Banner = () => {
    return (
        <div>
            <div className="bg-[url('assets/banner.jpg')] h-full bg-cover bg-center">
                <div className='md:flex items-center justify-center justify-items-center md:py-10'>
                   <div className='space-y-4 text-center p-3'>
                        <h1 className='text-3xl lg:text-5xl font-bold'>Welcome to Our NodeTalk Forum</h1>
                        <p className='text-xl '>Share ideas, ask questions, and connect with developers worldwide</p>
                        <label className="input bg-white text-black ">
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
                            <input  type="search" className="" placeholder="Search discussions by title or tag..." />
                        </label>
                   </div>
                    <Lottie className='w-60' animationData={forumanimation} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Banner;