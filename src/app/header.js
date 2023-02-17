"use client";
import React, { useContext } from "react";
import styles from "./page.module.css";

import Link from "next/link";
import { motion as m } from "framer-motion";
import { ModeContext } from "./Context/index";
const Header = () => {
  const { darkmode, setdarkmode } = useContext(ModeContext);
  console.log("darkmode", darkmode);
  return (
    <header>
      <div
        className={`pt-2 pl-2 md:pt-5 md:pl-7 absolute top-10 md:left-10 left-4 z-10`}
      >
        <div className={`${styles.container}`}>
          <h1
            className={` ${
              darkmode ? "text-white" : "text-black"
            } text-5xl font-thin overflow-hidde`}
          >
            Komail Khan
          </h1>
          <p
            className={` ${styles.typewriter} ${
              darkmode ? "text-white" : "text-black"
            }`}
          >
            Full Stack Developer
          </p>
        </div>
        <div className="ml-1 mt-16 ">
          <div
            className={`${
              darkmode ? "bg-white" : "bg-black"
            } rounded-full w-3 h-3`}
          ></div>
          <ul
            className={`${
              darkmode ? "text-white" : "text-black"
            } mt-4 cursor-pointer`}
          >
            <m.li
              className="mt-1"
              initial={{ x: "20%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Link href="/" className="font-extrabold">
                Home
              </Link>
            </m.li>
            <m.li
              className="mt-1"
              initial={{ x: "20%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            >
              <Link href="/about" className="font-extrabold">
                About
              </Link>
            </m.li>
            <m.li
              className="mt-1"
              initial={{ x: "20%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
            >
              <Link href="/projects" className="font-extrabold">
                Projects
              </Link>
            </m.li>
          </ul>
        </div>
      </div>
      <div className="absolute md:bottom-20 md:left-10 left-2 bottom-20 flex flex-col z-20 ">
        <div
          className={` ${
            darkmode ? "text-white" : "text-black"
          } flex row mb-7 items-center justify-center rotate-90 cursor-pointer`}
        >
          Light
          <div
            className={`${
              !darkmode ? "bg-black border-black" : "border-white"
            } w-3 h-3 ml-2 border-solid border `}
            onClick={() => setdarkmode(false)}
          ></div>
        </div>
        <div
          className={`${
            darkmode ? "text-white" : "text-black"
          } text-black flex mt-5 row items-center justify-center rotate-90 cursor-pointer`}
        >
          Dark
          <div
            className={`${
              darkmode ? "bg-white border-white" : "border-black"
            } w-3 h-3 ml-2 border-solid border `}
            onClick={() => setdarkmode(true)}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
// <header class="text-gray-600 body-font">
//   <div class="container mx-auto flex justify-between p-5 flex-row md:flex-wrap  items-center">
//     <a class="flex title-font font-medium items-center text-gray-900  md:mb-0">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         stroke="currentColor"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         stroke-width="2"
//         class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
//         viewBox="0 0 24 24"
//       >
//         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//       </svg>
//       <span class="ml-3 text-xl">Tailblocks</span>
//     </a>
//     <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hidden  md:block">
//       <a class="mr-5 hover:text-gray-900">First Link</a>
//       <a class="mr-5 hover:text-gray-900">Second Link</a>
//       <a class="mr-5 hover:text-gray-900">Third Link</a>
//       <a class="mr-5 hover:text-gray-900">Fourth Link</a>
//     </nav>
//     <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">
//       Button
//       <svg
//         fill="none"
//         stroke="currentColor"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         stroke-width="2"
//         class="w-4 h-4 ml-1"
//         viewBox="0 0 24 24"
//       >
//         <path d="M5 12h14M12 5l7 7-7 7"></path>
//       </svg>
//     </button>
//   </div>
// </header>
