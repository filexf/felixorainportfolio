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
    src: "/images/Photos-sport/Photo_dub_roofgap.jpg",
    title: "Sport image",
  },
  {
    src: "/images/Photos-sport/Photo_Louis_stride_bridge.jpg",
    title: "Sport image",
  },
  {
    src: "/images/Photos-sport/Photos_Bangkok_V1-9.jpg",
    title: "Sport image",
  },
  {
    src: "/images/Photos-sport/Photos_Bangkok_V1-13.jpg",
    title: "Sport image",
  },
  {
    src: "/images/Photos-sport/Photo_Saint_Sulpice.jpg",
    title: "Sport image",
  },
  {
    src: "/images/Photos-sport/Photos_Bangkok_V1-27.jpg",
    title: "Sport image",
  },
  {
    src: "/images/Photos-sport/Photos_Bangkok_V1-124.jpg",
    title: "Sport image",
  },
  {
    src: "/images/Photos-sport/Photo_reservoir_des_gallets.jpg",
    title: "Sport image",
  },
  {
    src: "/images/Photos-sport/Ho_chi_Minh_Civilisation_V1-105.jpg",
    title: "Sport image",
  },
  {
    src: "/images/Photos-sport/Photo_jump_lieges.jpg",
    title: "Sport image",
  },
  {
    src: "/images/Photos-sport/Ho_chi_Minh_Civilisation_V1-230.jpg",
    title: "Sport image",
  },
  {
    src: "/images/Photos-sport/Ho_chi_Minh_Civilisation_V1-113.jpg",
    title: "Sport image",
  },
  {
    src: "/images/Photos-sport/Ho_chi_Minh_Civilisation_V1-212.jpg",
    title: "Sport image",
  },
  {
    src: "/images/Photos-sport/Gainer_Tour_V1-7.jpg",
    title: "Sport image",
  },
  {
    src: "/images/Photos-sport/Photo_Avoriaz.jpg",
    title: "Sport image",
  },
  {
    src: "/images/Photos-sport/Photo_city_London.jpg",
    title: "Sport image",
  },
  {
    src: "/images/Photos-sport/Photo_roofgap_Leo.jpg",
    title: "Sport image",
  },
  {
    src: "/images/Photos-sport/Paris_Saint_Eustache.jpg",
    title: "Sport image",
  },
];

export default function SportPhotoPage() {
  const t = useTranslations();

  return (
    <>
      <Gallery
        title={t("sportphotopage.title")}
        images={images}
        text={t("sportphotopage.desc")}
      />
    </>
  );
}
