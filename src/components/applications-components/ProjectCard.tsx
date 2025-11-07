"use client";

import Reveal from "@/components/Reveal";
import { useTheme } from "@/context/ThemeContext";
import { projects, type ProjectImage } from "@/lib/projects";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  websiteLink: string;
  images?: ProjectImage[];
}

// Re-export projects for backward compatibility
export { projects };

export function ProjectCard({
  title,
  description,
  image,
  githubLink,
  websiteLink,
  images,
}: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const { darkMode } = useTheme();
  const t = useTranslations();

  const openLightbox = (): void => {
    setCurrentImageIndex(0);
    setIsOpen(true);
  };

  const closeLightbox = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <Reveal>
        <article className="bg-secondary my-2 mb-2 flex flex-col rounded-2xl border-1 border-gray-200 shadow-md transition-all duration-300 ease-in-out hover:bg-gray-100 md:flex md:items-center lg:flex-row">
          <figure className="relative h-48 w-full overflow-hidden rounded-2xl sm:h-56 md:h-64 md:w-80 md:min-w-80 md:flex-shrink-0 lg:h-80 lg:w-96 lg:min-w-96">
            <Image
              src={image}
              alt={t(`projects.${title}.title`)}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 384px, 384px"
              className="object-cover"
              priority={title === "gis"}
              quality={85}
            />
            <figcaption className="sr-only">
              {t(`projects.${title}.title`)} - Capture d'écran du projet
            </figcaption>
          </figure>

          <div className="flex flex-col gap-2 p-3 leading-normal sm:gap-3 sm:p-4 md:gap-4 md:p-5 lg:p-7">
            <header>
              <h3 className="text-gradient mb-1 text-center text-xl font-bold tracking-tight sm:mb-2 sm:text-2xl md:text-3xl lg:text-4xl">
                {t(`projects.${title}.title`)}
              </h3>
            </header>

            <p className="mb-2 p-1 text-center text-xs font-normal sm:mb-3 sm:p-2 sm:text-sm md:p-3 md:text-base">
              {t(`projects.${description}.desc`)}
            </p>
            <nav
              className="flex justify-center gap-3 sm:gap-5 md:gap-10"
              aria-label={`Actions pour ${t(`projects.${title}.title`)}`}
            >
              {/* GitHub */}
              <div className="flex flex-col items-center gap-1">
                <Link
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Voir le code source de ${t(`projects.${title}.title`)} sur GitHub`}
                >
                  <Image
                    src={
                      darkMode
                        ? "/icons/Main-icons/Github-icon-white.svg"
                        : "/icons/Tech stack icons/Github-icon.svg"
                    }
                    alt=""
                    width={36}
                    height={36}
                    className="vertical-animation h-8 w-8 opacity-80 hover:scale-102 hover:opacity-100 sm:h-10 sm:w-10 md:h-12 md:w-12"
                    aria-hidden="true"
                  />
                </Link>
                <span className="text-[.625rem] font-medium sm:text-xs">
                  {t("projects.actions.code")}
                </span>
              </div>
              {/* Gallery */}
              {images && (
                <div className="flex flex-col items-center gap-1">
                  <button
                    className="cursor-pointer"
                    onClick={openLightbox}
                    aria-label={`Voir les captures d'écran de ${t(`projects.${title}.title`)}`}
                  >
                    <Image
                      src="/icons/Main-icons/Gallery-icon.svg"
                      alt=""
                      width={36}
                      height={36}
                      className={`vertical-animation h-8 w-8 opacity-80 hover:scale-102 hover:opacity-100 sm:h-10 sm:w-10 md:h-12 md:w-12 ${darkMode ? "invert filter" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                  <span className="text-[.625rem] font-medium sm:text-xs">
                    {t("projects.actions.preview")}
                  </span>
                </div>
              )}
              <Lightbox
                open={isOpen}
                index={currentImageIndex}
                close={() => closeLightbox()}
                slides={
                  images &&
                  images.map((image) => ({
                    src: image.src,
                    alt: image.alt,
                  }))
                }
              />
              {/* Website */}
              {websiteLink && websiteLink !== "#" && (
                <div className="flex flex-col items-center gap-1">
                  <Link
                    href={websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visiter ${t(`projects.${title}.title`)}`}
                  >
                    <Image
                      src="/icons/Main-icons/Website-icon.svg"
                      alt=""
                      width={36}
                      height={36}
                      className={`vertical-animation h-8 w-8 opacity-80 hover:scale-102 hover:opacity-100 sm:h-10 sm:w-10 md:h-12 md:w-12 ${darkMode ? "invert filter" : ""}`}
                      aria-hidden="true"
                    />
                  </Link>
                  <span className="text-[.625rem] font-medium sm:text-xs">
                    {t("projects.actions.demo")}
                  </span>
                </div>
              )}
            </nav>
          </div>
        </article>
      </Reveal>
    </>
  );
}
