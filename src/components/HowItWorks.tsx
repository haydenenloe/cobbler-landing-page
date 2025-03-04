import React from 'react';

const HowItWorks: React.FC = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">How It Works</h2>
                <div className="flex flex-col md:flex-row justify-center items-start">
                    <div className="md:w-1/3 p-4">
                        <h3 className="text-xl font-semibold">Step 1</h3>
                        <p>Import contacts from LinkedIn & Email</p>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <h3 className="text-xl font-semibold">Step 2</h3>
                        <p>Get smart reminders & insights</p>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <h3 className="text-xl font-semibold">Step 3</h3>
                        <p>Strengthen relationships over time</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;