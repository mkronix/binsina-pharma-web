import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import data from "../data/data.json";
import "./index.css";

const Slider = () => {
  const { home } = data.binsinaPharma;

  return (
    <>
      <Swiper
        effect='flip'
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
          dynamicMainBullets: 1,
        }}
        modules={[Pagination, EffectFade, Autoplay]}
        className='mySwiper pt-10 md:pt-32 custom-swiper-pagination'
      >
        {home.sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className='h-[540px] flex flex-col justify-center lg:px-16 px-8 text-white bg-no-repeat md:bg-cover opacity-90'
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            >
              <div className='w-full lg:w-4/5 space-y-5 mt-10'>
                <h1 className='md:text-5xl text-2xl font-bold leading-tight text-gray-700'>
                  {slide.title}
                </h1>
                <p className='text-gray-700'>{slide.description}</p>
                <button className='px-6 py-2 bg-backgroundColor text-white rounded-lg hover:bg-hoverColor'>
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
