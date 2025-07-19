import React from 'react';
import UserSidebarItems from './UserSidebarItems';
import { Link, NavLink } from 'react-router';
import AdminSidebarItems from './AdminSidebarItems';
import { FaTachometerAlt } from 'react-icons/fa';
import useUserRole from '../../hooks/useUserRole';
import LoadingPage from '../../pages/LoadingPage';

const Sidebar = () => {
    const {role, isLoading} = useUserRole();

    if(isLoading){
        <LoadingPage/>
    }

    return (
        <div className="drawer-side ">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-[#202338] text-white items-center min-h-full w-60 lg:w-80 p-4">
                {/* Sidebar content here */}
                <li><Link to='/'>Home</Link></li>
                <li>
                    <NavLink to="/dashboard" end className ={ ({ isActive }) =>
                        `flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-200 
                        ${isActive ? 'bg-[#1f2937] text-blue-500 font-semibold' : 'text-white hover:text-blue-400'}`}>
                        <FaTachometerAlt />
                        Dashboard
                    </NavLink>
                </li>
                {
                    (role?.role === 'user' || role?.role === "paidmember") && <UserSidebarItems/>
                }
                {
                    role?.role === 'admin' && <AdminSidebarItems/>
                }
                
                
            </ul>
        </div>
    );
};

export default Sidebar;