import { getTranslations } from "next-intl/server"
import BookStructuredData from "@/components/BookStructuredData"
import BooksGallery from "@/components/books-components/BooksGallery"

interface GalleryImage {
  src: string
  title: string
}

const images: GalleryImage[] = [
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag3.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag4.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag5.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag6.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag11.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag13.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag15.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag18.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag22.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag23.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag27.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag30.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag32.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag33.jpg",
    title: "Civilisation",
  },
]

export default async function CivilisationBook() {
  const t = await getTranslations("books.civilisation")

  return (
    <>
      <BookStructuredData
        title="Civilisation"
        description={t("description")}
        coverImage="/images/Couvertures magazines/Civilisation Mag.jpg"
        pageUrl="https://www.felix-orain.com/books/civilisation"
        images={images}
      />
      <BooksGallery title={"Civilisation"} images={images} />
    </>
  )
}
