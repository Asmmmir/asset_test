import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const Reviews = () => {
  return (
    <div className="container mx-auto mt-10">
    <Swiper
      breakpoints={{
        340: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        700: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        1024: {
          slidesPerView: 2,
          spaceBetween: 15
        }
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="max-w-[90%] lg:max-w-[80%]"
      
    >


    </Swiper>
  </div>
  )
}

export default Reviews