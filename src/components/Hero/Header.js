import React from 'react';
import { HeaderContainer } from './Header-style';

const Header = () => {

	return (
		<HeaderContainer className="hero mb-5">
			<div className="container text-center hero-content">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<h1 className="text-light">Hungrey Food A Seven Star Restaurent</h1>
					</div>
				</div>
			</div>
		</HeaderContainer>
	);
};

export default Header;
