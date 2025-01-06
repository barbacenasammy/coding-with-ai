const HomeSection = () => {
	return (
		<section
			id="home"
			className="h-screen bg-white flex flex-col items-center justify-center">
			<div className="container max-w-5xl mx-auto p-6 md:p-6 lg:p-8 text-center ">
				<h1 className="text-5xl font-bold text-center mb-4">Codeium</h1>
				<p className="text-lg text-center mb-8">Your partner in coding</p>

				<p className="text-lg text-center mb-2">
					Codeium is an AI-powered coding assistant that helps developers write
					better code, faster.
				</p>
				<p className="text-lg text-center mb-8">
					With Codeium, you can focus on what matters most - building amazing
					software.
				</p>
				<button
					onClick={() => window.open("https://codeium.com", "_blank")}
					className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="button">
					Get Started
				</button>
			</div>
		</section>
	);
};

export default HomeSection;
