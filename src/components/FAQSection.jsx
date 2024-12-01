import { useState } from "react";
import FAQs from "../assets/img/FAQs.jpg";
const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How To Fixed A Problem?",
            answer: [
                "Far far away, behind the word mountains,",
                "Consonantia, there live the blind texts",
                "When she reached the first hills of the Italic Mountains",
                "Bookmarksgrove, the headline of Alphabet Village",
                "Separated they live in Bookmarksgrove right",
            ],
        },
        {
            question: "How To Manage Your Business Loans?",
            answer: ["Answer to this question will go here."],
        },
        {
            question: "How To Grow Your Investments Funds?",
            answer: ["Answer to this question will go here."],
        },
        {
            question: "What Are Those Requirements For Businesses?",
            answer: ["Answer to this question will go here."],
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='bg-gray-50 py-16 px-6 lg:px-32'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                {/* Left Section: Image */}
                <div className='relative'>
                    <img
                        src={FAQs} // Replace with actual image
                        alt='FAQ Image 1'
                        className='rounded-lg shadow-md w-full h-full'
                    />
                </div>

                {/* Right Section: FAQ */}
                <div>
                    <p className='text-brightColor font-medium uppercase tracking-wide'>
                        FAQs
                    </p>
                    <h2 className='text-3xl font-bold my-3'>
                        Frequently Asked Questions
                    </h2>
                    <p className='text-gray-600 mb-4'>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.
                    </p>

                    {/* FAQ Items */}
                    <div className='space-y-4'>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`border rounded-lg ${activeIndex === index
                                    ? "bg-gradient-to-r from-brightColor to-[#1a1b26] border-brightColor"
                                    : "bg-white"
                                    }`}
                            >
                                {/* Question */}
                                <button
                                    className='w-full flex justify-between items-center px-6 py-4 text-left'
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span
                                        className={`font-medium ${activeIndex === index ? "text-white" : "text-gray-800"
                                            }`}
                                    >
                                        {faq.question}
                                    </span>
                                    <span
                                        className={`transform transition-transform ${activeIndex === index ? "text-white rotate-180" : "text-gray-800"
                                            }`}
                                    >
                                        &#9662; {/* Down Arrow */}
                                    </span>
                                </button>

                                {/* Answer */}
                                {activeIndex === index && (
                                    <div className='px-6 pb-4'>
                                        <ul className='list-decimal list-inside text-white space-y-2'>
                                            {faq.answer.map((line, lineIndex) => (
                                                <li key={lineIndex}>{line}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;