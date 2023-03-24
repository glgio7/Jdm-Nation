import styled from "styled-components";

export const YearSelector = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 2rem;
	margin: 0 auto;

	width: 20%;
	span {
		width: 62%;

		font-weight: bold;

		color: #000;
		background-color: #fff;
		text-align: center;
		border-radius: 3px 0 0 3px;
	}

	select {
		background-color: #000;

		border: none;

		width: 38%;

		text-align: center;

		padding-inline: 0.5rem;

		border-radius: 0 3px 3px 0;
	}

	@media screen and (max-width: 900px) {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 100vw;

		margin-block: 1rem;

		span {
			margin-block: 0.5rem;
			text-align: center;

			width: 80%;
		}

		select {
			border-radius: 10px;
			width: 80%;
			height: 48px;
		}
	}
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-flow: row wrap;
	max-width: 90%;

	margin: 0 auto;

	background-position: center;
	background-size: contain;

	h2 {
		width: 100%;

		text-align: left;

		margin-left: 5vw;
		margin-bottom: 2rem;
	}

	h2::first-letter {
		color: #ff0000;

		font-weight: bold;
	}

	.card__lista {
		display: flex;
		justify-content: center;
		flex-flow: row wrap;
		padding: 2rem 0;
		border-radius: 10px;
		background-color: rgba(50, 50, 50, 0.5);

		min-height: calc(100vh - 202px);
	}

	.card__item {
		cursor: pointer;

		display: flex;
		align-items: center;
		flex-direction: column;
		margin: 1rem;
	}

	.card__image {
		width: 224px;

		object-fit: cover;
		object-position: 50%;

		aspect-ratio: 12/16;
		clip-path: polygon(0 0, 90% 0, 100% 100%, 10% 100%);

		opacity: 0.8;

		transition: all 200ms;
	}

	.card__item span {
		margin-block: 0.5rem;
		margin-left: 1.25rem;
		max-width: 80%;
		text-align: center;

		color: #fff;
	}

	.card__item:hover .card__image {
		opacity: 1;
	}

	@media screen and (max-width: 900px) {
		max-width: 95%;

		h2 {
			margin-left: 0;
			margin-bottom: 0;

			text-align: center;
		}
		.card__lista {
			min-height: initial;
			/* justify-content: space-around; */
		}

		.card__item {
			border-radius: 10px;
			margin: 0;
			width: 90%;
			margin-block: 0.5rem;
		}

		.card__image {
			opacity: 1;
			border-radius: 10px;
			width: 100%;
			aspect-ratio: 16/9;
			clip-path: none;
		}

		.card__item span {
			margin-block: 0.25rem;
			margin-left: 0;
			max-width: 100%;
			text-align: center;

			color: #fff;
		}
	}
`;

export const Visualizer = styled.div`
	text-align: center;

	.info-visualizer {
		display: flex;
		position: relative;
		align-items: center;

		padding: 0 1rem;

		opacity: 0;
		pointer-events: none;

		position: fixed;
		top: 0;
		left: 0;

		width: 100vw;
		height: 100vh;

		backdrop-filter: blur(9px);
		transition: all 200ms;

		z-index: 9;
	}

	.info-visualizer.active {
		pointer-events: all;
		opacity: 1;
	}
	.info-visualizer__close {
		position: absolute;

		cursor: pointer;

		border: none;
		border-radius: 10px 0 10px;

		right: 1rem;
		width: 60px;
		top: 1rem;

		background-color: #ff0000;
		color: #fff;

		font-size: 0.8rem;

		transition: all 250ms;

		&:hover {
			opacity: 0.75;
		}
	}

	.info-visualizer img {
		border-radius: 10px 0 0 10px;

		object-fit: cover;

		height: 90vh;
		max-width: 40%;
	}

	.info-visualizer__details {
		background-color: rgb(0, 0, 0, 0.85);

		border-radius: 0 10px 10px 0;

		height: 90vh;
		width: 60%;
	}

	.info-visualizer__details li {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		width: 100%;

		margin-top: 1rem;
	}

	.info-visualizer__details h2 {
		color: #fff;

		&::first-letter {
			color: #ff0000;
		}
	}

	.info-visualizer__details h3 {
		color: #ff0000;
	}

	@media screen and (max-width: 900px) {
		.info-visualizer {
			flex-direction: column;

			padding: 0;

			overflow-y: auto;
		}

		.info-visualizer img {
			border-radius: 10px 10px 0 0;

			object-fit: cover;

			max-width: 100%;
		}

		.info-visualizer__details {
			width: 100%;

			padding-bottom: 1rem;

			border-radius: 0 0 10px 10px;
		}
	}
`;
