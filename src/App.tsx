import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
import { GlobalCSS } from "./styles/GlobalCSS";
import { BrowserRouter } from "react-router-dom";

const App = () => {
	return (
		<>
			<GlobalCSS />
			<BrowserRouter>
				<Header />
				<AppRoutes />
			</BrowserRouter>
		</>
	);
};

export default App;
