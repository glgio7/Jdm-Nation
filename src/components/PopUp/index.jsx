import { useNavigate } from "react-router-dom";
import { PopUpContainer } from "./styles";

const PopUp = ({ success, href, message, buttonText }) => {
	const navigate = useNavigate();

	const handlePopUp = () => {
		if (success === false) {
			window.location.reload();
		}

		navigate(href);
	};

	return (
		<PopUpContainer>
			<p>{message}</p>
			<button onClick={handlePopUp}>{buttonText}</button>
		</PopUpContainer>
	);
};

export default PopUp;
