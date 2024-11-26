import img from "../../assets/img/immunization.png";
import img2 from "../../assets/img/blog/blog6.jpg";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Banner from "../../components/Banner";

const index = () => {
  return (
    <>
      <Banner heading='About Us' title='about' />

      <div className='flex flex-col lg:flex-row justify-between items-center gap-5 lg:px-16 px-8 py-16 md:py-20 border border-red-600'>
        <div className='w-full lg:w-3/4 space-y-6 border border-green-400'>
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
        <div className='w-full lg:w-[40%]'>
          <img
            className='object-cover rounded-lg'
            src={img}
            alt='Pharmaceutical innovation'
          />
        </div>
      </div>

      {/* <div className=' bg-gray-50 lg:px-16 px-8 py-16 md:py-20'>
        <div className='container mx-auto px-6'>
          <div className='flex flex-col-reverse md:flex-row items-center gap-8'>
            <div className='md:w-1/2'>
              <img src={img2} alt='About Us' className='rounded-lg shadow-xl' />
            </div>
            <div className='md:w-1/2 md:pl-12 space-y-6'>
              <Heading title='About Binsina Pharma Export' align='start' />
              <Paragraph
                title='At Binsina Pharma, we take pride in being a leader in the global
                pharmaceutical market. We are committed to offering solutions
                that enhance healthcare accessibility and quality, maintaining
                strict adherence to international regulatory standards.'
              />

              <Paragraph
                title='At Binsina Pharma, we take pride in being a leader in the global
                pharmaceutical market. We are committed to offering solutions
                that enhance healthcare accessibility and quality, maintaining
                strict adherence to international regulatory standards.'
              />

              <Paragraph
                title='By combining cutting-edge innovation with customer-centric
                values, we aim to create a healthier future for communities
                worldwide.'
              />

              <div className='grid grid-cols-2 gap-4'>
                <div className='bg-white md:p-6  p-3 rounded-lg shadow'>
                  <h3 className='font-bold text-brightColor mb-2'>
                    Our Mission
                  </h3>
                  <p className='text-gray-600 max-md:text-xs'>
                    To ensure global access to quality and affordable healthcare
                    solutions.
                  </p>
                </div>
                <div className='bg-white md:p-6 p-3 rounded-lg shadow'>
                  <h3 className='font-bold text-brightColor mb-2'>
                    Our Vision
                  </h3>
                  <p className='text-gray-600 max-md:text-xs'>
                    To be a trusted name in the pharmaceutical export industry,
                    driving innovation and excellence.
                  </p>
                </div>
                <div className='bg-white md:p-6 p-3 rounded-lg shadow'>
                  <h3 className='font-bold text-brightColor mb-2'>
                    Core Values
                  </h3>
                  <p className='text-gray-600 max-md:text-xs'>
                    Quality, Integrity, Sustainability, and Innovation.
                  </p>
                </div>
                <div className='bg-white md:p-6 p-3 rounded-lg shadow'>
                  <h3 className='font-bold text-brightColor mb-2'>
                    Global Reach
                  </h3>
                  <p className='text-gray-600 max-md:text-xs'>
                    Serving healthcare providers across continents with reliable
                    and timely delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className='bg-gray-50 lg:px-16 px-8 py-16 md:py-20'>
        <div className='container mx-auto px-6'>
          {/* Main Layout: Image and Content */}
          <div className='flex flex-col md:flex-row items-center gap-8'>
            {/* Left Image */}
            <div className='md:w-1/2'>
              <img
                src={img2}
                alt='About Us'
                className='rounded-lg shadow-xl w-full'
              />
            </div>

            {/* Right Content */}
            <div className='md:w-1/2 md:pl-12 space-y-6'>
              <Heading title='About Binsina Pharma Export' align='start' />
              <Paragraph
                title='At Binsina Pharma, we take pride in being a leader in the global
          pharmaceutical market. We are committed to offering solutions
          that enhance healthcare accessibility and quality, maintaining
          strict adherence to international regulatory standards.'
              />
              <Paragraph
                title='By combining cutting-edge innovation with customer-centric
          values, we aim to create a healthier future for communities
          worldwide.'
              />
            </div>
          </div>

          {/* Cards Section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12'>
            <div className='bg-white p-6 rounded-lg shadow'>
              <h3 className='font-bold text-brightColor mb-2'>Our Mission</h3>
              <p className='text-gray-600 text-sm'>
                To ensure global access to quality and affordable healthcare
                solutions.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow'>
              <h3 className='font-bold text-brightColor mb-2'>Our Vision</h3>
              <p className='text-gray-600 text-sm'>
                To be a trusted name in the pharmaceutical export industry,
                driving innovation and excellence.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow'>
              <h3 className='font-bold text-brightColor mb-2'>Core Values</h3>
              <p className='text-gray-600 text-sm'>
                Quality, Integrity, Sustainability, and Innovation.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow'>
              <h3 className='font-bold text-brightColor mb-2'>Global Reach</h3>
              <p className='text-gray-600 text-sm'>
                Serving healthcare providers across continents with reliable and
                timely delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section id='whyUs' className='md:pt-20 pt-10'>
        <div className='container mx-auto px-6 text-center'>
          <Heading title='Why Choose Us?' />
          <div className='grid lg:grid-cols-3 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow'>
              <h3 className='text-xl font-semibold text-brightColor mb-4'>
                Quality Assurance
              </h3>
              <p className='text-gray-600 max-md:text-xs'>
                Every product we deliver undergoes rigorous quality checks,
                ensuring top-notch standards.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow'>
              <h3 className='text-xl font-semibold text-brightColor mb-4'>
                Global Network
              </h3>
              <p className='text-gray-600 max-md:text-xs'>
                Extensive experience in supplying pharmaceutical products to
                over 50 countries worldwide.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow'>
              <h3 className='text-xl font-semibold text-brightColor mb-4'>
                Dedicated Support
              </h3>
              <p className='text-gray-600 max-md:text-xs'>
                A team of professionals ready to assist you at every stage of
                the process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
