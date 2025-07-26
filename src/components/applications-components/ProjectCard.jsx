import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // Opt
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext"; // Import du contexte de thème
import { t } from "../../i18n/i18n";

// Icons & pictures
import galleryIcon from "../../assets/icons/Main-icons/Gallery-icon.svg";
import githubIconWhite from "../../assets/icons/Main-icons/Github-icon-white.svg"; // Icône GitHub blanche
import websiteIcon from "../../assets/icons/Main-icons/Website-icon.svg";
import githubIcon from "../../assets/icons/Tech stack icons/Github-icon.svg";

import portfolioPicture from "../../assets/images/Photo-GGB/Photo_GGB_Squared.jpg";
import carbonSavingsPhoto from "../../assets/images/Photo-projets-dev/Carbon_Savings_simulator.jpg";
import sportifyPicture from "../../assets/images/Photo-projets-dev/Photo_Couverture_Sportify.png";
import tyMouetPicture from "../../assets/images/Photo-projets-dev/Photo_Ty_Mouet.jpg";
import moviesWatchlistPicture from "../../assets/images/Photo-projets-dev/Watchlist_Cover.jpg";
import gisProject from "../../assets/images/Photo-projets-dev/Web_Gis_Cover_Picture.jpg";

// Screenshots Sportify
import screenshotSportify1 from "../../assets/images/Screenshots-Sportify/Screenshots-Sportify-1.jpg";
import screenshotSportify2 from "../../assets/images/Screenshots-Sportify/Screenshots-Sportify-2.jpg";
import screenshotSportify3 from "../../assets/images/Screenshots-Sportify/Screenshots-Sportify-3.jpg";
import screenshotSportify4 from "../../assets/images/Screenshots-Sportify/Screenshots-Sportify-4.jpg";
import screenshotSportify5 from "../../assets/images/Screenshots-Sportify/Screenshots-Sportify-5.jpg";
import screenshotSportify6 from "../../assets/images/Screenshots-Sportify/Screenshots-Sportify-6.jpg";
import screenshotSportify7 from "../../assets/images/Screenshots-Sportify/Screenshots-Sportify-7.jpg";
import screenshotSportify8 from "../../assets/images/Screenshots-Sportify/Screenshots-Sportify-8.jpg";

// Screenshots Ty Mouet
import screenshotTyMouet1 from "../../assets/images/Screenshots-Tymouet/Tymouet-screenshot-1.jpeg";
import screenshotTyMouet2 from "../../assets/images/Screenshots-Tymouet/Tymouet-screenshot-2.jpeg";
import screenshotTyMouet3 from "../../assets/images/Screenshots-Tymouet/Tymouet-screenshot-3.jpeg";
import screenshotTyMouet4 from "../../assets/images/Screenshots-Tymouet/Tymouet-screenshot-4.jpeg";
import screenshotTyMouet5 from "../../assets/images/Screenshots-Tymouet/Tymouet-screenshot-5.jpeg";
import screenshotTyMouet6 from "../../assets/images/Screenshots-Tymouet/Tymouet-screenshot-6.jpeg";
import screenshotTyMouet7 from "../../assets/images/Screenshots-Tymouet/Tymouet-screenshot-7.jpeg";
import screenshotTyMouet8 from "../../assets/images/Screenshots-Tymouet/Tymouet-screenshot-8.jpeg";
import screenshotTyMouet9 from "../../assets/images/Screenshots-Tymouet/Tymouet-screenshot-9.jpeg";

// Screenshots GIS Project
import screenshotGisProject1 from "../../assets/images/Screenshots-GIS-Project/WebGIS-project-screenshot-1.jpg";
import screenshotGisProject2 from "../../assets/images/Screenshots-GIS-Project/WebGIS-project-screenshot-2.jpg";

// Screenshots Movies Watchlist
import screenshotMoviesWatchlist1 from "../../assets/images/Screenshots-Watchlist/Watchlist-Screenshot-1.jpg";
import screenshotMoviesWatchlist2 from "../../assets/images/Screenshots-Watchlist/Watchlist-Screenshot-2.jpg";
import screenshotMoviesWatchlist3 from "../../assets/images/Screenshots-Watchlist/Watchlist-Screenshot-3.jpg";
import screenshotMoviesWatchlist4 from "../../assets/images/Screenshots-Watchlist/Watchlist-Screenshot-4.jpg";
import screenshotMoviesWatchlist5 from "../../assets/images/Screenshots-Watchlist/Watchlist-Screenshot-5.jpg";

// Screenshots Carbon Savings Simulator
import screenshotCarbonSavings1 from "../../assets/images/Screenshots-Carbon-Savings-Simulator/Carbon_savings_screenshot-1.jpg";
import screenshotCarbonSavings2 from "../../assets/images/Screenshots-Carbon-Savings-Simulator/Carbon_savings_screenshot-2.jpg";

import Reveal from "../Reveal";

