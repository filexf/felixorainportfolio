import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import logoSite from "../assets/icons/Main-icons/Logo-website-icon.svg";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ThemeToggle from "../components/ThemeToggle";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { t } from "../i18n/i18n";

export default function Navbar() {
  const { darkMode } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const NavLinks = ({ onClick }) => (
    <ul className="flex flex-col items-center gap-[18px] text-2xl font-medium md:flex-row md:gap-[25px]">
      <li className="transition-opacity hover:opacity-70" onClick={onClick}>
        <Link to="/">{t("navbar.home", language)}</Link>
      </li>
      <li className="transition-opacity hover:opacity-70" onClick={onClick}>
        <Link to="/applications">{t("navbar.applications", language)}</Link>
      </li>
      <li className="transition-opacity hover:opacity-70" onClick={onClick}>
        <Link to="/photos">{t("navbar.photos", language)}</Link>
      </li>
      <li className="transition-opacity hover:opacity-70" onClick={onClick}>
        <Link to="/books">{t("navbar.books", language)}</Link>
      </li>
    </ul>
  );

  return (
    <>
      <nav
        className="sticky top-0 z-50 w-full shadow-md"
        style={{ backgroundColor: "var(--navbar-bg)" }}
      >
        <div className="mx-auto flex w-full max-w-[1800px] px-8 py-4">
          <div className="flex w-full items-center justify-between px-4 lg:px-24">
            {/* Section gauche avec burger menu et logo */}
            <div className="flex items-center gap-4">
              {/* Burger menu */}
              <button className="text-4xl md:hidden" onClick={toggleSidebar}>
                <HiMenu />
              </button>
              {/* Logo */}
              <div className="hidden size-[2rem] mr-3 items-center md:flex md:size-[2.4rem]">
                <Link to="/">
                  <img
                    src={logoSite}
                    alt="Logo website"
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
              className="fixed top-0 left-0 z-50 h-full w-64 bg-white shadow-xl bg-sidebar"
            >
              <div className="flex flex-col p-4">
                {/* Logo */}

                <button
                  onClick={toggleSidebar}
                  className="mb-8 self-end text-3xl"
                >
                  <HiX />
                </button>
                <div className="flex items-center justify-center mb-8">
                  <Link to="/">
                    <img
                      src={logoSite}
                      alt="Logo website"
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
