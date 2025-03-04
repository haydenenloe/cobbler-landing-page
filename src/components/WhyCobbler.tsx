import React from 'react';

const WhyCobbler: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Why Choose Cobbler?</h2>
                <p className="text-lg mb-8">
                    Cobbler automates your networking efforts, ensuring you never miss an important connection.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center justify-center">
                        <span className="text-2xl mr-2">🏆</span>
                        <span>Automated follow-ups & reminders</span>
                    </li>
                    <li className="flex items-center justify-center">
                        <span className="text-2xl mr-2">🤖</span>
                        <span>AI-powered insights for smarter networking</span>
                    </li>
                    <li className="flex items-center justify-center">
                        <span className="text-2xl mr-2">🔒</span>
                        <span>Your data is private & secure</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default WhyCobbler;