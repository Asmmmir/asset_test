import React from "react";

const Project = ({title, subtitle, audioFile}) => {
  return (
      <div className="flex flex-col h-[500px] justify-around items-center bg-[#1E1E1E] p-5 rounded-3xl border-solid border-2 mx-5 ">
        <h3 className="font-popins text-2xl  text-primary font-semibold text-center ">
         {title}
        </h3>
        <p className="font-poppins text-sm text-center text-white ">
{subtitle}
        </p>
        <audio className="max-w-[80%]" controls>
          <source src={`audio/${audioFile}`} type="audio/mpeg" />
        </audio>
      </div>
  );
};

export default Project;
