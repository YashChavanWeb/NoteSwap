import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Card = ({ subject, thumbnail, category }) => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleBuyClick = () => {
        // Navigate to the dashboard or any desired route
        navigate('/dashboard'); // Replace '/dashboard' with your actual dashboard route
    };

    return (
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 transform hover:scale-105">
            {/* Image with hover effect */}
            <div className="relative">
                <img
                    src={thumbnail}
                    alt={subject}
                    className="w-full h-60 object-cover transition duration-300 transform hover:scale-105"
                />
                {/* Overlay for hover effect */}
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300 flex items-center justify-center">
                </div>
                <button
                    onClick={handleBuyClick} // Handle click on Buy button
                    className="text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded-lg focus:outline-none transition duration-300"
                    style={{ backdropFilter: 'blur(10px)' }} // Apply backdrop filter when hovered
                >
                    Buy Now
                </button>
            </div>
            {/* Content section */}
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">{subject}</h3>
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-md">{category}</span>
                </div>
                {/* Additional content details */}
                <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-10a1 1 0 0 0-.707.293l-3 3a1 1 0 1 0 1.414 1.414L10 8.414V14a1 1 0 0 0 2 0V8.414l1.293 1.293a1 1 0 1 0 1.414-1.414l-3-3A1 1 0 0 0 10 6z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="text-gray-500 text-sm">Last updated: July 2024</span>
                </div>
                <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-10a1 1 0 0 0-.707.293l-3 3a1 1 0 1 0 1.414 1.414L10 8.414V14a1 1 0 0 0 2 0V8.414l1.293 1.293a1 1 0 1 0 1.414-1.414l-3-3A1 1 0 0 0 10 6z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="text-gray-500 text-sm">Views: 1.2k</span>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-md">Study Notes</span>
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded-md">Education</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
