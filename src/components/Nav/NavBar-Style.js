import styled from 'styled-components';

export const Items = styled.nav`
	.logo {
		width: 150px;
		object-fit: contain;
	}
	.items {
		ul {
			li {
				.user {
					font-size: 0.9rem;
				}
				box-sizing: border-box;
				margin: 0 1rem;
				padding: 0.5rem 0.8rem;
				border-radius: 30px;
				cursor: pointer;
				border: 1px solid transparent;
				transition: all 0.3s ease;
			}
		}
	}
`;
