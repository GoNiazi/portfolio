"use client";
import React, { useState, useEffect, useRef } from "react";
import { projects } from "./../projects";
import styles from "../project.module.css";
import { motion as m } from "framer-motion";

const page = () => {
  const [width, setwidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className={styles.app}>
      <div
        ref={carousel}
        whiletap={{ cursor: "grabbing" }}
        className={styles.carousel}
      >
        <m.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={styles.innerc}
        >
          {projects.map((project) => {
            return (
              <div className={styles.item}>
                <div className={styles.project}>
                  <p>{project.tile}</p>
                  <p>{project.desc}</p>
                </div>
              </div>
            );
          })}
        </m.div>
      </div>
    </div>
  );
};

export default page;
