import styled from "styled-components";

const Container = styled.main`
	width: 100vw;
	min-height: calc(100vh - 96px);
	padding: 1rem 0;

	background-image: url("/img/data/home-wallpaper.jpg");
	background-size: cover;
	background-position: center;

	display: flex;
	justify-content: space-around;
	align-items: center;

	img {
		width: 100%;
	}

	section {
		width: 256px;
		height: 360px;

		background-color: rgba(120, 0, 0, 0.75);

		border-radius: 30px;

		text-align: center;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.section__title {
		height: 10%;
		margin-top: 1rem;
	}

	.section__description {
		height: 30%;
		width: 80%;
	}

	.section__image {
		width: 75%;

		aspect-ratio: 16/9;

		object-fit: cover;

		border-radius: 12px;

		margin: 1rem 0;
	}

	.section__button {
		height: 100%;
		width: 100%;

		border: none;
		border-radius: 0 0 10px 10px;

		font-weight: bold;
		font-size: 1rem;

		color: #000;
		background-color: #fff;

		transition: all 300ms;

		&:hover {
			cursor: pointer;

			background-color: #202020;

			color: #fff;
		}
	}

	.button__link {
		height: 10%;
		width: 100%;
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;

		background-position: right;

		section {
			margin-block: 1rem;
			height: 50vh;
			width: 80vw;
		}

		.section__title,
		.button__link {
			height: 20%;
		}

		.section__description {
			height: auto;
		}
	}
`;

export default Container;
