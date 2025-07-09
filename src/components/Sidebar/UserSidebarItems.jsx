import { NavLink } from "react-router";
import { FaUserCircle, FaPlusSquare, FaRegListAlt } from "react-icons/fa";

const linkClasses = ({ isActive }) =>
  `flex items-center gap-2 px-4 py-2 rounded-md transition duration-200 
   ${isActive ? 'bg-[#1f2937] text-blue-500 font-semibold' : 'text-white hover:text-blue-400'}`;

const UserSidebarItems = () => {
  return (
    <>
      <li>
        <NavLink to='/dashboard/my-profile' className={linkClasses}>
          <FaUserCircle />
          My Profile
        </NavLink>
      </li>

      <li>
        <NavLink to='/dashboard/add-post' className={linkClasses}>
          <FaPlusSquare />
          Add Post
        </NavLink>
      </li>

      <li>
        <NavLink to='/dashboard/my-post' className={linkClasses}>
          <FaRegListAlt />
          My Posts
        </NavLink>
      </li>
    </>
  );
};

export default UserSidebarItems;
