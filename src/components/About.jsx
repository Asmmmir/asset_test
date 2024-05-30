import Link from "next/link";
import React from "react";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import Image from 'next/image'
import headerImg from '@/images/header-img.png'

const About = () => {
  return (
    <section className="flex justify-between max-md:flex-col-reverse container mx-auto p-5 max-lg:max-w-[100%]">
      <div className="max-w-[706px]">
        <h3 className="font-roboto text-[32px] text-white font-semibold">
          Меня зовут <span className="text-primary">Асет</span>
        </h3>
        <h1 className="text-[100px] font-roboto font-bold text-white tracking-[0.03em] max-sm:text-[50px] max-lg:text-[70px]  ">
          Музыкант
        </h1>
        <h1 className="text-[100px] font-roboto font-bold  text-white text-right tracking-[0.03em] max-sm:text-[50px] max-lg:text-[70px] -mt-12 max-sm:-mt-0 ">
          Блогер
        </h1>
        <p className="font-roboto text-[21px] font-bold text-white">
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
        <Image className="" src={headerImg} alt="Фотография Асета"  />
        <div>
          <ul className="flex justify-center mt-3 gap-2">
            <li>
              <Link href="https://www.tiktok.com/@assetyans">
                <FaTiktok color="white" size={40} className="tiktok"/>
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/assetyans">
                <FaInstagram color="white" size={40} className="instagram" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
