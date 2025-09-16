import GitHubButton from "@/components/applications-components/GitHubButton";
import ProjectsGrid from "@/components/applications-components/ProjectsGrid";
import Reveal from "@/components/Reveal";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

interface TechStackItem {
  name: string;
  icon: string;
}

// Tech stack data
const techStack: TechStackItem[] = [
  { name: "Next.js", icon: "/icons/Tech stack icons/Next.js.svg" },
  { name: "React", icon: "/icons/Tech stack icons/React.svg" },
  { name: "TypeScript", icon: "/icons/Tech stack icons/TypeScript.svg" },
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

interface TechStackIconProps {
  name: string;
  icon: string;
}

// Reusable Tech Stack Icon component
function TechStackIcon({ name, icon }: TechStackIconProps) {
  return (
    <div className="border-2px bg-secondary mb-1 flex items-center gap-2 rounded-3xl border-1 border-gray-200 px-3 py-1 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-gray-200 sm:gap-3 sm:px-6 sm:py-2">
      <p className="text-gradient text-sm font-bold sm:text-base">{name}</p>
      <Image
        src={icon}
        alt={name}
        width={32}
        height={32}
        className="h-6 w-6 sm:h-8 sm:w-8"
      />
    </div>
  );
}

export default async function ApplicationsPage() {
  const t = await getTranslations();

  return (
    <Reveal>
      <div className="mt-4 flex flex-row justify-center">
        <div className="mt-[30px] flex w-full max-w-6xl flex-col items-center gap-[40px] px-4 sm:px-8 md:gap-[70px] md:px-12">
          <h1 className="text-gradient text-center text-4xl leading-normal font-bold sm:text-5xl md:text-7xl">
            {t("applications.title")}
          </h1>
          <p className="body-font mx-auto max-w-5xl px-2 text-center">
            {t("applications.desc")}
          </p>
          <GitHubButton />

          {/* Projects Section */}
          <ProjectsGrid />

          {/* Tech Stack Section */}
          <Reveal>
            <div className="flex w-full flex-col items-center justify-center gap-[30px] md:gap-[64px]">
              <h2 className="text-gradient my-2 pb-1 text-center text-3xl font-bold sm:my-4 sm:text-4xl md:text-6xl">
                {t("applications.techstack")}
              </h2>
              <div className="flex w-full flex-wrap items-center justify-center gap-4 sm:w-11/12 sm:gap-6 md:w-4/5 md:gap-10">
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
