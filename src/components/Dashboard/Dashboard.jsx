// Dashboard.jsx

import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { app } from '../../../firebase';
import SideDrawer from './SideDrawer';
import { HiMenu } from 'react-icons/hi';
import FileUploadPopup from './FileUploadPopup'; // Import FileUploadPopup component
import FileList from './FileList'; // Import FileList component

const Dashboard = () => {
    const auth = getAuth(app);
    const navigate = useNavigate();

    const [showUserDetails, setShowUserDetails] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [currentUserUid, setCurrentUserUid] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); // State to manage selected category
    const [showUploadPopup, setShowUploadPopup] = useState(false); // State to manage upload popup visibility

    useEffect(() => {
        const fetchCurrentUserUid = async () => {
            const currentUser = auth.currentUser;
            if (currentUser) {
                setCurrentUserUid(currentUser.uid);
            } else {
                setCurrentUserUid('');
            }
        };

        fetchCurrentUserUid();
    }, [auth.currentUser]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const currentUser = auth.currentUser;
    const userEmail = currentUser ? currentUser.email : '';

    const toggleUserDetails = () => {
        setShowUserDetails(!showUserDetails);
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setIsDrawerOpen(false); // Close the drawer after selecting a category
    };

    const toggleUploadPopup = () => {
        setShowUploadPopup(!showUploadPopup);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
                    {/* Logo or Dashboard Title */}
                    <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
                    {/* User Menu */}
                    <div className="relative">
                        <button
                            className="flex items-center justify-center bg-gray-200 rounded-full w-10 h-10 hover:bg-gray-300 focus:outline-none"
                            onClick={toggleUserDetails}
                        >
                            <span className="text-gray-600 text-lg">{userEmail.charAt(0).toUpperCase()}</span>
                        </button>
                        {showUserDetails && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 p-4 rounded-lg shadow-lg">
                                <p className="text-gray-800 font-semibold mb-2">User Details</p>
                                <p className="text-gray-600">Email: {userEmail}</p>
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg focus:outline-none mt-4"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-8">
                <p className="text-gray-600 mb-4">You can customize this dashboard with your content and features.</p>

                {/* Toggle SideDrawer button with icon */}
                <div className="absolute top-20 left-4">
                    <button
                        onClick={toggleDrawer}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none"
                    >
                        <HiMenu className="text-lg" /> {/* Icon for opening categories */}
                    </button>
                </div>

                <SideDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} onCategorySelect={handleCategorySelect} />

                {/* Big button to open FileUploadPopup */}
                <div className="flex justify-center mt-8">
                    <button
                        onClick={toggleUploadPopup}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg focus:outline-none"
                    >
                        Upload PDF
                    </button>
                </div>

                {/* Render FileUploadPopup if showUploadPopup is true */}
                {showUploadPopup && <FileUploadPopup onClose={toggleUploadPopup} />}

                <FileList selectedCategory={selectedCategory} currentUserUid={currentUserUid} />
            </main>
        </div>
    );
};

export default Dashboard;
