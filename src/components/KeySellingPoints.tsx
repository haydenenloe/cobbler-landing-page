import React from 'react';

const KeySellingPoints: React.FC = () => {
    const sellingPoints = [
        {
            icon: '🏆',
            title: 'Automated Contact Reminders',
            description: 'Never forget to check in'
        },
        {
            icon: '🤖',
            title: 'AI-Powered Insights',
            description: 'Smart networking suggestions'
        },
        {
            icon: '🔄',
            title: 'Easy Import',
            description: 'Connect LinkedIn & Email'
        },
        {
            icon: '🔒',
            title: 'Privacy First',
            description: 'Your data stays yours'
        }
    ];

    return (
        <section className="py-10">
            <h2 className="text-2xl font-bold text-center mb-6">Key Selling Points</h2>
            <div className="flex flex-col md:flex-row justify-around">
                {sellingPoints.map((point, index) => (
                    <div key={index} className="flex flex-col items-center text-center mb-6 md:mb-0">
                        <div className="text-4xl mb-2">{point.icon}</div>
                        <h3 className="font-semibold">{point.title}</h3>
                        <p className="text-gray-600">{point.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default KeySellingPoints;