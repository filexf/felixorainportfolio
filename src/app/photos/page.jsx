"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../../components/Reveal";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/i18n";

export default function PhotosPage() {
  const { language } = useLanguage();

  // Définition des photos avec leurs chemins corrects
  const photos = [
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
  ];

  return (
    <>
      <div className="flex justify-center">
        <div className="mb-12 flex w-4/5 flex-col items-center gap-8 p-5">
          <Reveal>
            <h2 className="text-gradient my-10 text-center text-4xl md:text-7xl leading-normal font-bold">
              {t("photospage.title", language)}
            </h2>
            <p className="body-font mx-auto mb-16 max-w-4xl text-center">
              {t("photospage.desc", language)}
            </p>

            {/* Grille de photos */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {photos.map((photo) => (
                <PhotoCard
                  key={photo.id}
                  title={photo.id}
                  photoPath={photo.path}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}

function PhotoCard({ photoPath, title }) {
  const { language } = useLanguage();

  return (
    <Link href={`/photos/${title.toLowerCase()}`}>
      <div className="vertical-animation group my-3 flex flex-col overflow-hidden rounded-2xl border border-gray-200/10 bg-white/5 shadow-lg transition-all duration-300 hover:bg-white/10">
        <div className="relative overflow-hidden">
          <div className="h-[500px] w-full">
            <Image
              src={photoPath}
              alt={t(`photospage.${title}`, language)}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={title === "sport"}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              quality={85}
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-900/75 via-slate-900/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="translate-y-4 transform transition-transform duration-300 group-hover:translate-y-0">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                <Image
                  src="/icons/Main-icons/Loop-plus-icon.svg"
                  alt="View more"
                  width={32}
                  height={32}
                  className="transition-transform duration-300 group-hover:scale-110"
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
