import { useContext, useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../services/firebaseConfig";
import FormContainer from "../../components/FormContainer";
import LoadingContainer from "../../components/Loading";
import PopUp from "../../components/PopUp";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
	const { setAuthenticated, setUsername, username } = useContext(AuthContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);

	const handleLogin = async () => {
		if (email && password) {
			signInWithEmailAndPassword(email, password);
		}
		signInWithEmailAndPassword("guest@jdmnation.com", "123456");
		setUsername("Convidado");
	};

	useEffect(() => {
		if (user) {
			setAuthenticated(true);
		}
		if (user && user.user.displayName) {
			setUsername(user!.user.displayName);
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
				message={`Bem vindo! ${username
					.charAt(0)
					.toUpperCase()}${username.slice(1, username.length)}`}
				buttonText={"Ir para página inicial"}
			/>
		);
	}

	return (
		<FormContainer>
			<h2>Login</h2>
			<form>
				<label htmlFor="email">Email</label>
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
				<div className="keep-connected">
					<input type="checkbox" id="manter-conectado"></input>
					<label htmlFor="manter-conectado">Manter conectado</label>
				</div>
				<div>
					<button onClick={handleLogin}>Fazer login</button>
					<button className="guest-button" onClick={handleLogin}>
						Entrar como convidado
					</button>
				</div>
			</form>
			<Link to={"/signup"}>
				<span>Ainda não possui uma conta? Cadastre-se aqui.</span>
			</Link>
		</FormContainer>
	);
};

export default Login;
