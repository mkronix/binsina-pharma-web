import React from "react";
import { FaUser, FaShieldAlt, FaClock } from "react-icons/fa";
import CardTitle from "./CardTitle";
import CardParagraph from "./CardParagraph";
import BorderTitle from "./BorderTitle";
import PropTypes from "prop-types";

const Card = ({ children, className }) => (
  <div className={`bg-white shadow-md p-6 rounded-lg ${className}`}>
    {children}
  </div>
);

const CardContent = ({ icon, title, subtitle }) => (
  <div className='flex items-center space-x-4'>
    <div className='p-4 bg-gray-100 rounded-full'>{icon}</div>
    <div>
      <CardTitle title={title} />
      <CardParagraph description={subtitle} />
    </div>
  </div>
);

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUser className='w-8 h-8 text-brightColor' />,
      title: "Quality Assurance",
      subtitle:
        "Every product we deliver undergoes rigorous quality checks, ensuring top-notch standards.",
    },
    {
      icon: <FaShieldAlt className='w-8 h-8 text-brightColor' />,
      title: "Global Network",
      subtitle:
        "Extensive experience in supplying pharmaceutical products to over 50 countries worldwide.",
    },
    {
      icon: <FaClock className='w-8 h-8 text-brightColor' />,
      title: "Fast Shipping",
      subtitle:
        "Our fast and reliable shipping ensures your orders reach you promptly.",
    },
  ];

  return (
    <section className='px-6 lg:px-16 py-12 lg:py-16'>
      {/* Overall Layout */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
        {/* Left Section */}
        <div className='space-y-8'>
          <BorderTitle title='THE BINSINA COMPANY' />
          <Card className='relative border-l-4 border-brightColor mx-auto md:mx-0'>
            <div className='text-center'>
              <div className='text-[100px] font-bold text-brightColor leading-none'>
                10
              </div>
              <div className='text-base text-gray-600 uppercase tracking-wider'>
                Years of Binsina Experience
              </div>
            </div>
          </Card>
          <div className='space-y-4'>
            <img
              src='/assets/img/regulatory.png'
              alt=''
              className='rounded-lg'
            />
          </div>
        </div>

        {/* Right Section */}
        <div className='space-y-6'>
          {features.map((feature, index) => (
            <Card key={index} className='border-none'>
              <CardContent {...feature} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardContent.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
