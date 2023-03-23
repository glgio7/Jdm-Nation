import { Card } from "./styles";
import { Link } from "react-router-dom";

const HomeCard = ({ background, title, description, href, buttonSpan }) => {
	return (
		<Card background={background}>
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
