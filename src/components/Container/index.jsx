import Header from "../Header";
import { StyledContainer } from "./styles";

const Container = ({ children }) => {
	return (
		<>
			<Header />
			<StyledContainer>{children}</StyledContainer>
		</>
	);
};

export default Container;
