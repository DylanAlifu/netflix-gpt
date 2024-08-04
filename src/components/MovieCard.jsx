import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) {
    return null;
  } 
  
  return (
    <div className="w-32 md:w-48">
      <img
        src={IMAGE_CDN_URL + posterPath}
        alt="movie card"
        className="rounded-lg"
      />
    </div>
  );
};

export default MovieCard;
