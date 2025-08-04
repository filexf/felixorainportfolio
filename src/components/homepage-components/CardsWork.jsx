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
          className="mt-14 flex flex-col items-center justify-center gap-8"
          id="latest-works"
        >
          <h2 className="text-gradient text-center text-5xl md:text-7xl leading-[normal] font-bold">
            {t("portfolio.title", language)}
          </h2>

          <p
            className="w-3/4 max-w-6xl p-[20px] text-center text-[22px]"
            dangerouslySetInnerHTML={{ __html: t("portfolio.intro", language) }}
          />
          <Reveal>
            <div className="my-2 flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row md:gap-2">
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
        className={`group vertical-animation mx-4 my-3 flex h-auto w-80 flex-col items-center justify-center gap-8 rounded-3xl border p-7 shadow-md backdrop-blur-sm transition-colors duration-300 md:w-72 md:p-5 ${
          darkMode
            ? "border-gray-700 bg-gradient-to-br from-gray-700 to-gray-900"
            : "from-gray_50 border-gray-200 bg-gradient-to-br to-gray-200"
        }`}
      >
        <div className="rounded-full bg-gray-200 p-2.5 transition-colors duration-300 group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700">
          <Image
            className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
            src={icon}
            alt={title}
            width={48}
            height={48}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <h3 className="text-gradient text-xl font-bold">{title}</h3>
          <p className="h-25 text-base leading-relaxed">{text}</p>
          <button className="mt-2 mb-2 w-70 rounded-2xl border-1 px-5 py-2 text-sm font-semibold transition-all duration-300 ease-in-out hover:border-transparent hover:bg-gray-900 hover:text-white md:w-3/4 dark:hover:bg-gray-100 dark:hover:text-gray-900">
            <span className="flex items-center justify-center gap-2">
              {t("readMore", language)}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
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
