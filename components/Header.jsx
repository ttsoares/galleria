"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="flex w-full items-center justify-between mx-auto my-4 px-2 md:px-2 lg:px-4">
      <div className="w-28 h-10 md:w-36 md:h-12">
        <Image
          src="/imgs/galleria.svg"
          alt="logo galleria"
          width={270}
          height={70}
        />
      </div>
      {pathname === "/" ? (
        <Link
          className="text-[8px] md:text-xs text-dark tracking-[3px] font-bold hover:text-black"
          href="/show"
        >
          START SLIDESHOW
        </Link>
      ) : (
        <Link className="text-xs text-dark tracking-[3px] font-bold" href="/">
          STOP SLIDESHOW
        </Link>
      )}
    </div>
  );
};

export default Header;
