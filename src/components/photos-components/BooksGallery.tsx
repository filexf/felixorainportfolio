"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useTranslations } from "next-intl";

interface GalleryImage {
  src: string;
  title: string;
}

interface GalleryProps {
  title: string;
  images: GalleryImage[];
}

export default function Gallery({ title, images }: GalleryProps) {
  const t = useTranslations();
  const [open, setOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <div className="flex w-full justify-center px-2 py-12 sm:px-4">
      <div className="flex w-full flex-col gap-6 sm:gap-10 max-w-5xl">
        <h2 className="text-gradient text-center text-5xl leading-normal font-bold sm:text-6xl md:text-7xl">
          {title}
        </h2>
        <p className="body-font mx-auto max-w-4xl px-4 text-center">
          {t("bookgallery.desc")}
        </p>

        <div className="xs:grid-cols-2 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 px-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[3/2] cursor-pointer overflow-hidden rounded-md transition-all duration-300 hover:shadow-md"
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
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
            slide: { maxHeight: "85vh" },
          }}
          carousel={{
            spacing: 10,
            padding: 10,
          }}
        />
      </div>
    </div>
  );
}
