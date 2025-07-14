import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { FaRegComments, FaUserAlt } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';

const Comment = ({ id }) => {
  const axiosSecure = useAxiosSecure();

  const { data: comments = [], isLoading } = useQuery({
    queryKey: ['comments', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/specific-post-comment/${id}`);
      return res.data;
    }
  });

  if (isLoading) return <p>Loading comments...</p>;

  return (
    <div className=''>
      {comments.length > 0 ? (
        <div className="space-y-5">

          {comments.map((comment) => (
            <div key={comment._id} className="md:flex gap-5 bg-secondary p-4 rounded-2xl">
              <div>
                <div className="avatar avatar-placeholder">
                  <div className="bg-neutral text-neutral-content w-14 rounded-full">
                    <img src={comment.freebackPhoto} alt="" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex gap-4 mt-2 text-sm">
                  <h2>{comment?.freebackUser}</h2>
                  {comment?.commentTime && (
                    <p>{formatDistanceToNow(new Date(parseInt(comment.commentTime)), { addSuffix: true })}</p>
                    )}
                </div>
                <p className="text-base">{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>

      ) : (
        <div className="text-center justify-items-center mt-5">
          <FaRegComments size={50} className="mx-auto" />
          <p className="text-xl mt-2">
            No comments yet. Be the first to share your thoughts!
          </p>
        </div>
      )}
    </div>
  );
};

export default Comment;
