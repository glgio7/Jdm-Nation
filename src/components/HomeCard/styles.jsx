import styled from "styled-components";

export const Card = styled.div`
	position: relative;
	z-index: 5;

	width: 25vw;
	aspect-ratio: 4/3;

	background-color: rgba(0, 0, 0, 0.9);
	/* border-radius: 30px; */

	text-align: center;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	img {
		width: 100%;
	}

	.background {
		background-image: ${({ background }) => `url('${background}')`};
		background-position: center;
		background-size: cover;
		/* opacity: 0; */
		/* opacity: 0.5; */

		position: absolute;
		top: 3rem;
		bottom: 3rem;
		left: 0;
		right: 75%;
		z-index: -1;
	}

	.section__title {
		height: 3rem;
		line-height: 3rem;
		text-align: center;

		width: 100%;

		/* border-radius: 30px 30px 0 0; */

		/* background-color: rgba(120, 0, 0, 1); */
		border: 1px rgba(120, 0, 0, 1) solid;
		border-bottom: none;
	}

	.section__title span {
		vertical-align: middle;
		font-size: 1rem;

		color: #ff0000;
	}

	.section__description {
		width: 80%;
	}

	.section__button__link {
		height: 3rem;
		width: 100%;
	}

	.section__button {
		height: 100%;
		width: 100%;

		border: none;

		font-weight: bold;
		font-size: 1rem;

		border: 1px rgba(120, 0, 0, 1) solid;
		border-top: none;
		background-color: rgba(0, 0, 0, 0.8);
		color: #fff;

		transition: all 300ms;

		&:hover {
			cursor: pointer;

			/* background-color: #fff; */
			color: #ff0000;
		}
	}

	///////// Not authenticated:

	.login-advice {
		/* background-color: rgba(0, 0, 0, 0.5); */

		display: flex;
		align-items: flex-end;
		justify-content: center;

		position: absolute;
		top: 3rem;
		bottom: 3rem;

		width: 100%;

		z-index: 5;
	}

	.login-advice h3 {
		cursor: default;
		/* border-radius: 30px; */

		padding: 0.25rem 0.75rem;
		/* margin-top: 0.5rem; */

		width: 100%;
		height: 2rem;

		/* background-color: rgba(255, 255, 255, 0.75); */
		color: #fff;
		background-color: rgba(120, 0, 0, 0.5);

		font-size: 1rem;
		font-weight: normal;
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
