import React from 'react'
import Technology from '../../../../assets/Technology.jpg'
import Programming from '../../../../assets/code-program.jpg'
import Improvement from '../../../../assets/Self Improvement.jpg'
import Relationships from '../../../../assets/Relationships.jpg'

const TopContent = () => {
  return (
    <div className='md:pb-20'>
        <h2 className="text-3xl font-bold mb-4 ">Only Top Content</h2>
        <p className="text-lg  mb-8">
            Easily integrate NodeTalk with your favorite apps and streamline your workflow in one place.
        </p>
        <div className="divider"></div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>

            {/* Technology Card */}
            <div className='text-center p-4 space-y-3 rounded-xl bg-white shadow-md hover:shadow-xl transition duration-300'>
                <div className='relative'>
                    <img className='h-48 w-full object-cover rounded-lg transform transition duration-500 hover:scale-105' src={Technology} alt="Technology" />
                    <h3 className='text-2xl font-bold bg-black bg-opacity-60 text-white px-3 py-1 rounded-full absolute -bottom-4 left-1/2 transform -translate-x-1/2'>
                        Technology
                    </h3>
                </div>
                <p className='text-gray-700 text-sm md:text-base pt-4 line-clamp-3'>
                    Stay ahead with the latest tech trends, innovations, and gadgets. Explore insights that shape the digital world and keep you updated every day.
                </p>
            </div>

            {/* Programming Card */}
            <div className='text-center p-4 space-y-3 rounded-xl bg-white shadow-md hover:shadow-xl transition duration-300'>
                <div className='relative'>
                    <img className='h-48 w-full object-cover rounded-lg transform transition duration-500 hover:scale-105' src={Programming} alt="Programming" />
                    <h3 className='text-2xl font-bold bg-black bg-opacity-60 text-white px-3 py-1 rounded-full absolute -bottom-4 left-1/2 transform -translate-x-1/2'>
                        Programming
                    </h3>
                </div>
                <p className='text-gray-700 text-sm md:text-base pt-4 line-clamp-3'>
                    Dive into coding, best practices, and programming tutorials. From beginner to advanced, explore guides that help you build robust applications.
                </p>
            </div>

            {/* Self Improvement Card */}
            <div className='text-center p-4 space-y-3 rounded-xl bg-white shadow-md hover:shadow-xl transition duration-300'>
                <div className='relative'>
                    <img className='h-48 w-full object-cover rounded-lg transform transition duration-500 hover:scale-105' src={Improvement} alt="Self Improvement" />
                    <h3 className='text-2xl font-bold bg-black bg-opacity-60 text-white px-3 py-1 rounded-full absolute -bottom-4 left-1/2 transform -translate-x-1/2'>
                       Good habits
                    </h3>
                </div>
                <p className='text-gray-700 text-sm md:text-base pt-4 line-clamp-3'>
                    Unlock your full potential with actionable self-improvement strategies, personal growth tips, and habits that empower you to succeed.
                </p>
            </div>

            {/* Relationships Card */}
            <div className='text-center p-4 space-y-3 rounded-xl bg-white shadow-md hover:shadow-xl transition duration-300'>
                <div className='relative'>
                    <img className='h-48 w-full object-cover rounded-lg transform transition duration-500 hover:scale-105' src={Relationships} alt="Relationships" />
                    <h3 className='text-2xl font-bold bg-black bg-opacity-60 text-white px-3 py-1 rounded-full absolute -bottom-4 left-1/2 transform -translate-x-1/2'>
                        Relationships
                    </h3>
                </div>
                <p className='text-gray-700 text-sm md:text-base pt-4 line-clamp-3'>
                    Learn how to build meaningful connections, nurture friendships, and strengthen bonds with loved ones through practical tips and real-life advice.
                </p>
            </div>

        </div>
    </div>

  )
}

export default TopContent