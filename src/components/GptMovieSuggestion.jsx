import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gptSearch);

  if (!movieNames || !movieResults) {
    return null;
  }

  return (
    <div className="w-full md:p-12 p-4 bg-black bg-opacity-80">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={index}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
