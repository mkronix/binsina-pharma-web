import React from 'react';
import { MdAccessTime, MdBusiness, MdCheckCircle, MdEmail, MdLocationOn } from 'react-icons/md';
import Banner from '../../components/Banner';

const Career = () => {
    const jobs = [
        {
            title: "Graduate Pharmacist (Export & Regulatory Affairs)",
            location: "Mumbai, Maharashtra",
            type: "Full-time-Remote @ Hybrid",
            responsibilities: [
                "Ensure regulatory compliance for pharmaceutical exports",
                "Assist in obtaining certifications (WHO-GMP, FDA approvals)",
                "Prepare and verify export documentation (COA, MSDS, COPP, etc.)",
                "Communicate with international buyers and suppliers",
                "Stay updated on global pharmaceutical regulations"
            ],
            qualifications: [
                "B.Pharm / M.Pharm degree",
                "Knowledge of pharmaceutical exports & international regulatory affairs",
                "Strong communication & documentation skills",
                "Experience with pharma licensing & approvals"
            ]
        },
        {
            title: "Operations/Process Manager – Pharmaceutical Export Business",
            location: "Mumbai, Maharashtra",
            type: "Full-time-Hybrid/Remote",
            responsibilities: [
                "Company Operations: Oversee daily business functions, logistics, and process optimization",
                "Customs & CHA Coordination: Handle customs documentation, clearance procedures, and communication with CHA agents",
                "Finance & Banking: Manage company banking transactions, export payments (LC, TT), and financial planning",
                "Regulatory & Compliance: Ensure adherence to pharma export regulations, DGFT norms, and EXIM policies",
                "Vendor & Supplier Management: Communicate with manufacturers, freight forwarders, and government authorities",
                "Office Administration: Supervise staff, streamline workflow, and improve efficiency"
            ],
            qualifications: [
                "Bachelor's/Master's degree in Business, Pharma, or Supply Chain",
                "3+ years experience in Pharmaceutical Exports/Operations",
                "Strong knowledge of export documentation, customs procedures, and CHA coordination",
                "Experience in handling finance, LC (Letter of Credit), and international banking transactions",
                "Excellent leadership, problem-solving, and negotiation skills"
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            <Banner
                heading={'career'}
                title={'career'}
            />
            <section className="max-w-4xl mx-auto px-4 pt-12">
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <div className="flex items-center mb-4">
                        <MdBusiness className="w-6 h-6 text-brightColor mr-2" />
                        <h2 className="text-2xl font-bold">About Us</h2>
                    </div>
                    <p className="text-gray-700">
                        Binsina Pharma Exports Pvt. Ltd. is a leading pharmaceutical export company, delivering high-quality healthcare products worldwide.
                        We specialize in global regulatory compliance, ensuring smooth pharmaceutical trade across borders.
                    </p>
                </div>
            </section>

            {/* Job Listings */}
            <section className="max-w-4xl mx-auto px-4 pb-12">
                <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
                <div className="grid md:grid-cols-1 gap-8">
                    {jobs.map((job, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                            <h3 className="text-xl font-bold text-brightColor mb-4">{job.title}</h3>

                            <div className="flex flex-wrap gap-4 mb-6">
                                <div className="flex items-center text-gray-600">
                                    <MdLocationOn className="w-5 h-5 mr-2" />
                                    <span>{job.location}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <MdAccessTime className="w-5 h-5 mr-2" />
                                    <span>{job.type}</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="font-semibold text-lg mb-3">Key Responsibilities</h4>
                                <ul className="space-y-2">
                                    {job.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <MdCheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700">{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-6">
                                <h4 className="font-semibold text-lg mb-3">Qualifications & Requirements</h4>
                                <ul className="space-y-2">
                                    {job.qualifications.map((qual, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <MdCheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                            <span className="text-gray-700">{qual}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h4 className="font-semibold text-lg mb-3">How to Apply</h4>
                                <div className="flex items-center text-brightColor">
                                    <MdEmail className="w-5 h-5 mr-2" />
                                    <a href="mailto:director@binsinapharma.com" className="hover:underline">
                                        director@binsinapharma.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Career;