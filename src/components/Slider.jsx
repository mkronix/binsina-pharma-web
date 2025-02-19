import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import data from "../data/home.json";
import "./index.css";

const Slider = () => {
  const { home } = data.binsinaPharma;

  const validSlides = home.sliderData.filter(
    (slide) => slide.image || slide.video
  );

  return (
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
      {validSlides?.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className='relative md:h-[600px] h-[500px] flex items-center bg-no-repeat cursor-pointer'>
            {slide.video ? (
              <video
                autoPlay
                loop
                muted
                className='absolute top-0 left-0 w-full h-full object-cover'
              >
                <source src={slide.video} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            ) : (
              slide.image && (
                <img
                  src={slide.image}
                  alt={slide.title || "Slide Image"}
                  className='absolute top-0 left-0 w-full h-full object-cover'
                />
              )
            )}

            {slide.video || slide.image ? (
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent'></div>
            ) : null}

            {(slide.title || slide.description) && (
              <div className='z-10 bg-white/40 backdrop-blur-md rounded-xl shadow-lg p-8 md:max-w-4xl md:mx-auto md:ml-16 m-5 transform hover:scale-105 transition-transform duration-300 font-poppins'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
                  <div className='space-y-4'>
                    {slide.title && (
                      <div>
                        <h1 className='text-hoverColor text-xl md:text-5xl font-extrabold mb-3'>
                          {slide.title.split(" ")[0]}
                        </h1>
                        <h1 className='text-black text-2xl md:text-4xl font-bold leading-snug'>
                          {slide.title.split(" ").splice(1).join(" ")}
                        </h1>
                      </div>
                    )}
                    {slide.description && (
                      <p className='text-gray-700 text-sm md:text-lg leading-relaxed font-medium'>
                        {slide.description}
                      </p>
                    )}
                  </div>

                  {slide.image && (
                    <div className='flex justify-center items-center'>
                      <div className='w-full rounded-lg h-40 md:w-64 md:h-64 md:rounded-full shadow-lg bg-white flex items-center justify-center overflow-hidden'>
                        <img
                          src={slide.image}
                          alt={slide.title || "Slide Image"}
                          className='w-full h-full object-cover'
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
