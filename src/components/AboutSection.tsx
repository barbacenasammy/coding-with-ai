const AboutSection = () => {
	return (
		<section
			id="about"
			className="h-auto md:h-screen bg-white flex flex-col items-center justify-center">
			<div className="container max-w-5xl relative mx-auto p-4 gap-5 md:gap-2 md:p-6 lg:p-8 flex flex-col md:flex-row h-full">
				<div className="md:w-1/2 max-h-[400px] h-full overflow-y-auto p-4 mt-10 md:mt-0">
					<h2 className="text-3xl font-bold mb-4">About Codeium</h2>
					<p className="text-lg mb-8 text-justify w-full">
						<span className="text-justify w-full">
							Codeium is a cutting-edge AI-powered code completion tool designed
							to enhance developer productivity. By leveraging advanced machine
							learning models, it provides intelligent, context-aware
							suggestions as you write code. Whether you&apos;re working with
							common programming languages like JavaScript, Python, or C++, or
							exploring niche frameworks, Codeium seamlessly integrates with
							your workflow to simplify coding tasks and boost efficiency.
						</span>
						<br />
						<br />
						<span>
							One of Codeium&apos;s standout features is its support for
							multiple IDEs, including Visual Studio Code, IntelliJ, JetBrains,
							and more. Its real-time assistance helps with tasks like
							generating boilerplate code, fixing syntax errors, and even
							optimizing code snippets for better readability and performance.
							Codeium’s free version offers robust functionality, making it an
							accessible choice for developers of all levels—from beginners to
							seasoned professionals.{" "}
						</span>
						<br />
						<br />
						<span>
							Designed with collaboration and adaptability in mind, Codeium
							continuously learns from user input to refine its suggestions,
							ensuring relevance and accuracy. It&apos;s an ideal companion for
							anyone looking to streamline development, reduce repetitive tasks,
							and focus on building innovative solutions.
						</span>
					</p>
				</div>
				<div className="md:w-1/2 max-h-[400px] h-full overflow-y-auto p-4 ">
					<h2 className="text-3xl font-bold mb-4">About Me</h2>
					<p className="text-lg mb-8 text-justify w-full">
						<span>
							Hi, I&apos;m <b>Sam</b>—a passionate and driven developer with a
							strong foundation in full-stack development. I specialize in
							creating dynamic, user-friendly interfaces using React/Next.js and
							building scalable, reliable backend systems with NestJS. My
							experience with Apollo GraphQL allows me to streamline
							frontend-backend communication, ensuring efficient and seamless
							data retrieval. I thrive in collaborative environments, working
							closely with designers and product managers to deliver
							high-quality projects that enhance user experiences and meet
							business goals.
						</span>
						<br />
						<br />
						<span>
							I’m always eager to learn new technologies and stay at the
							forefront of innovation. Leveraging AI, I focus on crafting fast,
							efficient, clean, and maintainable code that drives impactful
							applications. Whether it&apos;s tackling a new challenge or
							optimizing existing systems, I approach every project with
							enthusiasm and a commitment to excellence.
						</span>
						<br />
						<br />
						<span>
							My goal is to continuously grow as a developer, applying modern
							solutions to solve real-world problems while contributing to the
							success of the team and the satisfaction of users. Let&apos;s
							build something amazing together!
						</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
