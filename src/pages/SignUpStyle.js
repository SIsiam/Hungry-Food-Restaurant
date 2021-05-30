import styled from 'styled-components';

export const FormContainer = styled.div`
	font-family: 'Montserrat', sans-serif;
	padding: 6rem 0;
	form {
		.form-control {
			background-color: #ccccff;
			border-color: transparent;
			height: 55px;
			font-size: 0.85rem;
		}
	
		.btn-submit {
			color: #ffffff;
			background-color: #f91944;
			width: 100%;
			font-size: 0.85rem;
			height: calc(2em + .75rem + 2px);
		}
		a {
			text-decoration: none;
		}
		p {
			margin-top: 1rem;
			font-size: 0.85rem;
			text-align: center;
			color: #f91944;
		}
	}
	.icon {
		font-size: 1.8rem;
		margin: 0.9rem 0.5rem;
		cursor: pointer;
	}
	.fb {
		color: #1f82e9;
	}
	.google {
		color: #ff1e1e;
	}
	.github {
		color: #ff1e1e;
	}
`;

export const MainDiv = styled.div`
	position: relative;
	height: 150vh;
`;
