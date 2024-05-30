import Image from "next/image";
import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const Review = ({ avatar, name, description }) => {
  return (
    <div className="card flex items-center justify-between max-md:flex-col max-md:items-start gap-5 h-344 w-1087 bg-white rounded-lg p-6 transition-opacity">
      <Image
        src={avatar}
        width={96}
        height={96}
        className="avatar rounded-full h-24 w-24 mr-6"
        alt="Аватарка заказчика"
      />
      <div className="font-poppins flex-1 flex flex-col gap-5">
        <div className="relative">
          <RiDoubleQuotesL
            className="absolute top-0 left-[-25px] mt-1 ml-1"
            color="#FD6F00"
            size={20}
          />
          <p className="text-lg font-roboto">{description}</p>
          <RiDoubleQuotesR
            className="absolute bottom-0 right-0 mb-1 mr-1"
            color="#FD6F00"
            size={20}
          />
        </div>

        <h2 className="text-2xl font-semibold font-roboto mb-2">{name}</h2>
      </div>
    </div>
  );
};

export default Review;
