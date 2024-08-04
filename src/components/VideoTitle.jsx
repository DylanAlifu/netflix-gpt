import React from "react";
import { useSelector } from "react-redux";
import language from "../utils/languageConstants";

const VideoTitle = ({ title, overview }) => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="absolute pt-[20%] px-32 bg-gradient-to-r from-black text-white w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-xl py-6 w-1/2 font-light">{overview}</p>
      <div className="flex gap-6">
        <button className="bg-slate-100  text-black p-2 rounded-md w-36 h-16 text-xl hover:bg-gray-700 hover:text-white">
          ▶️ {language[langKey].play}
        </button>
        <button className="bg-gray-700 text-white p-2 rounded-md w-36 h-16 text-xl hover:bg-gray-900 bg-opacity-50">
          ⓘ {language[langKey].moreInfo}
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
