import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";

import DATA from "/new_data.json";

export default function Home() {
  return (
    <main className="w-full min-h-screen p-7 bg-light">
      <Header />
      <div className="w-full mt-10 gap-7 space-y-7 columns-1 md:columns-2 lg:columns-4">
        {DATA.map((img, index) => (
          <div
            key={index}
            className="aspect-auto relative transition-all duration-300 hover:scale-110 flex justify-center items-center"
          >
            <div className="relative hover:opacity-70 hover:cursor-pointer">
              <Image
                src={img.images.thumbnail}
                alt={img.name}
                width={400}
                height={712}
                sizes="(max-width: 375px) 327px, (max-width: 960px) 324px, 327px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/70"></div>
              <div className="text-white absolute bottom-3 left-5 ">
                <p className="text-3xl font-bold mr-10">{img.name}</p>
                <p className="text-sm mt-2">{img.artist.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
