import {
  ProjectCard,
  projects,
} from "../components/applications-components/ProjectCard";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { t } from "../i18n/i18n";

// Importing assets
import GithubIconWhite from "../assets/icons/Main-icons/Github-icon-white.svg";
import Bootstrap from "../assets/icons/Tech stack icons/Bootstrap-icon.svg";
import CSSIcon from "../assets/icons/Tech stack icons/CSS-icon.svg";
import FigmaIcon from "../assets/icons/Tech stack icons/Figma-icon.svg";
import GitIcon from "../assets/icons/Tech stack icons/Git-icon.svg";
import GithubIcon from "../assets/icons/Tech stack icons/Github-icon.svg";
import HTMLIcon from "../assets/icons/Tech stack icons/HTML-icon.svg";
import JSIcon from "../assets/icons/Tech stack icons/Javascript-icon.svg";
import PostgreIcon from "../assets/icons/Tech stack icons/Postgresql-icon.svg";
import RailIcon from "../assets/icons/Tech stack icons/Rails-icon.svg";
import ReactIcon from "../assets/icons/Tech stack icons/React.svg";
import Ruby from "../assets/icons/Tech stack icons/Ruby-icons.svg";
import TailwindIcon from "../assets/icons/Tech stack icons/Tailwind-icon.svg";

import Reveal from "../components/Reveal";

// Tech stack data
const techStack = [
  { name: "React", icon: ReactIcon },
  { name: "Ruby on Rails", icon: RailIcon },
  { name: "Tailwind", icon: TailwindIcon },
  { name: "Ruby", icon: Ruby },
  { name: "JavaScript", icon: JSIcon },
  { name: "PostgreSQL", icon: PostgreIcon },
  { name: "Figma", icon: FigmaIcon },
  { name: "HTML", icon: HTMLIcon },
  { name: "CSS", icon: CSSIcon },
  { name: "Git", icon: GitIcon },
  { name: "GitHub", icon: GithubIcon },
  { name: "Bootstrap", icon: Bootstrap },
];

// Reusable Tech Stack Icon component
function TechStackIcon({ name, icon }) {
  return (
    <>
      <div className="border-2px mb-1 flex items-center gap-3 rounded-3xl border-1 border-gray-200 bg-slate-50 px-6 py-2 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-gray-200">
        <p className="text-gradient font-bold">{name} </p>
        <img src={icon} alt={name} className="h-8 w-10" />
      </div>
    </>
  );
}

export default function ApplicationsPage() {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <Reveal>
      <div className="mt-4 flex flex-row justify-center">
        <div className="mt-[30px] flex w-4/5 flex-col items-center gap-[70px] px-12 py-[0]">
          <h1 className="text-gradient text-center text-7xl leading-normal font-bold">
            {t("applications.title", language)}
          </h1>
          <p className="body-font mx-auto max-w-4xl text-center">
            {t("applications.desc", language)}
          </p>
          <a href="https://github.com/filexf" target="_blank">
            <div className="border-2px flex items-center gap-5 rounded-3xl border-1 border-gray-200 bg-slate-50 px-6 py-3 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-gray-200">
              <p className="text-gradient text-bold text-xl">
                {t("applications.github", language)}
              </p>
              <img
                src={darkMode ? GithubIconWhite : GithubIcon}
                alt="GitHub logo icon"
                className="w-10 hover:scale-102"
              />
            </div>
          </a>

          {/* Projects Section */}
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}

          {/* Tech Stack Section */}
          <Reveal>
            <div className="flex w-full flex-col items-center justify-center gap-[64px]">
              <h2 className="text-gradient my-4 pb-1 text-6xl text-center font-bold">
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
