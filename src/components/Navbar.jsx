import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPhoneCall, FiSearch } from "react-icons/fi";
import { RiMenuUnfold2Line, RiMenuUnfoldLine } from "react-icons/ri";
import MobileMenu from "./MobileMenu";
import MenuList from "./MenuList";
import MobileMenuList from "./MobileMenuList";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const menuRef = useRef(null);
	const { user, logout } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setNavbarOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleLogout = () => {
		logout();
		navigate("/");
	};

	return (
		<nav className="fixed w-full font-normal text-[14px] z-50 bg-white border-b font-bangla">
			<div
				className="max-w-[1360px] mx-auto flex gap-3 items-center justify-between"
				ref={menuRef}
			>
				{/* Logo */}
				<div className="flex lg:w-auto lg:static lg:block justify-start">
					<button
						className="cursor-pointer leading-none p-[2px] border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
						type="button"
						onClick={() => setNavbarOpen(!navbarOpen)}
					>
						{navbarOpen ? (
							<RiMenuUnfold2Line size={20} />
						) : (
							<RiMenuUnfoldLine size={20} />
						)}
					</button>
					<Link to="/">
						<img className="w-[110px] p-2" src="/10mslogo-svg.svg" alt="logo" />
					</Link>
				</div>

				{/* Search bar */}
				<div className="flex-grow border rounded-full hidden md:flex items-center m-2 gap-2">
					<FiSearch size={20} className="ml-2" />
					<input
						type="search"
						placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
						className="px-3 py-2 bg-transparent text-sm font-medium text-gray-700 w-full outline-none"
					/>
				</div>

				{/* Menu Items */}
				<MenuList />

				{/* login/logout and language */}
				<div className="flex items-center justify-center gap-4 text-[16px] p-4">
					<div className="flex items-center md:hidden">
						<FiSearch size={20} />
					</div>
					<div className="hidden md:flex">
						<button className="py-2 px-2 border rounded flex items-center justify-center gap-2">
							<span className="text-[10px] text-gray-500">অ/A</span> EN
						</button>
					</div>
					<div>
						<div className="flex items-center md:hidden">
							<FiPhoneCall size={20} />
						</div>
						<div className="hidden md:flex items-center gap-2 text-green-600">
							<span>
								<FiPhoneCall />
							</span>
							<span className="text-lg"> 16240</span>
						</div>
					</div>
					{user ? (
						<button
							onClick={handleLogout}
							className="bg-red-600 text-xs lg:text-base text-white py-2 px-3 md:px-6 rounded-md"
						>
							Logout
						</button>
					) : (
						<Link to={"/login"}>
							<div className="bg-green-600 text-xs lg:text-base text-white py-2 px-3 md:px-6 rounded-md">
								লগ-ইন
							</div>
						</Link>
					)}
				</div>
			</div>

			{/* mobile Menu Items */}
			<MobileMenuList />
			<MobileMenu isOpen={navbarOpen} onClose={() => setNavbarOpen(false)} />
		</nav>
	);
};

export default Navbar;
