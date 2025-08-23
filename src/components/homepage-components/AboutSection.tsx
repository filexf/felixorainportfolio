"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/i18n";
import Reveal from "@/components/Reveal";
import SectionWrapper from "@/components/homepage-components/SectionWrapper";
import React from "react";

export default function AboutSection() {
  const { language } = useLanguage();

  const resumeMap = {
    en: "/Felix_Orain_Web_Developer_Resume .pdf",
    fr: "/Felix_Orain_CV_Developpeur_Web.pdf",
    es: "/Felix_Orain_Web_Developer_Resume .pdf", // fallback to English if Spanish
  };
  const resumeFile = resumeMap[language] || resumeMap["en"];

  return (
    <>
      <Reveal>
        <SectionWrapper title={t("about.title", language)}>
          <div className="lg:width-[80%] flex w-full flex-col items-center justify-center gap-6 lg:flex-row lg:justify-center lg:gap-10 lg:pl-12">
            <Image
              className="vertical-animation my-2 mb-2 h-[300px] w-auto rounded-4xl shadow-md lg:h-[400px]"
              src="/images/Important-photos/photo-profil-V2.jpg"
              alt="Profile Image"
              width={300}
              height={400}
            />
            <div className="mt-4 flex flex-col items-center justify-center gap-10">
              <p className="body-font max-width-md w-[80%] max-w-6xl text-start lg:text-left">
                {t("about.desc", language)
                  .split("<br />")
                  .map((line, index, array) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < array.length - 1 && <br />}
                    </React.Fragment>
                  ))}
              </p>
              <a
                href={resumeFile}
                download
                className="group inline-flex items-center gap-3 rounded-full border-2 border-gray-400 bg-secondary px-5 py-2 transition-all duration-300 ease-in-out hover:border-gray-900"
              >
                <span className="text-sm font-medium tracking-wide">
                  {t("about.resume", language)}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transform transition-transform duration-300 group-hover:translate-y-[2px]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 16l-6-6h4V4h4v6h4l-6 6zm-6 4h12v-2H6v2z" />
                </svg>
              </a>
            </div>
          </div>
        </SectionWrapper>
      </Reveal>
    </>
  );
}
