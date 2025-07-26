import React from "react";

import BooksGallery from "../../components/photos-components/BooksGallery";

import photo1 from "../../assets/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION3.jpg";
import photo2 from "../../assets/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION5.jpg";
import photo3 from "../../assets/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION6.jpg";
import photo4 from "../../assets/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION10.jpg";
import photo5 from "../../assets/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION12.jpg";
import photo6 from "../../assets/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION14.jpg";
import photo7 from "../../assets/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION17.jpg";
import photo8 from "../../assets/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION20.jpg";
import photo9 from "../../assets/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION21.jpg";
import photo10 from "../../assets/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION30.jpg";
import photo11 from "../../assets/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION33.jpg";
import photo12 from "../../assets/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION37.jpg";
import photo13 from "../../assets/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION43.jpg";
import photo14 from "../../assets/images/Photos-Magazine-Wizzy-en-asie/WIZZY En Asie BONNE VERSION48.jpg";


const images = [
  { src: photo1, title: "Wizzy en Asie" },
  { src: photo2, title: "Wizzy en Asie" },
  { src: photo3, title: "Wizzy en Asie" },
  { src: photo4, title: "Wizzy en Asie" },
  { src: photo5, title: "Wizzy en Asie" },
  { src: photo6, title: "Wizzy en Asie" },
  { src: photo7, title: "Wizzy en Asie" },
  { src: photo8, title: "Wizzy en Asie" },
  { src: photo9, title: "Wizzy en Asie" },
  { src: photo10, title: "Wizzy en Asie" },
  { src: photo11, title: "Wizzy en Asie" },
  { src: photo12, title: "Wizzy en Asie" },
  { src: photo13, title: "Wizzy en Asie" },
  { src: photo14, title: "Wizzy en Asie" },
];

export default function WizzyEnAsieBook() {
  return (
    <>
      <BooksGallery title={"Wizzy en Asie"} images={images} />
    </>
  );
}
