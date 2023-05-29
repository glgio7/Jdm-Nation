import styled from "styled-components";

export const Card = styled.div<{ background: string }>`
	position: relative;
	z-index: 5;

	width: 25vw;
	aspect-ratio: 4/3;

	background-color: rgba(0, 0, 0, 0.9);

	text-align: center;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	img {
		width: 100%;
	}

	.background {
		object-fit: cover;
		aspect-ratio: 16/9;
	}

	.section__title {
		height: 3rem;
		line-height: 3rem;
		text-align: center;

		width: 100%;

		border: 1px rgba(120, 0, 0, 1) solid;
		border-bottom: none;
	}

	.section__title span {
		vertical-align: middle;
		font-size: 1rem;

		color: #ff0000;
	}

	.section__description {
		width: 100%;
		min-height: 4rem;

		background-color: rgba(0, 0, 0, 1);

		display: flex;
		justify-content: center;
		align-items: center;

		padding: 0.25rem 0;
	}

	.section__description span {
		padding-inline: 1rem;

		line-height: 1.25rem;
		font-size: 0.85rem;
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
		font-size: 0.9rem;

		border: 1px rgba(120, 0, 0, 1) solid;
		border-top: none;
		background-color: rgba(0, 0, 0, 0.8);
		color: #fff;

		transition: all 300ms;

		&:hover {
			cursor: pointer;

			color: #ff0000;
		}
	}

	///////// Not authenticated:

	.login-advice {
		display: flex;
		justify-content: center;

		position: absolute;
		top: 3rem;
		bottom: 3rem;

		width: 100%;

		z-index: 5;
	}

	.login-advice h3 {
		cursor: default;

		padding: 0.25rem 0.75rem;

		width: 100%;
		height: 2rem;

		color: #fff;
		background-color: rgba(120, 0, 0, 0.5);

		font-size: 1rem;
		font-weight: normal;
	}

	@media screen and (max-width: 900px) {
		margin-block: 1rem;
		height: auto;
		width: 80vw;

		.button__link {
			height: 20%;
		}

		.section__description {
			height: auto;
		}
	}
`;
