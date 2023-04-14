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
		<Card>
			{!authenticated && loginRequired && (
				<div className="login-advice">
					<h3>Login necessário</h3>
				</div>
			)}
			<h2 className="section__title">
				<span>{title}</span>
			</h2>
			<div className="section__description">{description}</div>
			<Link className="section__button__link" to={href}>
				<button className="section__button">{buttonSpan}</button>
			</Link>
		</Card>
	);
};

export default HomeCard;
