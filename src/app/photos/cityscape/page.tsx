"use client";

import Gallery from "@/components/photos-components/PhotosGallery";
import { useTranslations } from "next-intl";

interface GalleryImage {
  src: string;
  title: string;
}

// Définition des images avec leurs chemins corrects
const images: GalleryImage[] = [
  {
    src: "/images/Photos-cityscape/Photos HK chill-108.jpg",
    title: "Cityscape image",
  },
  {
    src: "/images/Photos-cityscape/Photos HK chill-109.jpg",
    title: "Cityscape image",
  },
  {
    src: "/images/Photos-cityscape/Photos HK chill-110.jpg",
    title: "Cityscape image",
  },
  {
    src: "/images/Photos-cityscape/Photos HK chill-111.jpg",
    title: "Cityscape image",
  },
  {
    src: "/images/Photos-cityscape/Photos HK chill-112.jpg",
    title: "Cityscape image",
  },
  {
    src: "/images/Photos-cityscape/HK Street photos 2-12.jpg",
    title: "Cityscape image",
  },
  {
    src: "/images/Photos-cityscape/HK Street photos 2-16.jpg",
    title: "Cityscape image",
  },
  {
    src: "/images/Photos-cityscape/HK Street photos 2-20.jpg",
    title: "Cityscape image",
  },
  {
    src: "/images/Photos-cityscape/HK Street photos 2-21.jpg",
    title: "Cityscape image",
  },
  {
    src: "/images/Photos-cityscape/HK Street photos 2-24.jpg",
    title: "Cityscape image",
  },
  {
    src: "/images/Photos-cityscape/HK Street photos 2-3.jpg",
    title: "Cityscape image",
  },
  {
    src: "/images/Photos-cityscape/HK Street photos 2-8.jpg",
    title: "Cityscape image",
  },
  {
    src: "/images/Photos-cityscape/Photos HK chill-113.jpg",
    title: "Cityscape image",
  },
  {
    src: "/images/Photos-cityscape/Photos HK chill-114.jpg",
    title: "Cityscape image",
  },
  {
    src: "/images/Photos-cityscape/HK Street photos moody weather-8.jpg",
    title: "Cityscape image",
  },
  {
    src: "/images/Photos-cityscape/Photos HK chill-132.jpg",
    title: "Cityscape image",
  },
  {
    src: "/images/Photos-cityscape/Feu d'artifice-1.jpg",
    title: "Cityscape image",
  },
  {
    src: "/images/Photos-cityscape/Feu d'artifice-2.jpg",
    title: "Cityscape image",
  },
  {
    src: "/images/Photos-cityscape/Feu d'artifice-3.jpg",
    title: "Cityscape image",
  },
  {
    src: "/images/Photos-cityscape/Feu d'artifice-4.jpg",
    title: "Cityscape image",
  },
];

export default function CityscapePhotoPage() {
  const t = useTranslations();

  return (
    <>
      <Gallery
        title={t("cityscapephotopage.title")}
        images={images}
        text={t("cityscapephotopage.desc")}
      />
    </>
  );
}
