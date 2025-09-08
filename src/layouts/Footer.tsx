"use client";

import { useTheme } from "@/context/ThemeContext";
import { FileText, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface FooterProps {
  noPadding?: boolean;
}

interface SocialIconProps {
  icon: string;
  link: string;
  invert?: boolean;
}

export default function Footer({ noPadding }: FooterProps) {
  const { darkMode } = useTheme();
  const t = useTranslations();

  return (
    // To make sure that there isn't the padding on the bottom of the page
    <div className={noPadding ? undefined : "w-full bg-transparent pt-[10vh]"}>
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

            {/* Professional information - mise à jour */}
            <div className="flex w-full flex-col items-center justify-center gap-3 px-4 text-center sm:gap-4">
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                <div className="flex items-center">
                  <span className="mr-2 text-blue-300">
                    <Phone size={16} />
                  </span>
                  <span
                    style={{ color: "var(--footer-text)" }}
                    className="text-xs md:text-sm"
                  >
                    07 78 76 44 54
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-blue-300">
                    <Mail size={16} />
                  </span>
                  <a
                    href="mailto:felix.orain@gmail.com"
                    style={{ color: "var(--footer-text)" }}
                    className="text-xs transition-colors hover:text-blue-300 md:text-sm"
                  >
                    felix.orain@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="mr-2 text-blue-300">
                    <MapPin size={16} />
                  </span>
                  <span
                    style={{ color: "var(--footer-text)" }}
                    className="text-xs md:text-sm"
                  >
                    Rennes, Bretagne
                  </span>
                </div>
              </div>

              {/* Ligne séparée pour le SIRET */}
              <div className="flex items-center">
                <span className="mr-2 text-blue-300">
                  <FileText size={16} />
                </span>
                <span
                  style={{ color: "var(--footer-text)" }}
                  className="text-xs md:text-sm"
                >
                  SIRET : 840 825 871 00014
                </span>
              </div>
            </div>

            {/* Another divider */}
            <div className="h-px w-64 bg-gray-400/20"></div>

            {/* Text content */}
            <div className="flex w-full flex-col items-center justify-center gap-4 px-4 text-center sm:flex-row sm:justify-between sm:px-8 lg:px-16">
              <p
                className="text-sm font-light tracking-wide md:text-base"
                style={{ color: "var(--footer-text)" }}
              >
                {t("footer.madeby")}
              </p>
              <p
                className="text-sm font-light tracking-wide md:text-base"
                style={{ color: "var(--footer-text)" }}
              >
                {t("footer.copyright")}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SocialIcon({ icon, link, invert }: SocialIconProps) {
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
