import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const AdvBanner = () => {
	const [isVisible, setIsVisible] = useState(true);

	const closeBanner = () => {
		setIsVisible(false);
	};

	return (
		<>
			{isVisible && (
				<div className="relative w-full overflow-hidden">
					<img
						className="w-full h-auto object-cover hidden md:flex"
						src="/web_banner.jpg"
						alt="Advertisement Banner"
					/>
					<img
						className="w-full h-auto object-cover flex md:hidden"
						src="/mobile_banner.jpg"
						alt="Advertisement Banner"
					/>
					<button
						className="absolute top-4 right-4 text-gray-300 hover:text-white transition duration-200"
						onClick={closeBanner}
					>
						<AiOutlineClose size={20} />
					</button>
				</div>
			)}
		</>
	);
};

export default AdvBanner;
