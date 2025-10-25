import { useState } from "react";
import QuestionMarkIcon from "./assets/questionmark.svg?react";
import GridLayoutIcon from "./GridLayoutIcon";
import AboutMe from "./AboutMe";
import Experiences from "./Experiences";
import Recommended from "./Recommended";
import "./RightWidget1.css";

function RightWidget1() {
  const [activeTab, setActiveTab] = useState("about-me");

  return (
    <div className="widget pt-2 px-2 pb-[17px] relative flex flex-col gap-4">
      <QuestionMarkIcon className="absolute top-3 left-2 lg:top-4 lg:left-3 w-4 h-auto lg:w-[22px] lg:h-auto" />

      <div className="tabs-container font-['Poppins', sans-serif] relative">
        {/*Moving Active Background Indicator */}
        <div
          className="active-indicator"
          style={{
            transform:
              activeTab === "about-me"
                ? "translateX(0%)"
                : activeTab === "experiences"
                ? "translateX(100%)"
                : "translateX(200%)",
          }}
        ></div>

        {/* Tabs */}
        <button
          className={`tab ${activeTab === "about-me" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("about-me")}
        >
          <span>About Me</span>
        </button>

        <button
          className={`tab ${activeTab === "experiences" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("experiences")}
        >
          <span>Experiences</span>
        </button>

        <button
          className={`tab ${activeTab === "recommended" ? "active-tab" : ""}`}
          onClick={() => setActiveTab("recommended")}
        >
          <span>Recommended</span>
        </button>
      </div>
      <GridLayoutIcon />
      {activeTab === "about-me" ? (
        <AboutMe />
      ) : activeTab === "experiences" ? (
        <Experiences />
      ) : (
        <Recommended />
      )}
    </div>
  );
}

export default RightWidget1;
