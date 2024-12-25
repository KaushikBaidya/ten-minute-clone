import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			validateToken(token)
				.then((userData) => {
					setUser(userData);
				})
				.catch(() => {
					localStorage.removeItem("token");
				})
				.finally(() => setLoading(false));
		} else {
			setLoading(false);
		}
	}, []);

	const login = (userData, token) => {
		setUser(userData);
		localStorage.setItem("token", token);
	};

	const logout = () => {
		setUser(null);
		localStorage.removeItem("token");
	};

	const validateToken = async (token) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (token === "valid-token") {
					resolve({ name: "John Doe", email: "john.doe@example.com" });
				} else {
					reject("Invalid token");
				}
			}, 1000);
		});
	};

	return (
		<AuthContext.Provider value={{ user, login, logout, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
