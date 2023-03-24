import styled from "styled-components";

export const StyledContainer = styled.main`
	position: relative;

	width: 100%;
	min-height: calc(100vh - 48px);

	padding: 1rem 0;

	background-image: url("/img/data/home-wallpaper.jpg");
	background-size: cover;
	background-position: center;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		width: 100%;
	}

	@media screen and (max-width: 900px) {
		flex-direction: column;

		background-position: right;
	}
`;
