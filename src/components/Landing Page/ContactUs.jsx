import React, { useState } from 'react';
import { db } from '../../../firebase'; // Ensure db is imported correctly

import { getDatabase, ref, push } from 'firebase/database';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Ensure all fields are filled
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields');
            return;
        }

        // Store the form data under 'ContactUs' node in Firebase using 'db'
        const contactUsRef = ref(db, 'ContactUs'); // Use 'ref' from modular SDK
        push(contactUsRef, formData)
            .then(() => {
                console.log('Form data submitted successfully');
                setFormSubmitted(true); // Update state to show success message
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error('Error submitting form:', error);
                alert('An error occurred while submitting the form. Please try again later.');
            });
    };

    // FAQ State and Toggle Functionality
    const [faqOpen, setFaqOpen] = useState(null);

    const toggleFaq = (index) => {
        if (faqOpen === index) {
            setFaqOpen(null); // Close the FAQ if clicked again
        } else {
            setFaqOpen(index); // Open the clicked FAQ
        }
    };

    // FAQ Data
    // FAQ Data
    const faqs = [
        {
            question: "When do we receive the payment of the Notes?",
            answer: "You will receive the payment for your notes shortly after the buyer completes the purchase. Payments are typically processed within 1-3 business days, depending on the payment method chosen.",
        },
        {
            question: "Are the notes authentic?",
            answer: "Yes, all notes available on our website are authentic and provided by students who have previously taken the courses. We encourage our users to verify the quality and relevance of the notes before making a purchase.",
        },
        {
            question: "Which subject notes are available on the website?",
            answer: "We offer a wide range of subject notes covering various disciplines, including but not limited to sciences, humanities, business, and engineering. You can explore our catalog to find notes that suit your academic needs.",
        },
    ];

    return (
        <div className="max-w-8xl mx-auto mt-1 p-6 bg-white shadow-lg rounded-lg">
            {/* FAQ Section */}
            <section className="mb-10">
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

            {/* Team Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Yash Chavan</h3>
                        <p className="text-gray-700">Email: yashchavan4628@gmail.com</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Advait Dongre</h3>
                        <p className="text-gray-700">Phone: 8830970886</p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
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
                            value={formData.name}
                            onChange={handleChange}
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
                            value={formData.email}
                            onChange={handleChange}
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
                            value={formData.message}
                            onChange={handleChange}
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
                {formSubmitted && (
                    <p className="mt-4 text-green-600 font-semibold">Your message has been submitted successfully!</p>
                )}
            </section>
        </div>
    );
};

export default ContactUs;
