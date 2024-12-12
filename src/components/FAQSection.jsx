import { useState } from "react";
import FAQs from "../assets/img/FAQs.png";
import BorderTitle from "./BorderTitle";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import data from "../data/home.json";

const FAQSection = () => {
  const { home } = data.binsinaPharma;

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='bg-gray-50 py-16 px-6 lg:px-32'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        {/* Left Section: Image */}
        <div className='relative'>
          <img
            src={FAQs}
            alt='FAQ Image 1'
            className='w-full h-[30rem] object-cover'
          />
        </div>

        {/* Right Section: FAQ */}
        <div>
          <BorderTitle title='FAQs' />
          <Heading
            title='Frequently Asked Questions'
            align='start'
            className='my-3'
          />
          <Paragraph
            title='Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.'
            className='mb-4'
          />

          {/* FAQ Items */}
          <div className='space-y-4'>
            {home.faqsCollection.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-lg ${
                  activeIndex === index
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
                    className={`font-medium ${
                      activeIndex === index ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`transform transition-transform ${
                      activeIndex === index
                        ? "text-white rotate-180"
                        : "text-gray-800"
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
    </section>
  );
};

export default FAQSection;
