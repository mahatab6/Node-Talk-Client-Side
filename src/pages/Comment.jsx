import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaRegComments } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import useAxiosSecure from '../hooks/useAxiosSecure';


const Comment = ({ id, uiload }) => {
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedComment, setSelectedComment] = useState('');

  const { data: comments = [], isLoading, refetch } = useQuery({
    queryKey: ['comments', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/specific-post-comment/${id}`);
      return res.data;
    }
  });

  if (uiload === true) {
    refetch();
  }

  if (isLoading) return <p>Loading comments...</p>;

  const handleReadMore = (fullComment) => {
    setSelectedComment(fullComment);
    setIsOpen(true);
  };
console.log(comments)
  return (
    <div>
      {comments.length > 0 ? (
        <div className="space-y-5">
          {comments.map((comment) => (
            <div key={comment._id} className="md:flex gap-5 bg-secondary p-4 rounded-2xl border">
              <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-14 rounded-full">
                  <img src={comment.freebackPhoto} alt="avatar" referrerPolicy='no-referrer' />
                </div>
              </div>

              <div className="space-y-2">

                <div className="flex gap-4 mt-2 text-sm">
                  <h2>{comment?.freebackName}</h2>

                  {comment?.commentTime && (
                    <p>{formatDistanceToNow(new Date(parseInt(comment.commentTime)), { addSuffix: true })}</p>
                  )}

                </div>

                <p className="text-base">

                  {comment?.comment?.length > 40 ? (
                    <>
                      {comment.comment.slice(0, 40)}...
                      <button onClick={() => handleReadMore(comment.comment)} className="ml-1 text-blue-500 underline">
                        Read More
                      </button>
                    </>

                  ) : (
                    comment.comment
                  )}

                </p>
                
              </div>
            </div>
          ))}

          
          <Dialog open={isOpen} onClose={() => setIsOpen(false)} maxWidth="sm" fullWidth>
            <DialogTitle>Full Comment</DialogTitle>
            <DialogContent>
              <p>{selectedComment}</p>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setIsOpen(false)} color="primary">Close</Button>
            </DialogActions>
          </Dialog>
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
