import styled from "styled-components";

export const PopUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 300px;

	aspect-ratio: 16/9;

	border-radius: 10px;

	background-color: #101010;

	button {
		margin-top: 3rem;

		height: 1.75rem;
		width: 80%;

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
