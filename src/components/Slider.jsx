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
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Pagination, EffectFade, Autoplay]}
      >
        {home.sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative md:h-[500px] h-[400px] flex items-center lg:px-16 px-8 bg-no-repeat opacity-90">
              {/* Video Background */}
              <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src={slide.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Dark overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

              {/* Content over the video */}
              <div className="z-10 w-full space-y-5 flex flex-col justify-center items-center">
                <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-white">{slide.title}</h1>
                <p className="text-white md:text-2xl text-xl">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
