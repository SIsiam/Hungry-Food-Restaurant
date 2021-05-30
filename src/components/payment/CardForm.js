import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const CardForm = (props) => {
	const stripe = useStripe();
	const elements = useElements();
	const [ errors, setErrors ] = useState(null);
	const [ success, setSuccess ] = useState(null);

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}
		const cardElement = elements.getElement(CardElement);

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type : 'card',
			card : cardElement
		});

		if (error) {
			setErrors(error.message);
			setSuccess(null);
		}
		else {
			setSuccess(paymentMethod.id);
			props.handlePayment(paymentMethod.id);
			props.setIsPaid(true)
			setErrors(null);
		}
	};

	return (
		<div className="payment-form shadow mt-5 p-3" style={{ borderRadius: '15px', width: '500px',height:'160px', margin: 'auto', }}>
			<form onSubmit={handleSubmit}>
				<CardElement />
				<button className="btn btn-outline-danger px-4 py-1 mt-4" type="submit" disabled={!stripe}>
					Payment
				</button>
			</form>
			{errors && <p className="mt-3">{errors}</p>}
			{success && <p className="mt-3">Your Transaction Is Compleate</p>}
		</div>
	);
};

export default CardForm;
