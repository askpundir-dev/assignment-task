import { useState } from "react";
import QuestionMarkIcon from "./assets/questionmark.svg?react";
import "./RightWidget1.css";
function RightWidget1() {
  const [activeTab, setActiveTab] = useState("about-me");
  return (
    <div className="widget p-2 lg:p-3">
      <QuestionMarkIcon className="absolute top-3 left-2 lg:top-4 lg:left-3 w-4 h-auto lg:w-[22px] lg:h-auto" />
      <div className="tabs-container  font-['Poppins', sans-serif]">
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
    </div>
  );
}

export default RightWidget1;
