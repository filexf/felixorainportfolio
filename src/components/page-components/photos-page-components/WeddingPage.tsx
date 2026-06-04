import { getTranslations } from "next-intl/server"
import ImageGalleryStructuredData from "@/components/ImageGalleryStructuredData"
import Gallery from "@/components/photos-components/PhotosGallery"

interface GalleryImage {
  src: string
  title: string
}

// Définition des images avec leurs chemins corrects
const images: GalleryImage[] = [
  {
    src: "/images/Photos-wedding/Wedding_photos_28.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_8.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_31.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_17.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_23.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_14.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_35.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_9.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_29.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_25.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_5.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_1.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_16.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_7.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_15.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_36.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_2.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_13.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_34.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_20.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_21.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_19.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_24.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_33.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_27.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_18.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_32.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_22.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_30.jpg",
    title: "Photo de mariage",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_37.jpg",
    title: "Photo de mariage",
  },
]

export default async function WeddingPhotoPage() {
  const t = await getTranslations("weddingphotopage")

  return (
    <>
      <ImageGalleryStructuredData
        title={t("title")}
        description={t("desc")}
        images={images}
        pageUrl="https://www.felix-orain.com/photos/mariage"
      />
      <Gallery title={t("title")} images={images} text={t("desc")} />
    </>
  )
}
