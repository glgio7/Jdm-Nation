import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [authenticated, setAuthenticated] = useState(false);
	const [username, setUsername] = useState("");

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
