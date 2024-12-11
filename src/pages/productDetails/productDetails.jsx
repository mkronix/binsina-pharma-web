import React from 'react';
import medicine from '../../data/medications.json';
import Button from '../../components/Button/Button';

const ProductDetails = () => {
    return (
        <main className='flex justify-center items-center'>
            <div className="container w-full md:max-w-6xl p-6 py-48">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">All Products</h1>
                    <Button title="Download" onClick={() => { }} />
                </header>
                <table className="w-full border-collapse bg-white">
                    <thead className="bg-gradient-to-r from-brightColor to-[#1a1b26]">
                        <tr>
                            <th className="text-white px-4 py-2 border-b border-gray-300 text-left">Sr.No</th>
                            <th className="text-white px-4 py-2 border-b border-gray-300 text-left">Generic Name</th>
                            <th className="text-white px-4 py-2 border-b border-gray-300 text-left">Dosage Forms</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medicine.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="px-4 py-2 border-b border-gray-300">{index + 1}</td>
                                <td className="px-4 py-2 border-b border-gray-300">{item.name}</td>
                                <td className="px-4 py-2 border-b border-gray-300">{item.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default ProductDetails;
