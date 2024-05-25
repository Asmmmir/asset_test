"use client";

import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import  videoReviews  from '@/constants/videoReviews';


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
              {
                videoReviews.map((item) => (
        
                  <SwiperSlide
                  
                  > 
                        <div className='bg-white '>
                          1
                        </div>
                  </SwiperSlide>
                ))
              }

    </Swiper>
  </div>
  )
}

export default Reviews