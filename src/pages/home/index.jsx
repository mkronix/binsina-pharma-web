import Slider from "../../components/Slider";
import data from "../../data/data.json";
import Testimonials from "../../components/Testimonals";
import { motion } from "framer-motion";
import img from "../../assets/img/immunization.png";

const index = () => {
  const { home } = data.binsinaPharma;

  return (
    <>
      <Slider />

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-6 pt-16 pb-16 gap-8">
        <div className="w-full lg:w-3/4 space-y-6">
          <h1 className="md:text-4xl text-2xl font-semibold text-start text-brightColor">
            Leading Pharmaceutical Exporter in India
          </h1>
          <p className="text-justify lg:text-start text-gray-700 max-md:text-xs">
            Binsina Pharma is a premier pharmaceutical export company dedicated
            to delivering high-quality healthcare solutions worldwide. By
            sourcing products from WHO-GMP-certified manufacturers, we ensure
            that all our offerings meet stringent international standards.
          </p>
          <p className="text-justify lg:text-start text-gray-700 max-md:text-xs">
            Our mission is to bridge the global gap in healthcare by offering
            affordable, innovative, and reliable solutions to healthcare
            providers, enabling better patient outcomes globally.
          </p>
          <p className="text-justify lg:text-start text-gray-700 max-md:text-xs">
            With years of expertise and a commitment to excellence, we are proud
            to be the trusted partner for countless healthcare professionals,
            institutions, and distributors around the world.
          </p>
        </div>
        <div className="w-full lg:w-[40%]">
          <img
            className="object-cover rounded-lg"
            src={img}
            alt="Pharmaceutical innovation"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white md:p-16 p-6">
        <h2 className="md:text-4xl text-2xl text-center font-bold mb-10 text-brightColor">
          Our Speciality
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {home.features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col gap-2 shadow-md p-6 rounded-lg"
            >
              <div className="flex items-end gap-1">
                <div className="text-4xl text-blue-600">{feature.icon}</div>
                <h3 className="md:text-2xl text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-500 text-start">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="md:text-4xl text-2xl font-bold mb-10 text-brightColor">
          Why Choose Us?
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "Quality Assurance",
              description:
                "Every product we deliver undergoes rigorous quality checks, ensuring top-notch standards.",
            },
            {
              title: "Global Network",
              description:
                "Extensive experience in supplying pharmaceutical products to over 50 countries worldwide.",
            },
            {
              title: "Dedicated Support",
              description:
                "A team of professionals ready to assist you at every stage of the process.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-brightColor mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 max-md:text-xs">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-blue-50 md:p-16 p-6">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {home.categories.map((category) => (
            <div key={category.id} className="relative group">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover rounded-lg transition-opacity duration-300 opacity-80 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                  <p className="text-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Shop Now →
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Testimonials />

      {/* Blog Banner */}
      <div className="relative w-full h-[400px]">
        <img
          src={home.blogBanner.image}
          alt="Blog Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center text-white">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              {home.blogBanner.firstTitle} <br /> {home.blogBanner.secondTitle}
            </h2>
            <a
              href="/blog"
              className="inline-block bg-backgroundColor text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-hoverColor transition duration-300"
            >
              {home.blogBanner.buttonText}
            </a>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="flex max-md:flex-col max-md:gap-4 items-center justify-center md:p-16 p-6 bg-gray-50">
        {/* Contact Info */}
        <div className="w-full md:w-2/6 px-6">
          <h2 className="md:text-3xl text-xl font-bold text-brightColor uppercase">
            Contact Us
          </h2>
          <h1 className="text-3xl font-bold text-brightColor mt-2">
            Have Questions? <br />
          </h1>
          <p className="text-gray-600 mt-4">
            We’re here to help with any inquiries you have. Whether you need
            support, have feedback, or simply want to know more about our
            services, our team is ready to assist.
          </p>
          <button className="mt-6 px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600">
            Get In Touch
          </button>
        </div>
        {/* Contact Details */}
        <div className="w-full md:w-2/6 px-6">
          <div className="space-y-4">
            {[
              { icon: "📞", text: "+91 98921 46706", link: "tel:+919892146706" },
              {
                icon: "⏰",
                text: `Mon-Fri: 9 AM – 6 PM
                Saturday: 9 AM – 4 PM
                Sunday: Closed`,
              },
              {
                icon: "📧",
                text: "info@binsinapharma.com",
                link: "mailto:info@binsinapharma.com",
              },
            ].map((item, index) => (
              <div className="flex items-center" key={index}>
                <span className="text-brightColor text-xl mr-4">{item.icon}</span>
                {item.link ? (
                  <a href={item.link} className="text-gray-600">
                    {item.text}
                  </a>
                ) : (
                  <p className="text-gray-600">{item.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Map */}
        <div className="w-full md:w-2/6 px-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.7920002620153!2d72.8369304!3d19.16058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7b500000000%3A0x476c5d925ddafdb6!2sBinsina%20Pharma%20HQ!5e0!3m2!1sen!2sin!4v1667274849607!5m2!1sen!2sin"
            className="w-full h-72 border-none rounded-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default index;
