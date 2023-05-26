import { useState } from "react";
import FormContainer from "../../components/FormContainer";
import LoadingContainer from "../../components/Loading";
import PopUp from "../../components/PopUp";
import { Link } from "react-router-dom";
import { useApi } from "../../hooks/useApi/useApi";
import { useAuth } from "../../hooks/useAuth/useAuth";

const Login = () => {
	const { setAuthenticated, user, setUser } = useAuth();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState("");

	const { signIn } = useApi();

	const handleSignIn = async (email: string, password: string) => {
		const user = await signIn({ email, password, setLoading, setError });
		if (user) {
			setUser(user);
			setAuthenticated(true);
		}
	};

	if (error) {
		return (
			<PopUp
				success={false}
				href={""}
				message={error}
				buttonText={"Tentar novamente"}
			/>
		);
	}

	if (user) {
		return (
			<PopUp
				success={true}
				href={"/"}
				message={`Bem vindo! ${user.displayName
					.charAt(0)
					.toUpperCase()}${user.displayName.slice(1, user.displayName.length)}`}
				buttonText={"Ir para página inicial"}
			/>
		);
	}
	if (loading) {
		return <LoadingContainer />;
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
					<button
						onClick={() => {
							handleSignIn(email, password);
						}}
					>
						Fazer login
					</button>
					<button
						className="guest-button"
						onClick={() => handleSignIn("guest@jdmnation.com", "123456")}
					>
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
