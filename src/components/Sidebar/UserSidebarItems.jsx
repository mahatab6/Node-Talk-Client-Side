import { Link } from "react-router";

const UserSidebarItems = () => {
    return(
        <>
        <li>
            <Link to='/dashboard/my-profile'>My Profile</Link>
        </li>
        <li>
            <Link>Add Post</Link>
        </li>
        <li>
            <Link>My Posts</Link>
        </li>
        </>
    )
  
}

export default UserSidebarItems;