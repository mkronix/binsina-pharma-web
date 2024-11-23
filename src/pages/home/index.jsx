import Slider from "../../components/Slider";
import data from "../../data/data.json";
import Testimonials from "../../components/Testimonals";

const index = () => {
  const { home } = data.binsinaPharma;

  return (
    <>
      <Slider />

      {/* features */}
      <div className='bg-white py-10'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
          {home.features.map((feature) => (
            <div key={feature.id} className='space-y-3'>
              <div className='text-4xl text-blue-600'>{feature.icon}</div>
              <h3 className='text-xl font-semibold text-gray-800'>
                {feature.title}
              </h3>
              <p className='text-gray-500'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Products */}
      <h1 className='text-6xl'>Our Products</h1>

      {/* categories */}
      <div className='bg-blue-50 py-10'>
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {home.categories.map((category) => (
            <div key={category.id} className='relative group'>
              <img
                src={category.image}
                alt={category.title}
                className='w-full h-full object-cover rounded-lg transition-opacity duration-300 opacity-80 group-hover:opacity-60'
              />
              <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
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

      {/* Blog banner */}
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

      <Testimonials />

      {/* Contact us */}
      <div className='flex flex-wrap items-center justify-center p-8 bg-gray-50'>
        <div className='w-full md:w-1/2 p-4'>
          <h2 className='text-xl font-bold text-blue-900 uppercase'>
            Contact Us
          </h2>
          <h1 className='text-3xl font-extrabold text-blue-900 mt-2'>
            Have Questions? <br /> Get in touch!
          </h1>
          <p className='text-gray-600 mt-4'>
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim.
          </p>
          <button className='mt-6 px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600'>
            Get In Touch
          </button>
        </div>

        <div className='w-full md:w-1/2 p-4'>
          <div className='space-y-4'>
            {/* Address */}
            <div className='flex items-start'>
              <span className='text-blue-900 text-xl mr-4'>📍</span>
              <p className='text-gray-600'>
                Germany — <br />
                785 15th Street, Office 478, Berlin, De 81566
              </p>
            </div>

            <div className='flex items-center'>
              <span className='text-blue-900 text-xl mr-4'>📞</span>
              <p className='text-gray-600'>+1 840 841 25 69</p>
            </div>

            <div className='flex items-center'>
              <span className='text-blue-900 text-xl mr-4'>⏰</span>
              <p className='text-gray-600'>
                Mon-Fri: 9 AM – 6 PM <br />
                Saturday: 9 AM – 4 PM <br />
                Sunday: Closed
              </p>
            </div>

            <div className='flex items-center'>
              <span className='text-blue-900 text-xl mr-4'>📧</span>
              <p className='text-gray-600'>info@email.com</p>
            </div>
          </div>

          <div className='mt-6'>
            <iframe
              title='Google Map'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24287.654702125034!2d-0.12775816340010762!3d51.50732187702439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761bcbf25e6bc7%3A0x2d8c789be7b8704b!2sLondon!5e0!3m2!1sen!2sde!4v1637241518072!5m2!1sen!2sde'
              width='100%'
              height='200'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              className='rounded-lg'
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
