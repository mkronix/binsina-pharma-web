import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Banner from "../../components/Banner";
import data from "../../data/data.json";

const index = () => {
  const { about } = data.binsinaPharma;

  return (
    <>
      <Banner heading='About Us' title='about' />

      <div className='flex flex-col lg:flex-row justify-between items-center gap-5 lg:px-16 px-8 py-16 md:py-20 '>
        <div className='w-full lg:w-3/4 space-y-6'>
          <Heading title={about.firstHeroSection.heading} align='start' />

          {about.firstHeroSection.content?.map((content) => (
            <Paragraph title={content.description} key={content.id} />
          ))}
        </div>

        <div className='w-full lg:w-[50%]'>
          <img
            className='object-cover rounded-lg'
            src={about.firstHeroSection.image}
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
                src={about.secondSection.image}
                alt='About Us'
                className='rounded-lg shadow-xl w-full'
              />
            </div>

            {/* Right Content */}
            <div className='lg:w-3/4 space-y-6'>
              <Heading title={about.secondSection.heading} align='start' />

              {about.secondSection.content?.map((content) => (
                <Paragraph title={content.description} key={content.id} />
              ))}
            </div>
          </div>

          {/* Cards Section */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12'>
            {about.secondSection.cardsSectionData.map((card, index) => (
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

      <section id='whyUs' className='lg:px-16 px-8 py-16 md:py-20'>
        <div className='text-center'>
          <Heading title={about.whyChooseUs.heading} />
          <div className='grid lg:grid-cols-3 gap-8 mt-3'>
            {about.whyChooseUs.content.map((item, index) => (
              <div key={index} className='bg-white p-6 rounded-lg shadow'>
                <h3 className='text-xl font-semibold text-brightColor mb-4'>
                  {item.title}
                </h3>
                <p className='text-gray-600 max-md:text-xs'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
