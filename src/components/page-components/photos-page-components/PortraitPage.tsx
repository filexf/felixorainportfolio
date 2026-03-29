import { getTranslations } from "next-intl/server"
import ImageGalleryStructuredData from "@/components/ImageGalleryStructuredData"
import Gallery from "@/components/photos-components/PhotosGallery"

interface GalleryImage {
  src: string
  title: string
}

const images: GalleryImage[] = [
  { src: "/images/Photos-portraits/Photos-portraits-4.jpg", title: "Portrait image" },
  { src: "/images/Photos-portraits/Photos-portraits-2.jpg", title: "Portrait image" },
  { src: "/images/Photos-portraits/Photos-portraits-19.jpg", title: "Portrait image" },
  { src: "/images/Photos-portraits/Photos-portraits-7.jpg", title: "Portrait image" },
  { src: "/images/Photos-portraits/Photos-portraits-23.jpg", title: "Portrait image" },
  { src: "/images/Photos-portraits/Photos-portraits-20.jpg", title: "Portrait image" },
  { src: "/images/Photos-portraits/Photos-portraits-9.jpg", title: "Portrait image" },
  { src: "/images/Photos-portraits/Photos-portraits-1.jpg", title: "Portrait image" },
  { src: "/images/Photos-portraits/Portraits-4.jpg", title: "Portrait image" },
  { src: "/images/Photos-portraits/Photos-portraits-18.jpg", title: "Portrait image" },
  { src: "/images/Photos-portraits/Portraits-3.jpg", title: "Portrait image" },
  { src: "/images/Photos-portraits/Photos-portraits-14.jpg", title: "Portrait image" },
  { src: "/images/Photos-portraits/Photos-portraits-22.jpg", title: "Portrait image" },
  { src: "/images/Photos-portraits/Photos-portraits-5.jpg", title: "Portrait image" },
  { src: "/images/Photos-portraits/Photos-portraits-3.jpg", title: "Portrait image" },
  { src: "/images/Photos-portraits/Photos-portraits-11.jpg", title: "Portrait image" },

  { src: "/images/Photos-portraits/Photos-portraits-6.jpg", title: "Portrait image" },
  { src: "/images/Photos-portraits/Portraits-2.jpg", title: "Portrait image" },
  { src: "/images/Photos-portraits/Photos-portraits-12.jpg", title: "Portrait image" },
  { src: "/images/Photos-portraits/Photos-portraits-8.jpg", title: "Portrait image" },
  { src: "/images/Photos-portraits/Photos-portraits-21.jpg", title: "Portrait image" },
  { src: "/images/Photos-portraits/Photos-portraits-17.jpg", title: "Portrait image" },
]

export default async function PortraitPhotoPage() {
  const t = await getTranslations("portraitphotopage")

  return (
    <>
      <ImageGalleryStructuredData
        title={t("title")}
        description={t("desc")}
        images={images}
        pageUrl="https://www.felix-orain.com/photos/portrait"
      />
      <Gallery title={t("title")} images={images} text={t("desc")} />
    </>
  )
}
