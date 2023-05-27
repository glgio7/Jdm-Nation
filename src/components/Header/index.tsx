import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";
import { useAuth } from "../../hooks/useAuth/useAuth";
import { RiUserFill, RiLogoutBoxLine } from "react-icons/ri";
import { useApi } from "../../hooks/useApi/useApi";

export default function Header() {
	const { authenticated, user, setAuthenticated, setUser } = useAuth();
	const { signOut } = useApi();

	const handleSignOut = async () => {
		await signOut();
		setAuthenticated(false);
		setUser(null);
	};

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
				{authenticated && (
					<>
						<RiLogoutBoxLine className="profile-icon" onClick={handleSignOut} />
						<Link className="profile-btn__link" to={"/"}>
							<button className="profile-btn">
								<RiUserFill className="profile-icon" />
								<span>{user && user.displayName}</span>
							</button>
						</Link>
					</>
				)}
				{!authenticated && (
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
