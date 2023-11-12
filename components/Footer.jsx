"use client";

import { AiOutlineVerticalLeft } from "react-icons/ai";
import { BsChevronBarLeft } from "react-icons/bs";
import React, { useEffect, useState } from "react";

//---------------------
const Footer = ({
  name,
  author,
  increment,
  decrement,
  first,
  last,
  position,
  gall_size,
}) => {
  const [progressBarr, setProgressBarr] = useState();
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function calc_progress_bar() {
    if (typeof window !== "undefined") {
      const step = windowSize / gall_size;
      setProgressBarr((position + 1) * step);
    }
  }

  function getWindowSize() {
    if (typeof window !== "undefined") {
      return window.innerWidth;
    } else return;
  }

  useEffect(() => {
    calc_progress_bar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleWindowResize);
    }

    calc_progress_bar();
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleWindowResize);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="w-full px-8 flex relative items-center justify-between h-14 md:h-20 border-t-2">
      {/* black line */}
      <div
        className="absolute left-0 z-30  -top-4 border-b-2 border-black h-4"
        style={{ width: `${progressBarr}px` }}
      ></div>
      <div className="w-fit">
        <p className="text-xl font-bold">{name}</p>
        <p>{author}</p>
      </div>
      <div className="w-12 mt-5 flex justify-between">
        <BsChevronBarLeft
          className={`w-20 h-20 font-extrabold text-black 
          ${!first ? "hover:text-dark hover:cursor-pointer" : "text-medium"} `}
          onClick={decrement}
        />
        <AiOutlineVerticalLeft
          className={`w-20 h-20 font-extrabold  text-black
          ${!last ? "hover:text-dark hover:cursor-pointer" : "text-medium"}
          `}
          onClick={increment}
        />
      </div>
    </section>
  );
};

export default Footer;
