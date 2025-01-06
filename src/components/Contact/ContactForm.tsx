import React, { useState } from "react";

interface ContactFormState {
	name: string;
	email: string;
	message: string;
}

const DefaultContactFormState: ContactFormState = {
	name: "",
	email: "",
	message: "",
};

const ContactForm = () => {
	const [contactForm, setContactForm] = useState<ContactFormState>(
		DefaultContactFormState
	);

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
			setContactForm(DefaultContactFormState);
		} catch (error) {
			console.error(error);
			// Handle error response
		}
	};

	return (
		<form onSubmit={handleSubmit} className="w-full max-w-xl mt-4 px-2 md:px-0">
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
	);
};

export default ContactForm;
