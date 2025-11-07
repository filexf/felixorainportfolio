import { BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getTranslations } from "next-intl/server"
import SectionWrapper from "@/components/homepage-components/SectionWrapper"
import SeeMore from "@/components/homepage-components/SeeMore"
import Reveal from "@/components/Reveal"

export default async function DesignSection() {
  const t = await getTranslations("designsection")
  return (
    <Reveal>
      <SectionWrapper title={t("title")}>
        <div className="flex flex-col gap-12">
          {/* Texte d'introduction */}
          <p className="body-font mx-auto max-w-3xl text-center">{t("desc")}</p>

          {/* Grille de designs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2">
            <DesignCard photo="/images/Couvertures magazines/Civilisation Mag.jpg" />
            <DesignCard photo="/images/Couvertures magazines/WIZZY En Asie BONNE VERSION.jpg" />
          </div>

          <SeeMore projectLink={"/books"} context="books" />
        </div>
      </SectionWrapper>
    </Reveal>
  )
}

interface DesignCardProps {
  photo: string
}

function DesignCard({ photo }: DesignCardProps) {
  return (
    <Link href="/books">
      <div className="group relative mx-auto aspect-[2/3] w-full max-w-[250px] overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1 md:max-w-[280px]">
        <Image
          src={photo}
          alt="Book Cover"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={350}
          height={525}
        />

        {/* Overlay au hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="translate-y-4 transform transition-transform duration-300 group-hover:translate-y-0">
            <BookOpen className="h-12 w-12 text-white" />
          </div>
        </div>
      </div>
    </Link>
  )
}
