import { useState } from "react";
import {
	useCreateUserWithEmailAndPassword,
	useUpdateProfile,
} from "react-firebase-hooks/auth";
import { auth } from "../../../services/firebaseConfig";
import FormContainer from "../../components/FormContainer";
import LoadingContainer from "../../components/Loading";
import PopUp from "../../components/PopUp";
import { Link } from "react-router-dom";

const Signup = () => {
	const [displayName, setDisplayName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordMatch, setPasswordMatch] = useState(false);

	const [updateProfile] = useUpdateProfile(auth);
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);

	const handleRegister = async () => {
		createUserWithEmailAndPassword(email, password)
			.then(() => updateProfile({ displayName }))
			.catch((err) => console.log(err));
	};

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
