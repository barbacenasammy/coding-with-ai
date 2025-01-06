import React, { useState } from "react";

interface ContactFormState {
	name: string;
	email: string;
	message: string;
}

const ContactUsSection = () => {
	const [contactForm, setContactForm] = useState<ContactFormState>({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { id, value } = event.target;
		setContactForm({ ...contactForm, [id]: value });
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			// Add your contact form logic here
			// Handle success response
		} catch (error) {
			console.error(error);
			// Handle error response
		}
	};

	return (
		<section
			id="contact-us"
			className="h-screen bg-white p-4 md:p-6 lg:p-0 flex flex-col items-center justify-center ">
			<div className="flex flex-col gap-4 mb-2 md:mb-8 text-center">
				<h1 className="text-3xl font-bold">Get in Touch</h1>
				<p className="text-lg">I would love to hear from you!</p>
			</div>
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-xl mt-4 px-2 md:px-0">
				<div className="flex flex-wrap -mx-3 mb-2">
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="name">
							Name
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="name"
							type="text"
							value={contactForm.name}
							onChange={handleChange}
							placeholder="John Doe"
						/>
					</div>
					<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="email">
							Email
						</label>
						<input
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="email"
							type="email"
							value={contactForm.email}
							onChange={handleChange}
							placeholder="john.doe@example.com"
						/>
					</div>
				</div>
				<div className="flex flex-wrap -mx-3 mb-2">
					<div className="w-full px-3 mb-6 md:mb-0">
						<label
							className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
							htmlFor="message">
							Message
						</label>
						<textarea
							className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							id="message"
							value={contactForm.message}
							onChange={handleChange}
							placeholder="Your message here..."
							rows={5}
						/>
					</div>
				</div>
				<div className="flex justify-center mt-2 md:mt-6">
					<button
						className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit">
						Send Message
					</button>
				</div>
			</form>
		</section>
	);
};

export default ContactUsSection;
