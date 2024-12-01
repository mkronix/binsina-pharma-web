import BorderTitle from "../../components/BorderTitle";
import Button from "../../components/Button/Button";
import CardParagraph from "../../components/CardParagraph";
import CardTitle from "../../components/CardTitle";
import FAQSection from "../../components/FAQSection";
import FeatureSection from "../../components/FeatureSection";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Slider from "../../components/Slider";
import Testimonials from "../../components/Testimonals";
import WhyChooseUs from "../../components/WhyChooseUs";
import data from "../../data/data.json";

const index = () => {
  const { home } = data.binsinaPharma;
  return (
    <>
      {/* Slider */}
      <div className='pt-16 lg:pt-36'>
        <Slider />
      </div>

      {/* Feature Section */}
      <FeatureSection />

      {/* Our Speciality Section */}
      <div className='md:px-16 px-6 md:py-28 py-12 '>
        <div className='flex flex-col md:flex-row items-center gap-16'>
          {/* Left Section: Image */}
          <div className='relative w-full md:w-1/2'>
            <img
              src='https://via.placeholder.com/300' // Replace with your image URL
              alt='Speciality Section'
              className='w-full rounded-lg shadow-md'
            />
          </div>

          {/* Right Section: Content */}
          <div className='w-full md:w-1/2 text-center md:text-left'>
            <BorderTitle title={home.features.heading} className='mb-2' />
            <Heading
              title='Discover Our Specialities'
              className='mb-4'
              align='start'
            />
            <Paragraph
              title='We are dedicated to providing services and products that stand out
              for their quality and reliability.'
              className='mb-6'
            />
            <div className='grid grid-cols-2 gap-6 mb-6'>
              {home.features.content.map((feature) => (
                <div
                  key={feature.id}
                  className='flex flex-col items-center md:items-start gap-2'
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className='w-12 h-12'
                  />
                  <CardTitle title={feature.title} />
                  <CardParagraph description={feature.description} />
                </div>
              ))}
            </div>
            <Button title='Learn More' />
          </div>
        </div>
      </div>

      <section className='bg-white pt-40 py-16 px-4 md:px-16 max-md:pt-80'>
        <div className='container mx-auto flex flex-col md:flex-row items-center'>
          {/* Left Image Section */}
          <div className='w-full md:w-1/3 relative flex flex-col space-y-4'>
            <img
              src={
                "https://cdn.pixabay.com/photo/2023/12/11/11/32/ai-generated-8443395_1280.jpg"
              }
              alt='Truck'
              className='w-[600px] max-lg:w-full h-[500px] max-lg:h-auto object-cover rounded-md shadow-lg'
            />
            <div className='absolute top-8 left-8 bg-text-color text-white px-4 py-2 rounded-lg text-xl font-bold'>
              22 YEARS EXPERIENCE
            </div>
          </div>

          {/* Right Info Section */}
          <div className='w-full md:w-2/3 md:pl-16 mt-8 md:mt-0'>
            <Button title='ABOUT US' />
            <h3 className='text-4xl text-dark-blue font-bold mt-4'>
              RUCHI CARGO AGENCY
            </h3>
            <p className='mt-4 text-gray-600'>
              Ruchi Cargo Agency was established and promoted by a group of
              shipping professionals, and are in the prime business of Shipping
              Agency, Customs Broking, Freight Forwarding, Stevedoring, Vessel
              Agency, and Chartering Agency Project cargo operator, Liasoning
              Agent.
            </p>
            <div className='mt-8 flex gap-10'>
              <ul className='space-y-2'>
                <li className='flex items-center'>
                  <span className='text-text-color text-lg mr-2'>✔</span>
                  <span className='text-gray-800 font-semibold'>
                    CUSTOM CLEARING
                  </span>
                </li>
                <li className='flex items-center'>
                  <span className='text-text-color text-lg mr-2'>✔</span>
                  <span className='text-gray-800 font-semibold'>
                    SEA FREIGHT
                  </span>
                </li>
                <li className='flex items-center'>
                  <span className='text-text-color text-lg mr-2'>✔</span>
                  <span className='text-gray-800 font-semibold'>
                    AIR FREIGHT
                  </span>
                </li>
                <li className='mt-8'>
                  <Button title='ABOUT MORE' />
                </li>
              </ul>
              <img
                src={
                  "https://cdn.pixabay.com/photo/2023/12/11/11/32/ai-generated-8443395_1280.jpg"
                }
                alt='Port'
                className='w-2/5 h-40 object-cover rounded-md shadow-lg self-end'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <div className='relative bg-gray-50 px-8 lg:px-16 py-16'>
        {/* Main Heading */}
        <div className='text-center mb-12'>
          <Heading title={home.heroSection.heading1} align='start' />
        </div>

        {/* Content Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start'>
          {home.heroSection.content?.map((content) => (
            <div
              key={content.id}
              className='flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
            >
              {/* Image Section */}
              <div className='w-28 h-28 overflow-hidden'>
                <img
                  src={content.image}
                  alt={`Content ${content.id}`}
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Text Section */}
              <CardParagraph description={content.description} />
            </div>
          ))}
        </div>
      </div>

      {/* <div className='bg-white lg:px-16 px-8 py-16'>
        <Heading title={home.features.heading} className='mb-6' />
        <div className='flex flex-col-reverse md:flex-row gap-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-center'>
            {home.features.content.map((feature) => (
              <div
                key={feature.id}
                className='flex flex-col  gap-3 shadow-md p-6 rounded-lg'
              >
                <div className='flex items-center gap-3'>
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className='w-10 h-10'
                  />
                  <h3 className='text-xl font-semibold'>{feature.title}</h3>
                </div>
                <CardParagraph
                  description={feature.description}
                  className='text-start'
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}

      <WhyChooseUs />
      {/* Categories Section */}
      <div className='bg-blue-50 md:px-16 px-6 md:py-28 py-12'>
        <h2 className='text-3xl md:text-4xl font-bold leading-tight mb-10 text-center'>
          {home.categories.heading}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Left card */}
          <div className='relative group overflow-hidden rounded-lg'>
            <img
              src={home.categories.content[0].image}
              alt={home.categories.content[0].title}
              className='w-full h-full object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105 opacity-80 group-hover:opacity-60'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'>
              <div className='text-center text-white'>
                <h3 className='text-2xl font-semibold'>
                  {home.categories.content[0].title}
                </h3>
                <p className='text-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  {home.categories.content[0].buttonText}
                </p>
              </div>
            </div>
          </div>

          {/* Middle cards */}
          <div className='relative flex flex-col space-y-8'>
            {/* Top 2 cards */}
            <div className='grid grid-cols-2 gap-8'>
              {home.categories.content.slice(1, 3).map((category) => (
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
                      <h3 className='text-2xl font-semibold'>
                        {category.title}
                      </h3>
                      <p className='text-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        {category.buttonText}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom card */}
            <div className='relative group overflow-hidden rounded-lg'>
              <img
                src={home.categories.content[3].image}
                alt={home.categories.content[3].title}
                className='w-full h-full object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105 opacity-80 group-hover:opacity-60'
              />
              <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'>
                <div className='text-center text-white'>
                  <h3 className='text-2xl font-semibold'>
                    {home.categories.content[3].title}
                  </h3>
                  <p className='text-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    {home.categories.content[3].buttonText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className='relative group overflow-hidden rounded-lg'>
            <img
              src={home.categories.content[4].image}
              alt={home.categories.content[4].title}
              className='w-full h-full object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105 opacity-80 group-hover:opacity-60'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'>
              <div className='text-center text-white'>
                <h3 className='text-2xl font-semibold'>
                  {home.categories.content[4].title}
                </h3>
                <p className='text-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  {home.categories.content[4].buttonText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />

      <FAQSection />
    </>
  );
};

export default index;
