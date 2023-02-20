"use client";
import { projects } from "../projects";
import { motion as m } from "framer-motion";
import React, { useState, useEffect, useRef, useContext } from "react";

import { ModeContext } from "../Context/index";
const page = () => {
  const { darkmode, setdarkmode } = useContext(ModeContext);
  const [showModal, setShowModal] = React.useState(false);
  const [width, setwidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <main
      className={`${
        darkmode ? "bg-black" : "bg-theme"
      }  overflow-x-scroll overflow-y-scroll md:overflow-hidden p-4 md:p-8 h-screen`}
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
        <div
          className={`flex h-full w-full justify-end items-end md:justify-end md:items-center pr-5 pb-6 md:pr-0 md:pt-10 pr-28 lg:pt-28`}
        >
          <m.section
            ref={carousel}
            whiletap={{ cursor: "grabbing" }}
            className="font-extrabold w-3/4 md:w-6/12 lg:w-5/12 mt-20 h-4/6 border-solid border-black  overflow-hidden cursor-grab "
          >
            <m.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className=" flex h-12/12 w-12/12  flex-row cursor-grab "
            >
              {projects.map((project) => {
                return (
                  <div className="h-5/6 w-4/6 p-10 ">
                    <div className="w-full h-full rounded border-solid border-green-400 border-2">
                      <p>{project.title}</p>
                      <p>{project.title}</p>
                      <p>{project.title}</p>
                      <p>{project.title}</p>
                      <p>{project.title}</p>
                      <p>{project.title}</p>
                      <p>{project.title}</p>
                      <p>{project.title}</p>
                      <p>{project.title}</p>
                      <p>{project.title}</p>
                      <p>{project.title}</p>
                      <p>{project.title}</p>
                      <p>{project.title}</p>
                      <p>{project.title}</p>
                      <p>{project.title}</p>
                      <p>{project.title}</p>
                      <p>{project.title}</p>
                      <p>{project.title}</p>
                      <p>{project.title}</p>
                      <p>{project.title}</p>
                    </div>
                  </div>
                );
              })}
              {/* <div className="h-full w-full bg-white "></div>
              <div className="h-full h-full w-full bg-red-400 "></div>
              <div className="h-full h-full w-full bg-pink-800 "></div>
              <div className="h-full h-full w-full bg-orange-400 "></div>
              <div className="h-full h-full w-full bg-slate-800 "></div> */}
              {/* <img src="/images/html.png" className="w-40 h-40" />
              <img src="/images/html.png" className="w-40 h-40" />
              <img src="/images/html.png" className="w-40 h-40" />
              <img src="/images/html.png" className="w-40 h-40" />
              <img src="/images/html.png" className="w-40 h-40" /> */}
            </m.div>
          </m.section>
        </div>
      </div>
    </main>
  );
};

export default page;
