"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carosel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

interface carouselProps {
  url1: string;
  url2: string;
  url3: string;
  url4: string;
}

const App: React.FC<carouselProps> = ({ url1, url2, url3, url4 }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="object-cover w-full h-full"
            src={url1}
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover w-full h-full"
            src={url2}
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover w-full h-full"
            src={url3}
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover w-full h-full"
            src={url4}
            alt="Slide 4"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default App;