// Project data
export const projects = [
  {
    title: "gis",
    description: "gis",
    image: gisProject,
    githubLink: "https://github.com/filexf/webGIS-app", // Add actual link if available
    websiteLink: "https://data-visualizer-mocha.vercel.app/",
    images: [
      { src: screenshotGisProject1, alt: "Screenshot 1" },
      { src: screenshotGisProject2, alt: "Screenshot 2" },
    ],
  },
  {
    title: "portfolio",
    description: "portfolio",
    image: portfolioPicture,
    githubLink: "https://github.com/filexf/felix-portfolio",
    websiteLink: "https://filexf.github.io/felix-portfolio/",
  },
  {
    title: "carbonSavings",
    description: "carbonSavings",
    image: carbonSavingsPhoto,
    githubLink: "https://github.com/filexf/carbon-savings-simulator",
    websiteLink: "https://carbon-savings-simulator.vercel.app/",
    images: [
      { src: screenshotCarbonSavings1, alt: "Screenshot 1" },
      { src: screenshotCarbonSavings2, alt: "Screenshot 2" },
    ],
  },
  {
    title: "movieWatchlist",
    description: "movieWatchlist",
    image: moviesWatchlistPicture,
    githubLink: "https://github.com/filexf/movies-watchlist",
    websiteLink: "https://movies-watchlist.vercel.app/",
    images: [
      { src: screenshotMoviesWatchlist1, alt: "Screenshot 1" },
      { src: screenshotMoviesWatchlist2, alt: "Screenshot 2" },
      { src: screenshotMoviesWatchlist3, alt: "Screenshot 3" },
      { src: screenshotMoviesWatchlist4, alt: "Screenshot 4" },
      { src: screenshotMoviesWatchlist5, alt: "Screenshot 5" },
    ],
  },
  {
    title: "sportify",
    description: "sportify",
    image: sportifyPicture,
    githubLink: "https://github.com/filexf/sportify",
    websiteLink: "#", // Add actual link if available
    images: [
      { src: screenshotSportify1, alt: "Screenshot 1" },
      { src: screenshotSportify2, alt: "Screenshot 2" },
      { src: screenshotSportify3, alt: "Screenshot 3" },
      { src: screenshotSportify4, alt: "Screenshot 4" },
      { src: screenshotSportify5, alt: "Screenshot 5" },
      { src: screenshotSportify6, alt: "Screenshot 6" },
      { src: screenshotSportify7, alt: "Screenshot 7" },
      { src: screenshotSportify8, alt: "Screenshot 8" },
    ],
  },
  {
    title: "tymouet",
    description: "tymouet",
    image: tyMouetPicture,
    githubLink: "https://github.com/filexf/ty-mouet",
    websiteLink: "https://ty-mouet-c5897a5b74b0.herokuapp.com/",
    images: [
      { src: screenshotTyMouet1, alt: "Screenshot 1" },
      { src: screenshotTyMouet2, alt: "Screenshot 2" },
      { src: screenshotTyMouet3, alt: "Screenshot 3" },
      { src: screenshotTyMouet4, alt: "Screenshot 4" },
      { src: screenshotTyMouet5, alt: "Screenshot 5" },
      { src: screenshotTyMouet6, alt: "Screenshot 6" },
      { src: screenshotTyMouet7, alt: "Screenshot 7" },
      { src: screenshotTyMouet8, alt: "Screenshot 8" },
      { src: screenshotTyMouet9, alt: "Screenshot 9" },
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
  const { darkMode } = useTheme(); // Récupération du mode sombre depuis le contexte
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
          <img
            className="h-64 w-full rounded-2xl object-cover md:flex md:h-96 md:w-96 md:justify-center"
            src={image}
            alt=""
          />

          <div className="flex flex-col gap-4 p-4 leading-normal md:p-7">
            <h5 className="text-gradient mb-2 text-center text-2xl font-bold tracking-tight md:text-4xl">
              {t(`projects.${title}.title`, language)}
            </h5>

            <p className="mb-3 p-2 text-center text-sm font-normal md:p-3 md:text-base">
              {t(`projects.${description}.desc`, language)}
            </p>
            <div className="flex justify-center gap-5 md:gap-10">
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={darkMode ? githubIconWhite : githubIcon}
                  alt="GitHub"
                  className="vertical-animation h-12 w-12 opacity-80 hover:scale-102 hover:opacity-100 md:h-15 md:w-15"
                />
              </a>
              {images && (
                <div className="cursor-pointer" onClick={openLightbox}>
                  <img
                    src={galleryIcon}
                    alt="Gallery Icon"
                    className={`vertical-animation h-12 w-12 opacity-80 hover:scale-102 hover:opacity-100 md:h-15 md:w-15 ${darkMode ? "invert filter" : ""}`}
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
              {websiteLink && (
                <a href={websiteLink} target="_blank">
                  <img
                    className={`vertical-animation h-12 w-12 opacity-80 hover:scale-102 hover:opacity-100 md:h-15 md:w-15 ${darkMode ? "invert filter" : ""}`}
                    src={websiteIcon}
                    alt="Website"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
