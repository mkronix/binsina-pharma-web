import Slider from "../../components/Slider";
import data from "../../data/data.json";
import Testimonials from "../../components/Testimonals";
import FeatureSection from "../../components/FeatureSection";

const index = () => {
  const { home } = data.binsinaPharma;

  return (
    <>
      <div className="pt-16 lg:pt-36">
        <Slider />
      </div>
      <FeatureSection />
      {/* Hero Section */}
      <div className="relative bg-gray-50 px-8 lg:px-16 py-16">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            {home.heroSection.heading1}
          </h1>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {home.heroSection.content?.map((content) => (
            <div
              key={content.id}
              className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="w-28 h-28 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={content.image}
                  alt={`Content ${content.id}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <p
                className="text-gray-500 text-start text-base leading-relaxed line-clamp-3 sm:line-clamp-4"
              >
                {content.description}
              </p>

            </div>
          ))}
        </div>
      </div>



      {/* Features Section */}
      <div className='bg-white lg:px-16 px-8 py-16'>

        <h2 className='mb-6 text-center text-3xl md:text-4xl font-bold leading-tight'>{home.features.heading}</h2>
        <div className="flex flex-col-reverse md:flex-row gap-8">
          <div className='w-full flex flex-col gap-4'>
            <img
              className='object-cover rounded-lg'
              src={home.sliderData[0].image}
              alt='Pharmaceutical innovation'
            />
            <img
              className='object-cover rounded-lg'
              src={home.sliderData[1].image}
              alt='Pharmaceutical innovation'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-center'>
            {home.features.content.map((feature) => (
              <div
                key={feature.id}
                className='flex flex-col  gap-3 shadow-md p-6 rounded-lg'
              >
                <div className='flex items-end gap-1'>
                  {/* <div className='title'>{feature.icon}</div> */}
                  <h3 className='text-xl font-semibold'>
                    {feature.title}
                  </h3>
                </div>
                <p className='text-gray-500 text-start text-base leading-relaxed line-clamp-3 sm:line-clamp-4'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='container mx-auto lg:px-16 px-8 py-16 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold leading-tight mb-10'>{home.whyChooseUs.heading}</h2>
        <div className='grid lg:grid-cols-3 gap-8'>
          {home.whyChooseUs.content.map((item, index) => (
            <div key={index} className='bg-white p-8 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-4'>{item.title}</h3>
              <p className='text-gray-500 text-start text-base leading-relaxed line-clamp-3 sm:line-clamp-4'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className='bg-blue-50 lg:px-16 px-8 py-16'>
        <h2 className='text-3xl md:text-4xl font-bold leading-tight mb-10 text-center'>{home.categories.heading}</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
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
      {/* <div className='relative w-full h-[400px]'>
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
      </div> */}
    </>
  );
};

export default index;
