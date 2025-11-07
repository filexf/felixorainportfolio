import ImageGalleryStructuredData from "@/components/ImageGalleryStructuredData";
import Gallery from "@/components/photos-components/PhotosGallery";
import { getTranslations } from "next-intl/server";

interface GalleryImage {
  src: string;
  title: string;
}

// Définition des images avec leurs chemins corrects
const images: GalleryImage[] = [
  {
    src: "/images/Photos-wedding/Wedding_photos_14.jpg",
    title: "Wedding image",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_3.jpg",
    title: "Wedding image",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_17.jpg",
    title: "Wedding image",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_9.jpg",
    title: "Wedding image",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_10.jpg",
    title: "Wedding image",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_1.jpg",
    title: "Wedding image",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_5.jpg",
    title: "Wedding image",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_16.jpg",
    title: "Wedding image",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_11.jpg",
    title: "Wedding image",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_15.jpg",
    title: "Wedding image",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_18.jpg",
    title: "Wedding image",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_8.jpg",
    title: "Wedding image",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_2.jpg",
    title: "Wedding image",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_4.jpg",
    title: "Wedding image",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_7.jpg",
    title: "Wedding image",
  },
  {
    src: "/images/Photos-wedding/Wedding_photos_13.jpg",
    title: "Wedding image",
  },
];

export default async function WeddingPhotoPage() {
  const t = await getTranslations("weddingphotopage");

  return (
    <>
      <ImageGalleryStructuredData
        title={t("title")}
        description={t("desc")}
        images={images}
        pageUrl="https://www.felix-orain.com/photos/wedding"
      />
      <Gallery title={t("title")} images={images} text={t("desc")} />
    </>
  );
}
