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
                        <p className="text-gray-500 uppercase tracking-wider text-sm">About Union Corporation</p>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                            More than 40M+ Trusted Our Financial & Consultation Institution
                        </h2>
                        <p className="text-gray-500">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                        </p>
                        <p className="text-gray-500">
                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country,
                            in which roasted parts of sentences fly into your mouth.
                        </p>
                        <Button title="Read More" />
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 order-2 lg:order-2 md:order-2 lg:order-last">
                    {/* Professional Consultants */}
                    <div className="bg-white hover:bg-gradient-to-r from-brightColor to-[#1a1b26] p-6 rounded-lg shadow-md group">
                        <div className="w-12 h-12 bg-blue-100 group-hover:bg-white/20 rounded-lg flex items-center justify-center mb-4">
                            <FaUsers className="w-6 h-6 text-brightColor group-hover:text-white" />
                        </div>
                        <h3 className="text-xl group-hover:text-white font-semibold mb-3">Professional Consultants</h3>
                        <p className="text-gray-500 text-sm group-hover:text-white">
                            Far far away, behind the word mountains, far from the countries Vokalia.
                        </p>
                    </div>

                    {/* Comprehensive Services */}
                    <div className="bg-gradient-to-r from-brightColor to-[#1a1b26] p-6 rounded-lg text-white">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                            <FaFileSignature className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Comprehensive Services</h3>
                        <p className="text-blue-50 text-sm">
                            Far far away, behind the word mountains, far from the countries Vokalia.
                        </p>
                    </div>

                    {/* A Culture that Delivers */}
                    <div className="bg-white hover:bg-gradient-to-r from-brightColor to-[#1a1b26] p-6 rounded-lg shadow-md group">
                        <div className="w-12 h-12 bg-blue-100 group-hover:bg-white/20 rounded-lg flex items-center justify-center mb-4">
                            <FaStore className="w-6 h-6 text-brightColor group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-semibold group-hover:text-white mb-3">A Culture that Delivers</h3>
                        <p className="text-gray-500 text-sm group-hover:text-white">
                            Far far away, behind the word mountains, far from the countries Vokalia.
                        </p>
                    </div>

                    {/* Industry Experience */}
                    <div className="bg-white hover:bg-gradient-to-r from-brightColor to-[#1a1b26] p-6 rounded-lg shadow-md group">
                        <div className="w-12 h-12 bg-blue-100 group-hover:bg-white/20 rounded-lg flex items-center justify-center mb-4">
                            <FaStore className="w-6 h-6 text-brightColor group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-semibold group-hover:text-white mb-3">Industry Experience</h3>
                        <p className="text-gray-500 text-sm group-hover:text-white">
                            Far far away, behind the word mountains, far from the countries Vokalia.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FeatureSection