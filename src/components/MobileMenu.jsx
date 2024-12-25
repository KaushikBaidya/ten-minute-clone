import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const MobileMenu = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 bg-white shadow-md flex flex-col p-4">
			{/* Close Button */}
			<div className="flex justify-end">
				<button
					className="text-gray-600 hover:text-black text-2xl"
					onClick={onClose}
				>
					<RiCloseLine />
				</button>
			</div>

			{/* Menu Items */}
			<ul className="mt-4 space-y-4 text-lg">
				<li>
					<Link to="/class-6-12" onClick={onClose}>
						ক্লাস ৬-১২
					</Link>
				</li>
				<li>
					<Link to="/skills" onClick={onClose}>
						স্কিলস
					</Link>
				</li>
				<li>
					<Link to="/admission-test" onClick={onClose}>
						ভর্তি পরীক্ষা
					</Link>
				</li>
				<li>
					<Link to="/online-batch" onClick={onClose}>
						অনলাইন ব্যাচ
					</Link>
				</li>
				<li>
					<Link to="/english-center" onClick={onClose}>
						ইংলিশ সেন্টার
					</Link>
				</li>
				<li>
					<Link to="/more" onClick={onClose}>
						আরো
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default MobileMenu;
