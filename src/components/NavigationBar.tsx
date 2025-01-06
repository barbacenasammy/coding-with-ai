import React from "react";

interface NavigationBarProps {
	isHome: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ isHome }) => {
	return (
		<header
			className={`${
				isHome ? "fixed top-0 left-0 w-full" : "relative"
			} bg-gray-800 text-white p-4 md:p-6 lg:p-8 mb-4 flex z-50  justify-center items-center`}>
			<nav className="flex justify-evenly w-full max-w-[650px]">
				<ul className="flex items-center justify-evenly w-full">
					<li className="mr-4">
						<a href="#home" className="text-white hover:text-gray-300">
							Home
						</a>
					</li>
					<li className="mr-4">
						<a href="#about" className="text-white hover:text-gray-300">
							About
						</a>
					</li>
					<li>
						<a href="#contact-us" className="text-white hover:text-gray-300">
							Contact Us
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default NavigationBar;
