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

	h2 {
		padding: 0.5rem 0;
		width: 100%;
		border-radius: 30px 30px 0 0;
		background-color: rgba(120, 0, 0, 1);
	}

	.section__description {
		height: 30%;
		width: 80%;
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

	.button__link {
		height: 10%;
		width: 100%;
	}

	///////// Not authenticated:

	.login-advice {
		background-color: rgba(0, 0, 0, 0.75);

		display: flex;
		align-items: center;
		justify-content: center;

		border-radius: 30px;

		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		z-index: 5;
	}

	.login-advice h3 {
		cursor: default;
		border-radius: 30px;

		padding: 0.75rem;

		max-width: 80%;

		background-color: #fff;
		color: rgba(120, 0, 0, 1);

		font-size: 2rem;
	}

	@media screen and (max-width: 900px) {
		margin-block: 1rem;
		height: 50vh;
		width: 80vw;

		.section__title,
		.button__link {
			height: 20%;
		}

		.section__description {
			height: auto;
		}
	}
`;
