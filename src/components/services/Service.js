import React from 'react';
import data from '../../Data/services';
import { ServiceContainer } from './serviceStyle';

const Service = () => {
	return (
		<ServiceContainer className="container" id="services">
			<div className="section-title">
				<h2 className="">
					<strong>OUR SUPER SERVICES</strong>
				</h2>
			</div>

			<div className="row align-items-center">
				{data.map((info, index) => {
					return (
						<div className="col-lg-4 col-md-4 col-sm-4" key={info.id}>
							<div className="service-box m-4">
								<div className="">
									<img src={info.img} alt={info.title} className="img-fluid img"  />
								</div>

								<div className="content">
									<h3>{info.title}</h3>
									<p>{info.description}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</ServiceContainer>
	);
};

export default Service;
