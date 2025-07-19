import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import MemberPaymentForm from './MemberPaymentForm';

const MembershipButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const stripePromise = loadStripe(import.meta.env.VITE_Publishable_key );

    const handleMember = ()=>{
        setIsOpen(true);
    }
    return (
    <>

        <button onClick={handleMember} className='bg-yellow-400  w-2/3 hover:bg-yellow-500  px-4 py-2 rounded btn'>Upgrade Now</button>
        
       
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} maxWidth="sm" fullWidth>
            <DialogTitle>Membership</DialogTitle>
            <DialogContent>

              <Elements stripe={stripePromise}>
                <MemberPaymentForm setIsOpen={setIsOpen} />
              </Elements>

            </DialogContent>
            <DialogActions>
              <Button onClick={() => setIsOpen(false)} color="primary">Close</Button>
            </DialogActions>
        </Dialog>
       
       
    </>);

};

export default MembershipButton;