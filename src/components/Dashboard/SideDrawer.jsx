import React from 'react';

const SideDrawer = ({ isOpen, onClose, onCategorySelect }) => {
    const categories = ['Physics', 'Chemistry', 'Maths']; // Define your categories here

    return (
        <div className={`fixed inset-y-0 left-0 z-50 bg-white w-64 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-300 ease-in-out`}>
            <div className="flex justify-between items-center p-4 border-r">
                <h2 className="text-xl font-semibold">Categories</h2>
                <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={onClose}>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="p-4">
                <ul>
                    {categories.map((category) => (
                        <li key={category} className="mb-4">
                            <button
                                onClick={() => onCategorySelect(category)}
                                className="text-gray-700 hover:text-gray-900 focus:outline-none"
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SideDrawer;
