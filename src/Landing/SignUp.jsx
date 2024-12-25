import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	// Use React Hook Form
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();

	const registerUser = async (formData) => {
		const apiUrl = import.meta.env.VITE_API_URL;

		try {
			const response = await fetch(`${apiUrl}/auth/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error("Registration failed");
			}

			const data = await response.json();
			console.log("Registration successful:", data);
			return data;
		} catch (error) {
			console.error("Error:", error);
			throw error;
		}
	};

	const onSubmit = async (data) => {
		try {
			await registerUser(data);
			navigate("/login");
		} catch (error) {
			console.error("Registration error:", error);
		}
	};

	return (
		<section className="bg-gray-50 font-poppins">
			<div className="flex flex-col items-center justify-center px-6 pt-36 pb-8 mx-auto md:h-screen lg:py-0">
				<div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl ">
							Create an account
						</h1>
						<form
							className="space-y-4 md:space-y-6"
							onSubmit={handleSubmit(onSubmit)}
						>
							<div>
								<label
									htmlFor="name"
									className="block mb-2 text-sm font-medium text-gray-900 "
								>
									Your name
								</label>
								<input
									type="text"
									id="name"
									{...register("name", { required: "Name is required" })}
									className={`bg-gray-50 border ${
										errors.name ? "border-red-500" : "border-gray-300"
									} text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5`}
								/>
								{errors.name && (
									<p className="text-red-500 text-sm">{errors.name.message}</p>
								)}
							</div>
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900 "
								>
									Your email
								</label>
								<input
									type="email"
									id="email"
									{...register("email", { required: "Email is required" })}
									className={`bg-gray-50 border ${
										errors.email ? "border-red-500" : "border-gray-300"
									} text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5`}
								/>
								{errors.email && (
									<p className="text-red-500 text-sm">{errors.email.message}</p>
								)}
							</div>
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
									{...register("password", {
										required: "Password is required",
									})}
									className={`bg-gray-50 border ${
										errors.password ? "border-red-500" : "border-gray-300"
									} text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5`}
								/>
								{errors.password && (
									<p className="text-red-500 text-sm">
										{errors.password.message}
									</p>
								)}
							</div>
							<div>
								<label
									htmlFor="confirm-password"
									className="block mb-2 text-sm font-medium text-gray-900"
								>
									Confirm password
								</label>
								<input
									type="password"
									id="confirm-password"
									{...register("confirmPassword", {
										required: "Please confirm your password",
									})}
									className={`bg-gray-50 border ${
										errors.confirmPassword
											? "border-red-500"
											: "border-gray-300"
									} text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5`}
								/>
								{errors.confirmPassword && (
									<p className="text-red-500 text-sm">
										{errors.confirmPassword.message}
									</p>
								)}
							</div>
							<button
								type="submit"
								className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
							>
								Create an account
							</button>
							<p className="text-sm font-light text-gray-500">
								Already have an account?{" "}
								<a
									href="/login"
									className="font-medium text-green-600 hover:underline"
								>
									Login here
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
