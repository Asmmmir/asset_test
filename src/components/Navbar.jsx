import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container mx-auto mb-10"> 
      <ul className="flex justify-center flex-wrap gap-4 mx-auto">
        <li className="font-poppins text-white text-[21px] tracking-[0.03em] px-3 py-4 hover:text-primary">
          <Link href="/about">Обо мне</Link>
        </li>
        <li className="font-poppins text-white text-[21px] tracking-[0.03em] px-3 py-4 hover:text-primary">
          <Link href="#projects">Проекты</Link>
        </li>
        <li className="font-poppins text-white text-[21px] tracking-[0.03em] px-3 py-4 hover:text-primary ">
          <Link href="/reviews">Отзывы</Link>
        </li>
        <li className="font-poppins text-white text-[21px] tracking-[0.03em] px-3 py-4 hover:text-primary">
          <Link href="#contacts">Контакты</Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
