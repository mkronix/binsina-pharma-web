import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import data from "../data/data.json";
import userLogo from "/assets/img/user.png";

const Testimonals = () => {
  const { home } = data.binsinaPharma;
  return (
    <div className='bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center'>
          <h3 className='text-lg font-semibold text-gray-500 uppercase'>
            {home.testimonial.heading}
          </h3>
          <h2 className='mt-2 text-3xl font-bold text-gray-800'>
            Our Satisfied & Happy Customers
          </h2>
        </div>

        <div className='mt-10'>
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className='py-10 custom-swiper'
          >
            {home.testimonial.content.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className='bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center h-80'>
                  <img
                    src={userLogo}
                    alt={testimonial.name}
                    className='w-24 h-24 rounded-full mb-4'
                  />
                  <p className='italic text-gray-700'>{`"${testimonial.name}"`}</p>
                  <h4 className='my-2 text-lg font-semibold text-gray-800'>
                    {testimonial.role}
                  </h4>
                  <p className='text-gray-500 text-start text-base leading-relaxed line-clamp-3 sm:line-clamp-4'>
                    {testimonial.content}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
