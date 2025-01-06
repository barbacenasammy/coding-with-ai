import AboutCodeium from "./AboutCodeium";
import AboutMe from "./AboutMe";

const AboutSection = () => {
	return (
		<section
			id="about"
			className="h-auto md:h-screen bg-white flex flex-col items-center justify-center mt-10 lg:pt-16">
			<div className=" max-w-5xl relative mx-auto p-4 gap-5 md:gap-2 md:p-6 lg:p-8 flex flex-col md:flex-row h-full">
				<AboutCodeium />
				<AboutMe />
			</div>
		</section>
	);
};

export default AboutSection;
