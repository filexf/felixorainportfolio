"use client";

import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

import { LanguageType, useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/i18n";

interface SeeMoreProps {
  projectLink: string;
}

export default function SeeMore({ projectLink }: SeeMoreProps) {
  const { language } = useLanguage();

  return (
    <div className="flex justify-center w-full px-4">
      <Link href={projectLink} className="w-full sm:w-auto">
        <div className="group my-2 inline-flex w-full sm:w-auto items-center justify-center gap-2 sm:gap-3 rounded-full border border-gray-300 bg-slate-50 px-4 sm:px-5 py-1.5 sm:py-2 shadow-sm transition-all duration-300 ease-in-out hover:bg-gray-100">
          <span className="text-xs sm:text-sm font-medium tracking-wide">
            {t("seeMore", language)}
          </span>
          <MdArrowForward className="h-3 w-3 sm:h-4 sm:w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </div>
  );
}
