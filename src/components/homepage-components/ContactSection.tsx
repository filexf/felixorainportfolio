"use client";

import { IoSend } from "react-icons/io5";
import { useTranslations } from "next-intl";
import Reveal from "@/components/Reveal";
import SectionWrapper from "@/components/homepage-components/SectionWrapper";

export default function ContactSection() {
  const t = useTranslations();
  return (
    <Reveal>
      <SectionWrapper title={t("contact.title")}>
        <div className="flex flex-col gap-12" id="contact-section">
          <p className="body-font mx-auto max-w-3xl text-center">
            {t("contact.text")}
          </p>

          <form
            action="https://usebasin.com/f/477736526efa"
            method="POST"
            className="mx-auto flex w-full max-w-2xl flex-col gap-6"
          >
            <div className="flex flex-col gap-6 md:flex-row">
              <input
                className="w-full rounded-xl border border-gray-300 bg-white/50 p-3 text-gray-600 placeholder-slate-300 shadow-md backdrop-blur-sm transition-all duration-300 ease-in-out focus:border-gray-900 focus:ring-0 focus:outline-none"
                type="text"
                id="name"
                name="name"
                placeholder={t("contact.name")}
                required
              />
              <input
                className="w-full rounded-xl border border-gray-300 bg-white/50 p-3 text-gray-600 placeholder-slate-300 shadow-md backdrop-blur-sm transition-all duration-300 ease-in-out focus:border-gray-900 focus:ring-0 focus:outline-none"
                type="email"
                id="email"
                name="email"
                placeholder={t("contact.email")}
                required
              />
            </div>

            <textarea
              className="w-full rounded-xl border border-gray-300 bg-white/50 p-3 text-gray-600 placeholder-slate-300 shadow-md backdrop-blur-sm transition-all duration-300 ease-in-out focus:border-gray-900 focus:ring-0 focus:outline-none"
              id="message"
              name="message"
              rows={5}
              placeholder={t("contact.message")}
              required
            />

            <div className="flex justify-center">
              <button
                type="submit"
                className="group mb-2 inline-flex items-center gap-3 self-start rounded-full border border-gray-300 bg-secondary px-5 py-2 shadow-md transition-all duration-300 ease-in-out hover:border-gray-900"
              >
                <span className="text-sm font-medium tracking-wide">
                  {t("contact.send")}
                </span>
                <IoSend className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </form>
        </div>
      </SectionWrapper>
    </Reveal>
  );
}
