import React from 'react'
import { FaFileSignature, FaStore, FaUsers } from "react-icons/fa";
import Button from './Button/Button'

const FeatureSection = () => {
    return (
        <div className="md:px-16 px-6 md:py-28 py-12 flex justify-center items-center w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Text Content */}
                <div className="flex flex-col justify-center order-1 lg:order-1 md:order-1">
                    <div className="space-y-6">
                        <p className="text-gray-500 uppercase tracking-wider text-sm">About Binsina Pharma</p>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                            Trusted Global Supplier of Pharmaceutical Products
                        </h2>
                        <p className="text-gray-500">
                            Binsina Pharma is a leader in the pharmaceutical export industry, providing high-quality, WHO-GMP-certified medicines across the globe. With a commitment to safety, quality, and regulatory compliance, we aim to improve global healthcare.
                        </p>
                        <p className="text-gray-500">
                            We specialize in exporting a wide range of pharmaceutical products, including life-saving drugs, antibiotics, and vaccines. Through strategic partnerships, we ensure timely delivery and top-notch customer service.
                        </p>
                        <Button title="Learn More" />
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 order-2 lg:order-2 md:order-2">
                    {/* Certified Manufacturing Partners */}
                    <div className="bg-white hover:bg-gradient-to-r from-brightColor to-[#1a1b26] p-6 rounded-lg shadow-md group">
                        <div className="w-12 h-12 bg-blue-100 group-hover:bg-white/20 rounded-lg flex items-center justify-center mb-4">
                            <FaUsers className="w-6 h-6 text-brightColor group-hover:text-white" />
                        </div>
                        <h3 className="text-xl group-hover:text-white font-semibold mb-3">Certified Manufacturing Partners</h3>
                        <p className="text-gray-500 text-sm group-hover:text-white">
                            We partner exclusively with WHO-GMP-certified manufacturers, ensuring the highest standards in product quality and safety for global distribution.
                        </p>
                    </div>

                    {/* Regulatory Compliance */}
                    <div className="bg-gradient-to-r from-brightColor to-[#1a1b26] p-6 rounded-lg text-white">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                            <FaFileSignature className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Regulatory Compliance</h3>
                        <p className="text-blue-50 text-sm">
                            We adhere to global regulatory standards to ensure our products meet all necessary compliance requirements, maintaining trust and credibility in the pharmaceutical market.
                        </p>
                    </div>

                    {/* Global Supply Chain */}
                    <div className="bg-white hover:bg-gradient-to-r from-brightColor to-[#1a1b26] p-6 rounded-lg shadow-md group">
                        <div className="w-12 h-12 bg-blue-100 group-hover:bg-white/20 rounded-lg flex items-center justify-center mb-4">
                            <FaStore className="w-6 h-6 text-brightColor group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-semibold group-hover:text-white mb-3">Global Supply Chain</h3>
                        <p className="text-gray-500 text-sm group-hover:text-white">
                            Our efficient global supply chain ensures timely delivery of high-quality medicines to healthcare providers across the world.
                        </p>
                    </div>

                    {/* Healthcare Innovation */}
                    <div className="bg-white hover:bg-gradient-to-r from-brightColor to-[#1a1b26] p-6 rounded-lg shadow-md group">
                        <div className="w-12 h-12 bg-blue-100 group-hover:bg-white/20 rounded-lg flex items-center justify-center mb-4">
                            <FaStore className="w-6 h-6 text-brightColor group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-semibold group-hover:text-white mb-3">Healthcare Innovation</h3>
                        <p className="text-gray-500 text-sm group-hover:text-white">
                            We are committed to advancing healthcare by ensuring our products meet the latest innovations in pharmaceutical technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection
