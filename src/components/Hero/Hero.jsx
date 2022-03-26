import React from "react";
import { BsArrowRight } from "react-icons/bs";
// import required modules
import { EffectCreative } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper3"
      >
        <SwiperSlide className="slide">
          <div className="container">
            <p>Get you dream guitar</p>
            <h1>Found your dream Guitar from here</h1>
            <button>
              Shop Now <BsArrowRight />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          {" "}
          <div className="container">
            <p>Get you dream</p>
            <h1>Found your dream Guitar from here</h1>
            <button>
              Shop Now <BsArrowRight />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          {" "}
          <div className="container">
            <p>Get you dream</p>
            <h1>Found your dream Guitar from here</h1>
            <button>
              Shop Now <BsArrowRight />
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
