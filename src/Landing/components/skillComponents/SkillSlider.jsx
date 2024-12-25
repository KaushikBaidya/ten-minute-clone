import React, { useId } from "react";
import { skillsData } from "../../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle,
} from "react-icons/io";

const SkillSlider = () => {
	const rawUniqueId = useId();
	const sanitizedUniqueId = rawUniqueId.replace(/[^a-zA-Z0-9-_]/g, "");
	return (
		<div className="relative w-full px-0 md:px-5 py-10">
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
					320: { slidesPerView: 3, spaceBetween: 20 },
					768: { slidesPerView: 5, spaceBetween: 20 },
					1024: { slidesPerView: 5, spaceBetween: 10 },
				}}
				className="mySwiper"
			>
				{skillsData.map((item, index) => (
					<SwiperSlide
						key={index}
						className="w-full flex flex-col items-center bg-gray-800 p-5 rounded-lg border border-transparent hover:border-green-400 hover:bg-gray-600 gap-4 cursor-pointer"
					>
						<p className="text-sm h-10">{item.title}</p>
						<p className="text-xs lg:text-lg text-gray-400">
							{item.courses} courses
						</p>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default SkillSlider;
