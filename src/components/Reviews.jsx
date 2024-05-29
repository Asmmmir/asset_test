"use client";

import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import reviews from '@/constants/reviews';
import Review from './Review';



    const Reviews = () => {
      return (
        <section className="slider-container container mx-auto mt-10 p-5">
                <h1 className="text-title text-white text-center font-roboto max-md:text-[30px] font-bold mb-4">
        Отзывы наших клиентов
      </h1>
      <p className="text-white text-subtitle text-center font-roboto font-semibold mb-4" >Слова, которые говорят сами за себя</p>
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 62,
              },
              700: {
                slidesPerView: 1,
                spaceBetween: 62,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 62
              }
            }}
            centeredSlides={true}
            pagination={{
              clickable: true,
              el: '.custom-pagination'
            }}
            loop={true}
            speed={800}
            modules={[FreeMode, Pagination]}
            className="swiper-container"
          >
            {reviews.map((item, i) => (
              <SwiperSlide key={i}>
                <Review avatar={item.avatar} name={item.name} description={item.description} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination flex justify-center mt-16"></div>
        </section>
      );
    };


export default Reviews