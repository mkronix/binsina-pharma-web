import Banner from "../../components/Banner";
import ServicesCard from "../../layouts/ServicesCard";
import data from "../../data/data.json";
import Button from "../../components/Button/Button";

const index = () => {
  const { qualityAssurance } = data.binsinaPharma;

  return (
    <>
      <Banner
        heading={qualityAssurance.bannerHeading}
        title={qualityAssurance.bannerTitle}
        backgroundImage={qualityAssurance.bannerImage}
      />
      <div className='bg-gray-50 flex flex-col gap-10 py-16'>
        {qualityAssurance.content.map((service, index) => (
          <ServicesCard
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
            description1={service.description1}
            description2={service.description2}
            description3={service.description3}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>

      <section className='bg-white pt-40 py-16 px-4 md:px-16 max-md:pt-80'>
        <div className='flex flex-col md:flex-row items-center'>
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
    </>
  );
};

export default index;
