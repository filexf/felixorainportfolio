"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { t } from "../i18n/i18n";

export default function Footer({ noPadding }) {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return (
    // To make sure that there isn't the padding on the bottom of the page
    <div className={noPadding ? undefined : "bg-transparent pt-[10vh] w-full"}>
      <footer
        className="relative bottom-0 w-full py-6 md:py-8"
        style={{ backgroundColor: "var(--footer-bg)" }}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6">
            {/* Social Icons with hover effects */}
            <ul className="flex items-center gap-6 md:gap-8">
              <SocialIcon
                icon="/icons/Main-icons/Github-icon-white.svg"
                link="https://github.com/filexf"
              />
              <SocialIcon
                icon="/icons/Main-icons/Linkedin-icon-white.svg"
                link="https://www.linkedin.com/in/felix-orain/"
              />
              <SocialIcon
                icon="/icons/Main-icons/Instagram-icon.svg"
                link="https://www.instagram.com/_filex_/?hl=fr"
                invert={!darkMode}
              />
            </ul>

            {/* Divider line */}
            <div className="h-px w-64 bg-gray-400/20"></div>

            {/* Text content */}
            <div className="flex w-full flex-col items-center justify-center gap-4 px-4 text-center sm:flex-row sm:justify-between sm:px-8 lg:px-16">
              <p
                className="text-sm font-light tracking-wide md:text-base"
                style={{ color: "var(--footer-text)" }}
              >
                {t("footer.madeby", language)}
              </p>
              <p
                className="text-sm font-light tracking-wide md:text-base"
                style={{ color: "var(--footer-text)" }}
              >
                {t("footer.copyright", language)}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SocialIcon({ icon, link, invert }) {
  return (
    <li>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-transform duration-300 ease-in-out hover:-translate-y-1"
      >
        <Image
          src={icon}
          alt="Social icon"
          width={32}
          height={32}
          className={`opacity-80 transition-opacity duration-300 hover:opacity-100 md:h-9 md:w-9 ${
            invert ? "contrast-[3]" : ""
          }`}
        />
      </a>
    </li>
  );
}
