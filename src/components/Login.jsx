import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { app } from '../../firebase';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
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
            const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;
            console.log('User logged in:', user);

            setFormData({
                email: '',
                password: '',
            });

            // Redirect to dashboard upon successful login
            navigate('/dashboard');
        } catch (error) {
            setError(error.message);
            console.error('Error signing in:', error.message);
        }
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();

        try {
            const userCredential = await signInWithPopup(auth, provider);
            const user = userCredential.user;
            console.log('User logged in with Google:', user);

            // Redirect to dashboard upon successful login
            navigate('/dashboard');
        } catch (error) {
            setError(error.message);
            console.error('Error signing in with Google:', error.message);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-8 text-center">Log In</h2>
            <form onSubmit={handleSubmit}>
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
                    Log In
                </button>
                {/* Google Login Button */}
                <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:bg-red-600 transition duration-300"
                >
                    Log In with Google
                </button>
                {/* Error Message */}
                {error && (
                    <p className="text-red-500 mt-4 text-center">{error}</p>
                )}
                {/* Signup Link */}
                <p className="mt-4 text-center text-gray-600">
                    Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign up here</a>
                </p>
            </form>
        </div>
    );
}

export default Login;
