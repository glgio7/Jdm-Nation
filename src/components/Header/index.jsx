import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";

export default function Header() {
	return (
		<HeaderContainer>
			<Link className="home-link" to={"/"}>
				<h1>
					<img
						src="/img/data/jdmnation-logo.png"
						alt="JDM Nation Logo"
						className="logo__image"
					/>
					<span className="logo__title">JDM Nation</span>
				</h1>
			</Link>
			<div>
				<Link to={"/signup"}>
					<button>Register</button>
				</Link>
				<Link to={"/login"}>
					<button>Login</button>
				</Link>
			</div>
		</HeaderContainer>
	);
}
