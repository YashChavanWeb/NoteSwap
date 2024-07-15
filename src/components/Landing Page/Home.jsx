import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../../../firebase';

const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth(app);

        // Check if user is already logged in
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
            setLoading(false); // Update loading state
        }, (error) => {
            console.error('Auth state change error:', error);
            setLoading(false); // Ensure loading state is updated on error
        });

        return () => unsubscribe();
    }, []);

    const AuthLink = ({ to, text }) => (
        <Link to={to} className="bg-white text-blue-500 py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 hover:text-white transition duration-300">
            {text}
        </Link>
    );

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-blue-500 text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Welcome to NoteSwap</h1>
                        <p className="text-lg md:text-xl mb-8 text-center">Your Ultimate Destination for Knowledge Sharing!</p>
                        {!loading && (
                            loggedIn ? (
                                <AuthLink to="/dashboard" text="Go to Dashboard" />
                            ) : (
                                <AuthLink to="/signup" text="Sign Up Now" />
                            )
                        )}
                    </div>
                </div>
            </section>



            {/* Features Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Feature 1 */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">Upload Notes</h3>
                            <p className="text-lg">Easily upload your study notes in PDF format to share with others.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">Browse and Buy</h3>
                            <p className="text-lg">Explore a variety of study materials uploaded by other students and purchase them at minimal costs.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">Secure Transactions</h3>
                            <p className="text-lg">Transactions are securely handled to ensure your privacy and security.</p>
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
                            <p className="text-lg mb-4">"NoteSwap helped me find study notes I needed quickly and at a great price. Highly recommended!"</p>
                            <p className="text-sm font-semibold">- Meet Darji</p>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <p className="text-lg mb-4">"I love how easy it is to share and access study materials on NoteSwap. It's been a game-changer for my studies."</p>
                            <p className="text-sm font-semibold">- Krisha Chikka</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-blue-500 text-white py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Ready to Get Started?</h2>
                        <p className="text-lg mb-8 text-center">Sign up today and start sharing and exploring study notes!</p>
                        {!loading && (
                            loggedIn ? (
                                <AuthLink to="/dashboard" text="Go to Dashboard" />
                            ) : (
                                <AuthLink to="/signup" text="Sign Up Now" />
                            )
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
