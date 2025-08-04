"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ProjectCard,
  projects,
} from "../../components/applications-components/ProjectCard";
import Reveal from "../../components/Reveal";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { t } from "../../i18n/i18n";

// Tech stack data
const techStack = [
  { name: "React", icon: "/icons/Tech stack icons/React.svg" },
  { name: "Ruby on Rails", icon: "/icons/Tech stack icons/Rails-icon.svg" },
  { name: "Tailwind", icon: "/icons/Tech stack icons/Tailwind-icon.svg" },
  { name: "Ruby", icon: "/icons/Tech stack icons/Ruby-icons.svg" },
  { name: "JavaScript", icon: "/icons/Tech stack icons/Javascript-icon.svg" },
  { name: "PostgreSQL", icon: "/icons/Tech stack icons/Postgresql-icon.svg" },
  { name: "Figma", icon: "/icons/Tech stack icons/Figma-icon.svg" },
  { name: "HTML", icon: "/icons/Tech stack icons/HTML-icon.svg" },
  { name: "CSS", icon: "/icons/Tech stack icons/CSS-icon.svg" },
  { name: "Git", icon: "/icons/Tech stack icons/Git-icon.svg" },
  { name: "GitHub", icon: "/icons/Tech stack icons/Github-icon.svg" },
  { name: "Bootstrap", icon: "/icons/Tech stack icons/Bootstrap-icon.svg" },
];

// Reusable Tech Stack Icon component
function TechStackIcon({ name, icon }) {
  return (
    <div className="border-2px mb-1 flex items-center gap-3 rounded-3xl border-1 border-gray-200 bg-slate-50 px-6 py-2 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-gray-200">
      <p className="text-gradient font-bold">{name}</p>
      <Image
        src={icon}
        alt={name}
        width={40}
        height={40}
        className="h-10 w-10"
      />
    </div>
  );
}

export default function ApplicationsPage() {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <Reveal>
      <div className="mt-4 flex flex-row justify-center">
        <div className="mt-[30px] flex w-4/5 flex-col items-center gap-[70px] px-12 py-[0]">
          <h1 className="text-gradient text-center text-5xl md:text-7xl leading-normal font-bold">
            {t("applications.title", language)}
          </h1>
          <p className="body-font mx-auto max-w-4xl text-center">
            {t("applications.desc", language)}
          </p>
          <Link
            href="https://github.com/filexf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border-2px flex items-center gap-5 rounded-3xl border-1 border-gray-200 bg-slate-50 px-6 py-3 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-gray-200">
              <p className="text-gradient text-bold text-xl">
                {t("applications.github", language)}
              </p>
              <Image
                src={
                  darkMode
                    ? "/icons/Main-icons/Github-icon-white.svg"
                    : "/icons/Tech stack icons/Github-icon.svg"
                }
                alt="GitHub logo icon"
                width={40}
                height={40}
                className="hover:scale-102"
              />
            </div>
          </Link>

          {/* Projects Section */}
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}

          {/* Tech Stack Section */}
          <Reveal>
            <div className="flex w-full flex-col items-center justify-center gap-[64px]">
              <h2 className="text-gradient my-4 pb-1 text-center text-6xl font-bold">
                {t("applications.techstack", language)}
              </h2>
              <div className="flex w-4/5 flex-wrap items-center justify-center gap-10">
                {techStack.map((tech, index) => (
                  <TechStackIcon key={index} {...tech} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Reveal>
  );
}
