import React from "react";
import { GrDocumentDownload } from "react-icons/gr";
import { LuBookOpenText } from "react-icons/lu";
import { MdOutlineRocketLaunch } from "react-icons/md";

const MenuBar = () => {
	return (
		<div className="relative block md:hidden">
			<div className="fixed bottom-0 w-full font-normal z-50 bg-white border-t font-bangla flex items-center justify-around text-xs text-gray-400 pt-3 py-1 px-4">
				<div className="flex flex-col items-center gap-1">
					<LuBookOpenText size={20} />
					<p>স্টাডি হোম</p>
				</div>
				<div className="flex flex-col items-center gap-1">
					<MdOutlineRocketLaunch size={20} />
					<p>স্কিল</p>
				</div>
				<div className="flex flex-col items-center gap-1">
					<GrDocumentDownload size={20} />
					<p>ডাউনলোড </p>
				</div>
			</div>
		</div>
	);
};

export default MenuBar;
