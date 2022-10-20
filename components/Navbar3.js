import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-gray-900 font-sans leading-normal tracking-normal">
      {/* Header start */}
      <header className="header relative overflow-hidden">
        {/* Navbar start */}
        <nav className="flex flex-wrap items-center justify-between bg-gray-800 w-full p-6 z-10 top-0 bg-opacity-50">
          <div className="flex flex-row items-center flex-shrink-0 text-white">
            <Image
              className="h-8 w-8"
              src="img/logos/irmuundigital-logo.png"
                          />
            <a className="uppercase pl-3 font-medium text-2xl" href="#">
              Irmuun Digital
            </a>
          </div>
          {/* Menu toggle button */}
          <div className="block lg:hidden">
            <button
              id="nav-toggle"
              className="p-2 border rounded rounded-full text-gray-500 border-gray-500 hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          {/* Menu items */}
          <div
            id="nav-content"
            className="hidden w-full pt-6 lg:flex lg:items-center lg:w-auto  lg:pt-0"
          >
            <ul className="uppercase text-white lg:flex flex-1">
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-4 text-gray-500 hover:text-white"
                >
                  Эхлэл
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-4 text-gray-500 hover:text-white"
                >
                  Бидний тухай
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-4 text-gray-500 hover:text-white"
                >
                  Үйлчилгээ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-block py-2 px-4 text-gray-500 hover:text-white"
                >
                  Холбоо барих
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* Navbar end */}
        {/* Hero start */}
        <div className="hero absolute inset-0 sm:hidden">
          <Image
            src="img/witcher.jpg"
            className="w-full h-full object-cover object-center"          
          />
        </div>
        <div className="hero absolute hidden inset-0 sm:block">
          <video
            src="video/witcher.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          />
        </div>
        {/* Hero end */}
      </header>
      {/* Head end*/}
    </div>
  );
};

export default Navbar;
