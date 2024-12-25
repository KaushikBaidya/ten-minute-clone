import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuBar from "./MenuBar";

const Layout = () => {
	return (
		<div>
			<Navbar />
			<section className="">
				<div className="">
					<Outlet />
				</div>
			</section>
			<Footer />
			<MenuBar />
		</div>
	);
};

export default Layout;
