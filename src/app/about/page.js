"use client";

import { motion as m } from "framer-motion";
import React, { useContext } from "react";
import { ModeContext } from "../Context/index";
import Image from "next/image";
const page = () => {
  const { darkmode, setdarkmode } = useContext(ModeContext);
  console.log("darkmode", darkmode);
  const techs = [
    "HTML5",
    "CSS",
    "Javascript",
    "React.js",
    "Redux",
    "Node.js",
    "MongoDB",
    "MySQL",
    "Strapi",
    "Next.js",
    "GraphQL",
    "Bootstrap5",
    "TailwindCSS",
  ];
  return (
    <m.main
      className={`${darkmode ? "bg-black" : "bg-theme"}  p-4 md:p-8 h-screen`}
      // initial={{ opacity: 0.8 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 2.5, ease: "easeOut" }}
      // style={{ backgroundColor: "#E5E5E5" }}
    >
      <div
        className={` ${
          darkmode ? "bg-gray-800" : "bg-slate-100"
        } border-solid border border-zinc-500 shadow-sm h-full bg-opacity-60 bg-clip-padding overflow-x-scroll overflow-y-scroll md:overflow-hidden`}
        style={{ backdropFilter: "blur(20px)" }}
      >
        <m.div
          className={`flex h-full w-full justify-end items-end md:justify-end md:items-center pr-5 pb-6 md:pr-10 md:pt-10 pr-28 lg:pt-28`}
        >
          <section className="md:pt-10 md:pb-2 md:px-7 pr-2 font-extrabold w-3/4 md:w-6/12 lg:w-5/12 ">
            <m.p
              className={`${
                darkmode ? " text-white " : "  text-black "
              } text-xs md:text-base  text-justify `}
              // style={{ backdropFilter: "blur(20px)" }}
            >
              <m.span
                initial={{ x: "100% ", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                I’m a full-stack web developer who’s working with the latest and
                most effective{" "}
              </m.span>{" "}
              <m.span
                initial={{ TranslateX: "100% ", opacity: 0 }}
                animate={{ TranslateX: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              >
                technologies. The main stack of technologies I specialize in is
                JavaScript plus{" "}
              </m.span>{" "}
              <m.span
                initial={{ TranslateX: "100% ", opacity: 0 }}
                animate={{ TranslateX: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              >
                frameworks/libraries based on this language.I actively seek out
                new technologies
              </m.span>{" "}
              <m.span
                initial={{ TranslateX: "100% ", opacity: 0 }}
                animate={{ TranslateX: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              >
                {" "}
                and stay up-to-date on industry trends and advancements.Building
                state-of-art,
              </m.span>{" "}
              <m.span
                initial={{ TranslateX: "100% ", opacity: 0 }}
                animate={{ TranslateX: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              >
                {" "}
                easy to use, user-friendly websites and application is truly a
                passion of mine.
              </m.span>
              <m.span
                initial={{ TranslateX: "100% ", opacity: 0 }}
                animate={{ TranslateX: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              >
                {" "}
              </m.span>{" "}
            </m.p>
            <m.p
              className={`${
                darkmode
                  ? " text-white border-white"
                  : "  text-black border-black"
              } mt-3 text-sm md:text-xl  text-justify   border-b-2 `}
              // style={{ backdropFilter: "blur(20px)" }}

              initial={{ x: "100% ", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Technologies
            </m.p>
            <div
              className={`${
                darkmode ? "text-white" : "text-black"
              } flex flex-wrap gap-2 md:gap-3  mt-3 font-bold text-xs md:text-base `}
            >
              {techs.map((tech, i) => {
                return (
                  <m.h4
                    initial={{ y: "100% ", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: i * 0.27,
                    }}
                    className={`${
                      darkmode ? "" : ""
                    } hover:shadow-md p-0.5 cursor-default`}
                  >
                    {tech}
                  </m.h4>
                );
              })}
            </div>
          </section>
        </m.div>
      </div>
    </m.main>
  );
};

export default page;
