"use client";
import AboutSection from "@/components/AboutSection";
import ContactUsSection from "@/components/ContactUsSection";
import HomeSection from "@/components/HomeSection";
import NavigationBar from "@/components/NavigationBar";
import { useEffect, useState } from "react";

const Page = () => {
	const [isHome, setIsHome] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const homeSection = document.getElementById("home");
			const aboutSection = document.getElementById("about");
			const contactUsSection = document.getElementById("contact-us");
			if (!homeSection || !aboutSection || !contactUsSection) {
				return;
			}
			const homeSectionTop = homeSection.offsetTop;
			const aboutSectionTop = aboutSection.offsetTop;

			const scrollPosition = window.scrollY;

			if (
				scrollPosition >= homeSectionTop &&
				scrollPosition < aboutSectionTop
			) {
				setIsHome(true);
			} else {
				setIsHome(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="h-screen overflow-y-scroll">
			<NavigationBar isHome={isHome} />
			<HomeSection />
			<AboutSection />
			<ContactUsSection />
		</div>
	);
};

export default Page;
