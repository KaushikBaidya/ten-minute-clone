import React from "react";
import AdvBanner from "./AdvBanner";
import Hero from "./Hero";
import VideoLibrary from "./VideoLibrary";
import SSCHSC from "./SSCHSC";
import SkillsSection from "./SkillsSection";
import VarsityAdmission from "./VarsityAdmission";
import JobPreparation from "./JobPreparation";
import OurReview from "./OurReview";
import CountUp from "./CountUp";
import DownloadApp from "./DownloadApp";

const Landing = () => {
	return (
		<>
			<div className="pt-28 md:pt-14 overflow-hidden">
				<AdvBanner />
			</div>
			<Hero />
			<VideoLibrary />
			<SSCHSC />
			<SkillsSection />
			<VarsityAdmission />
			<JobPreparation />
			<OurReview />
			<CountUp />
			<DownloadApp />
		</>
	);
};

export default Landing;
