import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './CardForm';

const stripePromise = loadStripe('pk_test_51Ie7BGIOPSpFkbvWjGNmipKMVZ3YZbgmbWRUUa6AeAHvHT7fjNY5Zc4mTRcK0rM5bFLDcql5HnEMd01oresLntr800nPOQq6ir');

const Stripe = ({ handlePayment, setIsPaid }) => {
	return (
		<Elements stripe={stripePromise} >
			<CardForm handlePayment={handlePayment} setIsPaid={setIsPaid} />
		</Elements>
	);
};

export default Stripe;
