import { auth } from "../../../services/firebaseConfig";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { SignInProps } from "./types";
import { IUser } from "../../contexts/AuthContext/types";

export const useApi = () => ({
	signIn: async ({
		email,
		password,
		setLoading,
	}: SignInProps): Promise<IUser | null> => {
		setLoading(true);

		return signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				setLoading(false);
				return userCredential.user as IUser;
			})
			.catch((error) => {
				setLoading(false);
				const errorCode = error.code;
				const errorMessage = error.message;

				console.log(`code: ${errorCode}`, `message: ${errorMessage}`);
				return null;
			});
	},
	signOut: async () => {
		signOut(auth);
	},
});
