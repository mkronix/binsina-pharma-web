import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Banner from "../../components/Banner";
import data from "../../data/data.json";
import WhyChooseUs from "../../components/WhyChooseUs";

const index = () => {
  const { aboutus } = data.binsinaPharma;

  return (
    <>
      <Banner heading={aboutus.bannerHeading} title={aboutus.bannerTitle} />

      <div className='flex flex-col lg:flex-row justify-between items-center gap-5 lg:px-16 px-8 py-16 md:py-20 '>
        <div className='w-full lg:w-3/4 space-y-6'>
          <Heading title={aboutus.firstHeroSection.heading} align='start' />

          {aboutus.firstHeroSection.content?.map((content) => (
            <Paragraph title={content.description} key={content.id} />
          ))}
        </div>

        <div className='w-full lg:w-[50%]'>
          <img
            className='object-cover rounded-lg'
            src={aboutus.firstHeroSection.image}
            alt='Pharmaceutical innovation'
          />
        </div>
      </div>

      <WhyChooseUs />

      <div className='bg-gray-50 lg:px-16 px-8 py-16 md:py-20'>
        <div className=''>
          {/* Main Layout: Image and Content */}
          <div className='flex flex-col-reverse md:flex-row gap-8'>
            {/* Left Image */}
            <div className='w-full lg:w-[50%]'>
              <img
                src={aboutus.secondSection.image}
                alt='About Us'
                className='rounded-lg shadow-xl w-full'
              />
            </div>

            {/* Right Content */}
            <div className='lg:w-3/4 space-y-6'>
              <Heading title={aboutus.secondSection.heading} align='start' />

              {aboutus.secondSection.content?.map((content) => (
                <Paragraph title={content.description} key={content.id} />
              ))}
            </div>
          </div>

          {/* Cards Section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12'>
            {aboutus.secondSection.cardsSectionData.map((card, index) => (
              <div key={index} className='bg-white p-6 rounded-lg shadow'>
                <h3 className='font-bold text-brightColor mb-2'>
                  {card.title}
                </h3>
                <p className='text-gray-600 text-sm'>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default index;
