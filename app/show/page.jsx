"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { BiExpand } from "react-icons/bi";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Modal from "@/components/Modal";

import DATA from "/new_data.json";
const gall_size = DATA.length;

//-------------------
const Page = () => {
  const [item, setItem] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [last, setLast] = useState(false);
  const [first, setFirst] = useState(true);

  function increment() {
    if (item < gall_size - 1) {
      setItem((prev) => prev + 1);
    }
  }

  function decrement() {
    if (item > 0) {
      setItem((prev) => prev - 1);
    }
  }

  useEffect(() => {
    setFirst(item === 0 ? true : false);
    setLast(item === gall_size - 1 ? true : false);
  }, [item]);

  const handleOpen = () => setShowModal(!showModal);

  return (
    <main className="w-full h-screen relative bg-white px-2 overflow-hidden">
      <Header />
      <div className="w-full relative md:mb-0 lg:mb-40 ">
        <div className="flex flex-col lg:flex-row p-2 md:p-4 w-full lg:justify-between items-center">
          {/* Images */}
          <div className="relative flex flex-col md:block w-full lg:w-[60%] md:h-[580px]">
            {/*  MD & LG*/}
            <div className="hidden md:block relative w-[475px] h-[560px] ">
              <Image
                src={DATA[item].images.hero.large}
                alt={DATA[item].name}
                fill
                sizes="(max-width: 375px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
            {/* SM */}
            <div className="md:hidden w-full aspect-auto h-[300px] relative">
              <Image
                src={DATA[item].images.hero.small}
                alt={DATA[item].name}
                fill
                sizes="100vw"
              />
            </div>
            <div
              onClick={handleOpen}
              className="absolute top-5 left-3 md:top-auto md:bottom-8 md:left-5 text-white  text-[0.5rem] md:text-xs p-2 bg-black flex justify-center items-center hover:cursor-pointer hover:bg-dark"
            >
              <BiExpand className="w-4 h-4 mr-2" />
              <p>VIEW IMAGE</p>
            </div>
            <div
              className="absolute top-52 -left-0.5 pt-4 w-[80%] 
            md:px-8 md:pt-0 md:-top-0.5 md:left-[210px] md:text-left md:w-[570px]
            lg:px-16 lg:w-[590px] lg:left-[330px]"
            >
              <div className="bg-white w-full h-40 px-5 md:w-full md:px-14 md:h-auto md:pb-14 lg:pb-8 lg:px-4">
                <p className="text-3xl pt-6 md:pt-0 md:mt-0 md:text-4xl font-bold md:ml-6 lg:ml-14">
                  {DATA[item].name}
                </p>
                <p className="self-start md:ml-6 lg:mb-20 mt-5 lg:ml-14">
                  {DATA[item].artist.name}
                </p>
              </div>
              {/* Show sizes SM and MD */}
              <div className="lg:hidden ml-4 md:ml-[290px]">
                <Image
                  src={DATA[item].artist.image}
                  alt={DATA[item].artist.name}
                  width={210}
                  height={210}
                  className="w-20 h-20"
                />
              </div>
            </div>
            {/* Show only at LG size */}
            <div className="hidden lg:block w-28 h-28 absolute bottom-56 lg:-bottom-8 left-[500px]">
              <Image
                src={DATA[item].artist.image}
                alt={DATA[item].artist.name}
                width={210}
                height={210}
                className="w-28 h-28"
              />
            </div>
          </div>
          {/* Texts */}
          <div className="mt-52 md:mt-0 w-full md:w-[70%] h-[500px] lg:w-[40%]  lg:h-[610px] lg:p-10 relative">
            <p className="text-light text-[6.25rem] md:text-5xl absolute -top-14 right-2 md:right-32 md:top-14 lg:top-7 lg:right-1">
              {DATA[item].year}
            </p>
            <div className="flex flex-col space-y-4 mt-2 md:mt-10 items-start lg:space-y-20  lg:mt-32">
              <p className="md:w-[475px] md:h-[252] md:mt-20 lg:w-[368px] lg:h-[364px] z-10 text-base lg:ml-8 lg:-mt-4">
                {DATA[item].description}
              </p>
              <Link
                target="_blank"
                href={DATA[item].source}
                className="ml-0 lg:ml-8 underline text-[0.562rem] tracking-widest text-dark"
              >
                GO TO SOURCE
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <Footer
          name={DATA[item].name}
          author={DATA[item].artist.name}
          increment={increment}
          decrement={decrement}
          first={first}
          last={last}
          position={item}
          gall_size={gall_size}
        />
      </div>

      <Modal
        open={showModal}
        handleOpen={handleOpen}
        image={DATA[item].images.gallery}
        name={DATA[item].name}
      />
    </main>
  );
};

export default Page;
