"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { t } from "../i18n/i18n";

export default function NotFound() {
  const { language } = useLanguage();
  const { darkMode } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const logoVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0, y: -20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const numberVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  // Pulsing animation
  const pulse = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  };

  if (!mounted) return null;

  return (
    <div className="mt-12 flex min-h-screen flex-col items-center px-4">
      <motion.div
        className="flex w-full max-w-3xl flex-col items-center justify-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div className="mb-10" variants={logoVariants}>
          <Image
            src="/Logo-website-icon.svg"
            alt="Félix Orain Logo"
            width={100}
            height={100}
            className={darkMode ? "invert filter" : ""}
          />
        </motion.div>

        {/* Error number with pulse effect */}
        <motion.div
          className="relative mb-8"
          variants={numberVariants}
          animate={pulse}
        >
          <h1 className="text-9xl font-bold text-gray-400">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl font-bold">Oops!</h2>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 className="mb-4 text-3xl font-bold" variants={itemVariants}>
          {t("notFound.title", language)}
        </motion.h1>

        {/* Subtitle */}
        <motion.p className="mb-8 text-xl" variants={itemVariants}>
          {t("notFound.subtitle", language)}
        </motion.p>

        {/* Button */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/"
            className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium shadow-lg transition-all duration-300 ${
              darkMode
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: -4 }}
              className="mr-2"
            >
              ←
            </motion.span>
            {t("notFound.back", language)}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
