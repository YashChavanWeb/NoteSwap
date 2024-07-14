import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { app } from '../../firebase';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate(); // Correct usage of useNavigate

    const auth = getAuth(app);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;
            console.log('User signed up:', user);

            setFormData({
                username: '',
                email: '',
                password: '',
            });
            setSubmitted(true);

            // Redirect to dashboard upon successful signup
            navigate('/dashboard'); // Navigate to dashboard
        } catch (error) {
            setError(error.message);
            console.error('Error signing up:', error.message);
        }
    };

    const handleGoogleSignup = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const userCredential = await signInWithPopup(auth, provider);
            const user = userCredential.user;
            console.log('User signed up with Google:', user);

            // Redirect to dashboard upon successful signup
            navigate('/dashboard'); // Navigate to dashboard
        } catch (error) {
            setError(error.message);
            console.error('Error signing up with Google:', error.message);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-8 text-center">Sign Up</h2>
            <form onSubmit={handleSubmit}>
                {/* Username */}
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
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
                {/* Password */}
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
                >
                    Sign Up
                </button>
                {/* Google Sign Up Button */}
                <button
                    type="button"
                    onClick={handleGoogleSignup}
                    className="w-full mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:bg-green-600 transition duration-300"
                >
                    Sign Up with Google
                </button>
                {/* Error Message */}
                {error && (
                    <p className="text-red-500 mt-4 text-center">{error}</p>
                )}
                {/* Success Message */}
                {submitted && (
                    <p className="text-green-500 mt-4 text-center">Form submitted successfully!</p>
                )}
                {/* Login Link */}
                <p className="mt-4 text-center text-gray-600">
                    Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log in here</a>
                </p>
            </form>
        </div>
    );
}

export default Signup;
