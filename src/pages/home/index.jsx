import Slider from "../../components/Slider";
import data from "../../data/data.json";
import Testimonials from "../../components/Testimonals";

const index = () => {
  const { home } = data.binsinaPharma;

  return (
    <>
      <Slider />

      {/* Hero Section */}
      <div className='flex flex-col lg:flex-row justify-between items-center lg:px-16 px-8 py-16 gap-8'>
        <div className='w-full lg:w-3/4 space-y-6'>
          <h1 className='heading'>{home.heroSection.heading1}</h1>
          <h1 className='heading'>{home.heroSection.heading2}</h1>

          {home.heroSection.content?.map((content) => (
            <p
              key={content.id}
              className='text-justify lg:text-start text-gray-700 description'
            >
              {content.description}
            </p>
          ))}
        </div>
        <div className='w-full lg:w-[40%]'>
          <img
            className='object-cover rounded-lg'
            src={home.heroSection.image}
            alt='Pharmaceutical innovation'
          />
        </div>
      </div>

      {/* Features Section */}
      <div className='bg-white lg:px-16 px-8 py-16'>
        <h2 className='heading mb-10 text-center'>{home.features.heading}</h2>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center'>
          {home.features.content.map((feature) => (
            <div
              key={feature.id}
              className='flex flex-col  gap-3 shadow-md p-6 rounded-lg'
            >
              <div className='flex items-end gap-1'>
                <div className='title'>{feature.icon}</div>
                <h3 className='title font-semibold text-gray-800'>
                  {feature.title}
                </h3>
              </div>
              <p className='text-gray-500 text-start description'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='container mx-auto lg:px-16 px-8 py-16 text-center'>
        <h2 className='heading mb-10'>{home.whyChooseUs.heading}</h2>
        <div className='grid lg:grid-cols-3 gap-8'>
          {home.whyChooseUs.content.map((item, index) => (
            <div key={index} className='bg-white p-8 rounded-lg shadow-md'>
              <h3 className='title text-brightColor mb-4'>{item.title}</h3>
              <p className='text-gray-600 description'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className='bg-blue-50 lg:px-16 px-8 py-16'>
        <h2 className='heading mb-10 text-center'>{home.categories.heading}</h2>
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {home.categories.content.map((category) => (
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
                    {category.buttonText}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Testimonials />

      {/* News And Media Banner */}
      <div className='relative w-full h-[400px]'>
        <img
          src={home.newsAndMedia.image}
          alt='Blog Banner'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center text-white'>
          <div className='space-y-4'>
            <h2 className='text-4xl font-bold'>
              {home.newsAndMedia.firstTitle} <br />{" "}
              {home.newsAndMedia.secondTitle}
            </h2>
            <a
              href={home.newsAndMedia.link}
              className='inline-block bg-backgroundColor text-white px-6 py-3 rounded-md font-semibold text-lg hover:bg-hoverColor transition duration-300'
            >
              {home.newsAndMedia.buttonText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
