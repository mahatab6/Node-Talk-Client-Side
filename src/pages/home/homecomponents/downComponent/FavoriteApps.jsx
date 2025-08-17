import React from 'react'
import spotify from '../../../../assets/spotify.png'
import Instagram from '../../../../assets/instagram.png'
import Pinterest from '../../../../assets/pinterest.png'
import Discord from '../../../../assets/discord.png'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router'

const FavoriteApps = () => {
  return (
    <div className='md:pb-20 mb-4'>
        <h2 className="text-3xl font-bold mb-4">Connect with My Favorite Apps</h2>
        <p className="text-lg ">
          With NodeTalk, you can easily connect with your favorite apps and tools.
        </p>
        <div className="divider"></div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
            <div className='text-center bg-[#DBFEE7] p-4 space-y-2 rounded-xl'>
                <Link to='https://open.spotify.com/' className='flex items-center text-center gap-2 bg-white p-2 rounded-2xl'>
                    <img className='w-12' src={spotify} alt="" />
                    <h3 className='text-2xl font-bold flex justify-center items-center gap-2 hover:text-orange-500 hover:cursor-pointer'> @musicloverlee <FaArrowRight /></h3>
                </Link>
                <p className=' font-bold'>Listen to My Spotify Playlist</p>
            </div>
            <div className='text-center bg-[#FFEBF7] p-4 space-y-2 rounded-xl'>
                <Link to='https://www.instagram.com/' className='flex items-center text-center gap-2 bg-white p-2 rounded-2xl'>
                    <img className='w-12' src={Instagram} alt="" />
                    <h3 className='text-2xl font-bold flex justify-center items-center gap-2 hover:text-orange-500 hover:cursor-pointer'> @musiclover <FaArrowRight /></h3>
                </Link>
                <p className=' font-bold'>Follow Me on Instagram</p>
            </div>
            <div className='text-center bg-[#FFF6D7] p-4 space-y-2 rounded-xl'>
                <Link to='https://www.pinterest.com/' className='flex items-center text-center gap-2 bg-white p-2 rounded-2xl'>
                    <img className='w-12' src={Pinterest} alt="" />
                    <h3 className='text-2xl font-bold flex justify-center items-center gap-2 hover:text-orange-500 hover:cursor-pointer'> @hey-woodsLove <FaArrowRight /></h3>
                </Link>
                <p className=' font-bold'>Get Inspiration on Pinterest</p>
            </div>
            <div className='text-center bg-[#E1F0FF] p-4 space-y-2 rounded-xl'>
                <Link to="https://discord.com/" className='flex items-center text-center gap-2 bg-white p-2 rounded-2xl'>
                    <img className='w-12' src={Discord} alt="" />
                    <h3 className='text-2xl font-bold flex justify-center items-center gap-2 hover:text-orange-500 hover:cursor-pointer'> @musicloverl <FaArrowRight /></h3>
                </Link>
                <p className=' font-bold'>Chat and Connect in Discord</p>
            </div>
        </div>

    </div>
  )
}

export default FavoriteApps