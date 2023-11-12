import React from "react";

import Image from "next/image";

const Modal = ({ open, handleOpen, image, name }) => {
  return (
    <div
      className={`flex flex-col items-center w-full h-screen fixed inset-0 z-40 scroll-contain transition-all duration-500 overflow-hidden lg:justify-center
    ${open ? "visible bg-black/90" : "invisible"}
    `}
    >
      <div
        className={`w-[90%] mt-28 md:mt-0 duration-500 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <div className="w-full mx-auto">
          <div className="relative w-full flex flex-col">
            <p
              onClick={handleOpen}
              className="w-auto text-center text-white hover:cursor-pointer hover:text-medium md:mt-10 md:mb-5 lg:mb-8"
            >
              CLOSE
            </p>
            <div className="w-full h-[400px] md:h-[700px] lg:h-[900px] relative">
              <Image
                src={image}
                alt={name}
                fill
                style={{
                  objectFit: "contain",
                }}
                sizes="(max-width: 375px) 100vw, (max-width: 960px) 80vw, 60vw"
                className="aspect-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
