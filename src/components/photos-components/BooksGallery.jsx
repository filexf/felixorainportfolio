import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useLanguage } from "../../context/LanguageContext";
import { t } from "../../i18n/i18n";

export default function Gallery({ title, images }) {
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="width-full flex justify-center pt-15">
      <div className="flex w-4/5 flex-col gap-10">
        <h2 className="text-gradient text-center text-6xl leading-normal font-bold md:text-7xl">
          {title}
        </h2>
        <p className="body-font mx-auto max-w-4xl text-center">
          {t("bookgallery.desc", language)}
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-[10px] overflow-hidden">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.title}
              className="thumbnail w-full [transition:all_0.2s] hover:scale-[0.97]"
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              } }
              style={{ cursor: "pointer", width: "250px", margin: "5px" }}
              loading="lazy" />
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={images.map((img) => ({ src: img.src, title: img.title }))}
          on={{
            view: ({ index }) => setCurrentIndex(index),
          }} />
      </div>
    </div>
  );
}
