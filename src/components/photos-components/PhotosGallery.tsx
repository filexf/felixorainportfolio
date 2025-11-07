"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface GalleryImage {
  src: string;
  title: string;
}

interface GalleryProps {
  title: string;
  images: GalleryImage[];
  text?: string;
}

const Gallery = ({ title, images, text }: GalleryProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <main className="flex w-full justify-center pt-[40px] pb-[120px]">
      <article className="flex flex-col gap-[40px] px-8">
        <header>
          <h1 className="text-gradient text-center text-5xl leading-normal font-bold md:text-7xl">
            {title}
          </h1>
          {text && (
            <p className="body-font mx-auto max-w-5xl text-center">{text}</p>
          )}
        </header>

        <section
          className="xs:grid-cols-2 grid grid-cols-1 gap-4 overflow-hidden px-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4"
          aria-label={`Galerie de ${title}`}
        >
          {images.map((image, index) => (
            <figure
              key={index}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-md transition-all duration-300 hover:shadow-md"
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            >
              <Image
                src={image.src}
                alt={image.title || `${title} - Image ${index + 1}`}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="rounded-md object-cover transition-all duration-300 hover:scale-[0.97]"
                quality={85}
                loading={index < 4 ? "eager" : "lazy"}
                priority={index < 4}
                aria-label={`${image.title || title} - Image ${index + 1}`}
              />
              <figcaption className="sr-only">
                {image.title || `${title} - Image ${index + 1}`}
              </figcaption>
            </figure>
          ))}
        </section>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={images.map((img) => ({ src: img.src, title: img.title }))}
          on={{
            view: ({ index }) => setCurrentIndex(index),
          }}
        />
      </article>
    </main>
  );
};

export default Gallery;
