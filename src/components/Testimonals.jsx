import React from 'react'
import { testimonials } from '../data/testinmonal'
import { motion } from 'framer-motion'
const Testimonals = () => {
    return (
        <section id="testimonials" className="my-16  flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
            <div className="container mx-auto">
                <h2 className="md:text-4xl text-2xl font-semibold text-start text-brightColor">What Our Clients Say</h2>
                <div className="mt-6 grid md:grid-cols-3 grid-cols-1 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-6 rounded-lg shadow-lg"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={`https://${testimonial.image}`}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="ml-4">
                                    <h4 className="font-semibold">{testimonial.name}</h4>
                                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-700">{testimonial.content}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonals