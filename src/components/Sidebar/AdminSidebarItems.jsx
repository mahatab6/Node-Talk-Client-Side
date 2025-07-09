import React from 'react';
import { Link } from 'react-router';

const AdminSidebarItems = () => {
    return (
        <>
            <li>
                <Link>Admin Profile</Link>
            </li>

            <li>
                <Link>Manage Users</Link>
            </li>

            <li>
                <Link>Reported Comments/Activities</Link>
            </li>

            <li>
                <Link>Make Announcement</Link>
            </li>

        </>
    );
};

export default AdminSidebarItems;