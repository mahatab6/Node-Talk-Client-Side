import React from 'react';
import { NavLink } from 'react-router';
import { FaUserShield, FaUsers, FaFlag, FaBullhorn } from 'react-icons/fa';

const linkClasses = ({ isActive }) =>
  `flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-200 
   ${isActive ? 'bg-[#1f2937] text-blue-500 font-semibold' : 'text-white hover:text-blue-400'}`;

const AdminSidebarItems = () => {

  
  return (
    <>
      
      <li>
        <NavLink to="/dashboard/profile" className={linkClasses}>
          <FaUserShield />
          Admin Profile
        </NavLink>
      </li>

      <li>
        <NavLink to='/dashboard/manage-users' className={linkClasses}>
          <FaUsers />
          Manage Users
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/reported-activities" className={linkClasses}>
          <FaFlag />
          Reported Comments
        </NavLink>
      </li>

      <li>
        <NavLink to="/dashboard/make-announcement" className={linkClasses}>
          <FaBullhorn />
            Announcement
        </NavLink>
      </li>
    </>
  );
};

export default AdminSidebarItems;
