import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-500 p-4 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <a href="/" className="text-white text-xl font-bold">Your Platform Name</a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <a href="/" className="text-white hover:text-gray-200">Home</a>
                            <a href="/notes" className="text-white hover:text-gray-200">Notes</a>
                            <a href="/about" className="text-white hover:text-gray-200">About</a>
                            <a href="/contact" className="text-white hover:text-gray-200">Contact</a>
                            {/* Conditional Dashboard link */}
                            {isAuthenticated && (
                                <Link to="/dashboard" className="text-white hover:text-gray-200">Dashboard</Link>
                            )}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button className="text-white focus:outline-none" onClick={toggleMenu}>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile menu */}
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-2 transition-all duration-300 ease-in-out`}>
                    <div className="fixed inset-0 bg-blue-500 bg-opacity-75 z-50">
                        <div className="flex justify-end p-4">
                            <button className="text-white focus:outline-none" onClick={toggleMenu}>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col items-start py-2 px-4">
                            <a href="/" className="text-white hover:text-gray-200 py-2">Home</a>
                            <a href="/notes" className="text-white hover:text-gray-200 py-2">Notes</a>
                            <a href="/about" className="text-white hover:text-gray-200 py-2">About</a>
                            <a href="/contact" className="text-white hover:text-gray-200 py-2">Contact</a>
                            {/* Conditional Dashboard link */}
                            {isAuthenticated && (
                                <Link to="/dashboard" className="text-white hover:text-gray-200 py-2">Dashboard</Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
