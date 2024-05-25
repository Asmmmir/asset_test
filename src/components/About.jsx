import Link from "next/link";
import React from "react";
import { FaTiktok, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex justify-between max-md:flex-col-reverse container mx-auto p-5 ">
      <div className="max-w-[706px]">
        <h3 className="font-poppins text-[32px] text-white font-semibold">
          Меня зовут <span className="text-primary">Асет</span>
        </h3>
        <h1 className="text-[100px] font-poppins font-bold text-white tracking-[0.03em] max-sm:text-[50px]  ">
          Музыкант
        </h1>
        <h1 className="text-[100px] font-poppins font-bold  text-white text-right tracking-[0.03em] max-sm:text-[50px] -mt-12 max-sm:-mt-0 ">
          Блогер
        </h1>
        <p className="font-poppins text-[21px] font-bold text-white">
          Я занимаюсь музыкой уже{" "}
          <span className="text-primary">более 13 лет</span>. Мои песни на
          музыкальных площадках
          <span className="text-primary">
            {" "}
            собирают сотни тысяч прослушиваний, а видео набирают миллионы
            просмотров.
          </span>
        </p>
      </div>
      <div className="flex justify-center items-center flex-col max-md:mb-5">
        <img src="/images/header-img.png" alt="" />
        <div>
          <ul className="flex justify-center mt-3 gap-2">
            <li>
              <Link href="https://tiktok.com">
                <FaTiktok color="white" size={40} />
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/assetyans">
                <FaInstagram color="white" size={40} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;