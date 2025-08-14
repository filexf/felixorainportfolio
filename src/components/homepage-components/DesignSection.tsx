"use client";

import Image from "next/image";
import Link from "next/link";
import SeeMore from "./SeeMore";

import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/i18n";
import Reveal from "../Reveal";
import SectionWrapper from "./SectionWrapper";

export default function DesignSection() {
  const { language } = useLanguage();
  return (
    <Reveal>
      <SectionWrapper title={t("design.title", language)}>
        <div className="flex flex-col gap-12">
          {/* Texte d'introduction */}
          <p className="body-font mx-auto max-w-5xl text-center">
            {t("design.desc", language)}
          </p>

          {/* Grille de designs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DesignCard photo="/images/Couvertures magazines/Civilisation Mag.jpg" />
            <DesignCard photo="/images/Couvertures magazines/WIZZY En Asie BONNE VERSION.jpg" />
          </div>

          <SeeMore projectLink={"/books"} />
        </div>
      </SectionWrapper>
    </Reveal>
  );
}

interface DesignCardProps {
  photo: string;
}

function DesignCard({ photo }: DesignCardProps) {
  return (
    <Link href="/books">
      <div className="group relative mx-auto aspect-[2/3] w-full max-w-[250px] md:max-w-[320px] overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1">
        <Image
          src={photo}
          alt="Book Cover"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={350}
          height={525}
        />

        {/* Overlay au hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="translate-y-4 transform transition-transform duration-300 group-hover:translate-y-0">
            <svg
              className="h-16 w-16 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
