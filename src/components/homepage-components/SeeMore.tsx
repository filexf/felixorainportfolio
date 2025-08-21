"use client";

import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/i18n";

interface SeeMoreProps {
  projectLink: string;
  context: string; // ✅ Nouveau : contexte pour le texte
}

export default function SeeMore({ projectLink, context }: SeeMoreProps) {
  const { language } = useLanguage();

  return (
    <div className="flex w-full justify-center px-4">
      <Link
        href={projectLink}
        className="w-full sm:w-auto"
        aria-label={t(`seeMore.${context}.ariaLabel`, language)} // ✅ Aria-label descriptif
      >
        <div className="group my-2 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-slate-50 px-4 py-1.5 shadow-sm transition-all duration-300 ease-in-out hover:bg-gray-100 sm:w-auto sm:gap-3 sm:px-5 sm:py-2">
          <span className="text-xs font-medium tracking-wide sm:text-sm">
            {t(`seeMore.${context}.text`, language)} {/* ✅ Texte contextuel */}
          </span>
          <MdArrowForward className="h-3 w-3 transform transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4" />
        </div>
      </Link>
    </div>
  );
}
