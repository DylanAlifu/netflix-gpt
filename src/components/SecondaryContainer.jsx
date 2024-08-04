import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import language from "../utils/languageConstants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="bg-black w-screen">
      <div className="md:-mt-[340px] relative z-10 md:px-16">
        {movies.nowPlayingMovies && (
          <MovieList title={language[langKey].nowPlaying} movies={movies.nowPlayingMovies} />
        )}
        {movies.topRatedMovies && (
          <MovieList title={language[langKey].topRated} movies={movies.topRatedMovies} />
        )}
        {movies.upcomingMovies && (
          <MovieList title={language[langKey].upComing} movies={movies.upcomingMovies} />
        )}
        {movies.popularMovies && (
          <MovieList title={language[langKey].popular} movies={movies.popularMovies} />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
