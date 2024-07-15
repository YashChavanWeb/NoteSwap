import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/noteswap.png'; // Adjust the path based on your actual logo location

const Navbar = ({ isAuthenticated }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-500 p-4 sticky top-0 z-50">
            <div className="max-w-8xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo and Title */}
                    <div className="flex items-center"> {/* Updated here */}
                        <Link to="/">
                            {/* <img src={logo} alt="NoteSwap Logo" className="h-8 mr-2" /> Adjust size and margin as needed */}
                            <span className="text-white text-xl font-bold">NoteSwap</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <Link to="/" className="text-white hover:text-gray-200">Home</Link>
                            <Link to="/notes" className="text-white hover:text-gray-200">Notes</Link>
                            <Link to="/about" className="text-white hover:text-gray-200">About</Link>
                            <Link to="/contact" className="text-white hover:text-gray-200">Contact Us</Link>
                            {/* Conditional Dashboard link */}
                            {isAuthenticated && (
                                <Link to="/dashboard" className="text-white hover:text-gray-200">Dashboard</Link>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
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

                {/* Mobile Menu */}
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
                            <Link to="/" className="text-white hover:text-gray-200 py-2">Home</Link>
                            <Link to="/notes" className="text-white hover:text-gray-200 py-2">Notes</Link>
                            <Link to="/about" className="text-white hover:text-gray-200 py-2">About</Link>
                            <Link to="/contact" className="text-white hover:text-gray-200 py-2">Contact</Link>
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
