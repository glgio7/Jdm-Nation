import { useState } from "react";
import { createContext } from "react";
import { AuthProviderProps, IAuthContext, IUser } from "./types";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [authenticated, setAuthenticated] = useState<boolean>(false);
	const [user, setUser] = useState<IUser | null>(null);

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
