import styled from "styled-components";

export const WrapperTitle = styled.h3`
	width: 90%;
	border-radius: 12px 12px 0 0;
	background-color: #101010;
	padding-left: 1rem;
	padding-block: 1rem;
`;

export const VideosContainer = styled.div`
	background-color: rgba(15, 15, 15, 0.75);
	overflow-x: auto;

	margin-bottom: 1rem;

	width: 90%;

	border-radius: 0 0 12px 12px;

	scrollbar-width: none;
	scrollbar-color: transparent;

	position: relative;

	.wrapper {
		padding-top: 4rem;
		width: max-content;
		display: flex;
		min-height: 256px;
	}

	.wrapper__not-logged {
		width: 100%;
		min-height: 256px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.wrapper__not-logged p {
		font-size: 1.25rem;
		text-align: center;
		max-width: 90%;
	}
`;

export const Video = styled.div`
	width: 15vw;
	aspect-ratio: 16/9;
	text-align: center;
	margin: 0 1rem;

	position: relative;

	img {
		cursor: pointer;
		width: 100%;

		border-radius: 12px;

		object-fit: cover;
	}

	.action-thumbnail {
		position: relative;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.action-thumbnail__play {
		position: absolute;

		z-index: 1;

		width: 64px;
		height: 64px;
	}

	@media screen and (max-width: 900px) {
		width: 90%;
	}
`;

export const Player = styled.div`
	position: absolute;
	top: 0;

	border: none;

	width: 100%;
	height: 100%;

	z-index: 5;

	iframe {
		border-radius: 12px;

		width: 100%;
		height: 100%;
	}

	.player__close {
		position: absolute;

		cursor: pointer;

		border: none;
		border-radius: 10px 0 10px;
		width: 6rem;
		height: 4rem;

		right: 1rem;
		top: 0rem;

		background-color: #ff0000;
		color: #fff;

		font-size: 0.8rem;

		transition: all 250ms;

		&:hover {
			opacity: 0.75;
		}
	}
`;
