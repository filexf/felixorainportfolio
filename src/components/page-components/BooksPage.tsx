"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { useTranslations } from "next-intl";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { ButtonLink } from "@/components/ui/button";
import { BookOpen, Film } from "lucide-react";

export default function BooksPage() {
  const { darkMode } = useTheme();
  const t = useTranslations();

  return (
    <>
      <Reveal>
        <div className="flex justify-center p-4 sm:p-8">
          <div className="mt-[30px] flex w-full flex-col items-center gap-8 sm:w-[90%] sm:gap-12 lg:w-4/5">
            <h1 className="text-gradient text-center text-5xl md:text-7xl leading-normal font-bold">
              {t("books.title")}
            </h1>
            <p className="body-font mx-auto max-w-4xl px-4 text-center">
              {t("books.description")}
            </p>

            {/* Civilisation Book */}
            <BookCard
              title={t("books.civilisation.title")}
              description={t("books.civilisation.description")}
              coverImage="/images/Couvertures magazines/Civilisation Mag.jpg"
              galleryLink="/books/civilisation"
              reverseLayout={true}
              hasFilmLink={true}
              filmLink="https://www.youtube.com/watch?v=Q-gz6qA1h14"
              darkMode={darkMode}
            />

            {/* Wizzy en Asie Book */}
            <BookCard
              title={t("books.wizzy.title")}
              description={t("books.wizzy.description")}
              coverImage="/images/Couvertures magazines/WIZZY En Asie BONNE VERSION.jpg"
              galleryLink="/books/wizzyenasie"
              reverseLayout={false}
              darkMode={darkMode}
            />
          </div>
        </div>
      </Reveal>
    </>
  );
}

interface BookCardProps {
  title: string;
  description: string;
  coverImage: string;
  galleryLink: string;
  reverseLayout: boolean;
  hasFilmLink?: boolean;
  filmLink?: string;
  darkMode: boolean;
}

function BookCard({
  title,
  description,
  coverImage,
  galleryLink,
  reverseLayout,
  hasFilmLink,
  filmLink,
  darkMode,
}: BookCardProps) {
  // On définit les classes de mise en page en fonction de reverseLayout
  const layoutClasses = reverseLayout
    ? "vertical-animation my-3 flex flex-col lg:flex-row-reverse w-full items-center justify-center gap-8 rounded-2xl border-1 border-gray-200 bg-secondary p-4 shadow-lg transition-all duration-300 hover:bg-gray-100 sm:p-6 md:gap-[64px]"
    : "vertical-animation my-3 flex flex-col lg:flex-row w-full items-center justify-center gap-8 rounded-2xl border-1 border-gray-200 bg-secondary p-4 shadow-lg transition-all duration-300 hover:bg-gray-100 sm:p-6 md:gap-[64px]";
  const t = useTranslations();

  return (
    <Reveal>
      <div className={layoutClasses}>
        {/* Le contenu texte */}
        <div className="flex w-full flex-col items-center justify-center gap-5 px-2 sm:gap-7 sm:px-4 lg:w-1/2">
          <h2 className="text-gradient py-1 pt-2 text-center text-3xl font-bold sm:pt-5 sm:text-5xl">
            {title}
          </h2>
          <p className="mb-2 p-1 text-center sm:mb-3 sm:p-2 md:text-base">
            {description
              .split("\n")
              .map((line, index, array) => (
                <React.Fragment key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </React.Fragment>
              ))}
          </p>
          <div className="mb-4 flex flex-wrap justify-center gap-3 sm:gap-4">
            {/* Bouton Galerie */}
            <ButtonLink
              href={galleryLink}
              variant="outline"
              className="group items-center"
            >
              <span className="text-xs font-medium tracking-wide sm:text-sm">
                {t("books.galleryphoto")}
              </span>
              <BookOpen className="h-5 w-5 transform transition-transform duration-300 group-hover:scale-110" />
            </ButtonLink>

            {/* Bouton Film (conditionnel) */}
            {hasFilmLink && (
              <ButtonLink
                href={filmLink || "#"}
                variant="outline"
                className="group items-center"
                {...(filmLink ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="text-xs font-medium tracking-wide sm:text-sm">
                  {t("books.watchmovie")}
                </span>
                <Film className="h-5 w-5 transform transition-transform duration-300 group-hover:scale-110" />
              </ButtonLink>
            )}
          </div>
        </div>

        {/* L'image de couverture */}
        <div className="w-full flex-shrink-0 sm:w-3/4 md:w-2/3 lg:w-1/3">
          <PhotoMagazine
            link={galleryLink}
            src={coverImage}
            darkMode={darkMode}
          />
        </div>
      </div>
    </Reveal>
  );
}

interface PhotoMagazineProps {
  link: string;
  src: string;
  darkMode?: boolean;
}

function PhotoMagazine({ link, src }: PhotoMagazineProps) {
  const t = useTranslations();

  return (
    <Link
      href={link}
      className="group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-md"
    >
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt="Book cover"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 66vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          quality={90}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="translate-y-4 transform transition-transform duration-300 group-hover:translate-y-0">
            <div className="flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <div className="flex justify-center gap-3 px-3 py-2 sm:gap-6 sm:px-4 sm:py-3">
                <p className="text-xl font-bold text-white sm:text-3xl">
                  {t("books.seegallery")}
                </p>
                <BookOpen className="h-6 w-6 text-white sm:h-10 sm:w-10 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
