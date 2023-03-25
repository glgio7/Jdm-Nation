import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Login from "../pages/Login";

const PrivateRoute = ({ children }) => {
	const { authenticated } = useContext(AuthContext);

	if (!authenticated) {
		return <Login />;
	}

	return children;
};

export default PrivateRoute;
