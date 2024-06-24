import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        setMessage('Thank you for subscribing!');
        setEmail('');
    };

    return (
        <div className=" w-[80%]flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Subscribe to our Newsletter</h2>
                <p className="mb-6 text-center text-gray-600">Get the latest updates right in your inbox</p>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input 
                        type="email" 
                        className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                        Subscribe
                    </button>
                </form>
                {message && <p className="mt-4 text-center text-green-500">{message}</p>}
            </div>
        </div>
    );
};

export default Newsletter;
