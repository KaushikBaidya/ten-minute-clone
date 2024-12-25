import React from "react";
import { courseData } from "../../../data/data";
import { GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import HeroCourse from "./heroCourse";

const HeroComponent = () => {
	return (
		<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 space-y-5 justify-items-center my-5">
			<div className="w-full bg-gradient-to-b from-[#13224A] to-[#0E1132] relative p-2 lg:p-5 rounded-3xl border-[1px] border-blue-700 mt-5">
				<div className="absolute -top-6 left-[32%] md:left-[37%] border-[1px] bg-[#15275D] border-blue-700 py-2 px-5 text-sm text-blue-500 rounded-full">
					অনলাইন কোর্স
				</div>
				<h2 className="text-center text-lg md:text-2xl font-bangla px-5 lg:px-28 py-5">
					অনলাইন ব্যাচ ২০২৫ এর সকল কোর্সে ভর্তি চলছে!
				</h2>
				<div className="relative w-full px-2 lg:px-5">
					<Swiper
						slidesPerView={1}
						spaceBetween={10}
						breakpoints={{
							320: { slidesPerView: 2, spaceBetween: 5 },
							768: { slidesPerView: 3, spaceBetween: 20 },
							1024: { slidesPerView: 4, spaceBetween: 20 },
						}}
						className="mySwiper"
					>
						{courseData.map((item, index) => (
							<SwiperSlide
								key={index}
								className="w-full bg-[#ffffff21] backdrop-blur-sm rounded-lg p-2"
							>
								<div className="w-full flex justify-center">
									<img
										src={item.image}
										alt={item.title}
										className="w-10 lg:w-12 my-2"
									/>
								</div>
								<p className="text-xs lg:text-sm text-center">{item.title}</p>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="w-full flex items-center justify-center my-5 text-sm">
					<p className="w-fit flex items-center gap-2 border-b border-transparent hover:border-green-600 text-green-600 cursor-pointer">
						<span>ফ্রি ক্লাস বুক করুন</span>
						<span>
							<GoArrowRight />
						</span>
					</p>
				</div>
			</div>
			<HeroCourse />
		</div>
	);
};

export default HeroComponent;
