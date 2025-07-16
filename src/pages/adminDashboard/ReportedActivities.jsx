import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaRegCommentAlt } from "react-icons/fa";
import { Link } from 'react-router';
import useAxiosToken from '../../hooks/useAxiosToken';

const ReportedActivities = () => {
  const axiosSecureJWT = useAxiosToken();

  const { data, isLoading } = useQuery({
    queryKey: ["report"],
    queryFn: async () => {
      const res = await axiosSecureJWT.get('/reported-comments-show');
      return res.data;
    }
  });

  if (isLoading) return <p className="text-center text-xl py-10">Loading...</p>;

  return (
    <div className='py-10 px-6'>
      <div>
        <h1 className='text-3xl font-bold mb-4'>Reported Activities</h1>
        <p className="text-lg mb-2">Review and take action on reported content and user behavior</p>
      </div>

      {/* Summary Stats (Optional: make dynamic later) */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-10'>
        <div className='text-center p-6 bg-[#202338] rounded-2xl'>
          <span className='text-xl font-bold text-yellow-300'>5</span>
          <p>Pending Reports</p>
        </div>
        <div className='text-center p-6 bg-[#202338] rounded-2xl'>
          <span className='text-xl font-bold text-red-500'>1</span>
          <p>High Priority</p>
        </div>
        <div className='text-center p-6 bg-[#202338] rounded-2xl'>
          <span className='text-xl font-bold text-green-500'>4</span>
          <p>Resolved</p>
        </div>
      </div>

      {/* Loop through comments and match with report */}
      {data?.comments?.map(comment => {
        const report = data.reports?.find(r => r.commentId === comment._id.toString());
        return (
          <div key={comment._id} className='p-6 bg-[#202338] rounded-2xl mb-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center space-y-3 mb-3'>
              <div>
                <p className='pb-2'>commenter User</p>
                <div className='inline-flex gap-3 items-center'>
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={comment?.freebackPhoto} alt="avatar" />
                    </div>
                  </div>
                  <h3 className='text-xl font-bold'>Name: {comment?.freebackName}</h3>
                </div>
              </div>

              <div>
                <p className='pb-2'>Report Reason</p>
                <span className='p-1 px-2 rounded-xl border'>
                  {report?.feedback || 'No feedback'}
                </span>
              </div>
            </div>

            {/* Reported Comment Content */}
            <div className='pb-2'>
              <p className='pb-2'>Reported Content</p>
              <div className='flex justify-between items-center p-2 bg-slate-700/30 border-l-4 border-red-600 rounded-2xl'>
                <h3>{comment?.comment}</h3>
                <Link to={`/post-details/${comment?.postId}`} className='btn'>View Post</Link>
              </div>
            </div>

            <hr className='my-4' />

            {/* Action Buttons */}
            <div className='space-x-3'>
              <button className='btn bg-green-500'>Approve Report</button>
              <button className='btn'>Dismiss</button>
              <button className='btn bg-red-500'>Delete Comment</button>
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReportedActivities;
