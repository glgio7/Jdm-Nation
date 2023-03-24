import styled from "styled-components";

const LoginContainer = styled.form`
	background-color: #101010;
	color: #000;

	min-height: 60vh;
	min-width: 30vw;

	padding: 0 2rem;

	border-radius: 10px;

	h2 {
		margin-top: 0.25rem;
		font-size: 1.5rem;
		text-align: center;

		width: 100%;

		border-radius: 0 0 10px 10px;

		background-color: #fff;
		color: rgba(120, 0, 0, 1);
	}

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
		margin-top: 3rem;

		height: 1.75rem;
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
`;

export default LoginContainer;
