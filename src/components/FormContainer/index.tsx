import * as S from "./styles";
import { FormContainerProps } from "./types";

const FormContainer = ({ children }: FormContainerProps) => {
	return (
		<S.FormContainer>
			<div className="background"></div>
			{children}
		</S.FormContainer>
	);
};

export default FormContainer;
