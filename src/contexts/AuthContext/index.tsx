import { useEffect, useState } from "react";
import { createContext } from "react";
import { AuthProviderProps, IAuthContext, IUser } from "./types";
import { auth } from "../../../services/auth";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [authenticated, setAuthenticated] = useState<boolean>(false);
	const [user, setUser] = useState<IUser | null>(null);

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setUser(user as IUser);
				setAuthenticated(true);
			}
		});
	}, []);

	const contextValues = {
		authenticated,
		setAuthenticated,
		user,
		setUser,
	};
	return (
		<AuthContext.Provider value={contextValues}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
