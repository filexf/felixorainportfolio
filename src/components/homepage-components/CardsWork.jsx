"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { t } from "../../i18n/i18n";

import Reveal from "../Reveal";

export default function CardsWork() {
  const { language } = useLanguage();

  const cardData = [
    {
      title: t("cardData.webDevelopment.title", language),
      icon: "/icons/Main-icons/Web-development-icon.svg",
      text: t("cardData.webDevelopment.text", language),
      path: "/applications",
    },
    {
      title: t("cardData.photography.title", language),
      icon: "/icons/Main-icons/Photography-icon.svg",
      text: t("cardData.photography.text", language),
      path: "/photos",
    },
    {
      title: t("cardData.design.title", language),
      icon: "/icons/Main-icons/Designs-icon.svg",
      text: t("cardData.design.text", language),
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
          <h2 className="text-gradient text-center text-3xl leading-[normal] font-bold sm:text-4xl md:text-5xl lg:text-7xl">
            {t("portfolio.title", language)}
          </h2>

          <p
            className="w-full max-w-6xl p-2 px-4 text-center text-base sm:w-5/6 sm:p-3 sm:text-lg md:w-3/4 md:p-[20px] md:text-[22px]"
            dangerouslySetInnerHTML={{ __html: t("portfolio.intro", language) }}
          />
          <Reveal>
            <div className="my-2 flex flex-col flex-wrap items-center justify-center gap-4 sm:my-4 sm:gap-6 md:my-6 md:flex-row md:gap-5 lg:gap-8">
              {cardData.map((card) => (
                <Card
                  key={card.title}
                  title={card.title}
                  icon={card.icon}
                  text={card.text}
                  path={card.path}
                  language={language}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </Reveal>
    </>
  );
}

const Card = ({ icon, title, text, path, language }) => {
  const { darkMode } = useTheme();
  return (
    <Link href={path}>
      <div
        className={`group vertical-animation mx-2 my-2 flex h-auto w-full max-w-[290px] flex-col items-center justify-center gap-4 rounded-3xl border p-4 shadow-md backdrop-blur-sm transition-colors duration-300 sm:mx-3 sm:my-3 sm:max-w-[320px] sm:gap-6 sm:p-5 md:mx-4 md:max-w-[300px] md:gap-8 md:p-7 ${
          darkMode
            ? "border-gray-700 bg-gradient-to-br from-gray-700 to-gray-900"
            : "from-gray_50 border-gray-200 bg-gradient-to-br to-gray-200"
        }`}
      >
        <div className="rounded-full bg-gray-200 p-2 transition-colors duration-300 group-hover:bg-gray-200 sm:p-2.5 dark:bg-gray-800 dark:group-hover:bg-gray-700">
          <Image
            className="h-10 w-10 transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12"
            src={icon}
            alt={title}
            width={48}
            height={48}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-3 text-center sm:gap-4 md:gap-5">
          <h3 className="text-gradient text-lg font-bold sm:text-xl">
            {title}
          </h3>
          <p className="h-auto min-h-[80px] text-sm leading-relaxed sm:text-base">
            {text}
          </p>
          <button className="mt-1 mb-1 w-full rounded-2xl border-1 px-4 py-1.5 text-xs font-semibold transition-all duration-300 ease-in-out hover:border-transparent hover:bg-gray-900 hover:text-white sm:mt-2 sm:mb-2 sm:w-3/4 sm:px-5 sm:py-2 sm:text-sm dark:hover:bg-gray-100 dark:hover:text-gray-900">
            <span className="flex items-center justify-center gap-1 sm:gap-2">
              {t("readMore", language)}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-2 sm:h-4 sm:w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </Link>
  );
};
