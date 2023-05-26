import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";
import { useAuth } from "../../hooks/useAuth/useAuth";

export default function Header() {
	// const { authenticated, username } = useContext(AuthContext);

	const { authenticated, user } = useAuth();

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
					<Link className="profile-btn__link" to={"/"}>
						<button className="profile-btn">
							<img
								className="profile-icon"
								src="/img/data/profile-user.png"
								alt="Profile"
							/>
							<span>{user.displayName}</span>
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
