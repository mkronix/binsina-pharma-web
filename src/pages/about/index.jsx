import img from "../../assets/img/immunization.png";
import img2 from "../../assets/img/blog/blog6.jpg";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Banner from "../../components/Banner";

const index = () => {
  const cardsSectionData = [
    {
      title: "Our Mission",
      description: "To ensure global access to quality and affordable healthcare solutions.",
    },
    {
      title: "Our Vision",
      description: "To be a trusted name in the pharmaceutical export industry, driving innovation and excellence.",
    },
    {
      title: "Core Values",
      description: "Quality, Integrity, Sustainability, and Innovation.",
    },
    {
      title: "Global Reach",
      description: "Serving healthcare providers across continents with reliable and timely delivery.",
    },
  ];

  const whyChooseUsData = [
    {
      title: "Quality Assurance",
      description: "Every product we deliver undergoes rigorous quality checks, ensuring top-notch standards.",
    },
    {
      title: "Global Network",
      description: "Extensive experience in supplying pharmaceutical products to over 50 countries worldwide.",
    },
    {
      title: "Dedicated Support",
      description: "A team of professionals ready to assist you at every stage of the process.",
    },
  ];

  return (
    <>
      <Banner heading='About Us' title='about' />

      <div className='flex flex-col lg:flex-row justify-between items-center gap-5 lg:px-16 px-8 py-16 md:py-20 '>
        <div className='w-full lg:w-3/4 space-y-6'>
          <Heading
            title='Leading Pharmaceutical Exporter in India'
            align='start'
          />
          <Paragraph
            title='Binsina Pharma is a premier pharmaceutical export company dedicated
            to delivering high-quality healthcare solutions worldwide. By
            sourcing products from WHO-GMP-certified manufacturers, we ensure
            that all our offerings meet stringent international standards.'
          />

          <Paragraph
            title='Our mission is to bridge the global gap in healthcare by offering
            affordable, innovative, and reliable solutions to healthcare
            providers, enabling better patient outcomes globally.'
          />

          <Paragraph
            title='With years of expertise and a commitment to excellence, we are proud
            to be the trusted partner for countless healthcare professionals,
            institutions, and distributors around the world.'
          />
        </div>
        <div className='w-full lg:w-[50%]'>
          <img
            className='object-cover rounded-lg'
            src={img}
            alt='Pharmaceutical innovation'
          />
        </div>
      </div>
      <div className='bg-gray-50 lg:px-16 px-8 py-16 md:py-20'>
        <div className=''>
          {/* Main Layout: Image and Content */}
          <div className='flex flex-col-reverse md:flex-row gap-8'>
            {/* Left Image */}
            <div className='w-full lg:w-[50%]'>
              <img
                src={img2}
                alt='About Us'
                className='rounded-lg shadow-xl w-full'
              />
            </div>

            {/* Right Content */}
            <div className='lg:w-3/4 space-y-6'>
              <Heading title='About Binsina Pharma Export' align='start' />
              <Paragraph
                title='With a comprehensive portfolio of high-quality pharmaceutical products, we serve diverse healthcare needs across continents. Our commitment to excellence ensures that each product undergoes rigorous quality control, meeting the stringent requirements of international markets.'
              />
              <Paragraph
                title='Our state-of-the-art facilities and expert team enable us to cater to the ever-evolving demands of the healthcare industry. From lifesaving medicines to over-the-counter products, we are dedicated to delivering value and reliability at every step.'
              />
              <Paragraph
                title='Sustainability and innovation are at the core of our business operations. We continuously invest in research and development, fostering advancements in pharmaceuticals while ensuring eco-friendly practices in production and distribution.'
              />
            </div>
          </div>

          {/* Cards Section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12'>
            {cardsSectionData.map((card, index) => (
              <div key={index} className='bg-white p-6 rounded-lg shadow'>
                <h3 className='font-bold text-brightColor mb-2'>{card.title}</h3>
                <p className='text-gray-600 text-sm'>{card.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <section id='whyUs' className='lg:px-16 px-8 py-16 md:py-20'>
        <div className='text-center'>
          <Heading title='Why Choose Us?' />
          <div className='grid lg:grid-cols-3 gap-8 mt-3'>
            {whyChooseUsData.map((item, index) => (
              <div key={index} className='bg-white p-6 rounded-lg shadow'>
                <h3 className='text-xl font-semibold text-brightColor mb-4'>
                  {item.title}
                </h3>
                <p className='text-gray-600 max-md:text-xs'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default index;
