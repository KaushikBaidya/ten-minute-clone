import { Suspense } from "react";
import { Routes } from "react-router-dom";
import homeRoutes from "./Landing/homeRoutes";
function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>{homeRoutes()}</Routes>
		</Suspense>
	);
}

export default App;
