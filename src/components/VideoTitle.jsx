import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-[20%] px-24 bg-gradient-to-r from-black text-white w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-xl py-6 w-1/3 font-light">{overview}</p>
      <div className="flex gap-6">
        <button className="bg-slate-100  text-black p-2 rounded-md w-36 h-16 text-xl hover:bg-gray-700 hover:text-white">
          ▶️ Play
        </button>
        <button className="bg-gray-700 text-white p-2 rounded-md w-36 h-16 text-xl hover:bg-gray-900 bg-opacity-50">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
