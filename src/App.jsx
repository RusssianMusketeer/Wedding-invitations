import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { Navigate } from "react-router-dom";

const App = () => {
	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>

				<Route
					path="/:lang"
					element={<Home />}
				/>
			</Routes>
		</div>
	);
};

export default App;
