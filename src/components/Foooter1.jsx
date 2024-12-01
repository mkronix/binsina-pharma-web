import React from 'react';
import { Link } from 'react-router-dom';
import data from "../data/data.json";
const FooterOne = () => {
    const { footer } = data.binsinaPharma;
    return (
        <footer className="bg-gradient-to-r from-brightColor to-[#1a1b26] text-white pt-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* About Section */}
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-white">About Us</h2>
                    <p className="text-base text-white">
                        Binisana is a Generic pharmaceutical contract manufacturer. Binisana
                        offers a range of high-quality generic medicines and is continually
                        developing and expanding the product offering.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-2">
                    <h2 className="text-xl font-bold">Quick Links</h2>
                    <ul className="space-y-1">
                        <li><Link to="/aboutus" className="hover:text-brightColor text-white font-normal text-base">About Us ›</Link></li>
                        <li><Link to="/products" className="hover:text-brightColor text-white font-normal text-base">Products ›</Link></li>
                        <li><Link to="/news-and-media" className="hover:text-brightColor text-white font-normal text-base">News ›</Link></li>
                        <li><Link to="/news-and-media" className="hover:text-brightColor text-white font-normal text-base">Media ›</Link></li>
                        <li><Link to="/quality-assurance" className="hover:text-brightColor text-white font-normal text-base">Quality Assurance ›</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="space-y-2">
                    <h2 className="text-xl font-bold">Services</h2>
                    <ul className="space-y-1">
                        <li><Link to="#" className="hover:text-brightColor text-white font-normal text-base">Tablet Manufacturing ›</Link></li>
                        <li><Link to="#" className="hover:text-brightColor text-white font-normal text-base">Nutraceuticals Manufacturing ›</Link></li>
                        <li><Link to="#" className="hover:text-brightColor text-white font-normal text-base">Generic Medicine ›</Link></li>
                        <li><Link to="#" className="hover:text-brightColor text-white font-normal text-base">Suppositories Manufacturers ›</Link></li>
                        <li><Link to="#" className="hover:text-brightColor text-white font-normal text-base">Injections Manufacturing ›</Link></li>
                        <li><Link to="#" className="hover:text-brightColor text-white font-normal text-base">Pharma Manufacturing ›</Link></li>
                        <li><Link to="#" className="hover:text-brightColor text-white font-normal text-base">Veterinary Medicine ›</Link></li>
                    </ul>
                </div>

                <div className="space-y-2 mb-8">
                    <h2 className="text-xl font-bold">Address</h2>
                    <iframe
                        src={footer.locationUrl}
                        className='w-full h-52 border-none rounded-lg'
                        allowFullScreen=''
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                    ></iframe>
                </div>
            </div>

            <div className='bg-gray-900 text-gray-500'>
                <p className='text-center py-4'>
                    {footer.copyRight.text1}
                    <a
                        href={footer.copyRight.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-hoverColor mx-2'
                    >
                        {footer.copyRight.text2}
                    </a>
                    {footer.copyRight.text3}
                </p>
            </div>
        </footer>
    );
};

export default FooterOne;
