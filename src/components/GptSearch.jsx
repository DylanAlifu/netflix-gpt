import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
        <div className="fixed w-full h-full">
          <img
            className="w-full h-full object-cover brightness-50"
            src={BACKGROUND_IMG}
            alt="background-image"
          />
        </div>
        <div className="z-10 absolute w-full top-[15%]">
          <GptSearchBar />
          <GptMovieSuggestion />
        </div>
      </div>
  );
};

export default GptSearch;
