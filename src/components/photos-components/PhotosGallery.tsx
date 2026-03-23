"use client"
import Image from "next/image"
import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

interface GalleryImage {
  src: string
  title: string
}

interface GalleryProps {
  title: string
  images: GalleryImage[]
  text?: string
}

interface GalleryThumbnailProps {
  src: string
  alt: string
  sizes: string
  quality: number
  loading: "eager" | "lazy"
  priority?: boolean
}

function GalleryThumbnail({ src, alt, sizes, quality, loading, priority }: GalleryThumbnailProps) {
  const [loaded, setLoaded] = useState(false)

  const markLoaded = () => setLoaded(true)

  return (
    <div className="absolute inset-0 overflow-hidden rounded-md">
      <div className="relative h-full w-full origin-center transition-transform duration-200 ease-out group-hover:scale-105">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`object-cover ${loaded ? "blur-0" : "blur-md"}`}
          style={{ transition: "filter 450ms ease-out" }}
          quality={quality}
          loading={loading}
          priority={priority}
          onLoad={markLoaded}
        />
      </div>
    </div>
  )
}

const Gallery = ({ title, images, text }: GalleryProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  return (
    <div className="flex w-full justify-center pt-[40px] pb-[120px]">
      <article className="flex flex-col gap-16 px-8">
        <header className="flex flex-col gap-8">
          <h1 className="text-gradient text-center text-5xl leading-normal font-bold md:text-7xl">
            {title}
          </h1>
          {text && <p className="body-font mx-auto max-w-5xl text-center">{text}</p>}
        </header>

        <section
          className="xs:grid-cols-2 grid grid-cols-1 gap-4 overflow-hidden px-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4"
          aria-label={`Galerie de ${title}`}
        >
          {images.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-md transition-shadow duration-300 hover:shadow-md"
              onClick={() => {
                setCurrentIndex(index)
                setOpen(true)
              }}
              aria-label={`Voir ${image.title || `${title} - Image ${index + 1}`}`}
            >
              <figure className="relative h-full w-full">
                <GalleryThumbnail
                  src={image.src}
                  alt={image.title || `${title} - Image ${index + 1}`}
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  quality={90}
                  loading={index < 4 ? "eager" : "lazy"}
                />
                <figcaption className="sr-only">
                  {image.title || `${title} - Image ${index + 1}`}
                </figcaption>
              </figure>
            </button>
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
    </div>
  )
}

export default Gallery
