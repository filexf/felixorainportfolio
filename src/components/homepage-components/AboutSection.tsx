"use client"

import { Download } from "lucide-react"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import SectionWrapper from "@/components/homepage-components/SectionWrapper"
import Reveal from "@/components/Reveal"
import { ButtonLink } from "@/components/ui/button"

export default function AboutSection() {
  const t = useTranslations()
  const locale = useLocale()

  const resumeMap = {
    en: "/Felix_Orain_Web_Developer_Resume.pdf",
    fr: "/Felix_Orain_CV_Developpeur_Web.pdf",
    es: "/Felix_Orain_Web_Developer_Resume.pdf", // fallback to English if Spanish
  }
  const resumeFile = resumeMap[locale as keyof typeof resumeMap] || resumeMap.en

  return (
    <>
      <Reveal>
        <SectionWrapper title={t("about.title")}>
          <div className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:gap-16 xl:gap-20">
            <div className="flex-shrink-0">
              <Image
                src="/images/Important-photos/photo-profil-V2.jpg"
                alt="Profile Image"
                width={280}
                height={350}
                sizes="(max-width: 640px) 200px, (max-width: 1024px) 60vw, 30vw"
                className="vertical-animation h-auto w-[220px] rounded-xl shadow-md transition-all duration-300 sm:w-[250px] lg:w-[280px]"
              />
            </div>
            <div className="flex max-w-2xl flex-col items-center justify-center gap-8">
              <p className="sm:text-md text-base leading-relaxed text-gray-700 lg:text-left lg:text-lg dark:text-gray-300">
                {t("about.desc")
                  .split("\n")
                  .map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
              </p>
              <ButtonLink
                href={resumeFile}
                variant="outline"
                size="lg"
                className="rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:border dark:border-blue-700 dark:bg-gray-900/80 dark:text-white dark:hover:bg-gray-800/90"
                download
              >
                <Download className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-[2px]" />
                {t("about.resume")}
              </ButtonLink>
            </div>
          </div>
        </SectionWrapper>
      </Reveal>
    </>
  )
}
