"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Correction: window.scrollTo() accepte seulement 2 arguments
    // ou un objet d'options
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior
    });
  }, [pathname]); // S'exécute à chaque changement de route

  return null; // Ce composant ne rend rien
}
