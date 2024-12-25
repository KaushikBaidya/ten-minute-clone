import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
	FcAdvertising,
	FcAlphabeticalSortingAz,
	FcElectricalSensor,
	FcElectroDevices,
	FcEngineering,
	FcExport,
	FcFactory,
	FcGlobe,
	FcMultipleSmartphones,
	FcNews,
	FcPuzzle,
	FcSelfie,
	FcStumbleupon,
	FcTimeline,
} from "react-icons/fc";
import { Link } from "react-router-dom";

const MenuList = () => {
	const [openDropdown, setOpenDropdown] = useState(null);

	const toggleDropdown = (menu) => {
		setOpenDropdown(openDropdown === menu ? null : menu);
	};

	return (
		<div className="hidden xl:flex items-center py-3 transition-all duration-300 ease-in-out text-gray-600">
			<div className="flex flex-col items-center lg:flex-row list-none lg:ml-auto uppercase">
				{/* Dropdown Menu Example: ক্লাস ৬-১২ */}
				<div
					className="relative group lg:p-2 border-transparent border-b-4 cursor-pointer hidden lg:block"
					onMouseEnter={() => setOpenDropdown("class")}
					onMouseLeave={() => setOpenDropdown(null)}
				>
					<div
						className="flex items-center gap-2 hover:text-green-600"
						onClick={() => toggleDropdown("class")}
					>
						<span>ক্লাস ৬-১২</span>
						<FaChevronDown />
					</div>
					<div
						className={`absolute lg:mt-2 bg-white -right-5 shadow-md rounded overflow-hidden w-36 transition-all duration-300 ease-in-out ${
							openDropdown === "class"
								? "opacity-100 visible"
								: "opacity-0 invisible"
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

				{/* Dropdown Menu Example: স্কিলস */}
				<div
					className="relative group lg:p-2 border-transparent border-b-4 cursor-pointer hidden lg:block"
					onMouseEnter={() => setOpenDropdown("skills")}
					onMouseLeave={() => setOpenDropdown(null)}
				>
					<div
						className="flex items-center gap-2 hover:text-green-600"
						onClick={() => toggleDropdown("skills")}
					>
						<span>স্কিলস</span>
						<FaChevronDown />
					</div>
					<div
						className={`absolute lg:mt-2 bg-white -right-16 shadow-md rounded overflow-hidden w-56 transition-all duration-300 ease-in-out ${
							openDropdown === "skills"
								? "opacity-100 visible"
								: "opacity-0 invisible"
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

				{/* Static Menu Item: ভর্তি পরীক্ষা */}
				<Link to="/admission">
					<div className="px-4 border-transparent border-b-4 hover:text-orange py-2 cursor-pointer">
						ভর্তি পরীক্ষা
					</div>
				</Link>

				{/* Dropdown Menu Example: অনলাইন ব্যাচ */}
				<div
					className="relative group lg:p-2 border-transparent border-b-4 cursor-pointer hidden lg:block"
					onMouseEnter={() => setOpenDropdown("onlineBatch")}
					onMouseLeave={() => setOpenDropdown(null)}
				>
					<div
						className="flex items-center gap-2 hover:text-green-600"
						onClick={() => toggleDropdown("onlineBatch")}
					>
						<span>অনলাইন ব্যাচ</span>
						<FaChevronDown />
					</div>
					<div
						className={`absolute lg:mt-2 bg-white -right-8 shadow-md rounded overflow-hidden w-40 transition-all duration-300 ease-in-out ${
							openDropdown === "onlineBatch"
								? "opacity-100 visible"
								: "opacity-0 invisible"
						}`}
					>
						<div className="text-left">
							<Link to="/online-hsc">
								<li className="p-2 hover:bg-gray-100 cursor-pointer m-2">
									এইচএসসি অনলাইন
								</li>
							</Link>
						</div>
					</div>
				</div>

				{/* Dropdown Menu Example: ইংলিশ সেন্টার */}
				<div
					className="relative group lg:p-2 border-transparent border-b-4 cursor-pointer hidden lg:block"
					onMouseEnter={() => setOpenDropdown("englishCenter")}
					onMouseLeave={() => setOpenDropdown(null)}
				>
					<div
						className="flex items-center gap-2 hover:text-green-600"
						onClick={() => toggleDropdown("englishCenter")}
					>
						<span>ইংলিশ সেন্টার</span>
						<FaChevronDown />
					</div>
					<div
						className={`absolute lg:mt-2 bg-white -right-16 shadow-md rounded overflow-hidden w-56 transition-all duration-300 ease-in-out ${
							openDropdown === "englishCenter"
								? "opacity-100 visible"
								: "opacity-0 invisible"
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
							<Link to="/spoken-junior">
								<li className="p-2 hover:bg-gray-100 cursor-pointer m-2 flex items-center gap-2">
									<span>
										<FcGlobe size={30} />
									</span>
									<span>IELTS প্রোগ্রাম</span>
								</li>
							</Link>
							<Link to="/spoken-junior">
								<li className="p-2 hover:bg-gray-100 cursor-pointer m-2 flex items-center gap-2">
									<span>
										<FcAdvertising size={30} />
									</span>
									<span>স্পোকেন ইংলিশ (জুনিয়র)</span>
								</li>
							</Link>
							<Link to="/spoken-junior">
								<li className="p-2 hover:bg-gray-100 cursor-pointer m-2 flex items-center gap-2">
									<span>
										<FcNews size={30} />
									</span>
									<span>ইংলিশ ফাউন্ডেশন প্রোগ্রাম</span>
								</li>
							</Link>
						</div>
					</div>
				</div>

				{/* Dropdown Menu Example: আরো */}
				<div
					className="relative group lg:p-2 border-transparent border-b-4 cursor-pointer hidden lg:block"
					onMouseEnter={() => setOpenDropdown("more")}
					onMouseLeave={() => setOpenDropdown(null)}
				>
					<div
						className="flex items-center gap-2 hover:text-green-600"
						onClick={() => toggleDropdown("more")}
					>
						<span>আরো</span>
						<FaChevronDown />
					</div>
					<div
						className={`absolute lg:mt-2 bg-white -right-16 shadow-md rounded overflow-hidden w-56 transition-all duration-300 ease-in-out ${
							openDropdown === "more"
								? "opacity-100 visible"
								: "opacity-0 invisible"
						}`}
					>
						<div className="text-left">
							<Link to="/all-programs">
								<li className="p-2 hover:bg-gray-100 cursor-pointer m-2">
									চাকরি প্রস্তুতি কোর্সসমূহ
								</li>
							</Link>
							<Link to="/ielts">
								<li className="p-2 hover:bg-gray-100 cursor-pointer m-2">
									ব্লগ
								</li>
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
		</div>
	);
};

export default MenuList;
