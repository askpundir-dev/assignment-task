import QuestionMarkIcon from "./assets/questionmark.svg?react";
import PreviousImageIcon from "./assets/previous-image-icon.svg?react";
import NextImageIcon from "./assets/next-image-icon.svg?react";
import GridLayoutIcon from "./GridLayoutIcon";
import "./RightWidget2.css";
export default function RightWidget2() {
  return (
    <div className="widget pt-2 px-2 pb-[17px] relative flex flex-col gap-4 overflow-hidden">
      <QuestionMarkIcon className="absolute top-3 left-2 lg:top-4 lg:left-3 w-4 h-auto lg:w-[22px] lg:h-auto" />

      <div className="widget2-tabs-container relative">
        <div className="gallery">Gallery</div>
        <div className="flex w-[55%] xl:w-[46%] justify-between items-center gap-1.5 xl:gap-3">
          <div className="w-1/2">
            <button className="add-image flex-1">+ ADD IMAGE</button>
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
      <div className="image-flex-container flex w-[90%] h-[80%] justify-center items-end ml-7 2xl:mx-auto gap-2  2xl:gap-3">
        <div className="image-container h-[90%] w-1/3 rounded-3xl grayscale-100 hover:grayscale-0 transition-all duration-300 ease-in-out hover:scale-[1.1] hover:-rotate-1 hover:-translate-1 hover:shadow-[-5px_-3px_30px_-10px_#96bee7,4px_5px_30px_5px_#000000]">
          <img
            className="w-full h-full rounded-3xl object-cover object-center"
            src="all-black-nice-car.avif"
            alt=""
          />
        </div>
        <div className="image-container h-[90%] w-1/3 rounded-3xl grayscale-100 hover:grayscale-0 transition-all duration-300 ease-in-out hover:scale-[1.1] hover:-rotate-1 hover:-translate-1 hover:shadow-[-5px_-3px_30px_-10px_#96bee7,4px_5px_30px_5px_#000000]">
          <img
            className="w-full h-full rounded-3xl object-cover object-center"
            src="all-black-nice-car.avif"
            alt=""
          />
        </div>
        <div className="image-container h-[90%] w-1/3 rounded-3xl grayscale-100 hover:grayscale-0 transition-all duration-300 ease-in-out hover:scale-[1.1] hover:-rotate-1 hover:-translate-1 hover:shadow-[-5px_-3px_30px_-10px_#96bee7,4px_5px_30px_5px_#000000]">
          <img
            className="w-full h-full rounded-3xl object-cover object-center"
            src="all-black-nice-car.avif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

// <div className="border h-full w-1/3 rounded-3xl bg-[linear-gradient(0deg,rgba(0_0_0_0.2),rgba(0_0_0_0.2))]"></div>
