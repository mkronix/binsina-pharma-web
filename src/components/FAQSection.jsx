import { useState } from "react";
import FAQs from "../assets/img/FAQs.png";
import BorderTitle from "./BorderTitle";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I start exporting pharmaceutical products?",
      answer: [
        "Research and understand the regulations for pharmaceutical exports in both your home country and the target market.",
        "Obtain the necessary licenses and certifications (e.g., GMP, ISO certifications).",
        "Identify the right partners for logistics, distribution, and packaging.",
        "Understand the customs procedures for shipping pharmaceutical products internationally.",
        "Ensure compliance with international standards for drug safety and efficacy.",
      ],
    },
    {
      question: "What documents are required for exporting medicines?",
      answer: [
        "Export License: Required for legal exportation.",
        "Certificate of Pharmaceutical Product (CPP): Certifies that the product meets the regulatory standards of your country.",
        "Bill of Lading: Details the shipment information.",
        "Invoice and Packing List: For customs and verification of product contents.",
        "Customs Declaration: Required for international shipments.",
        "Certificate of Origin: Verifies where the product was made.",
      ],
    },
    {
      question:
        "How do I ensure the safety and quality of medicines during transport?",
      answer: [
        "Use temperature-controlled packaging for temperature-sensitive medicines.",
        "Ensure all pharmaceutical products are packed securely to avoid damage during transit.",
        "Partner with reputable logistics providers experienced in handling pharmaceutical products.",
        "Follow all regulatory guidelines on the transportation of drugs, including documentation and safety precautions.",
        "Regularly monitor the condition of goods during transit to ensure product integrity.",
      ],
    },
    {
      question:
        "What are the main challenges in the pharmaceutical export business?",
      answer: [
        "Regulatory Compliance: Navigating different regulations and standards in multiple countries.",
        "Logistics and Shipping: Ensuring timely delivery while maintaining product quality.",
        "Customs and Documentation: Managing the required paperwork and clearing customs without delays.",
        "Supply Chain Disruptions: Risk of interruptions in the supply chain, especially during crises (e.g., pandemics).",
        "Currency Fluctuations: Handling financial risks in international trade due to changing exchange rates.",
      ],
    },
    {
      question:
        "What are the benefits of working with an experienced pharmaceutical export partner?",
      answer: [
        "Expert Knowledge: They understand the complex regulations and processes involved in pharmaceutical exports.",
        "Streamlined Logistics: They have established relationships with reliable shipping and customs agents, ensuring smoother operations.",
        "Quality Control: They ensure that the medicines meet international standards and are safely transported.",
        "Global Reach: Experienced partners have access to a wide network of international markets and can help expand your global presence.",
        "Risk Management: They can help mitigate risks related to product quality, shipping delays, and compliance.",
      ],
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
            src={FAQs}
            alt='FAQ Image 1'
            className='w-full h-full object-cover'
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
            {faqs.map((faq, index) => (
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
    </div>
  );
};

export default FAQSection;
