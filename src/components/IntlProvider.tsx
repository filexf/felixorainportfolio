"use client";

import { NextIntlClientProvider } from "next-intl";
import React from "react";

interface IntlProviderProps {
  children: React.ReactNode;
  initialMessages: Record<string, unknown>;
}

export function IntlProvider({ children, initialMessages }: IntlProviderProps) {
  return (
    <NextIntlClientProvider locale="fr" messages={initialMessages}>
      {children}
    </NextIntlClientProvider>
  );
}
