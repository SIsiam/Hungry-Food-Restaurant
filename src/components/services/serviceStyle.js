import styled from 'styled-components';

export const ServiceContainer = styled.div`
	padding-bottom: 3rem;
	p {
		color: #1d2225;
		font-size: 0.9rem;
	}
	.section-title {
		p {
			margin: 1.4rem 0;
			line-height: 1.6;
		}
	}
	.service-box {
		.img {
			width : 100%;
			height : 250px;
			border-radius : 20px;
			opacity: 0.8;
			transition: all 0.3s linear;
			cursor:pointer;
			&:hover {
				opacity: 1;
			}
		}

	
		.content {
			padding: 0.4rem 1rem;
			.title {
				margin-top: 1.4rem;
				h5 {
					margin-left: 0.8rem;
				}
			}
		
			p {
				margin-top: 0.4rem;
				margin-bottom: 0.4rem;
			}
		}
	}
`;
