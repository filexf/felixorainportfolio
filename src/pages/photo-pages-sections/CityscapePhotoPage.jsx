import React from "react";

import Gallery from "../../components/photos-components/PhotosGallery";

import photo1 from "../../assets/images/Photos-cityscape/HK Street photos 2-12.jpg";
import photo2 from "../../assets/images/Photos-cityscape/HK Street photos 2-16.jpg";
import photo3 from "../../assets/images/Photos-cityscape/HK Street photos 2-20.jpg";
import photo4 from "../../assets/images/Photos-cityscape/HK Street photos 2-21.jpg";
import photo5 from "../../assets/images/Photos-cityscape/HK Street photos 2-24.jpg";
import photo6 from "../../assets/images/Photos-cityscape/HK Street photos 2-3.jpg";
import photo7 from "../../assets/images/Photos-cityscape/HK Street photos 2-8.jpg";
import photo8 from "../../assets/images/Photos-cityscape/HK Street photos moody weather-8.jpg";
import photo9 from "../../assets/images/Photos-cityscape/Photos HK chill-108.jpg";
import photo10 from "../../assets/images/Photos-cityscape/Photos HK chill-109.jpg";
import photo11 from "../../assets/images/Photos-cityscape/Photos HK chill-110.jpg";
import photo12 from "../../assets/images/Photos-cityscape/Photos HK chill-111.jpg";
import photo13 from "../../assets/images/Photos-cityscape/Photos HK chill-112.jpg";
import photo14 from "../../assets/images/Photos-cityscape/Photos HK chill-113.jpg";
import photo15 from "../../assets/images/Photos-cityscape/Photos HK chill-114.jpg";
import photo18 from "../../assets/images/Photos-cityscape/Photos HK chill-132.jpg";
import photo19 from "../../assets/images/Photos-cityscape/Feu d'artifice-1.jpg";
import photo20 from "../../assets/images/Photos-cityscape/Feu d'artifice-2.jpg";
import photo21 from "../../assets/images/Photos-cityscape/Feu d'artifice-3.jpg";
import photo22 from "../../assets/images/Photos-cityscape/Feu d'artifice-4.jpg";

import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/i18n";

const images = [

  { src: photo9, title: "Cityscape image" },
  { src: photo10, title: "Cityscape image" },
  { src: photo11, title: "Cityscape image" },
  { src: photo12, title: "Cityscape image" },

  { src: photo13, title: "Cityscape image" },
  { src: photo1, title: "Cityscape image" },
  { src: photo2, title: "Cityscape image" },
  { src: photo3, title: "Cityscape image" },

  { src: photo4, title: "Cityscape image" },
  { src: photo5, title: "Cityscape image" },
  { src: photo6, title: "Cityscape image" },
  { src: photo7, title: "Cityscape image" },

  { src: photo14, title: "Cityscape image" },
  { src: photo15, title: "Cityscape image" },
  { src: photo8, title: "Cityscape image" },
  { src: photo18, title: "Cityscape image" },

  { src: photo19, title: "Cityscape image" },
  { src: photo20, title: "Cityscape image" },
  { src: photo21, title: "Cityscape image" },
  { src: photo22, title: "Cityscape image" },

];

export default function CityscapePhotoPage() {
  const { language } = useLanguage();
  return (
    <>
      <Gallery
        title={t("cityscapephotopage.title", language)}
        images={images}
        text={t("cityscapephotopage.desc", language)}
      />
    </>
  );
}
