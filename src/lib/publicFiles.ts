/** Fichiers servis depuis `public/` — hors routes App Router (non couverts par `Route`). */
export const PUBLIC_FILES = {
  resumeEn: "/Felix_Orain_Web_Developer_Resume.pdf",
  resumeFr: "/Felix_Orain_CV_Developpeur_Web.pdf",
} as const

export type PublicFilePath = (typeof PUBLIC_FILES)[keyof typeof PUBLIC_FILES]
