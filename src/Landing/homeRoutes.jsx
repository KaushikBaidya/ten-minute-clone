import { Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import Layout from "./Layout";
import * as Home from "./index";
import ProtectedRoute from "./ProtectedRoute";

const homeRoutes = () => {
	return (
		<Route path="/*" element={<PublicRoute />}>
			<Route element={<Layout />}>
				<Route path="" element={<Home.Landing />} />
				<Route path="login" element={<Home.Login />} />
				<Route path="signup" element={<Home.SignUp />} />
				<Route
					path="dashboard"
					element={
						<ProtectedRoute>
							<Home.Dashboard />
						</ProtectedRoute>
					}
				/>
			</Route>
		</Route>
	);
};

export default homeRoutes;
