import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white-400 text-black py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Section - Logo and Company Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">NoteSwap</h2>
                        <p className="text-black mb-4">Your ultimate destination for knowledge sharing!</p>
                        {/* Add company address, phone, etc. if needed */}
                    </div>

                    {/* Middle Section - Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <nav>
                            <ul className="space-y-2">
                                <li><Link to="/" className="text-black hover:text-white">Home</Link></li>
                                <li><Link to="/notes" className="text-black hover:text-white">Notes</Link></li>
                                <li><Link to="/about" className="text-black hover:text-white">About</Link></li>
                                <li><Link to="/contact" className="text-black hover:text-white">Contact</Link></li>
                                {/* Add more links as needed */}
                            </ul>
                        </nav>
                    </div>

                    {/* Right Section - Social Media Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#" className="text-black-300 hover:text-white">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 22V12h4l.5-4h-4V7.05c0-1.19.56-3.54 3.54-3.54h1.91V.08C17.45.03 15.86 0 13.92 0 10.64 0 8.81 1.84 8.81 5.28V8H5v4h3.81v10h4.38z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-black-300 hover:text-white">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M22.46 4.93c-.84.37-1.73.62-2.67.74.96-.57 1.7-1.47 2.05-2.54-.9.53-1.9.91-2.96 1.12-.85-.9-2.06-1.46-3.4-1.46-2.58 0-4.67 2.09-4.67 4.67 0 .36.04.71.12 1.05-3.88-.2-7.31-2.05-9.6-4.86-.4.68-.63 1.48-.63 2.33 0 1.61.82 3.03 2.06 3.86-.76-.02-1.47-.23-2.1-.57v.06c0 2.24 1.59 4.1 3.7 4.53-.4.1-.82.16-1.26.16-.3 0-.6-.03-.89-.08.6 1.85 2.33 3.2 4.39 3.24-1.6 1.25-3.63 2-5.83 2-.38 0-.76-.02-1.13-.07 2.08 1.35 4.54 2.13 7.19 2.13 8.63 0 13.36-7.14 13.36-13.36v-.6c.92-.65 1.72-1.46 2.35-2.39z" />
                                    </svg>
                                </a>
                            </li>
                            {/* Add more social media icons and links */}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section - Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} NoteSwap. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
