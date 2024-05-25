import React from "react";

const Project = ({title, subtitle, audioFile}) => {
  return (
      <div className="flex flex-col justify-between items-center bg-white p-12 rounded-3xl mx-5 ">
        <h3 className="font-popins text-[36px] text-primary font-semibold text-center">
         {title}
        </h3>
        <p className="font-poppins text-[20px]">
{subtitle}
        </p>
        <audio controls>
          <source src={`audio/${audioFile}`} type="audio/mpeg" />
        </audio>
      </div>
  );
};

export default Project;
