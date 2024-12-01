import CardParagraph from "../../components/CardParagraph";
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
      <div className='pt-16 lg:pt-36'>
        <Slider />
      </div>
      <FeatureSection />

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

      {/* Features Section */}
      <div className='bg-white lg:px-16 px-8 py-16'>
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
      </div>

      <WhyChooseUs />
      {/* Categories Section */}
      <div className="bg-blue-50 lg:px-16 px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-10 text-center">
          {home.categories.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left card */}
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={home.categories.content[0].image}
              alt={home.categories.content[0].title}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105 opacity-80 group-hover:opacity-60"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <div className="text-center text-white">
                <h3 className="text-2xl font-semibold">{home.categories.content[0].title}</h3>
                <p className="text-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {home.categories.content[0].buttonText}
                </p>
              </div>
            </div>
          </div>

          {/* Middle cards */}
          <div className="relative flex flex-col space-y-8">
            {/* Top 2 cards */}
            <div className="grid grid-cols-2 gap-8">
              {home.categories.content.slice(1, 3).map((category) => (
                <div key={category.id} className="relative group overflow-hidden rounded-lg">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105 opacity-80 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-semibold">{category.title}</h3>
                      <p className="text-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {category.buttonText}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom card */}
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={home.categories.content[3].image}
                alt={home.categories.content[3].title}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105 opacity-80 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-semibold">{home.categories.content[3].title}</h3>
                  <p className="text-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {home.categories.content[3].buttonText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src={home.categories.content[4].image}
              alt={home.categories.content[4].title}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105 opacity-80 group-hover:opacity-60"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <div className="text-center text-white">
                <h3 className="text-2xl font-semibold">{home.categories.content[4].title}</h3>
                <p className="text-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
