import React from "react";
import Gallery from "../../components/photos-components/PhotosWeddingGallery";

// Import images properly
// Import images properly
import photo1 from "../../assets/images/Photos-wedding/Wedding_photos_1.jpg";
import photo2 from "../../assets/images/Photos-wedding/Wedding_photos_2.jpg";
import photo3 from "../../assets/images/Photos-wedding/Wedding_photos_3.jpg";
import photo4 from "../../assets/images/Photos-wedding/Wedding_photos_4.jpg";
import photo5 from "../../assets/images/Photos-wedding/Wedding_photos_5.jpg";
import photo7 from "../../assets/images/Photos-wedding/Wedding_photos_7.jpg";
import photo8 from "../../assets/images/Photos-wedding/Wedding_photos_8.jpg";
import photo9 from "../../assets/images/Photos-wedding/Wedding_photos_9.jpg";
import photo10 from "../../assets/images/Photos-wedding/Wedding_photos_10.jpg";
import photo11 from "../../assets/images/Photos-wedding/Wedding_photos_11.jpg";
import photo13 from "../../assets/images/Photos-wedding/Wedding_photos_13.jpg";
import photo14 from "../../assets/images/Photos-wedding/Wedding_photos_14.jpg";
import photo15 from "../../assets/images/Photos-wedding/Wedding_photos_15.jpg";
import photo16 from "../../assets/images/Photos-wedding/Wedding_photos_16.jpg";
import photo17 from "../../assets/images/Photos-wedding/Wedding_photos_17.jpg";
import photo18 from "../../assets/images/Photos-wedding/Wedding_photos_18.jpg";

import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/i18n";

// Define images array with proper imports
const images = [
  { src: photo14, title: "Wedding image" },
  { src: photo3, title: "Wedding image" },
  { src: photo17, title: "Wedding image" },
  { src: photo9, title: "Wedding image" },

  { src: photo10, title: "Wedding image" },
  { src: photo1, title: "Wedding image" },
  { src: photo5, title: "Wedding image" },
  { src: photo16, title: "Wedding image" },

  { src: photo11, title: "Wedding image" },
  { src: photo15, title: "Wedding image" },
  { src: photo18, title: "Wedding image" },
  { src: photo8, title: "Wedding image" },

  { src: photo2, title: "Wedding image" },
  { src: photo4, title: "Wedding image" },
  { src: photo7, title: "Wedding image" },
  { src: photo13, title: "Wedding image" },
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
