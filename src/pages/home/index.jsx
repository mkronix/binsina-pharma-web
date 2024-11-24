import Slider from "../../components/Slider";
import data from "../../data/data.json";
import Testimonials from "../../components/Testimonals";
import img from "../../assets/img/immunization.png";

const index = () => {
  const { home } = data.binsinaPharma;

  return (
    <>
      <Slider />

      {/* Hero Section */}
      <div className='flex flex-col lg:flex-row justify-between items-center lg:px-16 px-8 py-16 gap-8'>
        <div className='w-full lg:w-3/4 space-y-6'>
          <h1 className='heading'>
            Leading Pharmaceutical Exporter in India
          </h1>
          <p className='text-justify lg:text-start text-gray-700 description'>
            Binsina Pharma is a premier pharmaceutical export company dedicated
            to delivering high-quality healthcare solutions worldwide. By
            sourcing products from WHO-GMP-certified manufacturers, we ensure
            that all our offerings meet stringent international standards.
          </p>
          <p className='text-justify lg:text-start text-gray-700 description'>
            Our mission is to bridge the global gap in healthcare by offering
            affordable, innovative, and reliable solutions to healthcare
            providers, enabling better patient outcomes globally.
          </p>
          <p className='text-justify lg:text-start text-gray-700 description'>
            With years of expertise and a commitment to excellence, we are proud
            to be the trusted partner for countless healthcare professionals,
            institutions, and distributors around the world.
          </p>
        </div>
        <div className='w-full lg:w-[40%]'>
          <img
            className='object-cover rounded-lg'
            src={img}
            alt='Pharmaceutical innovation'
          />
        </div>
      </div>

      {/* Features Section */}
      <div className='bg-white lg:px-16 px-8 py-16'>
        <h2 className='heading mb-10 text-center'>
          Our Speciality
        </h2>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
          {home.features.map((feature) => (
            <div
              key={feature.id}
              className='flex flex-col gap-2 shadow-md p-6 rounded-lg'
            >
              <div className='flex items-end gap-1'>
                <div className='title'>{feature.icon}</div>
                <h3 className='title font-semibold text-gray-800'>
                  {feature.title}
                </h3>
              </div>
              <p className='text-gray-500 text-start description'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='container mx-auto lg:px-16 px-8 py-16 text-center'>
        <h2 className='heading mb-10'>
          Why Choose Us?
        </h2>
        <div className='grid lg:grid-cols-3 gap-8'>
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
            <div
              key={index}
              className='bg-white p-8 rounded-lg shadow-md'
            >
              <h3 className='title text-brightColor mb-4'>
                {item.title}
              </h3>
              <p className='text-gray-600 description'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className='bg-blue-50 lg:px-16 px-8 py-16'>
        <h2 className='heading mb-10 text-center'>
          Best Categories
        </h2>
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {home.categories.map((category) => (
            <div
              key={category.id}
              className='relative group overflow-hidden rounded-lg'
            >
              <img
                src={category.image}
                alt={category.title}
                className='w-full h-full object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105 opacity-80 group-hover:opacity-60'
              />
              <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'>
                <div className='text-center text-white'>
                  <h3 className='text-2xl font-semibold'>{category.title}</h3>
                  <p className='text-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
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
      <div className='relative w-full h-[400px]'>
        <img
          src={home.blogBanner.image}
          alt='Blog Banner'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center text-white'>
          <div className='space-y-4'>
            <h2 className='text-4xl font-bold'>
              {home.blogBanner.firstTitle} <br /> {home.blogBanner.secondTitle}
            </h2>
            <a
              href='/blog'
              className='inline-block bg-backgroundColor text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-hoverColor transition duration-300'
            >
              {home.blogBanner.buttonText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
