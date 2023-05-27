import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Login from "../pages/Login";

export type PrivateRouteProps = {
	children: React.ReactElement;
};

const PrivateRoute = ({ children }: PrivateRouteProps): React.ReactElement => {
	const { authenticated } = useContext(AuthContext);

	if (!authenticated) {
		return <Login />;
	}

	return children;
};

export default PrivateRoute;
