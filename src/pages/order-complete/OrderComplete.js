import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Order } from './OrderStyle';
import rider from '../../Image/folder/uber.png';
import helmet from '../../Image/folder/rider.png';
import mapImg from '../../Image/folder/map.jpg';

const OrderComplete = () => {
	const deliveryAddress = useSelector((state) => state.delivery);

	return (
		<Order className="container">
			<div className="row justify-content-between align-items-center">

				<div className="col-lg-4 left-container">
					<div className="rider-img">
						<img src={rider} alt="rider-img" className="img-fluid rider" />
					</div>
					<div className="order-location">
						<h6>
							<FaCircle className="circle" />
							<strong>Your Location</strong>
						</h6>
						{deliveryAddress ? <p>{deliveryAddress.road}</p> : ''}

						<div className="shop-address">
							<h6>
								<FaCircle className="circle" />
								<strong>Shop Address</strong>
							</h6>
							<p>Whistler Square London - United Kingdom</p>
						</div>
					</div>
					<div className="estimated-delivery">
						<h2>
							<strong>00:00</strong>
						</h2>
						<p>Delivery Time</p>
					</div>
					<div className="rider-info d-flex align-items-center">
						<img src={helmet} alt="helmet" className="img-fluid helmet" />
						<div className="my-rider">
							<h6>
								<strong>Zyan</strong>
							</h6>
							<p>Your Uber Rider</p>
						</div>
					</div>
					<button className="btn contact-btn">Contact</button>
				</div>

				<div className="col-lg-7">
					<img src={mapImg} alt="map" className="img-fluid map" />
				</div>

			</div>
		</Order>
	);
};

export default OrderComplete;
