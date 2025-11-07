import GitHubButton from "@/components/applications-components/GitHubButton";
import ProjectsGrid from "@/components/applications-components/ProjectsGrid";
import Reveal from "@/components/Reveal";
import SoftwareApplicationStructuredData from "@/components/SoftwareApplicationStructuredData";
import { projects } from "@/lib/projects";
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
  { name: "Supabase", icon: "/icons/Tech stack icons/Supabase.svg" },
  { name: "Ruby on Rails", icon: "/icons/Tech stack icons/Rails-icon.svg" },
  { name: "PostgreSQL", icon: "/icons/Tech stack icons/Postgresql-icon.svg" },
  { name: "Tailwind", icon: "/icons/Tech stack icons/Tailwind-icon.svg" },
  { name: "Vercel", icon: "/icons/Tech stack icons/Vercel.svg" },
  { name: "Figma", icon: "/icons/Tech stack icons/Figma-icon.svg" },
  { name: "GitHub", icon: "/icons/Tech stack icons/Github-icon.svg" },
  { name: "JavaScript", icon: "/icons/Tech stack icons/Javascript-icon.svg" },
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

  // Prepare applications data for structured data
  const applicationsData = projects.map((project) => ({
    name: t(`projects.${project.title}.title`),
    description: t(`projects.${project.description}.desc`),
    url: project.websiteLink !== "#" ? project.websiteLink : undefined,
    image: project.image,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
  }));

  return (
    <>
      <SoftwareApplicationStructuredData
        applications={applicationsData}
        pageUrl="https://www.felix-orain.com/applications"
      />
      <Reveal>
        <article className="mt-4 flex flex-row justify-center">
          <div className="mt-[30px] flex w-full max-w-6xl flex-col items-center gap-[40px] px-4 sm:px-8 md:gap-[70px] md:px-12">
            <header>
              <h1 className="text-gradient text-center text-4xl leading-normal font-bold sm:text-5xl md:text-7xl">
                {t("applications.title")}
              </h1>
              <p className="body-font mx-auto max-w-5xl px-2 text-center">
                {t("applications.desc")}
              </p>
            </header>
            <GitHubButton />

            {/* Projects Section */}
            <section aria-label="Projets de développement web">
              <ProjectsGrid />
            </section>

            {/* Tech Stack Section */}
            <Reveal>
              <section
                className="flex w-full flex-col items-center justify-center gap-[30px] md:gap-[64px]"
                aria-label="Stack technologique"
              >
                <h2 className="text-gradient my-2 pb-1 text-center text-3xl font-bold sm:my-4 sm:text-4xl md:text-6xl">
                  {t("applications.techstack")}
                </h2>
                <div className="mb-4 flex w-full flex-wrap items-center justify-center gap-4 sm:w-11/12 sm:gap-6 md:w-4/5 md:gap-10">
                  {techStack.map((tech, index) => (
                    <TechStackIcon key={index} {...tech} />
                  ))}
                </div>
              </section>
            </Reveal>
          </div>
        </article>
      </Reveal>
    </>
  );
}
