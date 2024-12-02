import Banner from "../../components/Banner";
import data from "../../data/data.json";
import BorderTitle from "../../components/BorderTitle";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";

const index = () => {
  const { qualityAssurance } = data.binsinaPharma;

  return (
    <>
      <Banner
        heading={qualityAssurance.bannerHeading}
        title={qualityAssurance.bannerTitle}
        backgroundImage={qualityAssurance.bannerImage}
      />

      <section className='md:px-16 px-6 md:pt-28 pt-12'>
        <div className='flex flex-col md:flex-row items-start gap-16'>
          {/* Left Image Section */}
          <div className='w-full md:w-1/2 relative flex flex-col space-y-4'>
            <img
              src={
                "https://cdn.pixabay.com/photo/2023/12/11/11/32/ai-generated-8443395_1280.jpg"
              }
              alt='Truck'
              className='w-[600px] max-lg:w-full h-[500px] max-lg:h-auto object-cover rounded-md shadow-lg'
            />
          </div>

          {/* Right Info Section */}
          <div className='w-full md:w-1/2'>
            <div className='space-y-6'>
              <BorderTitle title='Our Values' />
              <Heading title='Ruchi Cargo Agency' align='start' />
              <Paragraph
                title='Ruchi Cargo Agency was established and promoted by a group of
              shipping professionals, and are in the prime business of Shipping
              Agency, Customs Broking, Freight Forwarding, Stevedoring, Vessel
              Agency, and Chartering Agency Project cargo operator, Liasoning
              Agent.'
              />
            </div>
            <div className='mt-8 flex gap-10'>
              <ul className='space-y-2'>
                <li className='flex items-center'>
                  <span className='text-text-color text-base mr-2 bg-teal-500 w-6 h-6 flex items-center justify-center rounded-full text-white'>
                    ✔
                  </span>
                  <span className='text-gray-800 font-semibold'>
                    CUSTOM CLEARING
                  </span>
                </li>
                <li className='flex items-center'>
                  <span className='text-text-color text-base mr-2 bg-pink-500 w-6 h-6 flex items-center justify-center rounded-full text-white'>
                    ✔
                  </span>
                  <span className='text-gray-800 font-semibold'>
                    SEA FREIGHT
                  </span>
                </li>
                <li className='flex items-center'>
                  <span className='text-text-color text-base mr-2 bg-yellow-500 w-6 h-6 flex items-center justify-center rounded-full text-white'>
                    ✔
                  </span>
                  <span className='text-gray-800 font-semibold'>
                    AIR FREIGHT
                  </span>
                </li>
                <li className='flex items-center'>
                  <span className='text-text-color text-base mr-2 bg-blue-500 w-6 h-6 flex items-center justify-center rounded-full text-white'>
                    ✔
                  </span>
                  <span className='text-gray-800 font-semibold'>
                    AIR FREIGHT
                  </span>
                </li>
                <li className='flex items-center'>
                  <span className='text-text-color text-base mr-2 bg-indigo-500 w-6 h-6 flex items-center justify-center rounded-full text-white'>
                    ✔
                  </span>
                  <span className='text-gray-800 font-semibold'>
                    AIR FREIGHT
                  </span>
                </li>
              </ul>
            </div>
            <Paragraph
              title='Ruchi Cargo Agency was established and promoted by a group of
              shipping professionals, and are in the prime business of Shipping
              Agency.'
              className='mt-4'
            />
          </div>
        </div>
      </section>

      <section className='md:px-16 px-6 md:py-28 py-12'>
        <div className='flex flex-col md:flex-row-reverse items-start gap-16'>
          {/* Left Image Section */}
          <div className='w-full md:w-1/2 relative flex flex-col space-y-4'>
            <img
              src={
                "https://cdn.pixabay.com/photo/2023/12/11/11/32/ai-generated-8443395_1280.jpg"
              }
              alt='Truck'
              className='w-[600px] max-lg:w-full h-[500px] max-lg:h-auto object-cover rounded-md shadow-lg'
            />
          </div>

          {/* Right Info Section */}
          <div className='w-full md:w-1/2'>
            <div className='space-y-6'>
              <BorderTitle title='Our Values' />
              <Heading title='Ruchi Cargo Agency' align='start' />
              <Paragraph
                title='Ruchi Cargo Agency was established and promoted by a group of
              shipping professionals, and are in the prime business of Shipping
              Agency, Customs Broking, Freight Forwarding, Stevedoring, Vessel
              Agency, and Chartering Agency Project cargo operator, Liasoning
              Agent.'
              />
            </div>
            <div className='mt-8 flex gap-10'>
              <ul className='space-y-2'>
                <li className='flex items-center'>
                  <span className='text-text-color text-base mr-2 bg-teal-500 w-6 h-6 flex items-center justify-center rounded-full text-white'>
                    ✔
                  </span>
                  <span className='text-gray-800 font-semibold'>
                    CUSTOM CLEARING
                  </span>
                </li>
                <li className='flex items-center'>
                  <span className='text-text-color text-base mr-2 bg-pink-500 w-6 h-6 flex items-center justify-center rounded-full text-white'>
                    ✔
                  </span>
                  <span className='text-gray-800 font-semibold'>
                    SEA FREIGHT
                  </span>
                </li>
                <li className='flex items-center'>
                  <span className='text-text-color text-base mr-2 bg-yellow-500 w-6 h-6 flex items-center justify-center rounded-full text-white'>
                    ✔
                  </span>
                  <span className='text-gray-800 font-semibold'>
                    AIR FREIGHT
                  </span>
                </li>
                <li className='flex items-center'>
                  <span className='text-text-color text-base mr-2 bg-blue-500 w-6 h-6 flex items-center justify-center rounded-full text-white'>
                    ✔
                  </span>
                  <span className='text-gray-800 font-semibold'>
                    AIR FREIGHT
                  </span>
                </li>
                <li className='flex items-center'>
                  <span className='text-text-color text-base mr-2 bg-indigo-500 w-6 h-6 flex items-center justify-center rounded-full text-white'>
                    ✔
                  </span>
                  <span className='text-gray-800 font-semibold'>
                    AIR FREIGHT
                  </span>
                </li>
              </ul>
            </div>
            <Paragraph
              title='Ruchi Cargo Agency was established and promoted by a group of
              shipping professionals, and are in the prime business of Shipping
              Agency.'
              className='mt-4'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
