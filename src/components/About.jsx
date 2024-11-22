import React from "react";
import img from "../assets/img/immunization.png";
import img2 from "../assets/img/blog6.jpg";
import { motion } from 'framer-motion'
const About = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
        <div className="w-full lg:w-3/4 space-y-6">
          <h1 className="md:text-4xl text-2xl font-semibold text-start text-brightColor">
            Leading Pharmaceutical Exporter in India
          </h1>
          <p className="text-justify lg:text-start text-gray-700 max-md:text-xs">
            Binsina Pharma is a premier pharmaceutical export company dedicated to delivering high-quality healthcare solutions worldwide. By sourcing products from WHO-GMP-certified manufacturers, we ensure that all our offerings meet stringent international standards.
          </p>
          <p className="text-justify lg:text-start text-gray-700 max-md:text-xs">
            Our mission is to bridge the global gap in healthcare by offering affordable, innovative, and reliable solutions to healthcare providers, enabling better patient outcomes globally.
          </p>
          <p className="text-justify lg:text-start text-gray-700 max-md:text-xs">
            With years of expertise and a commitment to excellence, we are proud to be the trusted partner for countless healthcare professionals, institutions, and distributors around the world.
          </p>
        </div>
        <div className="w-full lg:w-[40%]">
          <img className="object-cover rounded-lg" src={img} alt="Pharmaceutical innovation" />
        </div>
      </div>
      <section id="about" className="md:py-20 py-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src={img2}
                alt="About Us"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12 space-y-6">
              <h2 className="md:text-4xl text-2xl font-bold mb-6 text-brightColor">
                About Binsina Pharma Export
              </h2>
              <p className="text-gray-600 max-md:text-xs">
                At Binsina Pharma, we take pride in being a leader in the global pharmaceutical market. We are committed to offering solutions that enhance healthcare accessibility and quality, maintaining strict adherence to international regulatory standards.
              </p>
              <p className="text-gray-600 max-md:text-xs">
                By combining cutting-edge innovation with customer-centric values, we aim to create a healthier future for communities worldwide.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white md:p-6  p-3 rounded-lg shadow">
                  <h3 className="font-bold text-brightColor mb-2">Our Mission</h3>
                  <p className="text-gray-600 max-md:text-xs">
                    To ensure global access to quality and affordable healthcare solutions.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white md:p-6 p-3 rounded-lg shadow">
                  <h3 className="font-bold text-brightColor mb-2">Our Vision</h3>
                  <p className="text-gray-600 max-md:text-xs">
                    To be a trusted name in the pharmaceutical export industry, driving innovation and excellence.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white md:p-6 p-3 rounded-lg shadow">
                  <h3 className="font-bold text-brightColor mb-2">Core Values</h3>
                  <p className="text-gray-600 max-md:text-xs">
                    Quality, Integrity, Sustainability, and Innovation.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white md:p-6 p-3 rounded-lg shadow">
                  <h3 className="font-bold text-brightColor mb-2">Global Reach</h3>
                  <p className="text-gray-600 max-md:text-xs">
                    Serving healthcare providers across continents with reliable and timely delivery.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section id="whyUs" className="md:pt-20 pt-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="md:text-4xl text-2xl font-bold mb-10 text-brightColor">
            Why Choose Us?
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-brightColor mb-4">Quality Assurance</h3>
              <p className="text-gray-600 max-md:text-xs">
                Every product we deliver undergoes rigorous quality checks, ensuring top-notch standards.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-brightColor mb-4">Global Network</h3>
              <p className="text-gray-600 max-md:text-xs">
                Extensive experience in supplying pharmaceutical products to over 50 countries worldwide.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-brightColor mb-4">Dedicated Support</h3>
              <p className="text-gray-600 max-md:text-xs">
                A team of professionals ready to assist you at every stage of the process.
              </p>
            </motion.div>
          </div>
        </div >
      </section >
    </>
  );
};

export default About;
