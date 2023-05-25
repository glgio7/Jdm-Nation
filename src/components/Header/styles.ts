import styled from "styled-components";

export const HeaderContainer = styled.header`
	width: 100%;
	height: 48px;
	padding: 0 1rem;

	background-color: #000;

	display: flex;
	justify-content: space-between;
	align-items: center;

	z-index: 9;

	img {
		width: 100%;
	}

	h1,
	.home-link {
		height: 100%;
		display: flex;
		align-items: center;
	}

	.home-link {
		-webkit-tap-highlight-color: transparent;
	}

	.logo__image {
		width: 60px;
		border-radius: 10px;
	}

	.logo__title {
		font-size: 1.5rem;
		line-height: 2rem;
		color: #fff;
		position: relative;
		z-index: 5;
		padding: 0rem 0.5rem;
		margin-left: 0.5rem;
		transition: all 250ms ease-in-out;
	}

	.logo__title::before {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		width: 0%;
		height: 100%;
		border-radius: 10px;
		background: #fff;
		z-index: -1;
		transition: width 150ms linear;
	}

	h1:hover .logo__title {
		color: rgba(120, 0, 0, 1);
	}

	h1:hover .logo__title::before {
		width: 100%;
	}

	.actions-btn {
		width: 10rem;
		display: flex;
		justify-content: space-around;
	}

	.actions-btn__link {
		width: 45%;
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 1.75rem;
		width: 100%;

		border: none;
		border-radius: 10px;

		font-weight: bold;
		font-size: 0.75rem;
		cursor: pointer;

		color: #fff;
		background-color: rgba(120, 0, 0, 1);

		transition: all 300ms;

		&:hover {
			background-color: #f22222;
		}
	}

	.profile-btn__link {
		width: auto;
	}

	.profile-btn {
		padding: 0 1rem;
	}

	.profile-icon {
		width: 24px;
		height: 24px;
		margin-right: 0.5rem;
	}

	span::first-letter {
		text-transform: uppercase;
	}

	@media screen and (max-width: 900px) {
		height: 180px;

		flex-wrap: wrap;
		justify-content: center;
		align-items: center;

		padding: 0.5rem 0;

		h1,
		.home-link {
			width: 100%;
			height: 80px;
			flex-direction: column;
		}

		.logo__image {
			width: 72px;
		}

		.logo__title {
			font-size: 1.5rem;
			margin-left: 0;
		}

		.logo__title::before {
			display: none;
		}
	}
`;
