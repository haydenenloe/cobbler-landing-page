import React, { useState } from 'react';

const CTASection: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle email submission logic here
        console.log('Email submitted:', email);
    };

    return (
        <section className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Get Early Access – Join Our Beta Today</h2>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
                <input
                    type="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="flex-grow p-2 border border-gray-300 rounded-md mb-2 sm:mb-0 sm:mr-2"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Join Beta
                </button>
            </form>
        </section>
    );
};

export default CTASection;