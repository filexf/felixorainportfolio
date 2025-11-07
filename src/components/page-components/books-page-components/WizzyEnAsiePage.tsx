import { getTranslations } from "next-intl/server"
import BookStructuredData from "@/components/BookStructuredData"
import BooksGallery from "@/components/books-components/BooksGallery"

interface GalleryImage {
  src: string
  title: string
}

const images: GalleryImage[] = [
  {
    src: "/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION3.jpg",
    title: "Wizzy en Asie",
  },
  {
    src: "/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION5.jpg",
    title: "Wizzy en Asie",
  },
  {
    src: "/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION6.jpg",
    title: "Wizzy en Asie",
  },
  {
    src: "/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION10.jpg",
    title: "Wizzy en Asie",
  },
  {
    src: "/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION12.jpg",
    title: "Wizzy en Asie",
  },
  {
    src: "/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION14.jpg",
    title: "Wizzy en Asie",
  },
  {
    src: "/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION17.jpg",
    title: "Wizzy en Asie",
  },
  {
    src: "/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION20.jpg",
    title: "Wizzy en Asie",
  },
  {
    src: "/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION21.jpg",
    title: "Wizzy en Asie",
  },
  {
    src: "/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION30.jpg",
    title: "Wizzy en Asie",
  },
  {
    src: "/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION33.jpg",
    title: "Wizzy en Asie",
  },
  {
    src: "/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION37.jpg",
    title: "Wizzy en Asie",
  },
  {
    src: "/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION43.jpg",
    title: "Wizzy en Asie",
  },
  {
    src: "/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION48.jpg",
    title: "Wizzy en Asie",
  },
]

export default async function WizzyEnAsieBook() {
  const t = await getTranslations("books.wizzy")

  return (
    <>
      <BookStructuredData
        title="Wizzy en Asie"
        description={t("description")}
        coverImage="/images/Couvertures magazines/WIZZY En Asie BONNE VERSION.jpg"
        pageUrl="https://www.felix-orain.com/books/wizzyenasie"
        images={images}
      />
      <BooksGallery title={"Wizzy en Asie"} images={images} />
    </>
  )
}
