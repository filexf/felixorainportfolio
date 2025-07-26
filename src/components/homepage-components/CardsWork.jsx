import React from "react";
import { Link } from "react-router-dom";

import photoIcon from "../../assets/icons/Main-icons/Photography-icon.svg";
import webDevIcon from "../../assets/icons/Main-icons/Web-development-icon.svg";
import designIcon from "../../assets/icons/Main-icons/Designs-icon.svg";

import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/i18n";

import Reveal from "../Reveal";

export default function CardsWork() {
  const { language } = useLanguage();

  const cardData = [
    {
      title: t("cardData.webDevelopment.title", language),
      icon: webDevIcon,
      text: t("cardData.webDevelopment.text", language),
      path: "/applications",
    },
    {
      title: t("cardData.photography.title", language),
      icon: photoIcon,
      text: t("cardData.photography.text", language),
      path: "/photos",
    },
    {
      title: t("cardData.design.title", language),
      icon: designIcon,
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
          <h2 className="text-gradient text-center text-7xl leading-[normal] font-bold">
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
  return (
    <Link to={path}>
      <div className="group from-gray_50 vertical-animation mx-4 my-3 flex h-auto w-72 flex-col items-center justify-center gap-8 rounded-3xl border border-gray-200 bg-gradient-to-br to-gray-200 p-5 shadow-md backdrop-blur-sm">
        <div className="rounded-full bg-gray-100 p-2.5 transition-colors duration-300 group-hover:bg-gray-200">
          <img
            className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
            src={icon}
            alt={title}
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-5 text-center">
          <h3 className="text-gradient text-xl font-bold">{title}</h3>

          <p className="h-25 text-base leading-relaxed">{text}</p>

          <button className="mt-2 mb-2 w-full rounded-2xl border-1  px-5 py-2 text-sm font-semibold transition-all duration-300 ease-in-out hover:border-transparent hover:bg-gray-900 hover:text-white md:w-3/4">
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
