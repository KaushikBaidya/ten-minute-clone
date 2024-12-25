import React, { useId } from "react";
import { GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle,
} from "react-icons/io";
import { liveCourseData } from "../../../data/data";

const HeroCourse = () => {
	const rawUniqueId = useId();
	const sanitizedUniqueId = rawUniqueId.replace(/[^a-zA-Z0-9-_]/g, "");
	return (
		<div className="w-full bg-gradient-to-b from-[#463118] to-[#231A10] relative p-5 rounded-3xl border-[1px] border-yellow-600">
			<div className="absolute -top-6 left-[32%] md:left-[37%] border-[1px] bg-[#7e4f19] border-yellow-600 py-2 px-5 text-sm text-yellow-500 rounded-full">
				অনলাইন কোর্স
			</div>
			<h2 className="text-center text-lg md:text-2xl font-bangla px-5 lg:px-28 py-5">
				পছন্দের স্কিল শিখুন, নিজেকে সেরা করে গড়ে তুলুন
			</h2>
			<div className="relative w-full px-5">
				<div
					className="hidden lg:block absolute top-1/2 -left-5 transform -translate-y-1/2 z-10 cursor-pointer text-2xl text-gray-700 hover:text-black"
					id={`prevButton-${sanitizedUniqueId}`}
				>
					<IoIosArrowDropleftCircle size={35} />
				</div>
				<div
					className="hidden lg:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10 cursor-pointer text-2xl text-gray-700 hover:text-black"
					id={`nextButton-${sanitizedUniqueId}`}
				>
					<IoIosArrowDroprightCircle size={35} />
				</div>
				<Swiper
					modules={[Navigation]}
					navigation={{
						nextEl: `#nextButton-${sanitizedUniqueId}`,
						prevEl: `#prevButton-${sanitizedUniqueId}`,
					}}
					slidesPerView={1}
					spaceBetween={10}
					breakpoints={{
						320: { slidesPerView: 4, spaceBetween: 20 },
						768: { slidesPerView: 3, spaceBetween: 20 },
						1024: { slidesPerView: 5, spaceBetween: 20 },
					}}
					className="mySwiper"
				>
					{liveCourseData.map((item, index) => (
						<SwiperSlide key={index} className="w-full overflow-hidden">
							<img
								src={item.image}
								alt="image"
								className="w-28 my-2 rounded-lg"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="w-full flex items-center justify-center my-5 text-sm">
				<p className="w-fit flex items-center gap-2 border-b border-transparent hover:border-green-600 text-green-600 cursor-pointer">
					<span>৩০+ ফ্রি কোর্সে এনরোল হতে ক্লিক করুন</span>
					<span>
						<GoArrowRight />
					</span>
				</p>
			</div>
		</div>
	);
};

export default HeroCourse;
