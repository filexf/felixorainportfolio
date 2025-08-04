"use client";

import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/i18n";

export default function SeeMore({ projectLink }) {
  const { language } = useLanguage();

  return (
    <div className="flex justify-center">
      <Link href={projectLink}>
        <div className="group my-2 inline-flex items-center gap-3 rounded-full border border-gray-300 bg-slate-50 px-5 py-2 shadow-sm transition-all duration-300 ease-in-out">
          <span className="text-sm font-medium tracking-wide">
            {t("seeMore", language)}
          </span>
          <MdArrowForward className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </div>
  );
}
