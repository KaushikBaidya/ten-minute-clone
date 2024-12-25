import React from "react";

const CountUp = () => {
	return (
		<div className="bg-gradient-to-r from-[#2E0B12] via-[#882635] to-[#2E0B12] py-16 font-bangla text-white">
			<div className="flex flex-col items-center max-w-[1200px] mx-auto gap-5">
				<div className="text-center space-y-4">
					<h2 className="text-2xl md:text-[40px] lg:text-5xl font-medium px-10">
						২০২২-২৪ শিক্ষাবর্ষে টেন মিনিট স্কুলের এডমিশন সাফল্য
					</h2>
					<p className="text-sm md:text-xl">
						তোমাদের সাফল্যই আমাদের অনুপ্রেরণা
					</p>
				</div>
				<div className="flex flex-wrap gap-5 mt-4">
					{/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-4"> */}
					<div className="bg-[#2e0b1273] backdrop-blur-2xl text-2xl lg:text-5xl font-semibold p-10 rounded-lg text-center space-y-4">
						<h3 className="font-poppins">১৫,৫৪৮</h3>
						<p className="text-sm md:text-xl">মোট শিক্ষার্থী</p>
					</div>
					<div className="bg-[#2e0b1273] backdrop-blur-2xl text-2xl lg:text-5xl font-semibold p-10 rounded-lg text-center space-y-4">
						<h3 className="font-poppins">১,৪০০+</h3>
						<p className="text-sm md:text-xl">চান্সপ্রাপ্ত শিক্ষার্থী</p>
					</div>
					<div className="bg-[#2e0b1273] backdrop-blur-2xl text-2xl lg:text-5xl font-semibold p-10 rounded-lg text-center space-y-4 flex-grow">
						<h3 className="font-poppins">৩৪</h3>
						<p className="text-sm md:text-xl">
							টপ স্কুলে চান্সপ্রাপ্ত শিক্ষার্থী
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountUp;
