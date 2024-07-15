// Dashboard.jsx

import React, { useEffect, useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { app } from '../../../firebase';
import SideDrawer from './SideDrawer';
import { HiMenu } from 'react-icons/hi';
import FileUploadPopup from './FileUploadPopup';
import FileList from './FileList';

const Dashboard = () => {
    const auth = getAuth(app);
    const navigate = useNavigate();

    const [showUserDetails, setShowUserDetails] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [currentUserUid, setCurrentUserUid] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showUploadPopup, setShowUploadPopup] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [unreadNotifications, setUnreadNotifications] = useState(3); // Example of unread notifications count

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
        setIsDrawerOpen(false);
    };

    const toggleUploadPopup = () => {
        setShowUploadPopup(!showUploadPopup);
    };

    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-800">Get or Upload Notes Here!</h2>

                    {/* Notifications */}
                    <div className="flex items-center">
                        <div className="relative">
                            <button
                                className="bg-gray-200 rounded-full w-10 h-10 hover:bg-gray-300 focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                </svg>
                            </button>
                            {unreadNotifications > 0 && (
                                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                                    {unreadNotifications}
                                </span>
                            )}
                        </div>

                        {/* User Menu */}
                        <div className="ml-4 relative">
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
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 py-8">
                {/* Toggle SideDrawer button with icon */}
                <div className="absolute top-20 left-4">
                    <button
                        onClick={toggleDrawer}
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none"
                    >
                        <HiMenu className="text-lg" />
                    </button>
                </div>

                {/* Side Drawer */}
                <SideDrawer isOpen={isDrawerOpen} onClose={toggleDrawer} onCategorySelect={handleCategorySelect} />

                {/* Search bar */}
                <div className="mt-4 mb-4">
                    <input
                        type="text"
                        placeholder="Search notes..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-full max-w-lg"
                    />
                </div>

                {/* Upload button */}
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

                {/* File list */}
                <FileList selectedCategory={selectedCategory} currentUserUid={currentUserUid} searchQuery={searchQuery} />
            </main>
        </div>
    );
};

export default Dashboard;
