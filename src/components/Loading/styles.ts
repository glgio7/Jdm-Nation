import styled from "styled-components";

export const StyledLoading = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	img {
		border: 6px #fff outset;

		width: 220px;
		height: 220px;

		border-radius: 50%;

		object-fit: cover;

		aspect-ratio: 1;
	}

	span {
		margin-top: 0.25rem;
		cursor: default;
		padding: 0.25rem 0.75rem;

		border-radius: 10px;

		background-color: #252525;
	}
`;
