import styled from 'styled-components';
import bg from '../../Image/img/undraw_wine_tasting_30vw.png';

export const HeaderContainer = styled.div`
font-family: 'Ubuntu', sans-serif;
background: url(${bg}) center/cover;
	position: relative;
	height: 500px;
	.hero-content {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
`;
