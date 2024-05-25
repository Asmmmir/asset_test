"use client";

import React from "react";
import Project from "./Project";
import { projects } from "@/constants/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const Projects = () => {
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

        {projects.map((item) => (
          <SwiperSlide>
            <Project title={item.title} subtitle={item.subtitle} audioFile={item.audioFile} />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default Projects;
