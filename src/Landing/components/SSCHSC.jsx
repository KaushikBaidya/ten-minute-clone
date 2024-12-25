import React from "react";
import { sschschData } from "../../data/data";
import { GiSchoolBag } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SSCHSC = () => {
	return (
		<div className="py-14 md:py-24 font-bangla bg-gray-100 px-5">
			<div className="flex flex-col items-center max-w-[1200px] mx-auto gap-5">
				<div className="max-w-2xl flex flex-col items-center gap-4 md:gap-8 mb-5">
					<p className="text-[#234edb] text-sm md:text-xl font-medium font-poppins flex items-center gap-2">
						<span className="text-[#5176f1]">
							<GiSchoolBag size={25} />
						</span>
						<span>SSC & HSC</span>
					</p>
					<h1 className="text-2xl md:text-5xl text-center font-medium">
						SSC ও HSC শিক্ষার্থীদের জন্য
					</h1>
				</div>
				<div className="relative w-full px-5 hidden md:block">
					<Swiper
						modules={[Navigation]}
						slidesPerView={1}
						spaceBetween={10}
						breakpoints={{
							640: { slidesPerView: 1, spaceBetween: 20 },
							768: { slidesPerView: 2, spaceBetween: 20 },
							1024: { slidesPerView: 4, spaceBetween: 10 },
						}}
						className="mySwiper"
					>
						{sschschData.map((item, index) => (
							<SwiperSlide
								key={index}
								className="border hover:border-green-500 rounded cursor-pointer"
							>
								<div className="w-full rounded overflow-hidden">
									<img
										src={item.image}
										alt="image"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="p-4">
									<p className="text-lg font-medium py-2">
										{item.title.slice(0, 40)}...
									</p>
									<p className="text-lg font-medium text-green-600">
										৳ {item.price}
									</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="md:hidden space-y-2">
					{sschschData.map((item, index) => (
						<div
							key={index}
							className="border hover:border-green-500 rounded cursor-pointer grid grid-cols-2 gap-2 justify-items-center p-2"
						>
							<div className="h-24 rounded overflow-hidden">
								<img src={item.image} alt="image" className="w-full h-full" />
							</div>
							<div className="p-2 text-sm">
								<p className="font-medium py-2">{item.title.slice(0, 40)}...</p>
								<p className="font-medium text-green-600">৳ {item.price}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SSCHSC;
