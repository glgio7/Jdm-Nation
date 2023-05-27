import { auth } from "../../../services/auth";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { SignInProps } from "./types";
import { IUser } from "../../contexts/AuthContext/types";

export const useApi = () => ({
	signIn: async ({
		email,
		password,
		setLoading,
		setError,
	}: SignInProps): Promise<IUser | null> => {
		setLoading(true);

		return signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				setLoading(false);
				return userCredential.user as IUser;
			})
			.catch((error) => {
				setLoading(false);
				const errorCode = error.code.split("/");
				const errorMessage = errorCode[errorCode.length - 1];

				setError(errorMessage);
				return null;
			});
	},
	signOut: async () => {
		signOut(auth);
	},
});
