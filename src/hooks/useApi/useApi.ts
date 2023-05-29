import { auth } from "../../../services/auth";
import {
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { SignInProps, SignUpProps } from "./types";
import { IUser } from "../../contexts/AuthContext/types";
import { FirebaseError } from "firebase/app";

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
			.catch((error: FirebaseError) => {
				const errorCode = error.code.split("/");
				const errorMessage = errorCode[errorCode.length - 1];
				setLoading(false);
				setError(errorMessage.toUpperCase());
				return null;
			});
	},
	signOut: async () => {
		signOut(auth);
	},
	signUp: async ({
		email,
		password,
		displayName,
		setLoading,
		setError,
	}: SignUpProps) => {
		try {
			setLoading!(true);
			return createUserWithEmailAndPassword(auth, email, password).then(
				(userCredential) => {
					updateProfile(userCredential.user, { displayName });
					setLoading!(false);
					return userCredential.user as IUser;
				}
			);
		} catch (error) {
			setLoading!(false);
			setError!("Um erro aconteceu!");
			console.log(error);
			return null;
		}
	},
});
