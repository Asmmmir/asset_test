"use client";

import React from "react";
import Project from "./Project";
import  projects  from "@/constants/projects";

const Projects = () => {
  return (
    <section className="mt-10 w-full p-4">
      <h1 className="text-title text-white text-center font-roboto max-md:text-[30px] font-bold mb-4">
        Что я могу предложить?
      </h1>
      <p className="text-white text-subtitle text-center font-semibold font-roboto mb-4" >Музыкальные треки для вашего бизнеса</p>
      <div className="container mx-auto flex flex-wrap justify-center gap-5">
        {projects.map((item, i) => (
          <Project
            key={i}
            title={item.title}
            subtitle={item.subtitle}
            audioFile={item.audioFile}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
