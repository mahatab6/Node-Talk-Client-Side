import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import LoadingPage from '../pages/LoadingPage';

const AnnouncementsPage = () => {
    const axiosSecure = useAxiosSecure();

    const { data: announcements = [], isLoading } = useQuery({
        queryKey: ['all-announcements'],
        queryFn: async () => {
            const res = await axiosSecure.get('/all-announcements-page');
            return res.data;
        }
    });

    if (isLoading){
        return <LoadingPage/>
    }

    if (announcements.length === 0) {
        return <div className="text-center text-gray-500 p-10">No announcements available.</div>;
    }

    return (
        <div className='bg-background'>
            <div className="max-w-5xl mx-auto px-4 py-6 ">
                <h2 className="text-2xl font-bold mb-6">All Announcements</h2>
                <div className="space-y-6">
                    {announcements.map((a) => (
                        <div
                            key={a._id}
                            className="border p-4 rounded-xl shadow-sm hover:shadow-md transition duration-200 bg-secondary"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <img
                                    src={a.AuthorImage}
                                    alt="Author"
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">{a.AuthorName}</h3>
                                    <p className="text-sm ">
                                        {format(new Date(a.createdAt), 'PPP')}
                                    </p>
                                </div>
                            </div>
                            <h4 className="text-xl font-bold text-indigo-600">{a.AnnouncementTitle}</h4>
                            <p className="text-gray-700 mt-2 whitespace-pre-line">{a.Description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AnnouncementsPage;
