import React from 'react';
import Lottie from "lottie-react";


const Banner = () => {
   
    return (
        <div>
            <div className="bg-[url('assets/banner.jpg')] h-108 bg-cover bg-center">
                <div className='md:flex items-center justify-center justify-items-center md:py-10'>
                    <div className='space-y-4 text-center p-3 relative w-full max-w-xl'>
                        <h1 className='text-3xl lg:text-5xl text-white font-bold'>Welcome to Our NodeTalk Forum</h1>
                        <p className='text-xl text-white'>Share ideas, ask questions, and connect with developers worldwide</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
