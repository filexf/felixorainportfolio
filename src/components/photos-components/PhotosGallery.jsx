import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = ({ title, images, text }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex w-full justify-center pt-[40px] pb-[120px]">
      <div className="flex w-4/5 flex-col gap-[40px]">
        <h2 className="text-center text-6xl font-bold leading-normal md:text-7xl text-gradient">
          {title}
        </h2>
        <p className="body-font mx-auto max-w-4xl text-center">{text}</p>

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
              }}
              style={{ cursor: "pointer", width: "250px", margin: "5px" }}
              loading="lazy"
            />
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={images.map((img) => ({ src: img.src, title: img.title }))}
          on={{
            view: ({ index }) => setCurrentIndex(index),
          }}
        />
      </div>
    </div>
  );
};

export default Gallery;
