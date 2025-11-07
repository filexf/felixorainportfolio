import { FileText, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getTranslations } from "next-intl/server"
import React from "react"

interface FooterProps {
  noPadding?: boolean
}

interface SocialIconProps {
  icon: string
  link: string
  invert?: boolean
}

export default async function Footer({ noPadding }: FooterProps) {
  const t = await getTranslations("footer")

  return (
    // To make sure that there isn't the padding on the bottom of the page
    <div className={noPadding ? undefined : "w-full bg-transparent pt-[10vh]"}>
      <footer
        className="relative bottom-0 w-full py-8 md:py-12"
        style={{ backgroundColor: "var(--footer-bg)" }}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8">
            {/* ✅ QUICKLINKS SECTION - SEO Optimized & Well Organized */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {/* 🔧 Services Section */}
              <div className="space-y-4">
                <h3 className="border-b border-gray-400/20 pb-2 text-lg font-semibold text-blue-300">
                  {t("sections.services")}
                </h3>
                <nav className="space-y-3">
                  <FooterLink href="/applications">{t("links.webDevelopment")}</FooterLink>
                  <FooterLink href="/photos">{t("links.photography")}</FooterLink>
                  <FooterLink href="/books">{t("links.graphicDesign")}</FooterLink>
                </nav>
              </div>

              {/* 📷 Portfolio Photo Section */}
              <div className="space-y-4">
                <h3 className="border-b border-gray-400/20 pb-2 text-lg font-semibold text-blue-300">
                  {t("sections.portfolio")}
                </h3>
                <nav className="space-y-3">
                  <FooterLink href="/photos/wedding">{t("links.weddings")}</FooterLink>
                  <FooterLink href="/photos/sport">{t("links.sportParkour")}</FooterLink>
                  <FooterLink href="/photos/landscape">{t("links.landscapes")}</FooterLink>
                  <FooterLink href="/photos/cityscape">{t("links.cityscape")}</FooterLink>
                  <FooterLink href="/photos/mosaic">{t("links.mosaic")}</FooterLink>
                </nav>
              </div>

              {/* 📚 Créations Section */}
              <div className="space-y-4">
                <h3 className="border-b border-gray-400/20 pb-2 text-lg font-semibold text-blue-300">
                  {t("sections.creations")}
                </h3>
                <nav className="space-y-3">
                  <FooterLink href="/books/civilisation">{t("links.civilisationMag")}</FooterLink>
                  <FooterLink href="/books/wizzyenasie">{t("links.wizzyAsia")}</FooterLink>
                </nav>
              </div>

              {/* 📧 Contact Section */}
              <div className="space-y-4">
                <h3 className="border-b border-gray-400/20 pb-2 text-lg font-semibold text-blue-300">
                  {t("sections.contact")}
                </h3>
                <nav className="space-y-3">
                  <FooterLink href="/contact" isButton>
                    {t("links.sendMessage")}
                  </FooterLink>
                  <FooterExternalLink href="tel:0778764454">{t("links.phone")}</FooterExternalLink>
                  <FooterExternalLink href="mailto:felix.orain@gmail.com">
                    {t("links.email")}
                  </FooterExternalLink>
                </nav>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gray-400/20"></div>

            {/* Section sociale et infos légales (existante mais réorganisée) */}
            <div className="flex flex-col items-center gap-6">
              {/* Social Icons */}
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
                  invert={true}
                />
              </ul>

              {/* Professional info */}
              <div className="flex w-full flex-col items-center justify-center gap-3 px-4 text-center sm:gap-4">
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                  <div className="flex items-center">
                    <span className="mr-2 text-blue-300">
                      <MapPin size={16} />
                    </span>
                    <span style={{ color: "var(--footer-text)" }} className="text-xs md:text-sm">
                      Rennes, Bretagne
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2 text-blue-300">
                      <FileText size={16} />
                    </span>
                    <span style={{ color: "var(--footer-text)" }} className="text-xs md:text-sm">
                      SIRET : 840 825 871 00014
                    </span>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="flex w-full flex-col items-center justify-center gap-4 px-4 text-center sm:flex-row sm:justify-between sm:px-8 lg:px-16">
                <p
                  className="text-sm font-light tracking-wide md:text-base"
                  style={{ color: "var(--footer-text)" }}
                >
                  {t("madeby")}
                </p>
                <p
                  className="text-sm font-light tracking-wide md:text-base"
                  style={{ color: "var(--footer-text)" }}
                >
                  {t("copyright")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// ✅ Enhanced Footer Link Components
interface FooterLinkProps {
  href: string
  children: React.ReactNode
  isButton?: boolean
}

interface FooterExternalLinkProps {
  href: string
  children: React.ReactNode
}

function FooterLink({ href, children, isButton }: FooterLinkProps) {
  const baseClasses =
    "group flex items-center gap-2 text-sm transition-all duration-300 hover:translate-x-1"
  const buttonClasses = isButton
    ? "rounded-lg bg-blue-600/20 px-3 py-2 hover:bg-blue-600/30 hover:translate-x-0 hover:scale-105"
    : "hover:text-blue-300"

  return (
    <Link
      href={href}
      className={`${baseClasses} ${buttonClasses}`}
      style={{ color: "var(--footer-text-light)" }}
    >
      <span className={`${isButton ? "font-medium" : ""} underline-offset-2 group-hover:underline`}>
        {children}
      </span>
      {!isButton && (
        <span className="ml-auto opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
          →
        </span>
      )}
    </Link>
  )
}

function FooterExternalLink({ href, children }: FooterExternalLinkProps) {
  return (
    <a
      href={href}
      className="group flex items-center gap-2 text-sm transition-all duration-300 hover:translate-x-1 hover:text-blue-300"
      style={{ color: "var(--footer-text-light)" }}
    >
      <span className="underline-offset-2 group-hover:underline">{children}</span>
      <span className="ml-auto opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
        →
      </span>
    </a>
  )
}

function SocialIcon({ icon, link, invert }: SocialIconProps) {
  return (
    <li>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
      >
        <Image
          src={icon}
          alt="Social icon"
          width={32}
          height={32}
          className={`opacity-80 transition-all duration-300 hover:opacity-100 hover:drop-shadow-lg md:h-9 md:w-9 ${
            invert ? "contrast-[3] dark:contrast-100" : ""
          }`}
        />
      </a>
    </li>
  )
}
