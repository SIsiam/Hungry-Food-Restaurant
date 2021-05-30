import React from 'react';
import { Link } from 'react-router-dom';
import { CardBox } from './MenuStyle';

const Menu = ({ food, slug }) => {
	const { img, name, price, id } = food;
	return (
		<CardBox className={`card-box col-lg-4 active-box-${slug}`}>
			<Link to={`/${id}/${slug}`}>
				<div className="card">
					<div className="card-body text-center">
						<img src={img} alt={name} className="img-fluid" />
						<h5 className="card-title">{name}</h5>
						<h4>
							<strong>${price}</strong>
						</h4>
					</div>
				</div>
			</Link>
		</CardBox>
	);
};

export default Menu;
