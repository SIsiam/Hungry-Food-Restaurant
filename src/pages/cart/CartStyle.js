import styled from 'styled-components';

export const SingleProduct = styled.div`
	background-color: #f5f5f5;
	font-family: 'Montserrat', sans-serif;
	padding: 0.3rem 0.8rem;
	border-radius: 10px;
	margin: 1.2rem 0;
	position: relative;


	.single-item-img {
		width: 200px;
		.single-img {
			width: 100%;
			display: block;
			margin: auto;
		}
	}
	.single-item-detail {
		flex: 1;
		padding: 0.5rem 0.8rem;
		h5 {
			font-size: 1rem;
		}
		h4 {
			font-size: 1.1rem;
			color: #f91944;
		}
		p {
			font-size: 0.9rem;
		}
	}
	.single-quantity {
		width: 100px;
		input {
			width: 40px;
		}
		.fa-icon {
			font-size: 0.9rem;
			color: #a4a4a4;
			cursor: pointer;
		}
		.plus {
			color: #f91944;
		}
	}
	.price-details {
		.list-group {
			.list-group-item {
				padding: 0.4rem 1rem !important;
				font-size: 4rem;
			}
		}
	}
`;

export const CartSection = styled.div`
	font-family: 'Montserrat', sans-serif;
	.cart-content {
		padding: 3rem 0;
		.cart-items {
			.clear {
				background-color: #f91944;
				width: 60%;
				display: block;
				margin: 1.5rem auto;
				font-size: 0.9rem;
				color: #ffffff;
			}
		}
		.form-info {
			.form-control {
				background-color: #f5f5f5;
				font-size: 0.9rem;
				border: 1px solid transparent;
				height : 50px;
			}
			.btn-save {
				width: 100%;
				background-color: #f91944;
				font-size: 0.9rem;
				color: #ffffff;
			}
		}
		.price-details {
			.list-group {
				.list-group-item {
					font-size: 0.95rem;
					padding: 0.4rem 1rem !important;
				}
			}
		}
		.btn-place {
			margin: 1rem 0;
			width: 100%;
			background-color: #666666;
			color: #ffffff;
		}
	}
`;
