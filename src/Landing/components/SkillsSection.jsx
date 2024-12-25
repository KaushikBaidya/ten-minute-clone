import React from "react";
import { logoData } from "../../data/data";
import { AiFillCheckCircle } from "react-icons/ai";
import SkillSlider from "./skillComponents/SkillSlider";
import CourseSlider from "./skillComponents/courseSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const SkillsSection = () => {
	return (
		<div className="py-10 md:py-20 font-bangla bg-black text-white">
			<div className="flex flex-col items-center max-w-[1200px] mx-auto gap-3 md:gap-5 px-3">
				<div className="max-w-2xl flex flex-col items-center gap-3 md:gap-5">
					<p className="text-sm md:text-xl flex items-center gap-2">
						<span className="">
							<img src="/images/rocket.png" alt="" />
						</span>
						<span className="">স্কিলস</span>
					</p>
					<h1 className="text-2xl md:text-[40px] text-center font-medium">
						দেশসেরা স্কিল ডেভেলপমেন্ট প্লাটফর্ম
					</h1>
					<div className="flex flex-wrap items-center justify-center gap-5 text-sm md:text-lg text-gray-400">
						<div className="flex items-center gap-2">
							<AiFillCheckCircle size={25} className="text-[#6888f1]" />
							<p>দেশসেরা শিক্ষক</p>
						</div>
						<div className="flex items-center gap-2">
							<AiFillCheckCircle size={25} className="text-[#6888f1]" />
							<p>৫ লাখ+শিক্ষার্থী</p>
						</div>
						<div className="flex items-center gap-2">
							<AiFillCheckCircle size={25} className="text-[#6888f1]" />
							<p>৭০+ অনলাইন কোর্স</p>
						</div>
					</div>
				</div>

				<SkillSlider />

				<CourseSlider />

				<div className="flex items-center justify-center font-bangla">
					<button className="bg-green-500 hover:bg-green-600 text-white py-3 px-5 rounded">
						সকল কোর্স
					</button>
				</div>

				<div className="w-full bg-[#121220] rounded-xl mt-10 pb-10">
					<h3 className="font-medium text-lg md:text-xl text-center py-10">
						দেশের সেরা প্রতিষ্ঠানগুলো নিচ্ছে আমাদের কর্পোরেট স্কিলস ডেভেলপমেন্ট
						প্রোগ্রাম
					</h3>
					<div className="relative w-full px-5">
						<Swiper
							slidesPerView={1}
							spaceBetween={10}
							breakpoints={{
								320: { slidesPerView: 3, spaceBetween: 20 },
								768: { slidesPerView: 6, spaceBetween: 20 },
								1024: { slidesPerView: 6, spaceBetween: 20 },
							}}
							className="mySwiper"
						>
							{logoData.map((item, index) => (
								<SwiperSlide
									key={index}
									className="w-full flex items-center justify-center"
								>
									<img src={item.image} alt="" className="h-8 md:h-12" />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<p className="font-normal text-center mt-5 leading-4">
						আরও জানতে{" "}
						<span className="text-green-500 underline cursor-pointer">
							ইমেইল করুন
						</span>{" "}
						অথবা{" "}
						<span className="text-green-500 underline cursor-pointer">
							কল করুন
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SkillsSection;
