import React from 'react';
import { TfiAnnouncement } from "react-icons/tfi";
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import LoadingPage from '../../../LoadingPage';

const AllAnnouncements = () => {

  const axiosSecure = useAxiosSecure();


  const { data:announcements, isLoading } = useQuery({
    queryKey:["announcements"],
    queryFn: async ()=>{
        const res = await axiosSecure.get('/all-announcements');
        return res.data;
    }
  })

  if(isLoading){
    return <LoadingPage/>
  }

  return (
    <div className=" max-w-4xl mx-auto bg-secondary p-5 rounded-2xl">

        <div className="flex justify-center mb-6">
            <h1 className="text-2xl font-bold flex items-center gap-2">
                <TfiAnnouncement className="text-indigo-500" />
                All Announcements
            </h1>
        </div>

      {announcements?.length === 0 ? (
        <p className="text-center ">No announcements available</p>
      ) : (
        <div className="max-h-80 md:max-h-[656px] overflow-y-auto space-y-6 pr-2">
            {announcements?.map((announcement) => (
                <div key={announcement._id} className="bg-background p-5 rounded-2xl shadow-md ">
                    <div className="flex items-center gap-4 mb-2">
                        <img src={announcement?.AuthorImage} alt="" referrerPolicy='no-referrer' className="w-12 h-12 rounded-full"/>
                        <div>
                            <h3 className="text-lg font-semibold">{announcement?.AuthorName}</h3>
                            <span className="text-sm ">
                                {new Date(announcement.createdAt).toLocaleString()}
                            </span>
                        </div>
                    </div>

                    <h2 className="text-xl font-bold mt-2">
                        {announcement?.AnnouncementTitle}
                    </h2>
                    <p className="mt-1 whitespace-pre-line">
                        {announcement?.Description}
                    </p>
                </div>
            ))}
        </div>

      )}
    </div>
  );
};

export default AllAnnouncements;
