"use client";

import Image from "next/image";
import Link from "next/link";
import SeeMore from "./SeeMore";

import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/i18n";
import Reveal from "../Reveal";
import SectionWrapper from "./SectionWrapper";

export default function PhotographySection() {
  const photos: string[] = [
    "/images/Important-photos/Tests_photos_USA_147.jpg",
    "/images/Important-photos/Photos_Bangkok_V1_33.jpg",
    "/images/Important-photos/Photos_HK_chill_109.jpg",
    "/images/Important-photos/Photos_HK_chill_132.jpg",
  ];
  const { language } = useLanguage();

  return (
    <Reveal>
      <SectionWrapper title={t("photographysection.title", language)}>
        <div className="items flex flex-col gap-12">
          {/* Texte d'introduction */}
          <p className="body-font mx-auto max-w-3xl text-center">
            {t("photographysection.desc", language)}
          </p>

          {/* Grille de photos */}
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-10">
            {photos.map((photo, index) => (
              <PhotoCard key={index} photo={photo} />
            ))}
          </div>

          <SeeMore projectLink={"/photos"} context="photography" />
        </div>
      </SectionWrapper>
    </Reveal>
  );
}

interface PhotoCardProps {
  photo: string;
}

function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <Link href="/photos">
      <div className="group relative mb-2 overflow-hidden rounded shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Container d'image avec ratio aspect */}
        <div className="relative h-[300px] md:h-[350px] overflow-hidden rounded">
          <Image
            src={photo}
            alt="Photography"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 relative"
            width={300}
            height={450}
          />
        </div>

        {/* Overlay au hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="translate-y-4 transform transition-transform duration-300 group-hover:translate-y-0">
            {/* Icône d'appareil photo */}
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
