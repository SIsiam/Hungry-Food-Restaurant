import styled from 'styled-components';
import bgimg from "../../Image/img/bg-2.jpg"


export const HeaderContainer = styled.div`
font-family: 'Ubuntu', sans-serif;
background: url(${bgimg}) center/cover;
border-radius : 10px;
	position: relative;
	height: 100vh;
	
	.hero-content {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	h1 {
		font-weight : 800;
	}
`;
