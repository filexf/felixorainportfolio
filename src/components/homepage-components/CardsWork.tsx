"use client"

import { Brush, Camera, ChevronRight, Code } from "lucide-react"
import { useTranslations } from "next-intl"
import React from "react"
import Reveal from "@/components/Reveal"
import { ButtonLink } from "@/components/ui/button"
import { useTheme } from "@/context/ThemeContext"

export default function CardsWork() {
  const t = useTranslations()

  interface CardData {
    title: string
    icon: React.ComponentType<{ className?: string }>
    text: string
    path: string
    buttonText: string
  }

  const cardData: CardData[] = [
    {
      title: t("cardData.webDevelopment.title"),
      icon: Code,
      text: t("cardData.webDevelopment.text"),
      path: "/applications",
      buttonText: t("cardData.webDevelopment.buttonText"),
    },
    {
      title: t("cardData.photography.title"),
      icon: Camera,
      text: t("cardData.photography.text"),
      path: "/photos",
      buttonText: t("cardData.photography.buttonText"),
    },
    {
      title: t("cardData.design.title"),
      icon: Brush,
      text: t("cardData.design.text"),
      path: "/books",
      buttonText: t("cardData.design.buttonText"),
    },
  ]

  return (
    <Reveal>
      <div
        className="mt-8 flex flex-col items-center justify-center gap-6 sm:mt-10 sm:gap-8 md:mt-14 md:gap-10"
        id="latest-works"
      >
        <div className="text-center">
          <h2 className="text-gradient text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            {t("portfolio.title")}
          </h2>
          <div className="mt-2 flex items-center justify-center gap-2"></div>
        </div>

        <div className="flex w-full max-w-5xl flex-col gap-4 px-4 text-center">
          <p className="text-base font-medium text-gray-700 sm:text-lg md:text-xl lg:text-2xl dark:text-gray-300">
            {t("portfolio.intro")}
          </p>
          <p className="text-sm text-gray-600 italic sm:text-base dark:text-gray-400">
            {t("portfolio.subIntro")}
          </p>
        </div>

        <Reveal>
          <div className="my-4 flex flex-col flex-wrap items-center justify-center gap-6 sm:my-6 sm:gap-8 md:my-8 md:flex-row md:gap-10 lg:gap-12">
            {cardData.map((card, index) => (
              <Card
                key={card.title}
                title={card.title}
                icon={card.icon}
                text={card.text}
                path={card.path}
                buttonText={card.buttonText}
                delay={index * 100}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </Reveal>
  )
}

interface CardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  text: string
  path: string
  buttonText: string
  delay: number
}

const Card = ({ icon: IconComponent, title, text, path, buttonText, delay }: CardProps) => {
  const { darkMode } = useTheme()

  return (
    <div
      className={`group vertical-animation relative overflow-hidden rounded-3xl border transition-all duration-300 ease-in-out ${
        darkMode
          ? "border-gray-700/50 bg-gradient-to-br from-gray-800/80 via-gray-900/70 to-gray-800/80 backdrop-blur-xl"
          : "border-gray-200/50 bg-gradient-to-br from-white/90 via-gray-50/80 to-white/90 backdrop-blur-xl"
      }`}
      style={{
        animationDelay: `${delay}ms`,
        width: "300px",
        height: "400px",
      }}
    >
      {/* Subtle accent gradient - transition plus douce */}
      <div
        className="absolute inset-0 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-10"
        style={{
          background: `linear-gradient(135deg, var(--gradient-start), var(--gradient-middle), var(--gradient-end))`,
        }}
      />

      {/* Nouveau gradient gris subtil */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: darkMode
            ? "radial-gradient(circle at top left, var(--card-gradient-dark-1) 0%, transparent 70%), radial-gradient(circle at bottom right, var(--card-gradient-dark-2) 0%, transparent 70%)"
            : "radial-gradient(circle at top left, var(--card-gradient-light-1) 0%, transparent 70%), radial-gradient(circle at bottom right, var(--card-gradient-light-2) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-between p-6">
        {/* Icon section */}
        <div className="flex flex-col items-center gap-6">
          <div
            className="relative transform rounded-4xl p-4 shadow-lg transition-all duration-300 ease-in-out group-hover:scale-105"
            style={{
              background: `linear-gradient(135deg, var(--gradient-start), var(--gradient-middle), var(--gradient-end))`,
            }}
          >
            <IconComponent className="h-8 w-8 text-white" />
            {/* <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" /> */}
          </div>

          <div className="text-center">
            <h3 className="text-gradient text-xl leading-tight font-bold sm:text-2xl">{title}</h3>
          </div>
        </div>

        {/* Text section */}
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center text-base leading-relaxed text-gray-600 dark:text-gray-300">
            {text}
          </p>
        </div>

        {/* Button section - keeping current button style */}
        <div className="w-full">
          <ButtonLink
            href={path}
            variant="outline"
            size="sm"
            className="group/btn relative w-full overflow-hidden rounded-2xl border-0 bg-gradient-to-r from-gray-900 to-gray-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:from-gray-800 hover:to-gray-600 hover:shadow-xl dark:from-gray-100 dark:to-gray-300 dark:text-gray-900 dark:hover:from-white dark:hover:to-gray-100"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {buttonText}
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}
