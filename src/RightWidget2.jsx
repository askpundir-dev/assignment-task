import QuestionMarkIcon from "./assets/questionmark.svg?react";
import PreviousImageIcon from "./assets/previous-image-icon.svg?react";
import NextImageIcon from "./assets/next-image-icon.svg?react";
import GridLayoutIcon from "./GridLayoutIcon";
import "./RightWidget2.css";
export default function RightWidget2() {
  return (
    <div className="widget pt-2 px-2 pb-[17px] relative flex flex-col gap-4">
      <QuestionMarkIcon className="absolute top-3 left-2 lg:top-4 lg:left-3 w-4 h-auto lg:w-[22px] lg:h-auto" />

      <div className="widget2-tabs-container relative">
        <div className="gallery">Gallery</div>
        <div className="flex w-[46%] justify-between items-center gap-3">
          <div className="w-1/2">
            <button className="add-image flex-1">+ ADD IMAGE</button>
          </div>
          <div className="button-container flex w-1/2  justify-center gap-3">
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
    </div>
  );
}
