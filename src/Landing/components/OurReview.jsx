import React, { useId } from "react";
import { reviewData } from "../../data/data";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle,
} from "react-icons/io";

const OurReview = () => {
	const rawUniqueId = useId();
	const sanitizedUniqueId = rawUniqueId.replace(/[^a-zA-Z0-9-_]/g, "");
	return (
		<div className="py-10 md:py-20 font-bangla px-2 md:px-5">
			<div className="flex flex-col items-center max-w-[1200px] mx-auto gap-5">
				<div className="max-w-2xl flex flex-col items-center gap-8">
					<h1 className="text-2xl md:text-[40px] text-center font-semibold">
						কেন আমরাই শিক্ষার্থী ও অভিভাবকগণের প্রথম পছন্দ?
					</h1>
				</div>
				<div className="relative w-full md:px-5">
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
							320: { slidesPerView: 1, spaceBetween: 10 },
							768: { slidesPerView: 2, spaceBetween: 20 },
							1024: { slidesPerView: 4, spaceBetween: 10 },
						}}
						className="mySwiper"
					>
						{reviewData.map((item, index) => (
							<SwiperSlide
								key={index}
								className="w-[300px] text-sm text-gray-800 m-2 px-2 pt-5 border rounded-lg relative mt-10"
							>
								<div className="absolute -top-5 left-5 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
									<BiSolidQuoteAltLeft size={20} className="text-red-600" />
								</div>
								<p className="h-[180px] text-base pt-4">{item.description}</p>
								<p className="font-medium font-poppins">{item.reviewer}</p>
								<p className="text-gray-500 text-xs font-poppins pb-2">
									{item.designation}
								</p>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default OurReview;
