import React from "react";

interface NavigationBarProps {
	isHome: boolean;
}
const Navigations = [
	{ label: "Home", href: "#home" },
	{ label: "About", href: "#about" },
	{ label: "Contact", href: "#contact-us" },
];

const NavigationBar: React.FC<NavigationBarProps> = ({ isHome }) => {
	return (
		<header
			className={`${
				isHome ? "fixed top-0 left-0 w-full" : "relative"
			} bg-gray-800 text-white p-4 md:p-6 lg:p-8 mb-4 flex z-50  justify-center items-center`}>
			<nav className="flex justify-evenly w-full max-w-[650px]">
				<ul className="flex items-center justify-evenly w-full">
					{Navigations.map((nav, index) => (
						<li key={index} className="mr-4">
							<a href={nav.href} className="text-white hover:text-gray-300">
								{nav.label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default NavigationBar;
