// components/NoteCard.js

import React from 'react';

const NoteCard = ({ note }) => {
    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-bold mb-2">{note.subject}</h2>
            {note.thumbnailURL && (
                <img src={note.thumbnailURL} alt="Thumbnail" className="mb-4 rounded-lg" style={{ maxWidth: '100%' }} />
            )}
            <p className="text-gray-700 mb-4">{note.description}</p>
            <a
                href={note.noteURL}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                download
            >
                Download Note
            </a>
        </div>
    );
};

export default NoteCard;
