import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { IoNotifications } from 'react-icons/io5';
import { Link } from 'react-router';

const Notification = ( ) => {
    const axiosSecure = useAxiosSecure();

    const { data: announcements = []} = useQuery({
        queryKey: ['unseen-announcement-count'],
        queryFn: async () => {
            const res = await axiosSecure.get('/unseen-user');
            return res.data;
        }
    });

    const unseenCount = announcements.length;

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="m-1 p-2 bg-base-300 rounded-full hover:cursor-pointer relative">

                <IoNotifications size={28} />

                {unseenCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                        {unseenCount}
                    </span>
                )}

            </div>

            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-64 p-2 shadow z-10">
                {unseenCount === 0 ? (
                    <li className="text-gray-500 text-sm px-2">No new announcements</li>
                ) : (
                    announcements.map((a) => (
                        <li key={a._id}>
                            <Link to="/announcements" className="text-sm font-semibold hover:text-blue-500">
                                {a.AnnouncementTitle.slice(0, 30)}...
                            </Link>
                        </li>
                    ))
                )}
                {unseenCount > 0 && (
                    <li>
                        <Link to="/announcements" className="text-xs text-center text-blue-600 hover:underline">
                            View all announcements →
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Notification;
