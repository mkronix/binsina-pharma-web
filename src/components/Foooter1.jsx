import React from 'react';
import { Link } from 'react-router-dom';
import data from "../data/data.json";
const FooterOne = () => {
    const { footer } = data.binsinaPharma;
    const { common } = data.binsinaPharma;
    return (
        <footer className="bg-backgroundColor text-white-800 pt-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* About Section */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-black">About Us</h2>
                    <p className="text-sm">
                        Binisana is a Generic pharmaceutical contract manufacturer. Binisana
                        offers a range of high-quality generic medicines and is continually
                        developing and expanding the product offering.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-2">
                    <h2 className="text-lg font-semibold">Quick Links</h2>
                    <ul className="space-y-1">
                        <li><Link to="/aboutus" className="hover:text-brightColor">About Us</Link></li>
                        <li><Link to="/products" className="hover:text-brightColor">Products</Link></li>
                        <li><Link to="/news-and-media" className="hover:text-brightColor">News</Link></li>
                        <li><Link to="/news-and-media" className="hover:text-brightColor">Media</Link></li>
                        <li><Link to="/quality-assurance" className="hover:text-brightColor">Quality Assurance</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="space-y-2">
                    <h2 className="text-lg font-semibold">Services</h2>
                    <ul className="space-y-1">
                        <li><Link to="#" className="hover:text-brightColor">Tablet Manufacturing</Link></li>
                        <li><Link to="#" className="hover:text-brightColor">Nutraceuticals Manufacturing</Link></li>
                        <li><Link to="#" className="hover:text-brightColor">Generic Medicine</Link></li>
                        <li><Link to="#" className="hover:text-brightColor">Suppositories Manufacturers</Link></li>
                        <li><Link to="#" className="hover:text-brightColor">Injections Manufacturing</Link></li>
                        <li><Link to="#" className="hover:text-brightColor">Pharma Manufacturing</Link></li>
                        <li><Link to="#" className="hover:text-brightColor">Veterinary Medicine</Link></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Address</h2>
                    <iframe
                        src={footer.locationUrl}
                        className='w-full h-72 border-none rounded-lg'
                        allowFullScreen=''
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                    ></iframe>
                </div>
            </div>

            <div className='flex items-center justify-center my-5'>
                {footer.contactDetails.map((item, index) => (
                    <div className='flex items-center' key={index}>
                        <span className='title mr-4'>{item.icon}</span>
                        {item.link ? (
                            <a href={item.link} className='description text-gray-600'>
                                {item.text}
                            </a>
                        ) : (
                            <p className='text-gray-600 description'>{item.text}</p>
                        )}
                    </div>
                ))}
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
