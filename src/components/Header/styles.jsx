import styled from "styled-components";

export const HeaderContainer = styled.header`
	width: 100vw;
	height: 96px;

	background-color: #000;

	display: flex;
	justify-content: center;
	align-items: center;

	z-index: 9;

	img {
		width: 100%;
	}

	h1,
	.home-link {
		display: flex;
		align-items: center;
	}

	.home-link {
		width: 50%;
		justify-content: space-around;
		-webkit-tap-highlight-color: transparent;
	}

	.logo__image {
		width: 114px;

		border-radius: 10px;
	}

	.logo__title {
		font-size: 3rem;
		line-height: 3rem;
		color: #fff;
		position: relative;
		padding: 0 1rem;
	}

	.logo__title::before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 0%;
		background-color: rgba(220, 0, 0, 0.9);
		z-index: 1;
		transition: height 200ms ease-out;
		mix-blend-mode: multiply;
		border-radius: 10px;
	}

	h1:hover .logo__title::before {
		height: 100%;
	}

	@media screen and (max-width: 768px) {
		.home-link {
			width: 100%;
		}

		.logo__image {
			width: 96px;
		}

		.logo__title {
			font-size: 2rem;
		}
	}
`;
