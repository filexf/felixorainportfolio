import React from "react"

interface SectionWrapperProps {
  children: React.ReactNode
  title: string
  as?: "h1" | "h2" // Nouveau prop optionnel
}

export default function SectionWrapper({
  children,
  title,
  as = "h2", // Par défaut h2 pour maintenir la compatibilité
}: SectionWrapperProps) {
  // Composant dynamique basé sur le prop 'as'
  const HeadingComponent = as

  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-6xl flex-col justify-center gap-12 px-4 sm:gap-16 sm:px-6 lg:px-8">
        <HeadingComponent className="text-gradient text-center text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </HeadingComponent>
        {children}
      </div>
    </div>
  )
}
