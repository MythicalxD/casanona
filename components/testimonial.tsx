"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface testimonialProps {
  data: any;
}
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const TestimonialPage: React.FC<testimonialProps> = ({ data }) => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg shadow-lg lg:w-[1000px] w-screen"
      >
        {data.map(
          (testimonial: {
            id: string | null | undefined;
            attributes: {
              rating: string;
              review:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined;
              name:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined;
            };
          }) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-gray-200 p-6 h-fit lg:w-[1000px] cursor-default">
                <div className="flex flex-col items-center mt-2 w-full justify-center">
                  <div className="w-full flex flex-col justify-start items-center">
                    <p className="font-semibold text-2xl text-center text-stone-600">
                      {testimonial.attributes.name}
                    </p>
                    <p className="text-gray-500 text-center p-3 rounded-md mt-1">
                      {testimonial.attributes.review}
                    </p>
                    <div className="flex justify-center items-center mt-0 mb-2">
                      <img
                        src="./star.png"
                        alt="star"
                        className="w-5 h-5 mr-1"
                      />
                      <p className="font-semibold text-xl text-center">
                        {testimonial.attributes.rating}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
};

export default TestimonialPage;
