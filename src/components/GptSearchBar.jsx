import React from "react";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div>
      <form className="p-6 flex">
        <input
          type="text"
          className="border rounded-l-full p-4 border-purple-300 w-full"
          placeholder={language[langKey].watchToday}
        />
        <button className="border rounded-r-full border-l-0 text-lg py-4 px-8 bg-purple-300  text-black hover:bg-purple-500 hover:text-white">
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
