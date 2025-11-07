import Image from "next/image"
import Link from "next/link"
import { getTranslations } from "next-intl/server"
import Reveal from "@/components/Reveal"

interface Photo {
  id: string
  path: string
}

interface PhotoCardProps {
  photoPath: string
  title: string
}

export default async function PhotosPage() {
  const t = await getTranslations("photospage")

  // Définition des photos avec leurs chemins corrects
  const photos: Photo[] = [
    {
      id: "sport",
      path: "/images/Photos-sport/Photo_dub_roofgap.jpg",
    },
    {
      id: "mosaic",
      path: "/images/Photos-mosaics/Photos_Bangkok_V1-33.jpg",
    },
    {
      id: "cityscape",
      path: "/images/Photos-cityscape/Photos HK chill-109.jpg",
    },
    {
      id: "landscape",
      path: "/images/Photos-landscape/Tests photos USA-147.jpg",
    },
    {
      id: "wedding",
      path: "/images/Photos-wedding/Wedding_photos_14.jpg",
    },
  ]

  return (
    <div className="flex justify-center">
      <article className="mb-8 flex w-full max-w-4xl flex-col items-center gap-4 px-4 sm:mb-12 sm:gap-8 sm:px-8 md:px-12">
        <Reveal>
          <header>
            <h1 className="text-gradient my-6 text-center text-4xl leading-normal font-bold sm:my-10 sm:text-5xl md:text-7xl">
              {t("title")}
            </h1>
            <p className="body-font mx-auto mb-8 max-w-4xl px-2 text-center sm:mb-16">
              {t("desc")}
            </p>
          </header>

          <section
            className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:gap-12"
            aria-label="Catégories de photographies"
          >
            {photos.map((photo) => (
              <PhotoCard key={photo.id} title={photo.id} photoPath={photo.path} />
            ))}
          </section>
        </Reveal>
      </article>
    </div>
  )
}

async function PhotoCard({ photoPath, title }: PhotoCardProps) {
  const t = await getTranslations("photospage")
  const categoryTitle = t(`${title}`)

  return (
    <Link href={`/photos/${title.toLowerCase()}`} aria-label={`Voir la galerie ${categoryTitle}`}>
      <article className="vertical-animation group my-2 flex flex-col overflow-hidden rounded-2xl border border-gray-200/10 bg-white/5 shadow-lg transition-all duration-300 hover:bg-white/10 sm:my-3">
        <figure className="relative overflow-hidden">
          <div className="relative h-[300px] w-full sm:h-[400px] md:h-[450px]">
            <Image
              src={photoPath}
              alt={`${categoryTitle} - Photographie de Félix Orain`}
              fill
              sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 45vw, 40vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-900/75 via-slate-900/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="translate-y-4 transform transition-transform duration-300 group-hover:translate-y-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm sm:h-14 sm:w-14 md:h-16 md:w-16">
                <Image
                  src="/icons/Main-icons/Loop-plus-icon.svg"
                  alt="View"
                  width={24}
                  height={24}
                  className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8 md:h-10 md:w-10"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <figcaption className="sr-only">
            {categoryTitle} - Galerie de photographies par Félix Orain
          </figcaption>
        </figure>

        <header className="bg-secondary p-3 sm:p-4">
          <h2 className="text-gradient text-center text-xl font-bold sm:text-2xl md:text-3xl">
            {categoryTitle}
          </h2>
        </header>
      </article>
    </Link>
  )
}
