import React from "react";
import { videoData } from "../../data/data";
import { HiPlay } from "react-icons/hi";
import { GiSchoolBag } from "react-icons/gi";

const VideoLibrary = () => {
	return (
		<div className="py-10 md:py-20 font-bangla px-2">
			<div className="flex flex-col items-center max-w-[1200px] mx-auto gap-5">
				<div className="max-w-2xl flex flex-col items-center gap-5 lg:gap-8 px-5">
					<p className="text-[#F0766A]  md:text-lg flex items-center gap-2">
						<span className="text-[#F0766A]">
							<GiSchoolBag size={25} />
						</span>
						<span>ক্লাস</span> <span className="font-bangla">৬-১০</span>
					</p>
					<h1 className="text-2xl md:text-[40px] text-center font-semibold">
						বছর জুড়ে অনলাইন ব্যাচে কী কী থাকছে?
					</h1>
					<p className="text-gray-500 text-sm text-center md:text-lg">
						সেরা শিক্ষকদের পরিচর্যায় দেশের যেকোন প্রান্ত থেকে অব্যাহত থাকুক
						পড়াশুনার অগ্রযাত্রা
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-4 md:my-8 px-5">
					{videoData.map((item, index) => (
						<div
							key={index}
							className="flex items-start flex-col gap-2 py-2 px-4 border rounded-xl"
						>
							<div className="relative w-full my-2 rounded-lg overflow-hidden">
								<img
									src={item.image}
									alt="image"
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer">
									<span className="text-red-500 text-4xl w-14 h-14 flex items-center justify-center bg-white rounded-full ">
										<HiPlay />
									</span>
								</div>
							</div>
							<p className="text-xl font-semibold">{item.title}</p>
							<p className="text-sm md:text-base text-gray-500">
								{item.description}
							</p>
						</div>
					))}
				</div>
				<div className="flex items-center justify-center font-bangla">
					<button className="bg-green-500 hover:bg-green-600 text-white py-3 px-5 rounded">
						আপনার ক্লাস বেছে নিন
					</button>
				</div>
			</div>
		</div>
	);
};

export default VideoLibrary;
