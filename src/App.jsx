// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      {/* Left widget */}
      <div className="border-[#96bee7] border w-[50%] h-[80%] rounded-[27px] bg-[#616161d1]"></div>

      {/* Right widgets container */}
      <div className="w-[43%] h-[82.3%] rounded-2xl flex flex-col items-center gap-[17px] relative top-2.5">
        {/* Right widget-1*/}
        <div className="widget"></div>

        {/* Widget separator-1 */}
        <div className="widget-separator"></div>

        {/* Right widget-2*/}
        <div className="widget"></div>

        {/* Widget separator-2 */}
        <div className="widget-separator"></div>
      </div>
    </>
  );
}

export default App;
