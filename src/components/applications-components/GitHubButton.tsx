"use client";

import { useTheme } from "@/context/ThemeContext";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function GitHubButton() {
  const { darkMode } = useTheme();
  const t = useTranslations();

  return (
    <a
      href="https://github.com/filexf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="border-2px bg-secondary flex items-center gap-3 rounded-3xl border-1 border-gray-200 px-4 py-2 shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-gray-200 sm:gap-5 sm:px-6 sm:py-3">
        <p className="text-gradient text-bold text-sm sm:text-lg md:text-xl">
          {t("applications.github")}
        </p>
        <Image
          src={
            darkMode
              ? "/icons/Main-icons/Github-icon-white.svg"
              : "/icons/Tech stack icons/Github-icon.svg"
          }
          alt="GitHub logo icon"
          width={32}
          height={32}
          className="h-8 w-8 hover:scale-102 sm:h-10 sm:w-10"
        />
      </div>
    </a>
  );
}
