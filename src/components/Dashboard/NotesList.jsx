import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, off } from 'firebase/database';

const NotesList = ({ currentUserUid }) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        let notesRef;
        const fetchNotes = async () => {
            try {
                const db = getDatabase();
                notesRef = ref(db, `Notes/${currentUserUid}`);
                onValue(notesRef, (snapshot) => {
                    const notesData = snapshot.val();
                    if (notesData) {
                        const notesArray = Object.keys(notesData).map((noteId) => ({
                            id: noteId,
                            ...notesData[noteId].metadata,
                        }));
                        setNotes(notesArray);
                    } else {
                        setNotes([]);
                    }
                });
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        };

        if (currentUserUid) {
            fetchNotes();
        }

        return () => {
            if (notesRef) {
                off(notesRef);
            }
        };
    }, [currentUserUid]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note) => (
                <div key={note.id} className="bg-white shadow-md rounded p-4">
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
            ))}
        </div>
    );
};

export default NotesList;
