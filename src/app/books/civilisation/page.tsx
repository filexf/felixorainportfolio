"use client";

import BooksGallery from "../../../components/photos-components/BooksGallery";

interface GalleryImage {
  src: string;
  title: string;
}

const images: GalleryImage[] = [
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag3.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag4.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag5.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag6.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag11.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag13.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag15.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag18.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag22.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag23.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag27.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag30.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag32.jpg",
    title: "Civilisation",
  },
  {
    src: "/images/Photos-Magazine-Civilisation/Civilisation Mag33.jpg",
    title: "Civilisation",
  },
];

export default function CivilisationBook() {
  return (
    <>
      <BooksGallery title={"Civilisation"} images={images} />
    </>
  );
}
