import { getTranslations } from "next-intl/server"
import ContactForm from "@/components/ContactForm"
import SectionWrapper from "@/components/homepage-components/SectionWrapper"
import Reveal from "@/components/Reveal"

export default async function ContactSection() {
  const t = await getTranslations("contact")

  return (
    <Reveal>
      <SectionWrapper title={t("homepage.title")}>
        <div className="flex flex-col gap-12" id="contact-section">
          <p className="body-font mx-auto max-w-3xl text-center">{t("homepage.subtitle")}</p>

          {/* Utilisation du composant ContactForm réutilisable */}
          <ContactForm
            title={t("homepage.cta")}
            showSubject={true}
            compact={true}
            className="mx-auto w-full max-w-2xl"
          />
        </div>
      </SectionWrapper>
    </Reveal>
  )
}
