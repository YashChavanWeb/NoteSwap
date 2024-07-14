// FileList.jsx

import React, { useEffect, useState } from 'react';
import { ref as databaseRef, onValue, remove } from 'firebase/database';
import { ref as storageRef, getDownloadURL, deleteObject } from 'firebase/storage';
import { db } from '../../../firebase'; // Adjust the import path as necessary
import Card from '../Card';
import defaultImage from '../../assets/noteswap.png'; // Import default image
import BuyNotePopup from './BuyNotePopup'; // Import BuyNotePopup component
import { downloadNote } from '../../Utils';

const FileList = ({ selectedCategory, currentUserUid }) => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showBuyPopup, setShowBuyPopup] = useState(false);
    const [selectedNote, setSelectedNote] = useState(null);
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
        const filesRef = databaseRef(db, 'files/');

        const handleData = async (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const filesList = await Promise.all(
                    Object.keys(data).map(async (key) => {
                        const fileData = data[key];
                        const coverImageUrl = await getCoverImage(fileData.url);
                        return {
                            id: key,
                            title: fileData.title,
                            url: fileData.url,
                            category: fileData.category || 'Uncategorized', // Default category if not provided
                            coverImageUrl: coverImageUrl || defaultImage,
                            createdBy: fileData.createdBy // Include createdBy field
                        };
                    })
                );

                // Filter files based on selected category
                const filteredFiles = selectedCategory
                    ? filesList.filter((file) => file.category === selectedCategory)
                    : filesList;

                setFiles(filteredFiles);
            } else {
                setFiles([]);
            }
            setLoading(false);
        };

        const handleError = (error) => {
            console.error('Error fetching data:', error);
            setLoading(false);
        };

        const unsubscribe = onValue(filesRef, handleData, handleError);

        // Clean up subscription on unmount
        return () => {
            unsubscribe();
        };
    }, [selectedCategory]); // Run useEffect whenever selectedCategory changes

    const getCoverImage = async (pdfUrl) => {
        // Implement your logic to fetch cover image from PDF URL
        // Example: fetch first page or use default image if not available
        // For simplicity, returning null here as we're using defaultImage directly
        return null;
    };

    const handleBuyClick = (note) => {
        setSelectedNote(note);
        setShowBuyPopup(true);

        // Calculate popup position to center it on screen
        const popupWidth = 600; // Adjust width as needed
        const popupHeight = 400; // Adjust height as needed
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const left = (screenWidth - popupWidth) / 2;
        const top = (screenHeight - popupHeight) / 2;

        setPopupPosition({ left, top });
    };

    const handleDeleteClick = async (noteId, storageUrl) => {
        try {
            // Delete from Realtime Database
            await remove(databaseRef(db, `files/${noteId}`));

            // Delete from Storage
            const storageRefUrl = storageRef(storage, storageUrl);
            await deleteObject(storageRefUrl);

            // Refresh the files list (optional: you may choose to update state directly if it suits your app flow)
            setLoading(true); // Set loading to true to trigger re-fetch
        } catch (error) {
            console.error('Error deleting file:', error);
            // Handle error gracefully, show a message to the user, etc.
        }
    };

    const handleCloseBuyPopup = () => {
        setShowBuyPopup(false);
        setSelectedNote(null);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mt-10">
            {files.length === 0 ? (
                <p>No files uploaded yet.</p>
            ) : (
                files.map((file) => (
                    <Card
                        key={file.id} // Ensure each Card has a unique key
                        subject={file.title}
                        thumbnail={file.coverImageUrl} // Use cover image URL or defaultImage
                        category={file.category} // Pass category to Card component
                        onClickBuy={() => handleBuyClick(file)} // Handle buy button click
                    >
                        {/* Add Delete button */}
                        {file.createdBy === currentUserUid && (
                            <button
                                onClick={() => handleDeleteClick(file.id, file.url)}
                                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md focus:outline-none"
                            >
                                Delete
                            </button>
                        )}
                    </Card>
                ))
            )}

            {showBuyPopup && selectedNote && (
                <BuyNotePopup
                    onClose={handleCloseBuyPopup}
                    noteTitle={selectedNote.title}
                    noteUrl={selectedNote.url}
                    style={{ top: popupPosition.top, left: popupPosition.left }}
                />
            )}
        </div>
    );
};

export default FileList;
