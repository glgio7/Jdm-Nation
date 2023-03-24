import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import SignupContainer from "./styles";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);

	if (error) {
		return (
			<div>
				<p>Error: {error.message}</p>
			</div>
		);
	}
	if (loading) {
		return <p>Loading...</p>;
	}
	if (user) {
		return (
			<div>
				<p>Registered User: {user.user.email}</p>
			</div>
		);
	}
	return (
		<SignupContainer>
			<h2>Register</h2>
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
			<button onClick={() => createUserWithEmailAndPassword(email, password)}>
				Register
			</button>
		</SignupContainer>
	);
};

export default Signup;
