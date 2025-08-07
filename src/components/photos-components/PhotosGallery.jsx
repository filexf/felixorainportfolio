"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = ({ title, images, text }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex w-full justify-center pt-[40px] pb-[120px]">
      <div className="flex flex-col gap-[40px] px-8">
        <h2 className="text-gradient text-center text-5xl leading-normal font-bold md:text-7xl">
          {title}
        </h2>
        <p className="body-font mx-auto max-w-5xl text-center">{text}</p>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 overflow-hidden px-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-md transition-all duration-300 hover:shadow-md"
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="rounded-md object-cover transition-all duration-300 hover:scale-[0.97]"
                quality={85}
                loading={index < 4 ? "eager" : "lazy"}
                priority={index < 4}
              />
            </div>
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={images.map((img) => ({ src: img.src, title: img.title }))}
          on={{
            view: ({ index }) => setCurrentIndex(index),
          }}
        />
      </div>
    </div>
  );
};

export default Gallery;
