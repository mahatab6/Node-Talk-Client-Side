import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const MemberPaymentForm = ({setIsOpen}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const serviceCosut = 9.99*100;
  const axiosSecure = useAxiosSecure();
  const [ setMessage] = useState('');
  const {user} = useAuth();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setPaymentSuccess(false);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if(!cardElement) {
        setLoading(false);
        return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
    } 
    
    else {
      setPaymentSuccess(true);
      console.log('Payment Method:', paymentMethod);
    }

    // create card intent

    const res = await axiosSecure.post('/create-payment-intent',{
        serviceCosut
    })

    const clientSecret = res?.data?.clientSecret;

    //  Confirm the payment on the client
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: user?.displayName,
            email: user?.email
          },
        },
      });

    if (confirmError) {
        setError(confirmError.message);
      }

    else if (paymentIntent.status === 'succeeded') {
        setPaymentSuccess(true);
        toast.success('🎉 Payment successful!');
        setIsOpen(false);
        navigate('/dashboard/my-profile')
        await axiosSecure.post('/payments', {
            paymentIntent,
            userEmail: user?.email,
        });
        
        
      }
    
    else {
        setMessage(`Payment ${paymentIntent.status}`);
      }



    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-xl p-6 w-full max-w-md mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Upgrade to  Gold Membership</h2>

      <div className="border p-4 rounded-md mb-4">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#32325d',
                '::placeholder': { color: '#a0aec0' },
              },
              invalid: { color: '#e53e3e' },
            },
          }}
        />
      </div>

      {error && (
        <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
      )}
      {paymentSuccess && (
        <p className="text-green-600 text-sm mb-2 text-center">Payment successful!</p>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className={`w-full py-2 px-4 rounded bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? 'Processing...' : 'Pay Now $9.99'}
      </button>
    </form>
  );
};

export default MemberPaymentForm;
