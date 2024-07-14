// BuyNotePopup.jsx

import React, { useState } from 'react';
import { downloadNote } from '../../Utils';
import noteswap from '../../assets/noteswap.png'; // Import a QR code image for demonstration

const BuyNotePopup = ({ onClose, noteTitle, noteUrl, style }) => {
    const [paymentMethod, setPaymentMethod] = useState('credit_card');
    const [processingPayment, setProcessingPayment] = useState(false);
    const [showQRCode, setShowQRCode] = useState(false);
    const [cardNumber, setCardNumber] = useState('');

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
        setShowQRCode(false); // Reset QR code display when changing payment method
        setCardNumber(''); // Clear card number input
    };

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
    };

    const handleBuyNow = async () => {
        setProcessingPayment(true);

        // Simulate payment processing delay (e.g., API call or payment gateway)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Download the note after successful payment
        downloadNote(noteUrl);

        // Close the popup after successful payment
        onClose();
    };

    const renderPaymentForm = () => {
        switch (paymentMethod) {
            case 'credit_card':
            case 'debit_card':
                return (
                    <div className="mb-4">
                        <p className="mb-2">Enter Card Number:</p>
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            placeholder="Enter your card number"
                            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                        />
                    </div>
                );
            case 'gpay':
                return (
                    <div className="mb-4">
                        <img src={noteswap} alt="QR Code" className="mx-auto mb-2" style={{ maxWidth: '200px' }} />
                        <p className="text-center">Scan the QR code to pay using Google Pay.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: '800px', ...style }}>
                <div className="p-4 h-full flex flex-col">
                    <div className="flex justify-end">
                        <button className="text-gray-400 hover:text-gray-600" onClick={onClose}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">{noteTitle}</h3>
                    </div>
                    <div className="overflow-y-auto mb-4">
                        {/* Display preview of the first page of PDF */}
                        <embed src={`${noteUrl}#page=1`} type="application/pdf" width="100%" height="250px" />
                    </div>
                    <div className="mb-4">
                        <p className="text-lg font-semibold mb-2">Amount: Rs. 50</p>
                    </div>
                    <div className="mb-4">
                        <p className="mb-2">Select Payment Method:</p>
                        <select
                            value={paymentMethod}
                            onChange={handlePaymentMethodChange}
                            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                        >
                            <option value="credit_card">Credit Card</option>
                            <option value="debit_card">Debit Card</option>
                        </select>
                    </div>
                    {renderPaymentForm()}
                    <button
                        onClick={handleBuyNow}
                        disabled={processingPayment}
                        className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        {processingPayment ? 'Processing Payment...' : 'Buy Now'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BuyNotePopup;
