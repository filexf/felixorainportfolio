import React from "react";

import BooksGallery from "../../components/photos-components/BooksGallery";

import photo1 from "../../assets/images/Photos-Magazine-Civilisation/Civilisation Mag3.jpg";
import photo2 from "../../assets/images/Photos-Magazine-Civilisation/Civilisation Mag4.jpg";
import photo3 from "../../assets/images/Photos-Magazine-Civilisation/Civilisation Mag5.jpg";
import photo4 from "../../assets/images/Photos-Magazine-Civilisation/Civilisation Mag6.jpg";
import photo5 from "../../assets/images/Photos-Magazine-Civilisation/Civilisation Mag11.jpg";
import photo6 from "../../assets/images/Photos-Magazine-Civilisation/Civilisation Mag13.jpg";
import photo7 from "../../assets/images/Photos-Magazine-Civilisation/Civilisation Mag15.jpg";
import photo8 from "../../assets/images/Photos-Magazine-Civilisation/Civilisation Mag18.jpg";
import photo9 from "../../assets/images/Photos-Magazine-Civilisation/Civilisation Mag22.jpg";
import photo10 from "../../assets/images/Photos-Magazine-Civilisation/Civilisation Mag23.jpg";
import photo11 from "../../assets/images/Photos-Magazine-Civilisation/Civilisation Mag27.jpg";
import photo12 from "../../assets/images/Photos-Magazine-Civilisation/Civilisation Mag30.jpg";
import photo13 from "../../assets/images/Photos-Magazine-Civilisation/Civilisation Mag32.jpg";
import photo14 from "../../assets/images/Photos-Magazine-Civilisation/Civilisation Mag33.jpg";

const images = [
  { src: photo1, title: "Civilisation" },
  { src: photo2, title: "Civilisation" },
  { src: photo3, title: "Civilisation" },
  { src: photo4, title: "Civilisation" },
  { src: photo5, title: "Civilisation" },
  { src: photo6, title: "Civilisation" },
  { src: photo7, title: "Civilisation" },
  { src: photo8, title: "Civilisation" },
  { src: photo9, title: "Civilisation" },
  { src: photo10, title: "Civilisation" },
  { src: photo11, title: "Civilisation" },
  { src: photo12, title: "Civilisation" },
  { src: photo13, title: "Civilisation" },
  { src: photo14, title: "Civilisation" },
];

export default function CivilisationBook() {
  return (
    <>
      <BooksGallery title={"Civilisation"} images={images} />
    </>
  );
}
