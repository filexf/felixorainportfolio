"use client"

import { BookOpen, Film } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import React from "react"
import Reveal from "@/components/Reveal"
import { ButtonLink } from "@/components/ui/button"

interface BookCardProps {
  title: string
  description: string
  coverImage: string
  galleryLink: string
  reverseLayout: boolean
  hasFilmLink?: boolean
  filmLink?: string
}

interface PhotoMagazineProps {
  link: string
  src: string
  title?: string
}

function PhotoMagazine({ link, src, title }: PhotoMagazineProps) {
  const t = useTranslations()

  return (
    <Link
      href={link}
      className="group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-md"
      aria-label={title ? `Voir la galerie du magazine ${title}` : `Voir la galerie du magazine`}
    >
      <figure className="relative h-full w-full">
        <Image
          src={src}
          alt={
            title
              ? `Couverture du magazine ${title} - Félix Orain`
              : `Couverture du magazine - Félix Orain`
          }
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 66vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="translate-y-4 transform transition-transform duration-300 group-hover:translate-y-0">
            <div className="flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <div className="flex justify-center gap-3 px-3 py-2 sm:gap-6 sm:px-4 sm:py-3">
                <p className="text-xl font-bold text-white sm:text-3xl">{t("books.seegallery")}</p>
                <BookOpen
                  className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
        <figcaption className="sr-only">
          {title ? `Couverture du magazine ${title}` : "Couverture du magazine"}
        </figcaption>
      </figure>
    </Link>
  )
}

export default function BookCard({
  title,
  description,
  coverImage,
  galleryLink,
  reverseLayout,
  hasFilmLink,
  filmLink,
}: BookCardProps) {
  // On définit les classes de mise en page en fonction de reverseLayout
  const layoutClasses = reverseLayout
    ? " my-6 flex flex-col lg:flex-row-reverse w-full items-center justify-center gap-8 rounded-2xl border-1 border-gray-200 bg-secondary p-4 shadow-lg hover:bg-gray-100 sm:p-6 md:gap-[64px]"
    : " my-3 flex flex-col lg:flex-row w-full items-center justify-center gap-8 rounded-2xl border-1 border-gray-200 bg-secondary p-4 shadow-lg hover:bg-gray-100 sm:p-6 md:gap-[64px]"
  const t = useTranslations()

  return (
    <Reveal>
      <article className={layoutClasses}>
        {/* Le contenu texte */}
        <header className="flex w-full flex-col items-center justify-center gap-5 px-2 sm:gap-7 sm:px-4 lg:w-1/2">
          <h2 className="text-gradient py-1 pt-2 text-center text-3xl font-bold sm:pt-5 sm:text-5xl">
            {title}
          </h2>
          <p className="mb-2 p-1 text-center sm:mb-3 sm:p-2 md:text-base">
            {description.split("\n").map((line, index, array) => (
              <React.Fragment key={index}>
                {line}
                {index < array.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>

          {/* Boutons d'action */}
          <nav
            className="flex flex-col gap-4 sm:flex-row sm:gap-6"
            aria-label={`Actions pour ${title}`}
          >
            <ButtonLink
              href={galleryLink}
              className="group rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:border dark:border-blue-700 dark:bg-gray-900/80 dark:text-white dark:hover:bg-gray-800/90"
            >
              <span className="text-xs font-medium tracking-wide sm:text-sm">
                {t("books.seegallery")}
              </span>
              <BookOpen
                className="h-5 w-5 transform transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
            </ButtonLink>

            {hasFilmLink && filmLink && (
              <ButtonLink
                href={filmLink}
                className="group bg-primary rounded-xl border-2 border-slate-900 text-slate-900 hover:bg-slate-800 hover:text-white dark:border-slate-300 dark:text-white dark:hover:border-slate-50"
                {...(filmLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="text-xs font-medium tracking-wide sm:text-sm">
                  {t("books.watchmovie")}
                </span>
                <Film
                  className="h-5 w-5 transform transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                />
              </ButtonLink>
            )}
          </nav>
        </header>

        {/* L'image de couverture */}
        <aside className="w-full flex-shrink-0 sm:w-3/4 md:w-2/3 lg:w-1/3">
          <PhotoMagazine link={galleryLink} src={coverImage} title={title} />
        </aside>
      </article>
    </Reveal>
  )
}
