"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { ButtonLink } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { BookOpen, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AuroraBackgroundDemo() {
  const t = useTranslations("heroSection");
  const { darkMode } = useTheme();

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative -mt-4 flex flex-col items-center justify-center gap-4 px-4 py-2"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            boxShadow: [
              "0 0 0 rgba(255, 255, 255, 0)",
              "0 0 12px rgba(255, 255, 255, 0.5)",
              "0 0 0 rgba(255, 255, 255, 0)",
            ],
          }}
          transition={{
            duration: 1.5,
            delay: 0.1,
            boxShadow: {
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
          }}
          className="relative mb-4 inline-flex flex-wrap items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-gray-200/60 bg-gradient-to-r from-white/80 to-white/60 px-3 py-1 shadow-lg backdrop-blur-md sm:gap-3 sm:px-5 sm:py-1.5 dark:from-white/10 dark:to-gray-900/40"
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{
              x: ["100%", "-100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          />
          <span className="text-xs text-blue-500 sm:text-sm dark:text-blue-300">
            ✨
          </span>
          <span className="relative bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-xs font-medium tracking-wide text-transparent sm:text-sm dark:from-white/90 dark:to-blue-200">
            Expert
          </span>
          <span className="relative h-1 w-1 rounded-full bg-slate-400 sm:h-1.5 sm:w-1.5"></span>
          <span className="relative text-xs font-light text-gray-600 sm:text-sm dark:text-white/80">
            Web & Photo
          </span>
        </motion.div>

        {/* Unique h1 pour le SEO qui contient visuellement tous les éléments principaux */}
        <h1 className="text-center">
          {/* Premier élément visuel - Nom */}
          <div className="flex items-center justify-center text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            <div className="mr-1 h-8 w-8 overflow-hidden rounded-full sm:mr-2 sm:h-10 sm:w-10 md:mr-4 md:h-12 md:w-12 lg:h-15 lg:w-15 dark:bg-white">
              <Image
                src="/icons/Main-icons/Logo-website-icon.svg"
                alt="Félix Orain - Développeur Web et Photographe à Rennes"
                width={60}
                height={60}
                className="h-full w-full object-contain"
              />
            </div>
            <span className={darkMode ? "text-white" : "text-gray-900"}>
              Félix Orain
            </span>
          </div>

          {/* Division visuelle */}
          <div className="my-2">
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
              Portfolio{" "}
            </span>
            <span
              className={`text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Web & Photo
            </span>
          </div>
        </h1>

        <div className="max-w-xs px-4 py-4 text-center text-sm font-normal sm:max-w-lg sm:py-6 sm:text-base md:max-w-2xl md:text-lg lg:max-w-3xl lg:text-xl">
          <span className="font-medium text-gray-800 dark:text-white">
            {t("description.part1")}
          </span>
          <span className="text-gray-600 dark:text-white/70">
            {t("description.part2")}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href="#latest-works"
            variant="default"
            size="lg"
            className="rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:border dark:border-blue-700 dark:bg-gray-900/80 dark:text-white dark:hover:bg-gray-800/90"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            {t("buttons.browse")}
          </ButtonLink>
          <ButtonLink
            href="#contact"
            variant="outline"
            size="lg"
            className="rounded-xl border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100/50 dark:border-white/20 dark:bg-slate-800/90 dark:text-white dark:hover:bg-slate-700/90"
          >
            <Send className="mr-2 h-5 w-5" />
            {t("buttons.contact")}
          </ButtonLink>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
