"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useTheme } from "@/context/ThemeContext";
import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  websiteLink: string;
  images?: ProjectImage[];
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  websiteLink: string;
  images?: ProjectImage[];
}

// Project data
export const projects: Project[] = [
  {
    title: "gis",
    description: "gis",
    image: "/images/Photo-projets-dev/Web_Gis_Cover_Picture.jpg",
    githubLink: "https://github.com/filexf/webGIS-app",
    websiteLink: "https://data-visualizer-mocha.vercel.app/",
    images: [
      {
        src: "/images/Screenshots-GIS-Project/WebGIS-project-screenshot-1.jpg",
        alt: "Screenshot 1",
      },
      {
        src: "/images/Screenshots-GIS-Project/WebGIS-project-screenshot-2.jpg",
        alt: "Screenshot 2",
      },
    ],
  },
  {
    title: "portfolio",
    description: "portfolio",
    image: "/images/Photo-GGB/Photo_GGB_Squared.jpg",
    githubLink: "https://www.felix-orain.com",
    websiteLink: "https://github.com/filexf/felixorainportfolio",
  },
  {
    title: "carbonSavings",
    description: "carbonSavings",
    image: "/images/Photo-projets-dev/Carbon_Savings_simulator.jpg",
    githubLink: "https://github.com/filexf/carbon-savings-simulator",
    websiteLink: "https://carbon-savings-simulator.vercel.app/",
    images: [
      {
        src: "/images/Screenshots-Carbon-Savings-Simulator/Carbon_savings_screenshot-1.jpg",
        alt: "Screenshot 1",
      },
      {
        src: "/images/Screenshots-Carbon-Savings-Simulator/Carbon_savings_screenshot-2.jpg",
        alt: "Screenshot 2",
      },
    ],
  },
  {
    title: "movieWatchlist",
    description: "movieWatchlist",
    image: "/images/Photo-projets-dev/Watchlist_Cover.jpg",
    githubLink: "https://github.com/filexf/movies-watchlist",
    websiteLink: "https://movies-watchlist.vercel.app/",
    images: [
      {
        src: "/images/Screenshots-Watchlist/Watchlist-Screenshot-1.jpg",
        alt: "Screenshot 1",
      },
      {
        src: "/images/Screenshots-Watchlist/Watchlist-Screenshot-2.jpg",
        alt: "Screenshot 2",
      },
      {
        src: "/images/Screenshots-Watchlist/Watchlist-Screenshot-3.jpg",
        alt: "Screenshot 3",
      },
      {
        src: "/images/Screenshots-Watchlist/Watchlist-Screenshot-4.jpg",
        alt: "Screenshot 4",
      },
      {
        src: "/images/Screenshots-Watchlist/Watchlist-Screenshot-5.jpg",
        alt: "Screenshot 5",
      },
    ],
  },
  {
    title: "sportify",
    description: "sportify",
    image: "/images/Photo-projets-dev/Photo_Couverture_Sportify.png",
    githubLink: "https://github.com/filexf/sportify",
    websiteLink: "#",
    images: [
      {
        src: "/images/Screenshots-Sportify/Screenshots-Sportify-1.jpg",
        alt: "Screenshot 1",
      },
      {
        src: "/images/Screenshots-Sportify/Screenshots-Sportify-2.jpg",
        alt: "Screenshot 2",
      },
      {
        src: "/images/Screenshots-Sportify/Screenshots-Sportify-3.jpg",
        alt: "Screenshot 3",
      },
      {
        src: "/images/Screenshots-Sportify/Screenshots-Sportify-4.jpg",
        alt: "Screenshot 4",
      },
      {
        src: "/images/Screenshots-Sportify/Screenshots-Sportify-5.jpg",
        alt: "Screenshot 5",
      },
      {
        src: "/images/Screenshots-Sportify/Screenshots-Sportify-6.jpg",
        alt: "Screenshot 6",
      },
      {
        src: "/images/Screenshots-Sportify/Screenshots-Sportify-7.jpg",
        alt: "Screenshot 7",
      },
      {
        src: "/images/Screenshots-Sportify/Screenshots-Sportify-8.jpg",
        alt: "Screenshot 8",
      },
    ],
  },
  {
    title: "tymouet",
    description: "tymouet",
    image: "/images/Photo-projets-dev/Photo_Ty_Mouet.jpg",
    githubLink: "https://github.com/filexf/ty-mouet",
    websiteLink: "https://ty-mouet-c5897a5b74b0.herokuapp.com/",
    images: [
      {
        src: "/images/Screenshots-Tymouet/Tymouet-screenshot-1.jpeg",
        alt: "Screenshot 1",
      },
      {
        src: "/images/Screenshots-Tymouet/Tymouet-screenshot-2.jpeg",
        alt: "Screenshot 2",
      },
      {
        src: "/images/Screenshots-Tymouet/Tymouet-screenshot-3.jpeg",
        alt: "Screenshot 3",
      },
      {
        src: "/images/Screenshots-Tymouet/Tymouet-screenshot-4.jpeg",
        alt: "Screenshot 4",
      },
      {
        src: "/images/Screenshots-Tymouet/Tymouet-screenshot-5.jpeg",
        alt: "Screenshot 5",
      },
      {
        src: "/images/Screenshots-Tymouet/Tymouet-screenshot-6.jpeg",
        alt: "Screenshot 6",
      },
      {
        src: "/images/Screenshots-Tymouet/Tymouet-screenshot-7.jpeg",
        alt: "Screenshot 7",
      },
      {
        src: "/images/Screenshots-Tymouet/Tymouet-screenshot-8.jpeg",
        alt: "Screenshot 8",
      },
      {
        src: "/images/Screenshots-Tymouet/Tymouet-screenshot-9.jpeg",
        alt: "Screenshot 9",
      },
    ],
  },
];

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
        <div className="my-2 mb-2 flex flex-col rounded-2xl border-1 border-gray-200 bg-secondary shadow-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-gray-100 md:flex md:items-center lg:flex-row">
          <div className="relative h-48 w-full overflow-hidden rounded-2xl sm:h-56 md:h-64 md:w-80 md:min-w-80 md:flex-shrink-0 lg:h-80 lg:w-96 lg:min-w-96">
            <Image
              src={image}
              alt={t(`projects.${title}.title`)}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 384px, 384px"
              className="object-cover"
              priority={title === "gis"}
              quality={85}
            />
          </div>

          <div className="flex flex-col gap-2 p-3 leading-normal sm:gap-3 sm:p-4 md:gap-4 md:p-5 lg:p-7">
            <h5 className="text-gradient mb-1 text-center text-xl font-bold tracking-tight sm:mb-2 sm:text-2xl md:text-3xl lg:text-4xl">
              {t(`projects.${title}.title`)}
            </h5>

            <p className="mb-2 p-1 text-center text-xs font-normal sm:mb-3 sm:p-2 sm:text-sm md:p-3 md:text-base">
              {t(`projects.${description}.desc`)}
            </p>
            <div className="flex justify-center gap-3 sm:gap-5 md:gap-10">
              <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                <Image
                  src={
                    darkMode
                      ? "/icons/Main-icons/Github-icon-white.svg"
                      : "/icons/Tech stack icons/Github-icon.svg"
                  }
                  alt="GitHub"
                  width={36}
                  height={36}
                  className="vertical-animation h-8 w-8 opacity-80 hover:scale-102 hover:opacity-100 sm:h-10 sm:w-10 md:h-12 md:w-12"
                />
              </Link>
              {images && (
                <div className="cursor-pointer" onClick={openLightbox}>
                  <Image
                    src="/icons/Main-icons/Gallery-icon.svg"
                    alt="Gallery Icon"
                    width={36}
                    height={36}
                    className={`vertical-animation h-8 w-8 opacity-80 hover:scale-102 hover:opacity-100 sm:h-10 sm:w-10 md:h-12 md:w-12 ${darkMode ? "invert filter" : ""}`}
                  />
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
              {websiteLink && websiteLink !== "#" && (
                <Link
                  href={websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/Main-icons/Website-icon.svg"
                    alt="Website"
                    width={36}
                    height={36}
                    className={`vertical-animation h-8 w-8 opacity-80 hover:scale-102 hover:opacity-100 sm:h-10 sm:w-10 md:h-12 md:w-12 ${darkMode ? "invert filter" : ""}`}
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
