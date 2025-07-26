import React from "react";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";


import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/i18n";


export default function SeeMore({ projectLink }) {

  const { language } = useLanguage();

  return (
    <div className="flex justify-center">

    <Link to={projectLink}>
      <div className="group inline-flex items-center gap-3 px-5 py-2
        border border-gray-300 rounded-full bg-slate-50 shadow-sm my-2

        transition-all duration-300 ease-in-out">
        <span className="text-sm font-medium tracking-wide">
          {t("seeMore", language)}
          </span>
        <MdArrowForward
          className="w-4 h-4 transform transition-transform
          duration-300 group-hover:translate-x-1"
          />
      </div>
    </Link>
  </div>
  );
}
