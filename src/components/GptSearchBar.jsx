import React, { useRef } from "react";
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import { API_OPTION } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSearchSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    const searchValue = searchText.current.value;

    const gptQuery =
      "Act as a Movie Recommendation Engine and suggest movies based on the user's input: " +
      searchValue +
      ". only provide the top 5 movies, comma separated. Example result: The Hangover,Superbad,Bridesmaids,Anchorman: The Legend of Ron Burgundy,Step Brothers";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!chatCompletion.choices) {
      // TODO: Handle error
    }

    const gptMoviesList =
      chatCompletion.choices?.[0].message?.content.split(",");

    const promiseMovieList = gptMoviesList.map((movie) =>
      searchMovieTMDB(movie)
    );

    const movieList = await Promise.all(promiseMovieList);

    dispatch(
      addGptMovieResult({ movieNames: gptMoviesList, movieResults: movieList })
    );
  };

  // search movie in TMDB
  const searchMovieTMDB = async (movieName) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const data = await response.json();
    return data.results;
  };

  return (
    <div className="w-1/2 relative left-[25%]">
      <form className="p-6 flex" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="border rounded-l-full p-4 border-purple-300 w-full"
          placeholder={language[langKey].watchToday}
        />
        <button
          className="border rounded-r-full border-l-0 text-lg py-4 px-8 bg-purple-300  text-black hover:bg-purple-500 hover:text-white"
          onClick={handleGptSearchClick}
        >
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
