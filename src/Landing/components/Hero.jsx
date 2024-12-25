import React from "react";
import { GoArrowRight } from "react-icons/go";
import { location, englishCourseData } from "../../data/data";
import { IoLocation } from "react-icons/io5";
import HeroComponent from "./heroComponents/heroComponent";
import { AiOutlineRight } from "react-icons/ai";

const Hero = () => {
	return (
		<div className="bg-black text-white font-bangla">
			<div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center">
				<div className="py-4 md:py-8">
					<img src="./public/new_banner.jpeg" alt="banner" />
				</div>
				<HeroComponent />
				<div className="w-full py-14">
					<div className="w-full bg-gradient-to-b from-[#3C151A] to-[#250E14] relative p-5 rounded-3xl border-[1px] border-red-700">
						<div className="absolute -top-6 left-[31%] md:left-[41%] lg:left-[44%] border-[1px] bg-[#3C151A] border-red-700 py-2 px-5 text-red-500 rounded-full">
							অফলাইন সেন্টার
						</div>
						<div className="md:w-3/5 mx-auto">
							<h2 className="text-center text-lg md:text-2xl md:px-5 lg:px-28 py-5">
								অনলাইনে ৫ লক্ষাধিক শিক্ষার্থীকে ইংরেজি শিখিয়ে আমরা এখন অফলাইনে
							</h2>
						</div>
						<div className="flex flex-wrap items-center justify-center gap-2">
							{location.map((item, index) => (
								<div
									key={index}
									className="flex items-center gap-2 text-sm bg-[#ffffff17] px-4 py-2 rounded-lg"
								>
									<span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#ffffff42]">
										<IoLocation size={15} />
									</span>
									<span>{item.title}</span>
								</div>
							))}
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
							{englishCourseData.map((item, index) => (
								<div
									key={index}
									className="bg-[#ffffff27] px-4 py-2 rounded-lg flex items-center justify-between gap-2 text-xs cursor-pointer"
								>
									<div className="flex items-center gap-2">
										<img
											src={item.image}
											alt="image"
											className="w-24 my-2 rounded-lg"
										/>
										<div className="space-y-2">
											<p className="text-yellow-500">{item.header}</p>
											<p className="text-base">{item.title}</p>
											<p className="text-gray-400">{item.class}</p>
										</div>
									</div>
									<div>
										<AiOutlineRight />
									</div>
								</div>
							))}
						</div>
						<div className="w-full flex items-center justify-center my-5 gap-14">
							<p className="w-fit flex items-center gap-2 border-b border-transparent hover:border-green-600 text-green-600 cursor-pointer">
								<span>ফ্রি ক্লাস বুক করুন</span>
								<span>
									<GoArrowRight />
								</span>
							</p>
							<p className="w-fit flex items-center gap-2 border-b border-transparent hover:border-green-600 text-green-600 cursor-pointer">
								<span>বিস্তারিত জানুন</span>
								<span>
									<GoArrowRight />
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
