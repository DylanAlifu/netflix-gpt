import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addMovieTrailer } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const movieTrailer = useSelector((store) => store.movies.movieTrailer);

  useEffect(() => {
    !movieTrailer && getMovieTrailers();
  }, []);

  const getMovieTrailers = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTION
    );
    const data = await response.json();

    const trailer = data.results.filter((video) => video.type === "Trailer")[0];
    dispatch(addMovieTrailer(trailer));
  };
};

export default useMovieTrailer;
