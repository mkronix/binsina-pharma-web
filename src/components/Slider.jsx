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
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Pagination, EffectFade, Autoplay]}
        className='pt-16 lg:pt-32'
      >
        {home.sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative md:h-[600px] h-[400px] flex items-center lg:px-16 px-8 bg-no-repeat opacity-90">
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

              {/* Content over the video */}
              <div className="relative z-10 w-full lg:w-2/5 space-y-5 md:mt-10 max-md:m-auto">
                <h1 className="heading text-white">{slide.title}</h1>
                <p className="text-white description">{slide.description}</p>
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
