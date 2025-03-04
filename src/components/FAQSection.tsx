import React from 'react';

const FAQSection: React.FC = () => {
    const faqs = [
        {
            question: "How does Cobbler integrate with LinkedIn?",
            answer: "Cobbler allows you to easily import your contacts from LinkedIn, making it simple to manage your professional network."
        },
        {
            question: "Is my data private & secure?",
            answer: "Absolutely! We prioritize your privacy and ensure that your data remains secure and confidential."
        },
        {
            question: "What kind of reminders will I receive?",
            answer: "Cobbler provides automated reminders for follow-ups, ensuring you never miss an important connection."
        },
        {
            question: "Can I use Cobbler on mobile?",
            answer: "Yes, Cobbler is designed to be mobile-friendly, allowing you to manage your network on the go."
        }
    ];

    return (
        <div className="faq-section">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <h3 className="font-semibold">{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;