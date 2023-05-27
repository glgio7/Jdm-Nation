import FormContainer from "../../components/FormContainer";
import LoadingContainer from "../../components/Loading";
import PopUp from "../../components/PopUp";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useApi } from "../../hooks/useApi/useApi";
import { useAuth } from "../../hooks/useAuth/useAuth";

const Signup = () => {
	const [displayName, setDisplayName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordMatch, setPasswordMatch] = useState(false);

	const { signUp } = useApi();
	const { user, setUser } = useAuth();

	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState("");

	const handleRegister = async () => {
		const user = await signUp({
			email,
			password,
			displayName,
			setLoading,
			setError,
		});

		setUser(user);
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
	if (loading) {
		return <LoadingContainer />;
	}
	if (user) {
		return (
			<PopUp
				success={true}
				href={"/login"}
				message={"Conta criada com sucesso!"}
				buttonText={"Fazer login."}
			/>
		);
	}

	return (
		<FormContainer>
			<h2>Register</h2>
			<form>
				<label htmlFor="nome">Nome</label>
				<input
					type="text"
					id="nome"
					value={displayName}
					onChange={(e) => setDisplayName(e.target.value)}
					required
				/>
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
					required
					onChange={(e) => setPassword(e.target.value)}
				/>
				<label htmlFor="confirmPassword">Confirm Password</label>
				<input
					type="password"
					id="confirmPassword"
					required
					onChange={(e) =>
						e.target.value === password
							? setPasswordMatch(false)
							: setPasswordMatch(true)
					}
				/>
				<button onClick={handleRegister} disabled={passwordMatch}>
					Register
				</button>
			</form>
			<Link to={"/login"}>
				<span>Já possui uma conta? Faça login aqui.</span>
			</Link>
		</FormContainer>
	);
};

export default Signup;
