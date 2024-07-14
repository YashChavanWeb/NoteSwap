import React, { useState } from 'react';
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { ref as databaseRef, push, set } from 'firebase/database';
import { storage, db } from '../../../firebase';

const FileUploadPopup = ({ onClose }) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Physics'); // Default category
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const sanitizeFileName = (name) => {
        return name.replace(/[\s.#$/[\]]/g, '_');
    };

    const handleUpload = () => {
        if (!file || !title || !category) {
            alert('Please select a file, enter a title, and choose a category.');
            return;
        }

        const sanitizedFileName = sanitizeFileName(file.name);
        const fileRef = storageRef(storage, `pdfs/${sanitizedFileName}`);
        const uploadTask = uploadBytesResumable(fileRef, file);

        setIsUploading(true);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(progress);
            },
            (error) => {
                console.error('Upload failed:', error);
                setIsUploading(false);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const newFileRef = push(databaseRef(db, 'files/')); // Generate a unique key
                    set(newFileRef, {
                        title: title,
                        url: downloadURL,
                        category: category, // Store category in database
                    });
                    setIsUploading(false);
                    setFile(null);
                    setTitle('');
                    setCategory('Physics'); // Reset category to default
                    setUploadProgress(0);
                    alert('File uploaded successfully!');
                    onClose(); // Close the popup after successful upload
                });
            }
        );
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Upload PDF</h2>
                <input
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={handleTitleChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                <select
                    value={category}
                    onChange={handleCategoryChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                >
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Maths">Maths</option>
                </select>
                <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                />
                {isUploading && (
                    <div className="w-full bg-gray-200 rounded-md mb-4">
                        <div
                            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-md"
                            style={{ width: `${uploadProgress}%` }}
                        >
                            {uploadProgress.toFixed(2)}%
                        </div>
                    </div>
                )}
                <div className="flex justify-between">
                    <button
                        onClick={onClose}
                        className="w-full p-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 focus:outline-none"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleUpload}
                        disabled={isUploading}
                        className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
                    >
                        {isUploading ? 'Uploading...' : 'Upload'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FileUploadPopup;
