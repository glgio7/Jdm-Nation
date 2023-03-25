import { Card } from "./styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const HomeCard = ({
	loginRequired,
	background,
	title,
	description,
	href,
	buttonSpan,
}) => {
	const { authenticated } = useContext(AuthContext);

	return (
		<Card background={background}>
			{!authenticated && loginRequired && (
				<div className="login-advice">
					<h3>Login necessário</h3>
				</div>
			)}
			<div className="background"></div>
			<h2>{title}</h2>
			<p className="section__description">{description}</p>
			<Link className="button__link" to={href}>
				<button className="section__button">{buttonSpan}</button>
			</Link>
		</Card>
	);
};

export default HomeCard;
