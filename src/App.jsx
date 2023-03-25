import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalCSS } from "./styles/GlobalCSS";
import Cars from "./pages/Cars";
import Home from "./pages/Home/index";
import Watch from "./pages/Watch";
import Container from "./components/Container";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {
	return (
		<>
			<GlobalCSS />
			<BrowserRouter>
				<Container>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/cars" element={<Cars />} />
						<Route path="/watch" element={<Watch />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</Container>
			</BrowserRouter>
		</>
	);
};

export default App;
