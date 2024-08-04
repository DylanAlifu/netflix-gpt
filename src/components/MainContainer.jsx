import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {

  const nowPlayingMoviesData = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  const getRandomMovie = (movies) => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  };

  if (!nowPlayingMoviesData) return;

  const mainMovie = getRandomMovie(nowPlayingMoviesData);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative scroll pt-[30%] md:pt-0 bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
