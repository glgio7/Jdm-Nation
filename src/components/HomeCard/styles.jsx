import styled from "styled-components";

export const Card = styled.div`
	position: relative;
	z-index: 5;

	width: 25vw;
	aspect-ratio: 3/4;

	background-color: #202020;
	border-radius: 30px;

	text-align: center;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	.background {
		background-image: ${({ background }) => `url('${background}')`};
		background-position: center;
		background-size: cover;
		border-radius: 30px;
		opacity: 0.25;

		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: -1;
	}

	.section__title {
		height: 3rem;
		line-height: 3rem;
		text-align: center;

		width: 100%;

		border-radius: 30px 30px 0 0;

		background-color: rgba(120, 0, 0, 1);
	}

	.section__title span {
		vertical-align: middle;
		font-size: 1rem;
	}

	.section__description {
		width: 80%;
	}

	.section__button__link {
		height: 10%;
		width: 100%;
	}

	.section__button {
		height: 100%;
		width: 100%;

		border: none;
		border-radius: 0 0 30px 30px;

		font-weight: bold;
		font-size: 1rem;

		background-color: #101010;
		color: #fff;

		transition: all 300ms;

		&:hover {
			cursor: pointer;

			background-color: #fff;
			color: #000;
		}
	}

	///////// Not authenticated:

	.login-advice {
		background-color: rgba(0, 0, 0, 0.5);

		display: flex;
		justify-content: center;

		position: absolute;
		top: 3rem;
		bottom: 10%;

		width: 100%;

		z-index: 5;
	}

	.login-advice h3 {
		cursor: default;
		border-radius: 30px;

		padding: 0.25rem 0.75rem;
		margin-top: 0.5rem;

		max-width: 80%;
		height: 3rem;

		background-color: rgba(255, 255, 255, 0.75);
		color: rgba(120, 0, 0, 1);

		font-size: 1.5rem;
	}

	@media screen and (max-width: 900px) {
		margin-block: 1rem;
		height: 50vh;
		width: 80vw;

		.section__title {
		}

		.button__link {
			height: 20%;
		}

		.section__description {
			height: auto;
		}
	}
`;
