import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { HeaderContainer } from "./styles";

export default function Header() {
	const { authenticated, username } = useContext(AuthContext);

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
			<div className="actions-btn">
				{authenticated ? (
					<Link className="profile-btn__link">
						<button className="profile-btn">
							<img
								className="profile-icon"
								src="/img/data/profile-user.png"
								alt="Profile"
							/>
							<span>{username}</span>
						</button>
					</Link>
				) : (
					<>
						<Link to={"/signup"} className="actions-btn__link">
							<button>Register</button>
						</Link>
						<Link to={"/login"} className="actions-btn__link">
							<button>Login</button>
						</Link>
					</>
				)}
			</div>
		</HeaderContainer>
	);
}
