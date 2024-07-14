import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [faqOpen, setFaqOpen] = useState(null); // State to track open FAQ item

    const toggleFaq = (index) => {
        if (faqOpen === index) {
            setFaqOpen(null); // Close the FAQ if clicked again
        } else {
            setFaqOpen(index); // Open the clicked FAQ
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        // Reset form after submission (if needed)
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    const faqs = [
        {
            question: "Question 1?",
            answer: "Answer to question 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.",
        },
        {
            question: "Question 2?",
            answer: "Answer to question 2. Aliquam erat volutpat. Mauris non lorem eu dolor hendrerit dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue.",
        },
        {
            question: "Question 3?",
            answer: "Answer to question 3. Nam pulvinar vitae neque et porttitor. Sed ultrices lorem ac sem viverra dictum. Praesent eu risus hendrerit ligula tempus pretium. Cras tempor, nulla ac placerat iaculis, mi est adipiscing lacus, ac tempus dui.",
        },
    ];

    return (
        <div className="max-w-8xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
            {/* FAQ Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <div key={index} className="mb-4">
                        <button
                            className="flex items-center justify-between w-full bg-gray-200 p-4 rounded-lg focus:outline-none"
                            onClick={() => toggleFaq(index)}
                        >
                            <span className="text-lg font-semibold">{faq.question}</span>
                            <svg
                                className={`h-5 w-5 transform transition-transform duration-300 ${faqOpen === index ? 'rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        {faqOpen === index && (
                            <div className="mt-2 px-4 py-2 bg-gray-100 rounded-lg">
                                <p className="text-gray-700">{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </section>

            {/* Company Owners Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">John Doe</h3>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat ultricies justo eu dignissim.</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Jane Smith</h3>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat ultricies justo eu dignissim.</p>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    {/* Message */}
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        ></textarea>
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </section>
        </div>
    );
}

export default ContactUs;
