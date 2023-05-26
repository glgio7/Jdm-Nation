import { Card } from "./styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { HomeCardProps } from "./types";

const HomeCard = ({
	loginRequired,
	background,
	title,
	description,
	href,
	buttonSpan,
}: HomeCardProps) => {
	const { authenticated } = useContext(AuthContext);

	return (
		<Card background={background}>
			{!authenticated && loginRequired && (
				<div className="login-advice">
					<h3>Login necessário</h3>
				</div>
			)}
			<h2 className="section__title">
				<span>{title}</span>
			</h2>
			<img className="background" src={background} />
			<div className="section__description">
				<span>{description}</span>
			</div>
			<Link className="section__button__link" to={href}>
				<button className="section__button">{buttonSpan}</button>
			</Link>
		</Card>
	);
};

export default HomeCard;
