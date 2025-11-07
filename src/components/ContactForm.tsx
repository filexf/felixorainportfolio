// src/components/ContactForm.tsx
"use client"

import { ChevronDown, Loader2, Send } from "lucide-react"
import { useTranslations } from "next-intl"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error"
  message: string
}

interface ContactFormProps {
  title?: string
  className?: string
  showSubject?: boolean
  compact?: boolean
}

export default function ContactForm({
  title,
  className = "",
  showSubject = true,
  compact = false,
}: ContactFormProps) {
  const t = useTranslations("contact")

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: "loading", message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setStatus({ type: "success", message: t("success") })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus({ type: "error", message: result.error || t("error") })
      }
    } catch {
      setStatus({ type: "error", message: t("error") })
    }
  }

  // Classes communes pour les inputs stylés
  const inputClasses = `w-full rounded-xl border-0 bg-gray-100 px-4 ${compact ? "py-2.5" : "py-3"} text-gray-900 placeholder-gray-500 shadow-sm transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 dark:focus:bg-gray-700 dark:focus:ring-blue-400`

  return (
    <div className={className}>
      {title && (
        <h2 className={`${compact ? "mb-4 text-xl" : "mb-6 text-2xl"} font-bold`}>{title}</h2>
      )}

      <form onSubmit={handleSubmit} className={`space-y-${compact ? "4" : "6"}`}>
        <div>
          <label
            htmlFor="name"
            className={`${compact ? "mb-2" : "mb-3"} block text-sm font-semibold text-gray-700 dark:text-gray-300`}
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
            className={`${compact ? "mb-2" : "mb-3"} block text-sm font-semibold text-gray-700 dark:text-gray-300`}
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

        {/* Dropdown pour le sujet (conditionnel) */}
        {showSubject && (
          <div>
            <label
              htmlFor="subject"
              className={`${compact ? "mb-2" : "mb-3"} block text-sm font-semibold text-gray-700 dark:text-gray-300`}
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
                <option value="">{t("form.subjectPlaceholder")}</option>
                <option value="web-project">{t("form.subjects.webProject")}</option>
                <option value="photo-project">{t("form.subjects.photoProject")}</option>
                <option value="pricing">{t("form.subjects.pricing")}</option>
                <option value="collaboration">{t("form.subjects.collaboration")}</option>
                <option value="other">{t("form.subjects.other")}</option>
              </select>
              <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            </div>
          </div>
        )}

        <div>
          <label
            htmlFor="message"
            className={`${compact ? "mb-2" : "mb-3"} block text-sm font-semibold text-gray-700 dark:text-gray-300`}
          >
            {t("form.message")} *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={compact ? 4 : 6}
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
          size={compact ? "sm" : "lg"}
          className={`w-full rounded-xl bg-slate-900 ${compact ? "py-3" : "py-4"} text-white shadow-lg transition-all duration-200 hover:bg-slate-800 hover:shadow-xl disabled:opacity-50 dark:bg-gray-900 dark:hover:bg-gray-800`}
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
  )
}
