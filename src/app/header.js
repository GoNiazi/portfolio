"use client";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { motion as m } from "framer-motion";
const Header = () => {
  return (
    <header>
      <div className={`pt-5 pl-7 absolute top-10 left-10 z-10`}>
        <div className={`${styles.container}`}>
          <h1 className="text-5xl font-thin overflow-hidden">Komail Khan</h1>
          <p className={styles.typewriter}>Full Stack Developer</p>
        </div>
        <div className="ml-1 mt-16 ">
          <div className=" bg-black rounded-full w-3 h-3"></div>
          <ul className="mt-4">
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
      <div className="absolute bottom-20 left-10  flex flex-col z-20 ">
        <div className="text-black flex row mb-7 items-center justify-center rotate-90">
          Light
          <div className="w-3 h-3 ml-2 border-solid border border-black "></div>
        </div>
        <div className="text-blacktext-black flex mt-5 row items-center justify-center rotate-90">
          Dark
          <div className="w-3 h-3 ml-2 border-solid border border-black "></div>
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
