import React from 'react';
import Card from '../Card';
import mathImage from '../../assets/math.jpg';
import phyImage from '../../assets/phy.jpg';
import chemImage from '../../assets/chem.jpg';

const DemoNotes = () => {
    // Example data organized by subjects
    const notesBySubject = {
        Mathematics: [
            { id: 1, subject: 'Mathematics', thumbnail: mathImage, pages: 10, likes: 25, views: 100, uploadDate: '2024-07-15', uploader: 'John Doe' },
            { id: 2, subject: 'Mathematics', thumbnail: mathImage, pages: 12, likes: 30, views: 120, uploadDate: '2024-07-16', uploader: 'Alice Johnson' },
            { id: 3, subject: 'Mathematics', thumbnail: mathImage, pages: 12, likes: 30, views: 120, uploadDate: '2024-07-16', uploader: 'Alice Johnson' },
        ],
        Physics: [
            { id: 3, subject: 'Physics', thumbnail: phyImage, pages: 15, likes: 20, views: 80, uploadDate: '2024-07-14', uploader: 'Jane Smith' },
            { id: 4, subject: 'Physics', thumbnail: phyImage, pages: 18, likes: 28, views: 110, uploadDate: '2024-07-17', uploader: 'Michael Brown' },
        ],
        Chemistry: [
            { id: 5, subject: 'Chemistry', thumbnail: chemImage, pages: 12, likes: 30, views: 120, uploadDate: '2024-07-13', uploader: 'David Brown' },
            { id: 6, subject: 'Chemistry', thumbnail: chemImage, pages: 14, likes: 35, views: 140, uploadDate: '2024-07-18', uploader: 'Emily Johnson' },
            { id: 7, subject: 'Chemistry', thumbnail: chemImage, pages: 12, likes: 30, views: 120, uploadDate: '2024-07-13', uploader: 'David Brown' },
            { id: 8, subject: 'Chemistry', thumbnail: chemImage, pages: 14, likes: 35, views: 140, uploadDate: '2024-07-18', uploader: 'Emily Johnson' },
        ],
    };

    return (
        <div className="max-w-8xl mx-auto px-4 py-8">
            {/* Display notes by subjects */}
            {Object.keys(notesBySubject).map(subject => (
                <div key={subject} className="mb-20">
                    <h2 className="text-2xl font-bold mb-4 ml-5">{subject}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {notesBySubject[subject].map(note => (
                            <Card
                                key={note.id}
                                subject={note.subject}
                                thumbnail={note.thumbnail}
                                pages={note.pages}
                                likes={note.likes}
                                views={note.views}
                                uploadDate={note.uploadDate}
                                uploader={note.uploader}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DemoNotes;
