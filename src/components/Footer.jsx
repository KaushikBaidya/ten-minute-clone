import React from "react";
import { socialIconsData } from "../data/data";

const Footer = () => {
	return (
		<div className="max-w-[1200px] mx-auto font-bangla rounded-2xl pt-16 text-gray-600 px-2 lg:px-0">
			<div className="w-full flex flex-wrap md:flex-nowrap justify-between gap-2">
				<div className="w-full md:w-fit flex flex-col gap-4 items-center md:items-start justify-center md:justify-start text-base lg:text-lg pb-5">
					<img className="w-[120px]" src="/10mslogo-svg.svg" alt="logo" />
					<p className="text-gray-900">ডাউনলোড করুন আমাদের মোবাইল অ্যাপ</p>
					<div className="flex items-center gap-4">
						<img
							className="w-full md:w-24"
							src="/images/googlePlay.svg"
							alt=""
						/>
						<img className="w-full md:w-24" src="/images/appStore.svg" alt="" />
					</div>
				</div>
				<div className="w-fit space-y-2 md:space-y-4 text-sm md:text-base lg:text-lg px-2">
					<h3 className="font-bold text-xl text-gray-900">কোম্পানি</h3>
					<p className="cursor-pointer hover:text-green-600 w-fit">
						ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি
					</p>
					<p className="cursor-pointer hover:text-green-600 w-fit">
						শিক্ষক হিসাবে যোগ দিন
					</p>
					<p className="cursor-pointer hover:text-green-600 w-fit">
						অ্যাফিলিয়েট হিসাবে যোগ দিন
					</p>
					<p className="cursor-pointer hover:text-green-600 w-fit">
						প্রাইভেসি পলিসি
					</p>
					<p className="cursor-pointer hover:text-green-600 w-fit">
						রিফান্ড পলিসি
					</p>
					<p className="cursor-pointer hover:text-green-600 w-fit">
						ব্যবহারকারীর শর্তাবলি
					</p>
				</div>
				<div className="w-fit space-y-2 md:space-y-4 text-sm md:text-base lg:text-lg px-2">
					<h3 className="font-bold text-xl text-gray-900">অন্যান্য</h3>
					<p className="cursor-pointer hover:text-green-600 w-fit">ব্লগ</p>
					<p className="cursor-pointer hover:text-green-600 w-fit">বুক স্টোর</p>
					<p className="cursor-pointer hover:text-green-600 w-fit">
						ফ্রি নোটস ও গাইড
					</p>
					<p className="cursor-pointer hover:text-green-600 w-fit">
						চাকরি প্রস্তুতি কোর্সসমূহ
					</p>
					<p className="cursor-pointer hover:text-green-600 w-fit">
						সার্টিফিকেট ভেরিফাই করুন
					</p>
					<p className="cursor-pointer hover:text-green-600 w-fit">
						ফ্রি ডাউনলোড
					</p>
				</div>
				<div className="hidden md:block w-fit space-y-4 text-base lg:text-lg">
					<h3 className="font-bold text-xl text-gray-900">
						আমাদের যোগাযোগ মাধ্যম
					</h3>
					<p>
						কল করুন: <span className="text-green-600">16910 </span> (24x7)
					</p>
					<p>
						হোয়াটসঅ্যাপ: <span className="text-green-600">+8801896016252</span>{" "}
						(24x7)
					</p>
					<p>
						দেশের বাহির থেকে:{" "}
						<span className="text-green-600">+880 9610916910</span>
					</p>
					<p>
						ইমেইল:{" "}
						<span className="text-green-600">support@10minuteschool.com</span>
					</p>
					<div className="flex items-center justify-start gap-5">
						{socialIconsData.map((item, index) => (
							<div key={index}>
								<img src={item.image} alt="" />
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center">
				<div className="flex md:hidden items-center justify-start gap-5 pt-5 border-t m-5">
					{socialIconsData.map((item, index) => (
						<div key={index}>
							<img src={item.image} alt="" />
						</div>
					))}
				</div>
				<p className="text-sm text-center pt-5 md:pt-10 pb-[5rem] md:pb-5">
					স্বত্ব © ২০১৫ - ২০২৪ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত
				</p>
			</div>
		</div>
	);
};

export default Footer;
