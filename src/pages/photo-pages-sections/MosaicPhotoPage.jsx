import React from "react";
import Gallery from "../../components/photos-components/PhotosGallery";

// Import images properly
import photo1 from "../../assets/images/Photos-mosaics/HK_Street_photos-18.jpg";
import photo2 from "../../assets/images/Photos-mosaics/HK_Street_photos-2.jpg";
import photo3 from "../../assets/images/Photos-mosaics/Ho_chi_Minh_Civilisation_V1-18.jpg";
import photo4 from "../../assets/images/Photos-mosaics/Hong_Kong_Parkour_album_V1-18.jpg";
import photo5 from "../../assets/images/Photos-mosaics/Hong_Kong_Parkour_album_V1-24.jpg";
import photo10 from "../../assets/images/Photos-mosaics/Paris_WE_V1-7.jpg";
import photo11 from "../../assets/images/Photos-mosaics/Paris_WE_V1-8.jpg";
import photo12 from "../../assets/images/Photos-mosaics/Paris_WE_V1-10.jpg";
import photo13 from "../../assets/images/Photos-mosaics/Paris_WE_V1-24.jpg";
import photo14 from "../../assets/images/Photos-mosaics/Photos_Bangkok_V1-142.jpg";
import photo15 from "../../assets/images/Photos-mosaics/Photos_Bangkok_V1-146.jpg";
import photo16 from "../../assets/images/Photos-mosaics/Photos_Bangkok_V1-186.jpg";

import photo18 from "../../assets/images/Photos-mosaics/Photos_Bangkok_V1-33.jpg";
import photo19 from "../../assets/images/Photos-mosaics/Photos_Bangkok_V1-88.jpg";
import photo20 from "../../assets/images/Photos-mosaics/Photos_HK_chill-128.jpg";
import photo22 from "../../assets/images/Photos-mosaics/Photos_HK_chill-43.jpg";
import photo23 from "../../assets/images/Photos-mosaics/Photos_HK_chill-44.jpg";
import photo24 from "../../assets/images/Photos-mosaics/Photos_HK_chill-64.jpg";
import photo25 from "../../assets/images/Photos-mosaics/Photos_HK_chill-72.jpg";

import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/i18n";

const images = [
  { src: photo10, title: "Mosaics image" },
  { src: photo11, title: "Mosaics image" },
  { src: photo18, title: "Mosaics image" },
  { src: photo3, title: "Mosaics image" },

  { src: photo20, title: "Mosaics image" },
  { src: photo22, title: "Mosaics image" },
  { src: photo2, title: "Mosaics image" },
  { src: photo19, title: "Mosaics image" },

  { src: photo23, title: "Mosaics image" },
  { src: photo24, title: "Mosaics image" },
  { src: photo25, title: "Mosaics image" },
  { src: photo4, title: "Mosaics image" },
  { src: photo5, title: "Mosaics image" },
  { src: photo12, title: "Mosaics image" },
  { src: photo13, title: "Mosaics image" },
  { src: photo14, title: "Mosaics image" },
  { src: photo15, title: "Mosaics image" },
  { src: photo16, title: "Mosaics image" },
  { src: photo1, title: "Mosaics image" },
];

export default function MosaicPhotoPage() {
  const { language } = useLanguage();
  return (
    <>
      <Gallery
        title={t("mosaicphotopage.title", language)}
        images={images}
        text={t("mosaicphotopage.desc", language)}
      />
    </>
  );
}
