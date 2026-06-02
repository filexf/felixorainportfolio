"use client"
import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
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

type GalleryItem = { image: GalleryImage; index: number }

function getColumnCount(width: number) {
  if (width >= 1024) return 4
  if (width >= 768) return 3
  return 2
}

/** Row-first masonry: [0][1][2][3] on the first row, then [4][5]… */
function splitIntoColumns(items: GalleryItem[], columnCount: number): GalleryItem[][] {
  const columns = Array.from({ length: columnCount }, () => [] as GalleryItem[])
  for (let i = 0; i < items.length; i++) {
    columns[i % columnCount].push(items[i])
  }
  return columns
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

  return (
    <div className="overflow-hidden rounded-md">
      <div className="origin-center transition-transform duration-200 ease-out group-hover:scale-105">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={900}
          sizes={sizes}
          className={`h-auto w-full object-cover ${loaded ? "blur-0" : "blur-md"}`}
          style={{ width: "100%", height: "auto", transition: "filter 450ms ease-out" }}
          quality={quality}
          loading={loading}
          priority={priority}
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>
  )
}

const Gallery = ({ title, images, text }: GalleryProps) => {
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [columnCount, setColumnCount] = useState(2)

  useEffect(() => {
    const update = () => setColumnCount(getColumnCount(window.innerWidth))
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const columns = useMemo(
    () =>
      splitIntoColumns(
        images.map((image, index) => ({ image, index })),
        columnCount,
      ),
    [images, columnCount],
  )

  return (
    <div className="flex w-full justify-center pt-[40px] pb-[120px]">
      <article className="flex flex-col gap-16 px-8">
        <header className="flex flex-col gap-8">
          <h1 className="text-gradient text-center text-5xl leading-normal font-bold md:text-7xl">
            {title}
          </h1>
          {text && <p className="body-font mx-auto max-w-5xl text-center">{text}</p>}
        </header>

        <section className="flex w-full gap-4 px-4 sm:gap-5" aria-label={`Galerie de ${title}`}>
          {columns.map((column) => (
            <div
              key={column[0] ? `${column[0].image.src}-${column[0].index}` : "empty"}
              className="flex min-w-0 flex-1 flex-col gap-4 sm:gap-5"
            >
              {column.map(({ image, index }) => (
                <button
                  key={`${image.src}-${index}`}
                  type="button"
                  className="group w-full cursor-pointer overflow-hidden rounded-md border-0 bg-transparent p-0 text-left transition-shadow duration-300 hover:shadow-md"
                  onClick={() => {
                    setCurrentIndex(index)
                    setOpen(true)
                  }}
                  aria-label={`Voir ${image.title || `${title} - Image ${index + 1}`}`}
                >
                  <figure className="m-0 w-full">
                    <GalleryThumbnail
                      src={image.src}
                      alt={image.title || `${title} - Image ${index + 1}`}
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      quality={80}
                      loading={index < columnCount ? "eager" : "lazy"}
                      priority={index < columnCount}
                    />
                    <figcaption className="sr-only">
                      {image.title || `${title} - Image ${index + 1}`}
                    </figcaption>
                  </figure>
                </button>
              ))}
            </div>
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
