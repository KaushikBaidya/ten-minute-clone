import { lazy } from "react";
const Landing = lazy(() => import("./components/Landing"));
const Login = lazy(() => import("./Login"));
const SignUp = lazy(() => import("./SignUp"));
const Dashboard = lazy(() => import("./dashboard/Dashboard"));

export { Landing, Login, SignUp, Dashboard };
