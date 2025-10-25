// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import RightWidget1 from "./RightWidget1";
import RightWidget2 from "./RightWidget2";
import "./App.css";

function App() {
  return (
    <>
      {/* Left widget */}
      <div className="border-[#96bee7] border w-[50%] h-[80%] rounded-[27px] bg-[#616161d1]"></div>

      {/* Right widgets container */}
      <div className="w-[43%] h-[80%] rounded-2xl flex flex-col items-center justify-between relative">
        <RightWidget1 />

        {/* Widget separator-1 */}
        <div className="widget-separator"></div>

        <RightWidget2 />

        {/* Widget separator-2 */}
        <div className="widget-separator absolute -bottom-6 left-1/2 -translate-x-1/2"></div>
      </div>
    </>
  );
}

export default App;
