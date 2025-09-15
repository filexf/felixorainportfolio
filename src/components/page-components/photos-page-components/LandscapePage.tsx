import Gallery from "@/components/photos-components/PhotosGallery";
import { getTranslations } from "next-intl/server";

interface GalleryImage {
  src: string;
  title: string;
}

// Définition des images avec leurs chemins corrects
const images: GalleryImage[] = [
  {
    src: "/images/Photos-landscape/Tests photos USA-71.jpg",
    title: "Landscape image",
  },
  {
    src: "/images/Photos-landscape/Tests photos USA-32.jpg",
    title: "Landscape image",
  },
  {
    src: "/images/Photos-landscape/Tests photos USA-61.jpg",
    title: "Landscape image",
  },
  {
    src: "/images/Photos-landscape/Tests photos USA-18.jpg",
    title: "Landscape image",
  },
  {
    src: "/images/Photos-landscape/Tests photos USA-126.jpg",
    title: "Landscape image",
  },
  {
    src: "/images/Photos-landscape/Tests photos USA-145.jpg",
    title: "Landscape image",
  },
  {
    src: "/images/Photos-landscape/Tests photos USA-147.jpg",
    title: "Landscape image",
  },
  {
    src: "/images/Photos-landscape/Tests photos USA-152.jpg",
    title: "Landscape image",
  },
  {
    src: "/images/Photos-landscape/Tests photos USA-154.jpg",
    title: "Landscape image",
  },
  {
    src: "/images/Photos-landscape/Tests photos USA-178.jpg",
    title: "Landscape image",
  },
  {
    src: "/images/Photos-landscape/Tests photos USA-184.jpg",
    title: "Landscape image",
  },
  {
    src: "/images/Photos-landscape/Tests photos USA-186.jpg",
    title: "Landscape image",
  },
  {
    src: "/images/Photos-landscape/Tests photos USA-199.jpg",
    title: "Landscape image",
  },
  {
    src: "/images/Photos-landscape/Tests photos USA-209.jpg",
    title: "Landscape image",
  },
  {
    src: "/images/Photos-landscape/Tests photos USA-233.jpg",
    title: "Landscape image",
  },
  {
    src: "/images/Photos-landscape/Tests photos USA-234.jpg",
    title: "Landscape image",
  },
  {
    src: "/images/Photos-landscape/Tests photos USA-291.jpg",
    title: "Landscape image",
  },
];

export default async function LandscapePhotoPage() {
  const t = await getTranslations("landscapephotopage");

  return (
    <>
      <Gallery
        title={t("title")}
        images={images}
        text={t("desc")}
      />
    </>
  );
}
