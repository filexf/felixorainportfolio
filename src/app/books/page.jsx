"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../../components/Reveal";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { t } from "../../i18n/i18n";

export default function BooksPage() {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <>
      <Reveal>
        <div className="flex justify-center p-4 sm:p-8">
          <div className="mt-[30px] flex w-full flex-col items-center gap-8 sm:w-[90%] sm:gap-12 lg:w-4/5">
            <h1 className="text-gradient text-center text-5xl md:text-7xl leading-normal font-bold">
              {t("books.title", language)}
            </h1>
            <p className="body-font mx-auto max-w-4xl px-4 text-center">
              {t("books.description", language)}
            </p>

            {/* Civilisation Book */}
            <BookCard
              title={t("books.civilisation.title", language)}
              description={t("books.civilisation.description", language)}
              coverImage="/images/Couvertures magazines/Civilisation Mag.jpg"
              galleryLink="/books/civilisation"
              reverseLayout={true}
              hasFilmLink={true}
              filmLink="https://www.youtube.com/watch?v=Q-gz6qA1h14"
              darkMode={darkMode}
            />

            {/* Wizzy en Asie Book */}
            <BookCard
              title={t("books.wizzy.title", language)}
              description={t("books.wizzy.description", language)}
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

function BookCard({
  title,
  description,
  coverImage,
  galleryLink,
  reverseLayout,
  hasFilmLink,
  filmLink,
  darkMode,
}) {
  // On définit les classes de mise en page en fonction de reverseLayout
  const layoutClasses = reverseLayout
    ? "vertical-animation my-3 flex flex-col lg:flex-row-reverse w-full items-center justify-center gap-8 rounded-2xl border-1 border-gray-200 bg-slate-50 p-4 shadow-lg transition-all duration-300 hover:bg-gray-100 sm:p-6 md:gap-[64px]"
    : "vertical-animation my-3 flex flex-col lg:flex-row w-full items-center justify-center gap-8 rounded-2xl border-1 border-gray-200 bg-slate-50 p-4 shadow-lg transition-all duration-300 hover:bg-gray-100 sm:p-6 md:gap-[64px]";
  const { language } = useLanguage();

  return (
    <Reveal>
      <div className={layoutClasses}>
        {/* Le contenu texte */}
        <div className="flex w-full flex-col items-center justify-center gap-5 px-2 sm:gap-7 sm:px-4 lg:w-1/2">
          <h2 className="text-gradient py-1 pt-2 text-center text-3xl font-bold sm:pt-5 sm:text-5xl">
            {title}
          </h2>
          <p
            className="mb-2 p-1 text-center sm:mb-3 sm:p-2 md:text-base"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          <div className="mb-4 flex flex-wrap justify-center gap-3 sm:gap-4">
            {/* Bouton Galerie */}
            <Link
              href={galleryLink}
              className="group inline-flex items-center gap-2 rounded-full border px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-300 sm:gap-3 sm:px-5"
            >
              <span className="text-xs font-medium tracking-wide sm:text-sm">
                {t("books.galleryphoto", language)}
              </span>
              <Image
                src="/icons/Main-icons/Loop-plus-icon.svg"
                alt="View more"
                width={20}
                height={20}
                className={`transform transition-transform duration-300 group-hover:scale-110 ${darkMode ? "" : "invert"}`}
              />
            </Link>

            {/* Bouton Film (conditionnel) */}
            {hasFilmLink && (
              <a
                href={filmLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border px-4 py-2 transition-all duration-300 ease-in-out hover:bg-gray-300 sm:gap-3 sm:px-5"
              >
                <span className="text-xs font-medium tracking-wide sm:text-sm">
                  {t("books.watchmovie", language)}
                </span>
                <svg
                  className="h-4 w-4 transform transition-transform duration-300 group-hover:scale-110 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </a>
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

function PhotoMagazine({ link, src }) {
  const { language } = useLanguage();

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
                  {t("books.seegallery", language)}
                </p>
                <Image
                  src="/icons/Main-icons/Loop-plus-icon.svg"
                  alt="View more"
                  width={40}
                  height={40}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
