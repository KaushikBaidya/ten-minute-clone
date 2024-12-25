import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();
	const { login } = useAuth();

	const onSubmit = async (data) => {
		try {
			// Fetch request to login API
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/auth/login`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);

			if (!response.ok) {
				throw new Error("Invalid email or password");
			}

			// Parse response
			const result = await response.json();

			// Use AuthContext login function to set user and token
			login(result.user, result.token);

			// Navigate to dashboard
			navigate("/dashboard");
		} catch (error) {
			console.error("Login error:", error.message);
			alert("Login failed. Please check your credentials.");
		}
	};

	return (
		<section className="bg-gray-50 font-poppins">
			<div className="flex flex-col items-center justify-center px-6 pb-8 pt-36 mx-auto md:h-screen lg:py-0">
				<div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl">
							Sign in to your account
						</h1>
						<form
							className="space-y-4 md:space-y-6"
							onSubmit={handleSubmit(onSubmit)}
						>
							{/* Email Input */}
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Your email
								</label>
								<input
									type="email"
									id="email"
									placeholder="name@company.com"
									className={`bg-gray-50 border ${
										errors.email ? "border-red-500" : "border-gray-300"
									} text-gray-900 rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5`}
									{...register("email", { required: "Email is required" })}
								/>
								{errors.email && (
									<p className="text-red-500 text-sm mt-1">
										{errors.email.message}
									</p>
								)}
							</div>
							{/* Password Input */}
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Password
								</label>
								<input
									type="password"
									id="password"
									placeholder="••••••••"
									className={`bg-gray-50 border ${
										errors.password ? "border-red-500" : "border-gray-300"
									} text-gray-900 rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5`}
									{...register("password", {
										required: "Password is required",
									})}
								/>
								{errors.password && (
									<p className="text-red-500 text-sm mt-1">
										{errors.password.message}
									</p>
								)}
							</div>
							{/* Remember Me and Forgot Password */}
							<div className="flex items-center justify-between">
								<div className="flex items-start">
									<div className="flex items-center h-5">
										<input
											id="remember"
											type="checkbox"
											className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300"
										/>
									</div>
									<div className="ml-3 text-sm">
										<label htmlFor="remember" className="text-gray-500">
											Remember me
										</label>
									</div>
								</div>
								<a
									href="#"
									className="text-sm font-medium text-green-600 hover:underline"
								>
									Forgot password?
								</a>
							</div>
							{/* Submit Button */}
							<button
								type="submit"
								className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
							>
								Sign in
							</button>
							{/* Sign Up Link */}
							<p className="text-sm font-light text-gray-500">
								Don’t have an account yet?{" "}
								<Link
									to="/signup"
									className="font-medium text-green-600 hover:underline"
								>
									Sign up
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
