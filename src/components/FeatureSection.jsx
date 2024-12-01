import React from "react";
import { FaFileSignature, FaStore, FaUsers } from "react-icons/fa";
import Button from "./Button/Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { AiOutlineGlobal } from "react-icons/ai";

const FeatureSection = () => {
  const features = [
    {
      icon: FaUsers,
      title: 'Certified Manufacturing Partners',
      description:
        'We partner exclusively with WHO-GMP-certified manufacturers, ensuring the highest standards in product quality and safety for global distribution.',
      isDefaultGradient: false,
    },
    {
      icon: FaFileSignature,
      title: 'Regulatory Compliance',
      description:
        'We adhere to global regulatory standards to ensure our products meet all necessary compliance requirements, maintaining trust and credibility in the pharmaceutical market.',
      isDefaultGradient: true,
    },
    {
      icon: AiOutlineGlobal,
      title: 'Global Supply Chain',
      description:
        'Our efficient global supply chain ensures timely delivery of high-quality medicines to healthcare providers across the world.',
      isDefaultGradient: false,
    },
    {
      icon: FaStore,
      title: 'Healthcare Innovation',
      description:
        'We are committed to advancing healthcare by ensuring our products meet the latest innovations in pharmaceutical technology.',
      isDefaultGradient: false,
    },
  ];
  return (
    <div className='md:px-16 px-6 md:py-28 py-12 flex justify-center items-center w-full'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
        {/* Text Content */}
        <div className='flex flex-col justify-center'>
          <div className='space-y-6'>
            <p className='text-gray-500 uppercase tracking-wider text-sm'>
              About Binsina Pharma
            </p>
            <Heading
              title='Trusted Global Supplier of Pharmaceutical Products'
              align='start'
            />
            <Paragraph
              title='Binsina Pharma is a leader in the pharmaceutical export industry,
              providing high-quality, WHO-GMP-certified medicines across the
              globe. With a commitment to safety, quality, and regulatory
              compliance, we aim to improve global healthcare.'
            />

            <Paragraph
              title='We specialize in exporting a wide range of pharmaceutical
              products, including life-saving drugs, antibiotics, and vaccines.
              Through strategic partnerships, we ensure timely delivery and
              top-notch customer service.'
            />
            <Button title='Learn More' />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

const FeatureCard = ({ icon: Icon, title, description, isDefaultGradient }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-md transition-all ${isDefaultGradient
        ? 'bg-gradient-to-r from-brightColor to-[#1a1b26] text-white'
        : 'bg-white hover:bg-gradient-to-r from-brightColor to-[#1a1b26]'
        } group`}
    >
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${isDefaultGradient
          ? 'bg-white/20 backdrop-blur-sm'
          : 'bg-blue-100 group-hover:bg-white/20'
          }`}
      >
        <Icon
          className={`w-6 h-6 ${isDefaultGradient
            ? 'text-white'
            : 'text-brightColor group-hover:text-white'
            }`}
        />
      </div>
      <h3
        className={`text-xl font-semibold mb-3 ${isDefaultGradient ? 'text-white' : 'group-hover:text-white'
          }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm ${isDefaultGradient ? 'text-blue-50' : 'text-gray-500 group-hover:text-white'
          }`}
      >
        {description}
      </p>
    </div>
  );
};

