import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import useAxiosSecure from '../hooks/useAxiosSecure';
import DashboardText from '../components/DashboardText';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import LoadingPage from './LoadingPage';
import { Helmet } from 'react-helmet';

const CommentPage = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedComment, setSelectedComment] = useState('');
  const [selectedFeedbacks, setSelectedFeedbacks] = useState({});


  const { data: comments = [], isLoading,refetch } = useQuery({
    queryKey: ['comments', id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/specific-post-comment/${id}`);
      return res.data;
    }

  });

   if (isLoading) {
    return <LoadingPage/>
  };

  const handleReport = async (commentId, feedback) => {
    const reportInfo = {
        commentId, 
        feedback
    }

    axiosSecure.post('/user-feedback-report',reportInfo)
        .then(res =>{
            
            if(res.data.insertedId){
                toast.success('Your successfully sent to Admin');
                refetch()
            }
        } )
    }
    
  const handleReadMore = (fullComment) => {
    setSelectedComment(fullComment);
    setIsOpen(true);
  };

  const handleFeedbackChange = (commentId, feedback) =>{
    setSelectedFeedbacks((prev) => ({
        ...prev,
        [commentId]:feedback
    }))

  }

 

  return (
    <div className='px-6 '>
        <Helmet>
          <title>NodeTalk - Comments Page</title>
        </Helmet>
        <DashboardText/>
        <div className='p-10 bg-[#202338] rounded-2xl mb-10'>
        <h2 className='text-3xl font-bold mb-6 text-white'>Comments ({comments.length})</h2>
        <div className="overflow-x-auto">
            <table className="table text-white">
            <thead>
                <tr className='text-white font-bold text-lg'>
                <th>#</th>
                <th>commenter Email</th>
                <th>Comment</th>
                <th>Feedback</th>
                <th>Report</th>
                </tr>
            </thead>
            <tbody>
                {
                comments.map((comment, index) => (
                    <tr key={comment._id} className="hover:bg-white/5 font-medium">
                    <td>{index + 1}</td>
                    <td>{comment?.freebackUser }</td>
                    <td className='max-w-xs truncate'>{comment?.comment?.length > 20 ? (
                    <>
                      {comment.comment.slice(0, 20)}...
                      <button onClick={() => handleReadMore(comment.comment)} className="ml-1 text-blue-500 underline">
                        Read More
                      </button>
                    </>

                  ) : (
                    comment.comment
                  )}</td>
                    <td>
                        <select className="select select-sm text-black " onChange={(e) => handleFeedbackChange(comment._id, e.target.value)} defaultValue="">

                            <option value="" disabled>Select feedback</option>
                            <option value="Spam or misleading">Spam or misleading</option>
                            <option value="Offensive or abusive">Offensive or abusive</option>
                            <option value="Irrelevant or low quality">Irrelevant or low quality</option>

                        </select>
                        
                        
                        
                        
                        </td>
                    <td>
                       {comment.reported ? (
                            <button  className="btn btn-sm bg-green-400 text-white cursor-not-allowed">
                                Pending
                            </button>
                            ) : (
                            <button
                                disabled={!selectedFeedbacks[comment._id]}
                                onClick={() => handleReport(comment._id, selectedFeedbacks[comment._id])}
                                className="btn btn-sm bg-red-600 text-white hover:bg-red-700"
                            >
                                Report
                            </button>
                            )}
                    </td>
                    </tr>
                ))
                }
            </tbody>
            </table>
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
        </div>
    </div>
  );
};

export default CommentPage;
