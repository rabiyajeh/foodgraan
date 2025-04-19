import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Confirmation = () => {
    const location = useLocation();
    const { orderDetails } = location.state || {};

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-10">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Order Confirmation</h1>
                {orderDetails ? (
                    <>
                        <p className="text-lg">Thank you for your order, {orderDetails.name}!</p>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
                        <ul className="mb-4 space-y-2">
                            {orderDetails.cartItems.map(item => (
                                <li key={item.id} className="flex justify-between border-b pb-2 text-gray-700">
                                    <span>{item.name}</span>
                                    <span>${item.price.toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg font-semibold text-gray-800">Total: ${orderDetails.totalPrice.toFixed(2)}</p>
                        <p className="mt-6 text-gray-700">Your order will be shipped to the address: {orderDetails.address}</p>
                    </>
                ) : (
                    <p className="text-gray-500">Something went wrong with your order. Please try again.</p>
                )}
            </div>
        </div>
    );
};

export default Confirmation;
