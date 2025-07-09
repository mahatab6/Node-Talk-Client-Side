import { Link } from "react-router";

const UserSidebarItems = () => {
    return(
        <>
        <li>
            <Link to='/dashboard/my-profile'>My Profile</Link>
        </li>
        <li>
            <Link to='/dashboard/add-post'>Add Post</Link>
        </li>
        <li>
            <Link to='/dashboard/my-post'>My Posts</Link>
        </li>
        </>
    )
  
}

export default UserSidebarItems;