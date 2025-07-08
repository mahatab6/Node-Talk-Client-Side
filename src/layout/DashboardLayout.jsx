import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet } from 'react-router';


const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open bg-[#1A1B30] text-white">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-[#252538] w-full lg:hidden">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2">Dashboard</div>
                </div>
                
                {/* Page content here */}
                
                <Outlet/>
            </div>

            {/* Sidebar content here */}
            <Sidebar/>
        </div>
    );
};

export default DashboardLayout;