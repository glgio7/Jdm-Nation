import styled from "styled-components";

export const FormContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: calc(100vh - 48px);

	position: relative;
	z-index: 5;

	padding: 0 2rem 2rem 2rem;

	.background {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		z-index: -1;

		opacity: 0.05;

		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-image: url("/img/data/cars-wallpaper.jpg");
	}

	form {
		height: 100%;
		width: 50%;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: bold;
		text-align: center;
		position: absolute;
		top: 0;

		cursor: default;

		width: 60%;

		border-radius: 0 0 10px 10px;

		background-color: #fff;
		color: rgba(120, 0, 0, 1);
	}

	select,
	input {
		padding: 0.5rem;
		background-color: #252525;
		width: 100%;
		height: 2rem;

		display: block;

		outline: none;
	}
	label {
		display: block;

		margin-top: 3rem;
		margin-bottom: 0.5rem;
	}

	button {
		margin-block: 1rem;

		line-height: 1.75rem;
		height: 2rem;
		width: 100%;

		border: none;
		border-radius: 10px;

		font-weight: bold;
		font-size: 1rem;

		cursor: pointer;

		color: #fff;
		background-color: rgba(120, 0, 0, 1);

		transition: all 300ms;

		&:hover {
			background-color: #f22222;
		}
	}

	button:disabled {
		opacity: 0.5;
	}

	.keep-connected {
		margin-top: 1rem;
		display: inline-flex;
		align-items: center;
		input {
			width: 1rem;
			height: 1rem;
			padding: initial;
		}

		label {
			font-size: 0.75rem;
			margin-top: initial;
			margin-bottom: initial;
			margin-left: 0.25rem;
		}
	}

	.guest-button {
		color: rgba(120, 0, 0, 1);
		background-color: #fff;

		&:hover {
			background-color: #ccc;
		}
	}

	span {
		font-size: 0.75rem;
		width: 100%;
		position: relative;
		transition: all 300ms;

		&:hover {
			opacity: 0.75;
		}

		&::after {
			opacity: 0.5;

			position: absolute;
			bottom: -4px;
			left: 0;

			content: "";

			background: #b22222;

			width: 100%;
			height: 1px;
		}
	}

	@media screen and (max-width: 900px) {
		min-height: calc(100vh - 180px);
		h2 {
			width: 90%;
		}
		form {
			width: 80%;
		}
	}
`;
