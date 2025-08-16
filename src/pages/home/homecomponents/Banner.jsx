import React from 'react';
import Studying from '../../../assets/Studying.gif'
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';


const Banner = () => {
    const {user} = useAuth();
   
    return (

        <div className='bg-white '>
            <div className="flex flex-col-reverse md:flex-row justify-between items-center  w-11/12 mx-auto">
  
                {/* Left Content */}
                <div className="flex-1">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold">
                    Write, Read, and Connect with Minds that Matter
                    </h1>
                    <p className="mt-4 text-base md:text-lg lg:text-xl">
                    Join a community of writers & readers. Share your voice with the world.
                    </p>
                    <div className="mt-6 flex gap-4 mb-4">
                        {
                            user?.email? (
                                <Link to="/dashboard/add-post" className="text-sm md:text-base lg:text-base px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300 hover:cursor-pointer">Start Writing</Link>

                            ) : (
                                <Link to="login" className="text-sm md:text-base lg:text-base px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-300 hover:cursor-pointer">Start Writing</Link>
                            )
                        }
                        <button onClick={()=>{
                            const element= document.getElementById("post");
                            element?.scrollIntoView({behavior:'smooth'})
                        }} className="text-sm md:text-base lg:text-base px-6 py-3 hover:cursor-pointer bg-white text-black border rounded-lg hover:bg-gray-100 hover:text-black transition-colors duration-300">Explore Articles</button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center">
                    <img src={Studying} alt="Studying" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
