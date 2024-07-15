import React from 'react';
import yash from '../../assets/profile.jpg'
import advait from '../../assets/advait.jpg'
import gargi from '../../assets/gargi.jpg'


const AboutUs = () => {
    const teamMembers = [
        {
            name: 'Yash Chavan',
            position: 'Web Developer',
            bio: 'Passionate about creating interactive and user-friendly web applications. Experienced in frontend development using modern technologies like React and Vue.js.',
            imageUrl: yash
        },
        {
            name: 'Gargi Betawadkar',
            position: 'Software Developer',
            bio: 'Experienced software engineer specializing in backend development. Proficient in building scalable and robust applications using languages like Java and Python.',
            imageUrl: gargi
        },
        {
            name: 'Advait Dongre',
            position: 'Python Developer',
            bio: 'Python enthusiast with a strong focus on data science and machine learning. Skilled in developing algorithms and implementing solutions to real-world problems.',
            imageUrl: advait
        },
    ];


    return (
        <div className="max-w-8xl mx-auto mt-1 p-6 bg-white shadow-lg rounded-lg">
            {/* Company Overview */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">About NoteSwap</h2>
                <p className="text-gray-700">
                    NoteSwap is a revolutionary platform designed to facilitate the exchange of academic knowledge through note-sharing. Our mission is to empower students by providing a convenient marketplace where they can buy and sell study materials such as lecture notes, study guides, and exam preparations.
                </p>
            </section>

            {/* Company Purpose */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Our Purpose</h2>
                <p className="text-gray-700">
                    At NoteSwap, we believe in fostering a collaborative learning environment where students can support each other’s academic journeys. By connecting students across different disciplines and educational institutions, we aim to enhance learning outcomes and promote knowledge sharing on a global scale.
                </p>
            </section>

            {/* Team Members */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-gray-100 p-4 rounded-lg">
                            <img src={member.imageUrl} alt={member.name} className="rounded-full h-32 w-32 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                            <p className="text-gray-700">{member.position}</p>
                            <p className="text-gray-700 mt-2">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Demo Video */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Watch Our Demo</h2>
                <div className="aspect-w-16 aspect-h-9">
                    {/* Replace the iframe src with your demo video URL */}
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Demo Video"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            {/* Additional Info */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
                <p className="text-gray-700">
                    For any inquiries or partnerships, please contact us at info@noteswap.com. We are committed to improving the educational experience for students worldwide.
                </p>
            </section>
        </div>
    );
}

export default AboutUs;
