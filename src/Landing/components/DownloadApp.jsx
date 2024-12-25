import React from "react";

const DownloadApp = () => {
	return (
		<div className="py-20 px-5">
			<div className="max-w-[1200px] mx-auto bg-black text-white font-bangla rounded-2xl">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
					<div className="px-10 h-full flex flex-col justify-center pt-5">
						<h1 className="text-xl lg:text-4xl font-semibold">
							ডাউনলোড করুন আমাদের মোবাইল অ্যাপ, শেখা শুরু করুন আজ থেকেই
						</h1>
						<div className="py-5 flex items-center gap-4">
							<img
								src="/images/googlePlay.svg"
								alt=""
								className="cursor-pointer w-1/2"
							/>
							<img
								src="/images/appStore.svg"
								alt=""
								className="cursor-pointer w-1/2"
							/>
						</div>
					</div>
					<img src="/images/app.jpeg" alt="" />
				</div>
			</div>
		</div>
	);
};

export default DownloadApp;
