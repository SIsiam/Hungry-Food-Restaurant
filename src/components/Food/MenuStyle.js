import styled from 'styled-components';

export const CardBox = styled.div`
	margin-bottom: 1rem;

	.card {
		border: 1px solid transparent;
		transition: all 0.5s linear;
		transform: scale(0.9);
		&:hover {
			box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
			transform: scale(1);
		}
	}
	.card-body {
		height: 350px;
		font-family: 'Montserrat', sans-serif;
		transition: all 0.4s linear;
		padding: 1.5rem;
		img {
			height: 230px;
			width: 290px;
			border-radius:20px;
			object-fit: cover;
			margin-bottom: 1rem;
		}
		h5 {
			color: #1d2225;
			font-size: 1.2rem;
			margin-bottom: 0.5rem;
		}
		p {
			color: #aaaaaa;
			margin: 0;
			line-height: 2;
		}
	}
	a {
		text-decoration: none;
		color: #000000;
	}
`;
