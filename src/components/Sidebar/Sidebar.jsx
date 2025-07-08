import React from 'react';
import UserSidebarItems from './UserSidebarItems';
import { Link } from 'react-router';

const Sidebar = () => {
    return (
        <div className="drawer-side ">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-[#202338] text-white items-center min-h-full w-60 lg:w-80 p-4">
                {/* Sidebar content here */}
                <li><Link to='/'>Home</Link></li>
                <UserSidebarItems/>
                <li><a>Sidebar Item 2</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;