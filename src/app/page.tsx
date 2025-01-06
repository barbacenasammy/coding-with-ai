"use client";

import AboutSection from "@/components/About";
import ContactUsSection from "@/components/Contact";
import HomeSection from "@/components/Home";
import NavigationBar from "@/components/Navigation/NavigationBar";
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
		if (typeof window !== "undefined" && window) {
			window.addEventListener("scroll", handleScroll);
		}
		return () => {
			if (typeof window !== "undefined" && window) {
				window.removeEventListener("scroll", handleScroll);
			}
		};
	}, []);

	return (
		<div className="h-screen overflow-y-scroll ">
			<NavigationBar isHome={isHome} />
			<HomeSection />
			<AboutSection />
			<ContactUsSection />
		</div>
	);
};

export default Page;
