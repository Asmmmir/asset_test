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
    <div className="mt-10 w-full p-4">
    <h1 className="text-title text-white text-center font-poppins max-md:text-[30px] font-bold mb-4">
      Что я могу предложить?
    </h1>
    <div className="container mx-auto flex flex-wrap justify-center gap-5">

          {projects.map((item) => (

                  <Project title={item.title} subtitle={item.subtitle} audioFile={item.audioFile} />
          ))}

    </div>
  </div>
  );
};

export default Projects;
