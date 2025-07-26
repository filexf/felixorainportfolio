import githubIcon from "../assets/icons/Main-icons/Github-icon-white.svg";
import instagramIcon from "../assets/icons/Main-icons/Instagram-icon.svg";
import linkedinIcon from "../assets/icons/Main-icons/Linkedin-icon-white.svg";
import { useTheme } from "../context/ThemeContext";
import "../styles/index.css";

import { useLanguage } from "../context/LanguageContext";
import { t } from "../i18n/i18n";

export default function Footer({ noPadding }) {
  const { darkMode } = useTheme();

  const { language } = useLanguage();

  return (
    // To make sure that there isn't the padding on the bottom of the page
    <div className={noPadding ? undefined : "bg-transparent pt-[15vh]"}>
      <footer
        className="relative bottom-0 w-full py-8 md:py-10"
        style={{ backgroundColor: "var(--footer-bg)" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8">
            {/* Social Icons with hover effects */}
            <ul className="flex items-center gap-6 md:gap-8">
              <SocialIcon icon={githubIcon} link="https://github.com/filexf" />
              <SocialIcon
                icon={linkedinIcon}
                link="https://www.linkedin.com/in/felix-orain/"
              />
              <SocialIcon
                icon={instagramIcon}
                link="https://www.instagram.com/_filex_/?hl=fr"
                invert={!darkMode}
              />
            </ul>

            {/* Divider line */}
            <div className="h-px w-64 bg-gray-400/20"></div>

            {/* Text content */}
            <div className="flex w-full flex-col items-center justify-around gap-4 md:flex-row md:px-8 lg:px-32">
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
        <img
          src={icon}
          alt="Social icon list"
          className={`w-8 opacity-80 transition-opacity duration-300 hover:opacity-100 md:w-9 ${
            invert ? "contrast-[3]" : ""
          }`}
        />
      </a>
    </li>
  );
}
