import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Navigate } from "react-router-dom";

const App = () => {
	return (
		<div>
			<Routes>
				<Route
					path="/:lang"
					element={<Home />}
				/>
				<Route
					path="*"
					element={<Navigate to="/" />}
				/>
			</Routes>
		</div>
	);
};

export default App;
