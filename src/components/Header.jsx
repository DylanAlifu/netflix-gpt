import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_IMG, SUPPORTED_LANGUAGES } from "../utils/constants";
import {
  addGptMovieResult,
  toggleGptSearchView,
} from "../utils/gptSearchSlice";
import language from "../utils/languageConstants";
import { setLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const langKey = useSelector((store) => store.config.lang);
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Clean up subscription on unmount of component
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());

    if (showGptSearch) {
      dispatch(addGptMovieResult({}));
    }
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    dispatch(setLanguage(selectedLanguage));
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex items-center justify-between">
      <img className="w-44" src={LOGO_IMG} alt="logo" />

      {user && (
        <div className="flex gap-4">
          {!showGptSearch && (
            <select
              className="bg-black text-gray-400 border border-gray-500 p-2 rounded leading-tight focus:outline-none"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option key={language.identifier} value={language.identifier}>
                  {language.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="bg-purple-600 text-white py-2 px-4 mr-8 w-32 rounded-md hover:bg-purple-900"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : language[langKey].gptSearch}
          </button>
          <img
            src={user?.photoURL}
            alt="user-icon"
            className="w-12 h-fit rounded-full"
          />
          <button
            className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-900 bg-opacity-50"
            onClick={handleSignOut}
          >
            {language[langKey].signOut}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
