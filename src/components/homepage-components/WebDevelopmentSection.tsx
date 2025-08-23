"use client";

import Image from "next/image";
import Link from "next/link";
import SeeMore from "@/components/homepage-components/SeeMore";

import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/i18n";
import Reveal from "@/components/Reveal";
import SectionWrapper from "@/components/homepage-components/SectionWrapper";

export default function WebDevelopmentSection() {
  const { language } = useLanguage();

  return (
    <Reveal>
      <SectionWrapper title={t("webdev.title", language)}>
        <div className="flex flex-col gap-12">
          <p className="body-font mx-auto max-w-3xl text-center">
            {t("webdev.desc", language)}
          </p>

          {/* Grille de projets mise à jour */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              image="/images/Photo-projets-dev/Watchlist_Cover.jpg"
              title="WATCHLIST"
              path="/applications"
            />
            <ProjectCard
              image="/images/Photo-projets-dev/Web_Gis_Cover_Picture.jpg"
              title="GIS PROJECT"
              path="/applications"
            />
            <ProjectCard
              image="/images/Photo-GGB/Photo_GGB_Squared.jpg"
              title="PORTFOLIO"
              path="/applications"
            />
          </div>

          <SeeMore projectLink={"/applications"} context="webdev" />
        </div>
      </SectionWrapper>
    </Reveal>
  );
}

interface ProjectCardProps {
  image: string;
  title: string;
  path: string;
}

function ProjectCard({ image, title, path }: ProjectCardProps) {
  return (
    <Link href={path}>
      <div className="group relative h-[200px] overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 md:h-[300px]">
        {/* Image */}
        <Image
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          width={400}
          height={400}
        />

        {/* Overlay avec titre qui apparaît au hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className="translate-y-4 transform text-4xl font-bold tracking-wider text-white transition-transform duration-300 group-hover:translate-y-0">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
