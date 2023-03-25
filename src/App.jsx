import React from "react";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import { GlobalCSS } from "./styles/GlobalCSS";
import { BrowserRouter } from "react-router-dom";
import { StyledContainer } from "./styles/App";

const App = () => {
	return (
		<>
			<GlobalCSS />
			<BrowserRouter>
				<Header />
				<StyledContainer>
					<AppRoutes />
				</StyledContainer>
			</BrowserRouter>
		</>
	);
};

export default App;
