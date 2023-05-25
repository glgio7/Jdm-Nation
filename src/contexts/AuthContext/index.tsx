import { useState } from "react";
import { createContext } from "react";
import { AuthProviderProps, IAuthContext } from "./types";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [authenticated, setAuthenticated] = useState<boolean>(false);
	const [username, setUsername] = useState<string>("");

	const contextValues = {
		authenticated,
		setAuthenticated,
		username,
		setUsername,
	};
	return (
		<AuthContext.Provider value={contextValues}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
