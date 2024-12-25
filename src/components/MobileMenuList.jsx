import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
	FcAlphabeticalSortingAz,
	FcElectricalSensor,
	FcElectroDevices,
	FcEngineering,
	FcExport,
	FcFactory,
	FcMultipleSmartphones,
	FcPuzzle,
	FcSelfie,
	FcStumbleupon,
	FcTimeline,
} from "react-icons/fc";
import { Link } from "react-router-dom";

const MobileMenuList = () => {
	const [openDropdown, setOpenDropdown] = useState(null);

	// Toggle dropdown visibility
	const toggleDropdown = (menu) => {
		setOpenDropdown(openDropdown === menu ? null : menu);
	};

	return (
		<div className="max-w-md mx-auto flex md:hidden items-center justify-center px-5 py-2 text-gray-600 text-xs">
			{/* Dropdown: ক্লাস ৬-১২ */}
			<div
				className="relative group py-2 cursor-pointer w-full"
				onMouseEnter={() => setOpenDropdown("class")}
				onMouseLeave={() => setOpenDropdown(null)}
				onClick={() => toggleDropdown("class")}
			>
				<div className="flex items-center justify-center gap-2 hover:text-green-600">
					<span>ক্লাস ৬-১২</span>
					<FaChevronDown />
				</div>
				<div
					className={`absolute lg:mt-2 bg-white left-0 shadow-md rounded overflow-hidden w-52 transition-all duration-300 ease-in-out ${
						openDropdown === "class"
							? "opacity-100 visible max-h-96"
							: "opacity-0 invisible max-h-0"
					}`}
				>
					<div className="text-left">
						<Link to="/ielts">
							<li className="p-2 hover:bg-gray-100 cursor-pointer m-2 flex items-center gap-2">
								<span>
									<FcElectroDevices size={30} />
								</span>
								<span>এইচএসসি</span>
							</li>
						</Link>
						<Link to="/ielts">
							<li className="p-2 hover:bg-gray-100 cursor-pointer m-2 flex items-center gap-2">
								<span>
									<FcElectricalSensor size={30} />
								</span>
								<span>দশম শ্রেণি</span>
							</li>
						</Link>
						<Link to="/ielts">
							<li className="p-2 hover:bg-gray-100 cursor-pointer m-2 flex items-center gap-2">
								<span>
									<FcFactory size={30} />
								</span>
								<span>নবম শ্রেণি</span>
							</li>
						</Link>
						<Link to="/ielts">
							<li className="p-2 hover:bg-gray-100 cursor-pointer m-2 flex items-center gap-2">
								<span>
									<FcMultipleSmartphones size={30} />
								</span>
								<span>অষ্টম শ্রেণি</span>
							</li>
						</Link>
						<Link to="/ielts">
							<li className="p-2 hover:bg-gray-100 cursor-pointer m-2 flex items-center gap-2">
								<span>
									<FcExport size={30} />
								</span>
								<span>সপ্তম শ্রেণি</span>
							</li>
						</Link>
						<Link to="/ielts">
							<li className="p-2 hover:bg-gray-100 cursor-pointer m-2 flex items-center gap-2">
								<span>
									<FcEngineering size={30} />
								</span>
								<span>ষষ্ঠ শ্রেণি</span>
							</li>
						</Link>
					</div>
				</div>
			</div>

			{/* Dropdown: স্কিলস */}
			<div
				className="relative group py-2 cursor-pointer w-full"
				onMouseEnter={() => setOpenDropdown("skills")}
				onMouseLeave={() => setOpenDropdown(null)}
				onClick={() => toggleDropdown("skills")}
			>
				<div className="flex items-center justify-center gap-2 hover:text-green-600">
					<span>স্কিলস</span>
					<FaChevronDown />
				</div>
				<div
					className={`absolute lg:mt-2 bg-white left-0 shadow-md rounded overflow-hidden w-52 transition-all duration-300 ease-in-out ${
						openDropdown === "skills"
							? "opacity-100 visible max-h-96"
							: "opacity-0 invisible max-h-0"
					}`}
				>
					<div className="text-left">
						<Link to="/ielts">
							<li className="p-2 hover:bg-gray-100 cursor-pointer m-2 flex items-center gap-2">
								<span>
									<FcMultipleSmartphones size={30} />
								</span>
								<span>সকল প্রোগ্রামসমূহ</span>
							</li>
						</Link>
						<Link to="/ielts">
							<li className="p-2 hover:bg-gray-100 cursor-pointer m-2 flex items-center gap-2">
								<span>
									<FcAlphabeticalSortingAz size={30} />
								</span>
								<span>ভাষা শিক্ষা</span>
							</li>
						</Link>
						<Link to="/ielts">
							<li className="p-2 hover:bg-gray-100 cursor-pointer m-2 flex items-center gap-2">
								<span>
									<FcTimeline size={30} />
								</span>
								<span>বান্ডেল</span>
							</li>
						</Link>
						<Link to="/ielts">
							<li className="p-2 hover:bg-gray-100 cursor-pointer m-2 flex items-center gap-2">
								<span>
									<FcStumbleupon size={30} />
								</span>
								<span>স্কিলস এন্ড আইটি</span>
							</li>
						</Link>
						<Link to="/ielts">
							<li className="p-2 hover:bg-gray-100 cursor-pointer m-2 flex items-center gap-2">
								<span>
									<FcPuzzle size={30} />
								</span>
								<span>ডিজাইন এন্ড ক্রিয়েটিভ</span>
							</li>
						</Link>
						<Link to="/ielts">
							<li className="p-2 hover:bg-gray-100 cursor-pointer m-2 flex items-center gap-2">
								<span>
									<FcSelfie size={30} />
								</span>
								<span>কিডস কোর্সসমূহ</span>
							</li>
						</Link>
					</div>
				</div>
			</div>

			{/* Static Link: ভর্তি পরীক্ষা */}
			<Link to="/admission" className="block w-full">
				<div className="px-4 py-2 hover:text-orange cursor-pointer w-full">
					ভর্তি পরীক্ষা
				</div>
			</Link>

			{/* Dropdown: আরো */}
			<div
				className="relative group py-2 cursor-pointer w-full"
				onMouseEnter={() => setOpenDropdown("more")}
				onMouseLeave={() => setOpenDropdown(null)}
				onClick={() => toggleDropdown("more")}
			>
				<div className="flex items-center justify-center gap-2 hover:text-green-600">
					<span>আরো</span>
					<FaChevronDown />
				</div>
				<div
					className={`absolute lg:mt-2 bg-white right-0 shadow-md rounded overflow-hidden w-56 transition-all duration-300 ease-in-out ${
						openDropdown === "more"
							? "opacity-100 visible max-h-96"
							: "opacity-0 invisible max-h-0"
					}`}
				>
					<div className="text-left">
						<Link to="/all-programs">
							<li className="p-2 hover:bg-gray-100 cursor-pointer m-2">
								চাকরি প্রস্তুতি কোর্সসমূহ
							</li>
						</Link>
						<Link to="/ielts">
							<li className="p-2 hover:bg-gray-100 cursor-pointer m-2">ব্লগ</li>
						</Link>
						<Link to="/ielts">
							<li className="p-2 hover:bg-gray-100 cursor-pointer m-2">
								বুক স্টোর
							</li>
						</Link>
						<Link to="/ielts">
							<li className="p-2 hover:bg-gray-100 cursor-pointer m-2">
								ফ্রি নোটস ও গাইড
							</li>
						</Link>
						<Link to="/ielts">
							<li className="p-2 hover:bg-gray-100 cursor-pointer m-2">
								একাডেমিক ডিজিটাল কন্টেন্ট
							</li>
						</Link>
						<Link to="/ielts">
							<li className="p-2 hover:bg-gray-100 cursor-pointer m-2">
								সার্টিফিকেট ভেরিফাই করুন
							</li>
						</Link>
						<div className="w-full h-[1px] bg-gray-200"></div>
						<Link to="/ielts">
							<li className="p-2 hover:bg-gray-100 cursor-pointer m-2">
								সার্টিফিকেট ভেরিফাই করুন
							</li>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileMenuList;
