import ContactForm from "./ContactForm";

const ContactUsSection = () => {
	return (
		<section
			id="contact-us"
			className="h-screen bg-white p-4 md:p-6 lg:p-0 flex flex-col items-center justify-center ">
			<div className="flex flex-col gap-4 mb-2 md:mb-8 text-center">
				<h1 className="text-3xl font-bold">Get in Touch</h1>
				<p className="text-lg">I would love to hear from you!</p>
			</div>
			<ContactForm />
		</section>
	);
};

export default ContactUsSection;
