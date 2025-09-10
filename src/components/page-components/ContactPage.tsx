// src/components/page-components/ContactPage.tsx
"use client";

import SectionWrapper from "@/components/homepage-components/SectionWrapper";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { ChevronDown, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

export default function ContactPage() {
  const t = useTranslations("contact");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: t("success") });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: result.error || t("error") });
      }
    } catch {
      setStatus({ type: "error", message: t("error") });
    }
  };

  // Classes communes pour les inputs stylés
  const inputClasses =
    "w-full rounded-xl border-0 bg-gray-100 px-4 py-3 text-gray-900 placeholder-gray-500 shadow-sm transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:bg-gray-700 dark:focus:ring-blue-400";

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <Reveal>
          <SectionWrapper title={t("title")}>
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
                <div>
                  <h2 className="mb-6 text-2xl font-bold">{t("form.title")}</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                      >
                        {t("form.name")} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={inputClasses}
                        placeholder={t("form.namePlaceholder")}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                      >
                        {t("form.email")} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={inputClasses}
                        placeholder={t("form.emailPlaceholder")}
                      />
                    </div>

                    {/* Dropdown pour le sujet */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-3 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                      >
                        {t("form.subject")} *
                      </label>
                      <div className="relative">
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className={`${inputClasses} appearance-none pr-12`}
                        >
                          <option value="">
                            {t("form.subjectPlaceholder")}
                          </option>
                          <option value="web-project">
                            {t("form.subjects.webProject")}
                          </option>
                          <option value="photo-project">
                            {t("form.subjects.photoProject")}
                          </option>
                          <option value="pricing">
                            {t("form.subjects.pricing")}
                          </option>
                          <option value="collaboration">
                            {t("form.subjects.collaboration")}
                          </option>
                          <option value="other">
                            {t("form.subjects.other")}
                          </option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-semibold text-gray-700 dark:text-gray-300"
                      >
                        {t("form.message")} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className={`${inputClasses} resize-none`}
                        placeholder={t("form.messagePlaceholder")}
                      />
                    </div>

                    {/* Message de statut */}
                    {status.message && (
                      <div
                        className={`rounded-xl p-4 shadow-sm ${
                          status.type === "success"
                            ? "bg-green-50 text-green-800 ring-1 ring-green-200 dark:bg-green-900/20 dark:text-green-300 dark:ring-green-800"
                            : status.type === "error"
                              ? "bg-red-50 text-red-800 ring-1 ring-red-200 dark:bg-red-900/20 dark:text-red-300 dark:ring-red-800"
                              : ""
                        }`}
                      >
                        {status.message}
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={status.type === "loading"}
                      variant="default"
                      size="lg"
                      className="dark:bg-black-600 dark:hover:bg-black-100 w-full rounded-xl bg-slate-900 py-4 text-white shadow-lg transition-all duration-200 hover:bg-slate-800 hover:shadow-xl disabled:opacity-50"
                    >
                      {status.type === "loading" ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          {t("form.sending")}
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          {t("form.send")}
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </Reveal>
      </div>
    </div>
  );
}
