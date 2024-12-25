import React, { useId } from "react";
import { skillCourseData } from "../../data/data";
import { IoIosArrowForward, IoIosSchool } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowRight } from "react-icons/go";
import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle,
} from "react-icons/io";

const VarsityAdmission = () => {
	const rawUniqueId = useId();
	const sanitizedUniqueId = rawUniqueId.replace(/[^a-zA-Z0-9-_]/g, "");
	return (
		<div className="py-10 md:py-20 font-bangla bg-[#F4F7FD]">
			<div className="flex flex-col items-center max-w-[1200px] mx-auto gap-5">
				<div className="max-w-2xl flex flex-col items-center gap-4 md:gap-8 px-4">
					<p className="text-[#8223db] text-sm md:text-lg font-medium font-poppins flex items-center gap-2">
						<span className="text-[#a451f1]">
							<IoIosSchool size={25} />
						</span>
						<span>ভর্তি পরীক্ষা</span>
					</p>
					<h1 className="text-2xl md:text-[40px] text-center font-medium">
						স্বপ্নের ভার্সিটির সম্পূর্ণ প্রস্তুতি
					</h1>
					<p className="text-gray-500 text-center text-sm md:text-lg">
						ইঞ্জিনিয়ারিং-মেডিকেল কিংবা ভার্সিটি-গুচ্ছ - লক্ষ্য যাই হোক, অর্জনের
						পথ এখানেই।
					</p>
				</div>
				<div className="relative w-full px-0 md:px-5 py-5">
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
							320: { slidesPerView: 2, spaceBetween: 10 },
							768: { slidesPerView: 3, spaceBetween: 20 },
							1024: { slidesPerView: 4, spaceBetween: 10 },
						}}
						className="mySwiper"
					>
						{skillCourseData.map((item, index) => (
							<SwiperSlide
								key={index}
								className="flex flex-col justify-between bg-white h-full border rounded-md"
							>
								<div className="flex-grow">
									<div className="w-full rounded overflow-hidden">
										<img
											src={item.image}
											alt="image"
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="gap-4 p-2 md:p-5">
										<p className="w-full h-14 text-sm md:text-xl font-semibold ">
											{item.title}
										</p>
										<p className="text-sm font-medium text-gray-600">
											{item.instructor}
										</p>
									</div>
								</div>
								<p className="flex items-center gap-2 text-sm text-green-500 px-5 pb-5 mt-auto">
									<span>বিস্তারিত</span>
									<span>
										<GoArrowRight />
									</span>
								</p>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="flex items-center justify-center font-bangla md:mt-10">
					<button className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-5 rounded">
						<span>সকল কোর্স</span> <IoIosArrowForward size={20} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default VarsityAdmission;
