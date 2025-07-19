import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoNotifications } from "react-icons/io5";
import toast from 'react-hot-toast';
import NodeTalkLogo from './NodeTalkLogo';
import Notification from './Notification';

const Navbar = () => {

    const { user, LogOut } = useAuth();
      const navigate = useNavigate();


    const link = (
        <>
        <li>
            <NavLink to='/' className={({isActive}) => isActive?"font-semibold border-b-1 rounded-none ":""}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/membership" className={({isActive}) => isActive?" font-semibold border-b-1 rounded-none":""}>Membership</NavLink>
        </li>
        </>
    )


    const handleLogout = () =>{
        LogOut()
        .then(()=>{
            toast.success('Logged out successfully!');
            navigate('/')
        })

    }

    return (
        <div className='bg-white shadow-sm '>
           <div className="navbar w-11/12 mx-auto ">
                <div className="navbar-start ">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-background rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                    </div>
                    <NodeTalkLogo/>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {link}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user?.email? 
                        <>
                            
                            <Notification/>
    
                            <div className="dropdown dropdown-end ">
                                <div tabIndex={0} role="button" className=" m-1">
                                    <div className="avatar avatar-placeholder hover:cursor-pointer">
                                        <div className="bg-neutral text-neutral-content w-12 rounded-full">
                                            {
                                                user?.photoURL? <img src={user?.photoURL} alt="" referrerPolicy='no-referrer' /> : <FaRegUserCircle size={35}/>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-background rounded-box z-1 w-52 p-2 shadow-md">
                                    <div className="space-y-1">
                                        <h2 className='text-xl font-bold'>{user?.displayName}</h2>
                                        <p className=' border-b pb-1'>{user?.email}</p>
                                    </div>
                                    <li><Link to='/dashboard'>Dashboard</Link></li>
                                    <li><Link onClick={handleLogout}>Logout </Link></li>
                                    
                                </ul>
                            </div>
                        </>
                        :
                        <>
                            <div tabIndex={0} role="button" className="m-1 p-2 bg-base-300 rounded-full hover:cursor-pointer"><IoNotifications size={30} /></div>
                            <Link to='/login' className='btn bg-primary text-white border-black hover:font-bold'>Join US</Link>
                            
                        </>
                        

                    }


                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;