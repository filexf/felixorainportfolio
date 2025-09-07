"use client";

import Image from "next/image";

import { ButtonLink } from "@/components/ui/button"; // Importation du composant ButtonLink
import { useTheme } from "@/context/ThemeContext";
import { ChevronRight } from "lucide-react"; // Importation de l'icône
import { useTranslations } from "next-intl";

import Reveal from "@/components/Reveal";

export default function CardsWork() {
  const t = useTranslations();

  interface CardData {
    title: string;
    icon: string;
    text: string;
    path: string;
  }

  const cardData: CardData[] = [
    {
      title: t("cardData.webDevelopment.title"),
      icon: "/icons/Main-icons/Web-development-icon.svg",
      text: t("cardData.webDevelopment.text"),
      path: "/applications",
    },
    {
      title: t("cardData.photography.title"),
      icon: "/icons/Main-icons/Photography-icon.svg",
      text: t("cardData.photography.text"),
      path: "/photos",
    },
    {
      title: t("cardData.design.title"),
      icon: "/icons/Main-icons/Designs-icon.svg",
      text: t("cardData.design.text"),
      path: "/books",
    },
  ];

  return (
    <>
      <Reveal>
        <div
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:gap-6 md:mt-14 md:gap-8"
          id="latest-works"
        >
          <h2 className="text-gradient text-center text-3xl leading-[normal] font-bold sm:text-4xl md:text-4xl lg:text-6xl">
            {t("portfolio.title")}
          </h2>

          <div className="flex w-full max-w-4xl flex-col gap-4 px-4 text-center">
            <p className="text-sm font-medium sm:text-base md:text-lg lg:text-xl">
              {t("portfolio.intro")}
            </p>
            <p className="text-sm text-gray-600 italic sm:text-base dark:text-gray-300">
              {t("portfolio.subIntro")}
            </p>
          </div>

          <Reveal>
            <div className="my-2 flex flex-col flex-wrap items-center justify-center gap-4 sm:my-4 sm:gap-6 md:my-6 md:flex-row md:gap-8 lg:gap-10">
              {cardData.map((card) => (
                <Card
                  key={card.title}
                  title={card.title}
                  icon={card.icon}
                  text={card.text}
                  path={card.path}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </Reveal>
    </>
  );
}

interface CardProps {
  icon: string;
  title: string;
  text: string;
  path: string;
}

const Card = ({ icon, title, text, path }: CardProps) => {
  const { darkMode } = useTheme();
  const t = useTranslations();
  return (
    <div
      className={`group vertical-animation mx-1 my-1 flex w-[280px] max-w-[90vw] flex-col items-center justify-center gap-2 rounded-2xl border px-3 py-4 shadow-md backdrop-blur-sm transition-colors duration-300 sm:mx-2 sm:my-2 sm:h-[340px] sm:w-[290px] sm:gap-4 sm:rounded-3xl sm:px-4 sm:py-5 md:h-[380px] md:w-[300px] md:gap-6 md:px-6 md:py-7 lg:gap-8 ${
        darkMode
          ? "border-gray-700 bg-gradient-to-br from-gray-700 to-gray-900"
          : "from-gray_50 border-gray-200 bg-gradient-to-br to-gray-200"
      }`}
    >
      {/* Icône - Plus petite sur mobile */}
      <div className="rounded-full bg-gray-200 p-1.5 duration-300 group-hover:bg-gray-200 sm:p-2 md:p-2.5">
        <Image
          className="h-8 w-8 transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10 md:h-12 md:w-12"
          src={icon}
          alt={title}
          width={48}
          height={48}
        />
      </div>

      {/* Contenu - Espacement optimisé */}
      <div className="flex flex-col items-center justify-center gap-2 text-center sm:gap-3 md:gap-4 lg:gap-5">
        {/* Titre - Plus petit sur mobile */}
        <h3 className="text-gradient text-base leading-tight font-bold sm:text-lg md:text-xl">
          {title}
        </h3>

        {/* Texte - Hauteur adaptative */}
        <p className="min-h-[60px] text-xs leading-relaxed sm:min-h-[70px] sm:text-sm md:min-h-[80px] md:text-base">
          {text}
        </p>

        {/* ButtonLink au lieu du bouton personnalisé */}
        <ButtonLink
          href={path}
          variant="outline"
          size="sm"
          className="mt-1 w-full max-w-[90%] rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all duration-300 ease-in-out hover:border-transparent hover:bg-gray-900 hover:text-white sm:mt-2 sm:rounded-2xl sm:px-4 sm:py-2 sm:text-sm md:px-5"
        >
          <span className="flex items-center justify-center gap-1 sm:gap-2">
            {t("readMore")}
            <ChevronRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-2 sm:h-4 sm:w-4" />
          </span>
        </ButtonLink>
      </div>
    </div>
  );
};
