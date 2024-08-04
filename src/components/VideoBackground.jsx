import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store?.movies?.movieTrailer);
  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${trailer?.key}?showinfo=0&autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        referrerPolicy="strict-origin-when-cross-origin"
        className="w-screen aspect-video"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
