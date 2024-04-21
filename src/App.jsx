import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
	return (
		<div>
			<Routes>
				<Route
					path=""
					element={<Home />}
				/>

				<Route
					path=":lang"
					element={<Home />}
				/>
				<Route
					path="/restaurant"
					element={<Home />}
				/>
			</Routes>
		</div>
	);
};

export default App;
