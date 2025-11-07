import { getTranslations } from "next-intl/server"
import ImageGalleryStructuredData from "@/components/ImageGalleryStructuredData"
import Gallery from "@/components/photos-components/PhotosGallery"

interface GalleryImage {
  src: string
  title: string
}

// Définition des images avec leurs chemins corrects
const images: GalleryImage[] = [
  { src: "/images/Photos-mosaics/Paris_WE_V1-7.jpg", title: "Mosaics image" },
  { src: "/images/Photos-mosaics/Paris_WE_V1-8.jpg", title: "Mosaics image" },
  {
    src: "/images/Photos-mosaics/Photos_Bangkok_V1-33.jpg",
    title: "Mosaics image",
  },
  {
    src: "/images/Photos-mosaics/Ho_chi_Minh_Civilisation_V1-18.jpg",
    title: "Mosaics image",
  },

  {
    src: "/images/Photos-mosaics/Photos_HK_chill-128.jpg",
    title: "Mosaics image",
  },
  {
    src: "/images/Photos-mosaics/Photos_HK_chill-43.jpg",
    title: "Mosaics image",
  },
  {
    src: "/images/Photos-mosaics/HK_Street_photos-2.jpg",
    title: "Mosaics image",
  },
  {
    src: "/images/Photos-mosaics/Photos_Bangkok_V1-88.jpg",
    title: "Mosaics image",
  },

  {
    src: "/images/Photos-mosaics/Photos_HK_chill-44.jpg",
    title: "Mosaics image",
  },
  {
    src: "/images/Photos-mosaics/Photos_HK_chill-64.jpg",
    title: "Mosaics image",
  },
  {
    src: "/images/Photos-mosaics/Photos_HK_chill-72.jpg",
    title: "Mosaics image",
  },
  {
    src: "/images/Photos-mosaics/Hong_Kong_Parkour_album_V1-18.jpg",
    title: "Mosaics image",
  },
  {
    src: "/images/Photos-mosaics/Hong_Kong_Parkour_album_V1-24.jpg",
    title: "Mosaics image",
  },
  { src: "/images/Photos-mosaics/Paris_WE_V1-10.jpg", title: "Mosaics image" },
  { src: "/images/Photos-mosaics/Paris_WE_V1-24.jpg", title: "Mosaics image" },
  {
    src: "/images/Photos-mosaics/Photos_Bangkok_V1-142.jpg",
    title: "Mosaics image",
  },
  {
    src: "/images/Photos-mosaics/Photos_Bangkok_V1-146.jpg",
    title: "Mosaics image",
  },
  {
    src: "/images/Photos-mosaics/Photos_Bangkok_V1-186.jpg",
    title: "Mosaics image",
  },
  {
    src: "/images/Photos-mosaics/HK_Street_photos-18.jpg",
    title: "Mosaics image",
  },
]

export default async function MosaicPhotoPage() {
  const t = await getTranslations("mosaicphotopage")

  return (
    <>
      <ImageGalleryStructuredData
        title={t("title")}
        description={t("desc")}
        images={images}
        pageUrl="https://www.felix-orain.com/photos/mosaic"
      />
      <Gallery title={t("title")} images={images} text={t("desc")} />
    </>
  )
}
