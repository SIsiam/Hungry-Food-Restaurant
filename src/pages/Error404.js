import React from 'react';
import { Link } from 'react-router-dom';
// import img from '../Image/img/error.jpg';
import img from '../Image/folder/404 Error-rafiki.png';
import { ErrorDiv } from './ErrorStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'


const Error404 = () => {
	return (
		<div className="bg-dark">
			<ErrorDiv className="container">
				<div className="row justify-content-center align-items-center">
					<div className="col-lg-4 text-center">
						<p>Ooops.. Page Not found !!!</p>
						<Link to="/" style={{ textDecoration: 'none' }}>
							<button className="btn btn-warning btn-lg">
								<FontAwesomeIcon icon={faAngleLeft} color="white" />
								 Go Back
							</button>
						</Link>
					</div>
					<div className="col-lg-6">
						<img src={img} alt="error-img" className="img-fluid" />
					</div>

				</div>
			</ErrorDiv>
		</div>
	);
};

export default Error404;
