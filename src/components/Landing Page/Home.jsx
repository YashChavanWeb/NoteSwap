import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../../../firebase';

const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth(app);

        // Check if user is already logged in
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-blue-500 text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Welcome to Your Platform</h1>
                        <p className="text-lg md:text-xl mb-8 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        {loggedIn ? (
                            <Link to="/dashboard" className="bg-white text-blue-500 py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition duration-300">Go to Dashboard</Link>
                        ) : (
                            <Link to="/signup" className="bg-white text-blue-500 py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition duration-300">Sign Up Now</Link>
                        )}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Feature 1 */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
                            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
                            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
                            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gray-100 py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Testimonial 1 */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <p className="text-lg mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                            <p className="text-sm font-semibold">John Doe</p>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <p className="text-lg mb-4">"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                            <p className="text-sm font-semibold">Jane Smith</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-blue-500 text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Ready to get started?</h2>
                        <p className="text-lg mb-8 text-center">Sign up today and join thousands of satisfied users!</p>
                        {loggedIn ? (
                            <Link to="/dashboard" className="bg-white text-blue-500 py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition duration-300">Go to Dashboard</Link>
                        ) : (
                            <Link to="/signup" className="bg-white text-blue-500 py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition duration-300">Sign Up Now</Link>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
