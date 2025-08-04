"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "instant" });
  }, [pathname]); // Runs whenever the route changes

  return null; // This component doesn't render anything
}
