import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="-mt-[350px] relative z-10 bg-black secondary-container">
      {movies.nowPlayingMovies && (
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      )}
      {movies.topRatedMovies && (
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
      )}
      {movies.upcomingMovies && (
        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
      )}
      {movies.popularMovies && (
        <MovieList title="Popular" movies={movies.popularMovies} />
      )}
    </div>
  );
};

export default SecondaryContainer;
