import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/movieSlice";

const useMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !nowPlayingMovies ||
      !popularMovies ||
      !topRatedMovies ||
      !upcomingMovies
    ) {
      getMovies("now_playing", addNowPlayingMovies);
      getMovies("popular", addPopularMovies);
      getMovies("top_rated", addTopRatedMovies);
      getMovies("upcoming", addUpcomingMovies);
    }
  }, []);

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getMovies = async (type, action) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`,
      API_OPTION
    );

    const data = await response.json();
    dispatch(action(data.results));
  };
};

export default useMovies;
