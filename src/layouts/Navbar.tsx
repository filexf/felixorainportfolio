"use client";

import {
  Book,
  Building,
  ChevronDown,
  Grid,
  HeartHandshake,
  Menu,
  Mountain,
  Trophy,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { t } from "@/i18n/i18n";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
}

const Navbar = ({
  logo = {
    url: "/",
    src: "/icons/Main-icons/Logo-website-icon.svg",
    alt: "Félix Orain Logo",
    title: "Félix Orain",
  },
}: NavbarProps) => {
  const { language, setLanguage } = useLanguage();
  const { darkMode } = useTheme();

  // Create menu with translations
  const menu = [
    { title: t("navbar.home", language), url: "/" },
    {
      title: t("navbar.applications", language),
      url: "/applications",
    },
    {
      title: t("navbar.photos", language),
      url: "/photos",
      items: [
        {
          title: t("navbar.wedding", language),
          description: t("navbar.descriptions.wedding", language),
          icon: <HeartHandshake className="size-5 shrink-0" />,
          url: "/photos/wedding",
        },
        {
          title: t("navbar.mosaic", language),
          description: t("navbar.descriptions.mosaic", language),
          icon: <Grid className="size-5 shrink-0" />,
          url: "/photos/mosaic",
        },
        {
          title: t("navbar.sport", language),
          description: t("navbar.descriptions.sport", language),
          icon: <Trophy className="size-5 shrink-0" />,
          url: "/photos/sport",
        },
        {
          title: t("navbar.cityscape", language),
          description: t("navbar.descriptions.cityscape", language),
          icon: <Building className="size-5 shrink-0" />,
          url: "/photos/cityscape",
        },
        {
          title: t("navbar.landscape", language),
          description: t("navbar.descriptions.landscape", language),
          icon: <Mountain className="size-5 shrink-0" />,
          url: "/photos/landscape",
        },
      ],
    },
    {
      title: t("navbar.books", language),
      url: "/books",
      items: [
        {
          title: t("navbar.civilisation", language),
          description: t("navbar.descriptions.civilisation", language),
          icon: <Book className="size-5 shrink-0" />,
          url: "/books/civilisation",
        },
        {
          title: t("navbar.wizzyenasie", language),
          description: t("navbar.descriptions.wizzyenasie", language),
          icon: <Book className="size-5 shrink-0" />,
          url: "/books/wizzyenasie",
        },
      ],
    },
    // {
    //   title: t("navbar.contact", language),
    //   url: "/#contact",
    // },
  ];

  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState<
    string | null
  >(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState<
    string | null
  >(null);

  const handleLanguageChange = (lang: string) => {
    if (lang === "fr" || lang === "en" || lang === "es") {
      setLanguage(lang as "fr" | "en" | "es");
    }
  };

  // No need for click outside handling since we use hover

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
    // Small delay to ensure the element is mounted before animation
    requestAnimationFrame(() => {
      setIsAnimating(true);
    });
  };

  const closeMobileMenu = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsMobileDropdownOpen(null);
    }, 300); // Match the transition duration
  };

  const toggleMobileDropdown = (title: string) => {
    setIsMobileDropdownOpen(isMobileDropdownOpen === title ? null : title);
  };

  const renderDesktopMenuItem = (item: MenuItem) => {
    if (item.items) {
      return (
        <div
          key={item.title}
          className="relative"
          onMouseEnter={() => setIsDesktopDropdownOpen(item.title)}
          onMouseLeave={() => setIsDesktopDropdownOpen(null)}
        >
          <Link
            href={item.url}
            className={`flex items-center gap-1 rounded-md px-4 py-2 text-lg font-medium transition-colors ${
              darkMode
                ? "text-white hover:bg-gray-700 hover:text-white"
                : "text-gray-900 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            {item.title}
            <ChevronDown className="size-4" />
          </Link>

          {isDesktopDropdownOpen === item.title && (
            <div
              className={`absolute top-full left-0 z-50 w-80 rounded-md shadow-lg ${
                darkMode
                  ? "border-gray-700 bg-gray-800"
                  : "border-gray-200 bg-white"
              } border`}
            >
              <div className="p-2">
                {item.items.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.url}
                    className={`flex items-start gap-3 rounded-md p-3 text-base transition-colors ${
                      darkMode
                        ? "text-white hover:bg-gray-700"
                        : "text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {subItem.icon && (
                      <div
                        className={darkMode ? "text-white" : "text-gray-900"}
                      >
                        {subItem.icon}
                      </div>
                    )}
                    <div>
                      <div className="text-sm font-semibold">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p
                          className={`text-sm leading-snug ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.title}
        href={item.url}
        className={`rounded-md px-4 py-2 text-lg font-medium transition-colors ${
          darkMode
            ? "text-white hover:bg-gray-700 hover:text-white"
            : "text-gray-900 hover:bg-gray-100 hover:text-gray-900"
        }`}
      >
        {item.title}
      </Link>
    );
  };

  const renderMobileMenuItem = (item: MenuItem) => {
    if (item.items) {
      return (
        <div key={item.title}>
          <div className="flex items-center justify-between">
            <Link
              href={item.url}
              onClick={closeMobileMenu}
              className={`py-2 text-lg font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {item.title}
            </Link>
            <button
              onClick={() => toggleMobileDropdown(item.title)}
              className={`p-2 transition-transform duration-200 ${
                isMobileDropdownOpen === item.title ? "rotate-180" : ""
              }`}
            >
              <ChevronDown
                className={`size-5 ${darkMode ? "text-white" : "text-gray-900"}`}
              />
            </button>
          </div>

          {isMobileDropdownOpen === item.title && (
            <div className="mt-2 ml-4 space-y-2">
              {item.items.map((subItem) => (
                <Link
                  key={subItem.title}
                  href={subItem.url}
                  onClick={closeMobileMenu}
                  className={`flex items-start gap-3 rounded-md p-3 transition-colors ${
                    darkMode
                      ? "text-white hover:bg-gray-700"
                      : "text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {subItem.icon && (
                    <div className={darkMode ? "text-white" : "text-gray-900"}>
                      {subItem.icon}
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-semibold">{subItem.title}</div>
                    {subItem.description && (
                      <p
                        className={`text-sm leading-snug ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {subItem.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.title}
        href={item.url}
        onClick={closeMobileMenu}
        className={`block py-2 text-lg font-semibold ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {item.title}
      </Link>
    );
  };

  return (
    <>
      <section
        className={`sticky top-0 z-50 border-b backdrop-blur ${
          darkMode
            ? "border-gray-800 bg-gray-900/95"
            : "border-gray-200 bg-white/95"
        } supports-[backdrop-filter]:bg-background/60`}
      >
        <div className="container mx-auto px-4">
          {/* Desktop Menu */}
          <nav className="hidden justify-between py-4 lg:flex">
            <div className="flex items-center gap-6">
              {/* Logo */}
              <Link href={logo.url} className="flex items-center gap-4">
                <Image
                  src={logo.src}
                  width={36}
                  height={36}
                  className="max-h-10"
                  alt={logo.alt}
                  style={darkMode ? { filter: "brightness(0) invert(1)" } : {}}
                  priority
                />
                <span
                  className={`text-xl font-semibold tracking-tighter ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {logo.title}
                </span>
              </Link>

              {/* Menu Items */}
              <div className="flex items-center gap-2">
                {menu.map(renderDesktopMenuItem)}
              </div>
            </div>

            {/* Theme Toggle & Language Switcher */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageSwitcher
                currentLanguage={language}
                onLanguageChange={handleLanguageChange}
              />
            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="block lg:hidden">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <Link href={logo.url} className="flex items-center gap-2">
                <Image
                  src={logo.src}
                  width={32}
                  height={32}
                  className="max-h-8"
                  alt={logo.alt}
                  style={darkMode ? { filter: "brightness(0) invert(1)" } : {}}
                  priority
                />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={openMobileMenu}
                className={`rounded-md border border-gray-200 p-1.5 transition-colors ${
                  darkMode
                    ? "text-white hover:bg-gray-800"
                    : "text-gray-900 hover:bg-gray-100"
                }`}
              >
                <Menu className="size-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
              isAnimating ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeMobileMenu}
          />

          {/* Mobile Menu Panel */}
          <div
            className={`fixed top-0 right-0 z-50 h-full w-3/4 max-w-sm transform transition-transform duration-300 ease-out lg:hidden ${
              darkMode ? "bg-gray-900" : "bg-white"
            } shadow-2xl ${isAnimating ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* Header */}
            <div
              className={`flex items-center justify-between border-b p-4 ${
                darkMode ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <Link
                href={logo.url}
                className="flex items-center gap-2"
                onClick={closeMobileMenu}
              >
                <Image
                  src={logo.src}
                  width={32}
                  height={32}
                  className="max-h-8"
                  alt={logo.alt}
                  style={darkMode ? { filter: "brightness(0) invert(1)" } : {}}
                />
                <span
                  className={`text-lg font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {logo.title}
                </span>
              </Link>

              {/* Close Button */}
              <button
                onClick={closeMobileMenu}
                className={`rounded-full p-1.5 transition-all hover:scale-105 ${
                  darkMode
                    ? "bg-gray-700 text-white hover:bg-gray-600"
                    : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                }`}
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex h-full flex-col space-y-4 overflow-y-auto p-4">
              {/* Menu Items */}
              <div className="space-y-4">{menu.map(renderMobileMenuItem)}</div>

              {/* Theme Toggle & Language Switcher */}
              <div
                className={`flex justify-between border-t pt-4 ${
                  darkMode ? "border-gray-800" : "border-gray-200"
                }`}
              >
                <ThemeToggle />
                <LanguageSwitcher
                  currentLanguage={language}
                  onLanguageChange={handleLanguageChange}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
