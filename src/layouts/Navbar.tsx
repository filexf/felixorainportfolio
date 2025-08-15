"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ThemeToggle from "../components/ThemeToggle";
import { useLanguage, LanguageType } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { t } from "../i18n/i18n";

interface NavLinksProps {
  onClick?: () => void;
}

export default function Navbar() {
  const { darkMode } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    // Modifié pour utiliser le type LanguageType
  const handleLanguageChange = (lang: string): void => {
    // Vérifier que la langue est valide avant de l'assigner
    if (lang === "fr" || lang === "en" || lang === "es") {
      setLanguage(lang as LanguageType);
    }
  };

  const toggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const NavLinks: React.FC<NavLinksProps> = ({ onClick }) => (
    <ul className="flex flex-col items-center gap-[18px] text-2xl font-medium md:flex-row md:gap-[25px]">
      <li className="transition-opacity hover:opacity-70" onClick={onClick}>
        <Link href="/">{t("navbar.home", language)}</Link>
      </li>
      <li className="transition-opacity hover:opacity-70" onClick={onClick}>
        <Link href="/applications">{t("navbar.applications", language)}</Link>
      </li>
      <li className="transition-opacity hover:opacity-70" onClick={onClick}>
        <Link href="/photos">{t("navbar.photos", language)}</Link>
      </li>
      <li className="transition-opacity hover:opacity-70" onClick={onClick}>
        <Link href="/books">{t("navbar.books", language)}</Link>
      </li>
    </ul>
  );

  return (
    <>
      <nav
        className="sticky top-0 z-50 w-full shadow-sm backdrop-blur-md"
        style={{
          backgroundColor: "rgba(var(--navbar-bg-rgb, 255, 255, 255), 0.85)",
          transition: "all 0.3s ease-in-out",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1800px] px-8 py-4">
          <div className="flex w-full items-center justify-between px-4 lg:px-24">
            {/* Section gauche avec burger menu et logo */}
            <div className="flex items-center gap-4">
              {/* Burger menu */}
              <button
                className="text-3xl md:hidden md:text-4xl"
                onClick={toggleSidebar}
              >
                <HiMenu />
              </button>
              {/* Logo */}
              <div className="mr-3 hidden size-[2rem] items-center md:flex md:size-[2.2rem]">
                <Link href="/">
                  <Image
                    src="/icons/Main-icons/Logo-website-icon.svg"
                    alt="Logo website"
                    width={36}
                    height={36}
                    className={darkMode ? "invert filter" : ""}
                  />
                </Link>
              </div>
              {/* Navigation pour desktop */}
              <div className="hidden md:block">
                <NavLinks />
              </div>
            </div>

            {/* Boutons de droite (toujours visibles) */}
            <div className="ml-4 flex items-center gap-4">
              <ThemeToggle />
              <LanguageSwitcher
                currentLanguage={language}
                onLanguageChange={handleLanguageChange}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar mobile */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
              className="fixed inset-0 z-40 bg-black"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween" }}
              className="fixed top-0 left-0 z-50 h-full w-64 shadow-xl backdrop-blur-lg"
              style={{
                backgroundColor: "rgba(var(--navbar-bg-rgb, 255, 255, 255), 1)",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <div className="flex flex-col p-4">
                {/* Logo */}
                <button
                  onClick={toggleSidebar}
                  className="mb-8 self-end text-3xl"
                >
                  <HiX />
                </button>
                <div className="mb-8 flex items-center justify-center">
                  <Link href="/">
                    <Image
                      src="/icons/Main-icons/Logo-website-icon.svg"
                      alt="Logo website"
                      width={36}
                      height={36}
                      className={darkMode ? "invert filter" : ""}
                    />
                  </Link>
                </div>
                <NavLinks onClick={toggleSidebar} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
