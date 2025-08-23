"use client";

import Gallery from "@/components/photos-components/PhotosGallery";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/i18n/i18n";

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

export default function WeddingPhotoPage() {
  const { language } = useLanguage();

  return (
    <>
      <Gallery
        title={t("weddingphotopage.title", language)}
        images={images}
        text={t("weddingphotopage.desc", language)}
      />
    </>
  );
}
