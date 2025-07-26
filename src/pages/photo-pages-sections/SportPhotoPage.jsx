import React from "react";
import Gallery from "../../components/photos-components/PhotosGallery";

// Import images properly
import photo1 from "../../assets/images/Photos-sport/Photo_dub_roofgap.jpg";
import photo2 from "../../assets/images/Photos-sport/Photo_Louis_stride_bridge.jpg";
import photo3 from "../../assets/images/Photos-sport/Photos_Bangkok_V1-9.jpg";
import photo4 from "../../assets/images/Photos-sport/Photos_Bangkok_V1-13.jpg";
import photo5 from "../../assets/images/Photos-sport/Photo_Saint_Sulpice.jpg";
import photo6 from "../../assets/images/Photos-sport/Photos_Bangkok_V1-27.jpg";
import photo7 from "../../assets/images/Photos-sport/Photos_Bangkok_V1-124.jpg";
import photo8 from "../../assets/images/Photos-sport/Photo_reservoir_des_gallets.jpg";
import photo9 from "../../assets/images/Photos-sport/Ho_chi_Minh_Civilisation_V1-105.jpg";
import photo10 from "../../assets/images/Photos-sport/Photo_jump_lieges.jpg";
import photo11 from "../../assets/images/Photos-sport/Ho_chi_Minh_Civilisation_V1-230.jpg";
import photo13 from "../../assets/images/Photos-sport/Ho_chi_Minh_Civilisation_V1-113.jpg";
import photo14 from "../../assets/images/Photos-sport/Ho_chi_Minh_Civilisation_V1-212.jpg";
import photo15 from "../../assets/images/Photos-sport/Gainer_Tour_V1-7.jpg";
import photo16 from "../../assets/images/Photos-sport/Photo_Avoriaz.jpg";
import photo17 from "../../assets/images/Photos-sport/Photo_city_London.jpg";
import photo18 from "../../assets/images/Photos-sport/Photo_roofgap_Leo.jpg";
import photo19 from "../../assets/images/Photos-sport/Paris_Saint_Eustache.jpg";

import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/i18n";

// Define images array with proper imports
const images = [
  { src: photo1, title: "Sport image" },
  { src: photo2, title: "Sport image" },
  { src: photo3, title: "Sport image" },
  { src: photo4, title: "Sport image" },
  { src: photo5, title: "Sport image" },
  { src: photo6, title: "Sport image" },
  { src: photo7, title: "Sport image" },
  { src: photo8, title: "Sport image" },
  { src: photo9, title: "Sport image" },
  { src: photo10, title: "Sport image" },
  { src: photo11, title: "Sport image" },
  { src: photo13, title: "Sport image" },
  { src: photo14, title: "Sport image" },
  { src: photo15, title: "Sport image" },
  { src: photo16, title: "Sport image" },
  { src: photo17, title: "Sport image" },
  { src: photo18, title: "Sport image" },
  { src: photo19, title: "Sport image" },
];

export default function SportPhotoPage() {
  const { language } = useLanguage();

  return (
    <>
      <Gallery
        title={t("sportphotopage.title", language)}
        images={images}
        text={t("sportphotopage.desc", language)}

      />
    </>
  );
}
