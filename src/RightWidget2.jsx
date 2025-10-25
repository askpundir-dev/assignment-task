import { useState } from "react";
import QuestionMarkIcon from "./assets/questionmark.svg?react";
import PreviousImageIcon from "./assets/previous-image-icon.svg?react";
import NextImageIcon from "./assets/next-image-icon.svg?react";
import GridLayoutIcon from "./GridLayoutIcon";
import ImageCard from "./ImageCard";
import "./RightWidget2.css";
export default function RightWidget2() {
  const [images, setImages] = useState([
    {
      src: "bicycle-flowers-field.avif",
      alt: "bicycle-flowers-field",
    },
    {
      src: "snow-forest-evening.avif",
      alt: "snow-forest-evening",
    },
    {
      src: "roses.avif",
      alt: "rose bouquet",
    },
    {
      src: "roses.avif",
      alt: "rose bouquet",
    },
  ]);

  console.log(images);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImages((prev) => [...prev, { src: url, alt: file.name }]);
    }
  };

  return (
    <div className="widget pt-2 px-2 pb-[17px] relative flex flex-col gap-4 overflow-hidden">
      <QuestionMarkIcon className="absolute top-3 left-2 lg:top-4 lg:left-3 w-4 h-auto lg:w-[22px] lg:h-auto" />

      <div className="widget2-tabs-container relative">
        <div className="gallery">Gallery</div>
        <div className="flex w-[55%] xl:w-[46%] justify-between items-center gap-1.5 xl:gap-3">
          <div className="w-1/2">
            <label
              htmlFor="image-input"
              className="add-image flex-1 inline-block "
            >
              + ADD IMAGE
            </label>
            <input
              hidden
              id="image-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            ></input>
          </div>
          <div className="button-container flex w-1/2  justify-center gap-2 xl:gap-3">
            <button className="gallery-navigation-btns rounded-full">
              <PreviousImageIcon />
            </button>
            <button className="gallery-navigation-btns rounded-full">
              <NextImageIcon />
            </button>
          </div>
        </div>
      </div>

      <GridLayoutIcon />
      <div className="image-flex-container flex w-[90%] h-[70%] justify-center items-end ml-7 2xl:mx-auto gap-2  2xl:gap-3 flex-1">
        {images.length > 0 &&
          images.map((img, index) => (
            <ImageCard key={index} src={img.src} alt={img.alt} />
          ))}
      </div>
    </div>
  );
}
