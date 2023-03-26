import { useContext, useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import AuthContainer from "../../components/AuthContainer";
import LoadingContainer from "../../components/Loading";
import PopUp from "../../components/PopUp";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
	const { setAuthenticated, setUsername } = useContext(AuthContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);

	const handleLogin = async () => {
		if ((email, password)) {
			signInWithEmailAndPassword(email, password);
		}
		signInWithEmailAndPassword("guest@jdmnation.com", "123456");
	};

	useEffect(() => {
		if (user) {
			setUsername(user.user.displayName);
			setAuthenticated(true);
		}
	}, [user]);

	if (error) {
		const errorMessage = error.message.split(" ");
		return (
			<PopUp
				success={false}
				href={""}
				message={errorMessage[errorMessage.length - 1]}
				buttonText={"Tentar novamente"}
			/>
		);
	}
	if (loading) {
		return <LoadingContainer />;
	}
	if (user) {
		return (
			<PopUp
				success={true}
				href={"/"}
				message={`Bem vindo! ${user.user.displayName
					.charAt(0)
					.toUpperCase()}${user.user.displayName.slice(
					1,
					user.user.displayName.length
				)}`}
				buttonText={"Ir para página inicial"}
			/>
		);
	}

	return (
		<AuthContainer>
			<h2>Login</h2>
			<form>
				<label htmlFor="email">Name</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<div>
					<button onClick={handleLogin}>Fazer login</button>
					<button onClick={handleLogin}>Entrar como convidado</button>
				</div>
			</form>
			<Link to={"/signup"}>
				<span>Ainda não possui uma conta? Cadastre-se aqui.</span>
			</Link>
		</AuthContainer>
	);
};

export default Login;
