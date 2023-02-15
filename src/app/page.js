"use client";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { useContext } from "react";
import { ModeContext } from "./Context/index";

export default function Home() {
  const { darkmode } = useContext(ModeContext);
  console.log("darkmode", darkmode);
  return (
    <>
      <main className="p-8 h-screen" style={{ backgroundColor: "#E5E5E5" }}>
        <div
          className="border-solid border border-zinc-500 shadow-sm h-full bg-opacity-60 bg-clip-padding bg-slate-100"
          style={{ backdropFilter: "blur(20px)" }}
        >
          <m.div className="w-full flex justify-end items-end h-full overflow-hidden">
            <m.p
              className="w-44 pr-12 pb-8 text-sm font-black whitespace-normal text-black"
              initial={{ x: "100%", opacity: 0.3 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
            >
              I’m a full-stack web developer who’s working with the latest and
              most effective technologies. Building state-of-art, easy to use,
              user-friendly websites and application is truly a passion of mine.
            </m.p>
          </m.div>
        </div>
      </main>
    </>
  );
}
