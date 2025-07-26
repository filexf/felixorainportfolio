import React from "react";
import Photo2 from "../assets/images/Important-photos/Photos_Bangkok_V1_33.jpg";
import Photo3 from "../assets/images/Important-photos/Photos_HK_chill_109.jpg";
import Photo4 from "../assets/images/Important-photos/Tests_photos_USA_147.jpg";
import Photo1 from "../assets/images/Photos-sport/Photo_dub_roofgap.jpg";
import Photo5 from "../assets/images/Photos-wedding/Wedding_photos_14.jpg";

import iconLoupe from "../assets/icons/Main-icons/Loop-plus-icon.svg";

import { Link } from "react-router-dom";

import Reveal from "../components/Reveal";

import { useLanguage } from "../context/LanguageContext";
import { t } from "../i18n/i18n";

export default function PhotosPage() {
  const { language } = useLanguage();
  return (
    <>
      <div className="flex justify-center">
        <div className="mb-12 flex w-4/5 flex-col items-center gap-12 p-5">
          <Reveal>
            <h2 className="text-gradient my-10 text-center text-7xl leading-normal font-bold">
              {t("photospage.title", language)}
            </h2>
            <p className="body-font mx-auto mb-16 max-w-4xl text-center">
              {t("photospage.desc", language)}
            </p>

            {/* Grille de photos */}
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <PhotoCard title="sport" photo={Photo1} />
              <PhotoCard title="mosaic" photo={Photo2} />
              <PhotoCard title="cityscape" photo={Photo3} />
              <PhotoCard title="landscape" photo={Photo4} />
              <PhotoCard title="wedding" photo={Photo5} />
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}

function PhotoCard({ photo, title }) {
  const { language } = useLanguage();
  return (
    <Link to={`/photos/${title.toLowerCase()}`}>
      <div className="vertical-animation group my-3 flex flex-col overflow-hidden rounded-2xl border border-gray-200/10 bg-white/5 shadow-lg transition-all duration-300 hover:bg-white/10">
        <div className="relative overflow-hidden">
          <div className="h-[500px] w-full">
            <img
              src={photo}
              alt={t(`photospage.${title}`, language)}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-900/75 via-slate-900/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="translate-y-4 transform transition-transform duration-300 group-hover:translate-y-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <img
                  src={iconLoupe}
                  alt="View more"
                  className="h-8 w-8 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Titre en bas de carte */}
        <div className="bg-slate-50 p-4">
          <h3 className="text-gradient text-center text-3xl font-bold">
            {t(`photospage.${title}`, language)}
          </h3>
        </div>
      </div>
    </Link>
  );
}
