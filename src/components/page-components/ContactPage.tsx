import ContactForm from "@/components/ContactForm";
import SectionWrapper from "@/components/homepage-components/SectionWrapper";
import Reveal from "@/components/Reveal";
import { Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function ContactPage() {
  const t = await getTranslations("contact");

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Reveal>
          <SectionWrapper title={t("title")} as="h1">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-2">
                {/* Informations de contact */}
                <div className="space-y-8">
                  <div>
                    <h2 className="mb-6 text-2xl font-bold">
                      {t("info.title")}
                    </h2>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                          <Mail className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{t("info.email")}</h3>
                          <a
                            href="mailto:felix.orain@gmail.com"
                            className="text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-300"
                          >
                            felix.orain@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                          <Phone className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{t("info.phone")}</h3>
                          <a
                            href="tel:+33778764454"
                            className="text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-300"
                          >
                            07 78 76 44 54
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                          <MapPin className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold">
                            {t("info.location")}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Rennes, Bretagne, France
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-xl font-semibold">
                      {t("info.availability")}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t("info.availabilityText")}
                    </p>
                  </div>
                </div>

                {/* Formulaire de contact */}
                <ContactForm
                  title={t("form.title")}
                  showSubject={true}
                  compact={false}
                />
              </div>
            </div>
          </SectionWrapper>
        </Reveal>
      </div>
    </div>
  );
}
