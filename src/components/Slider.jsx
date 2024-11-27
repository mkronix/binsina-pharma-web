import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import data from "../data/data.json";
import "./index.css";
import Button from "./Button/Button";

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
        className='mySwiper pt-10 md:pt-16 custom-swiper-pagination'
      >
        {home.sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className='linearBg h-[540px] flex items-center lg:px-16 px-8 bg-no-repeat md:bg-cover opacity-90'
            // style={{
            //   backgroundImage: `url('${slide.image}')`,
            // }}
            >
              <div className='w-full lg:w-2/5 space-y-5 md:mt-10 max-md:m-auto'>
                <h1 className='heading text-gray-800'>
                  {slide.title}
                </h1>
                <p className='text-gray-900 description'>{slide.description}</p>
                <Button title={slide.buttonText} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
