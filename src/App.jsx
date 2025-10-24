import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="border-[#96BEE7] border w-[50%] h-[80%] rounded-[27px] bg-[#616161]"></div>
      <div className="w-[43%] h-[81.8%] rounded-2xl flex flex-col items-center gap-3.5 relative top-[9px]">
        <div className="rounded-[14px] bg-linear-to-r from-[#4A4E54] to-[#363C43] w-full  h-[50%]"></div>
        <div className="h-[3px] bg-linear-to-r from-[#4A4E54] to-[#363C43] w-[85%] rounded-xs"></div>
        <div className="rounded-[14px] bg-linear-to-r from-[#4A4E54] to-[#363C43] w-full  h-[50%]"></div>
        <div className="h-[3px] bg-linear-to-r from-[#4A4E54] to-[#363C43] w-[85%] rounded-xs"></div>
      </div>
    </>
  );
}

export default App;
