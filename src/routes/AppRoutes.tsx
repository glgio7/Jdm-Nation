import { Route, Routes } from "react-router-dom";
import Cars from "../pages/Cars";
import Home from "../pages/Home/index";
import Watch from "../pages/Watch";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/cars" element={<Cars />} />
			<Route
				path="/watch"
				element={
					<PrivateRoute>
						<Watch />
					</PrivateRoute>
				}
			/>
			<Route path="/signup" element={<Signup />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};

export default AppRoutes;
