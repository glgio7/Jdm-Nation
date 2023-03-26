import styled from "styled-components";

const StyledAuthContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-width: 50vw;
	background-color: #101010;
	padding: 0 2rem 2rem 2rem;

	border-radius: 10px;

	form {
		height: 100%;
		width: 100%;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: bold;
		text-align: center;

		cursor: default;

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
		width: 80vw;
	}
`;

const AuthContainer = ({ children }) => {
	return <StyledAuthContainer>{children}</StyledAuthContainer>;
};

export default AuthContainer;
