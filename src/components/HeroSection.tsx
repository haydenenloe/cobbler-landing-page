import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center py-20 bg-blue-500 text-white">
            <h1 className="text-4xl font-bold mb-4">Never Lose Touch – Stay on Top of Your Network with Cobbler</h1>
            <p className="text-lg mb-8">Cobbler helps busy professionals manage relationships, get smart reminders, and build meaningful connections.</p>
            <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded shadow hover:bg-gray-200">
                Join the Beta
            </button>
        </section>
    );
};

export default HeroSection;