import { useState, useRef } from "react";

const Video = ({ title, subtitle, videoUrl, thumbnail }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);


  const handlePlay = (e) => { 
    e.stopPropagation()
    e.target.play = false;
  }


  return (
    <div className="relative mb-5 w-[445px] h-[490px] flex flex-col ">
      {isVideoOpen ? (
        <video className="w-full h-full object-cover" controls autoPlay onClick={() => setIsVideoOpen((prev) => !prev)} onTouchEnd={() => setIsVideoOpen(false)} onPlay={handlePlay} >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        <img
          src={thumbnail}
          alt="Video Thumbnail"
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => setIsVideoOpen(true)}
        />
      )}
      {!isVideoOpen && (
        <div
          className="absolute inset-0 p-4 w-full bg-black bg-opacity-50 flex flex-col justify-center items-center cursor-pointer"
          onClick={() => setIsVideoOpen(true)}
        >
            <div className="text-center font-poppins">
          <p className="text-lg font-bold text-primary">{title}</p>
          <p className="text-xl text-white">{subtitle}</p>
            </div>
        </div>
      )}
    </div>
  );
};

export default Video;