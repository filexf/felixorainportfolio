import React from "react";
import { Link } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";
import { t } from "../i18n/i18n";

export default function NotFound() {

  const { language } = useLanguage();
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="text-3xl">
        <b>{t("notFound.title", language)}</b>
      </h1>
      <h1 className="text-xl mt-4">
        <b>{t("notFound.subtitle", language)}</b>
      </h1>
      <button className="mt-5 rounded-full bg-[#000] px-4 py-2 text-white hover:bg-[#2c2c35]">
        <Link to="/">{t("notFound.back", language)}</Link>
      </button>
    </div>
  );
}
