import React from "react";
import { useSelector } from "react-redux";
import language from "../utils/languageConstants";

const VideoTitle = ({ title, overview }) => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="absolute md:pt-[20%] md:px-32 px-8 md:bg-gradient-to-r from-black text-white w-screen aspect-video mt-32 md:mt-0">
      <h1 className="text-md md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block md:text-xl py-6 w-1/2 font-light">{overview}</p>
      <div className="flex md:gap-6 gap-2 mt-2">
        <button className="bg-slate-100  text-black md:p-2 rounded-md md:w-36 md:h-16 md:text-xl hover:bg-gray-700 hover:text-white text-sm px-1 -py-1">
          ▶️ {language[langKey].play}
        </button>
        <button className="bg-gray-700 text-white p-2 rounded-md md:w-36 md:h-16 md:text-xl hover:bg-gray-900 bg-opacity-50">
          ⓘ {language[langKey].moreInfo}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
