"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { t } from "../../i18n/i18n";
import Reveal from "../Reveal";

// Project data
export const projects = [
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
    githubLink: "https://github.com/filexf/felix-portfolio",
    websiteLink: "https://filexf.github.io/felix-portfolio/",
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
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  const openLightbox = () => {
    setCurrentImageIndex(0);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Reveal>
        <div className="my-2 mb-2 flex flex-col rounded-2xl border-1 border-gray-200 bg-slate-50 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-gray-100 md:flex md:items-center lg:flex-row">
          <div className="relative h-64 w-full overflow-hidden rounded-2xl md:h-96 md:w-96 md:min-w-96 md:flex-shrink-0">
            <Image
              src={image}
              alt={t(`projects.${title}.title`, language)}
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-cover"
              priority={title === "gis"}
              quality={85}
            />
          </div>

          <div className="flex flex-col gap-4 p-4 leading-normal md:p-7">
            <h5 className="text-gradient mb-2 text-center text-2xl font-bold tracking-tight md:text-4xl">
              {t(`projects.${title}.title`, language)}
            </h5>

            <p className="mb-3 p-2 text-center text-sm font-normal md:p-3 md:text-base">
              {t(`projects.${description}.desc`, language)}
            </p>
            <div className="flex justify-center gap-5 md:gap-10">
              <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                <Image
                  src={
                    darkMode
                      ? "/icons/Main-icons/Github-icon-white.svg"
                      : "/icons/Tech stack icons/Github-icon.svg"
                  }
                  alt="GitHub"
                  width={48}
                  height={48}
                  className="vertical-animation opacity-80 hover:scale-102 hover:opacity-100"
                />
              </Link>
              {images && (
                <div className="cursor-pointer" onClick={openLightbox}>
                  <Image
                    src="/icons/Main-icons/Gallery-icon.svg"
                    alt="Gallery Icon"
                    width={48}
                    height={48}
                    className={`vertical-animation opacity-80 hover:scale-102 hover:opacity-100 ${darkMode ? "invert filter" : ""}`}
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
                    width={48}
                    height={48}
                    className={`vertical-animation opacity-80 hover:scale-102 hover:opacity-100 ${darkMode ? "invert filter" : ""}`}
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
