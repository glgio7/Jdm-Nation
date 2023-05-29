import styled from "styled-components";

export const Home = styled.main`
	width: 100%;
	min-height: calc(100vh - 48px);

	background-color: rgba(120, 0, 0, 0.75);

	background-image: url("/img/data/home-background.jpg");
	background-position: center;
	background-size: cover;

	@media screen and (max-width: 900px) {
		min-height: calc(100vh - 180px);
	}
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: calc(100vh - 48px);
	backdrop-filter: blur(9px);

	@media screen and (max-width: 900px) {
		height: 100%;
		flex-direction: column;
	}
`;
