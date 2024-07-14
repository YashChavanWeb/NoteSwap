import React from 'react';

const AboutUs = () => {
    // Placeholder data for team members
    const teamMembers = [
        { name: 'John Doe', position: 'CEO', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { name: 'Jane Smith', position: 'CTO', bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { name: 'David Brown', position: 'CFO', bio: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg' },
    ];

    return (
        <div className="max-w-8xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
            {/* Company Overview */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">About Us</h2>
                <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.
                </p>
            </section>

            {/* Company Purpose */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Our Purpose</h2>
                <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.
                </p>
            </section>
        </div>
    );
}

export default AboutUs;
