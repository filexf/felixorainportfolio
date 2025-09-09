// src/components/page-components/ContactPage.tsx
"use client";

import SectionWrapper from "@/components/homepage-components/SectionWrapper";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
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
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: result.error || t("error") });
      }
    } catch {
      // Pas de variable error définie, donc pas d'avertissement
      setStatus({ type: "error", message: t("error") });
    }
  };

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
                        className="mb-2 block text-sm font-medium"
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
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800"
                        placeholder={t("form.namePlaceholder")}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium"
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
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800"
                        placeholder={t("form.emailPlaceholder")}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium"
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
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800"
                        placeholder={t("form.messagePlaceholder")}
                      />
                    </div>

                    {/* Message de statut */}
                    {status.message && (
                      <div
                        className={`rounded-lg p-4 ${
                          status.type === "success"
                            ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                            : status.type === "error"
                              ? "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-300"
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
                      className="w-full rounded-xl bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700"
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
