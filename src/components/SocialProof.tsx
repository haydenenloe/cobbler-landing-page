import React from 'react';

const SocialProof: React.FC = () => {
    return (
        <section className="py-10 bg-gray-100">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-6">Join X professionals already using Cobbler</h2>
                <div className="flex flex-wrap justify-center">
                    <div className="max-w-xs mx-4 mb-6">
                        <blockquote className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-700 italic">"Cobbler has transformed the way I manage my network!"</p>
                            <footer className="mt-4 text-sm text-gray-600">- User A</footer>
                        </blockquote>
                    </div>
                    <div className="max-w-xs mx-4 mb-6">
                        <blockquote className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-700 italic">"I never forget to follow up with my contacts anymore!"</p>
                            <footer className="mt-4 text-sm text-gray-600">- User B</footer>
                        </blockquote>
                    </div>
                    <div className="max-w-xs mx-4 mb-6">
                        <blockquote className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-700 italic">"The AI insights are a game changer for networking!"</p>
                            <footer className="mt-4 text-sm text-gray-600">- User C</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;