"use client";

import React from "react";
import Video from "./Video";
import  videos  from "@/constants/video-projects";

const VideoProjects = () => {

  return (
    <section className="mt-10 w-full p-4">
      <h1 className="text-title text-white text-center font-poppins max-md:text-[30px] font-bold mb-4">
        Примеры видеороликов
      </h1>
      <p className="text-white text-subtitle text-center font-poppins font-semibold mb-4" >Идеальные кадры под наши треки</p>
      <div className="container mx-auto flex flex-wrap justify-center gap-5">
        {videos.map((item, i) => (
          <Video
            key={i}
            title={item.title}
            subtitle={item.subtitle}
            videoUrl={item.videoUrl}
            thumbnail={item.thumbnail}
          />
        ))}
      </div>
    </section>
  );
};

export default VideoProjects;