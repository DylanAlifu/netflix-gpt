import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { checkValidationData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMG, GITHUB_AVATAR, PROFILE_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isSignInForm]);

  const toggleSignForm = () => {
    setIsSignInForm((prev) => !prev);
    setErrorMessage("");
  };

  const handleButtonClick = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const error = checkValidationData(email, password);
    setErrorMessage(error);
    if (error) return;

    try {
      if (isSignInForm) {
        // Sign in logic
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        setEmail("");
        setPassword("");
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: PROFILE_AVATAR,
          })
        );
      } else {
        // Sign up logic
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: nameRef.current.value,
          photoURL: PROFILE_AVATAR,
        });
        setUsername("");
        setEmail("");
        setPassword("");
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      }
    } catch (error) {
      setErrorMessage(`${error.code} - ${error.message}`);
    }
  };

  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute w-full h-full">
        <img
          className="w-full h-full object-cover brightness-50"
          src={BACKGROUND_IMG}
          alt="background-image"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-[460px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:p-12 p-10 bg-[rgba(0,0,0,0.7)] md:w-[480px] md:h-[740px] opacity-100 flex flex-col rounded-lg gap-2"
      >
        <h1 className="font-semibold md:text-4xl text-xl text-white m-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="p-4 md:m-4 md:-mb-1 bg-inherit border border-gray-400  rounded-md text-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`p-4 md:m-4 md:-mb-1 bg-inherit border border-gray-400 ${
            errorMessage && "border-red-600"
          } rounded-md text-white`}
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-4 md:m-4 bg-inherit border border-gray-400 rounded-md text-white"
        />
        {errorMessage && (
          <p className="text-red-600 mx-4 p-2">❌ {errorMessage}</p>
        )}

        <button
          className="p-4 md:m-4 text-white bg-red-700 rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="md:text-lg text-gray-400 text-center my-4">OR</p>

        <div className="m-4 flex flex-col gap-8">
          <div className="flex gap-2 items-center">
            <p className="text-gray-400 md:text-xl text-md">
              {isSignInForm ? "New to Netflix?" : "Already have an account?"}
            </p>
            <button
              type="button"
              className="text-white md:text-xl"
              onClick={toggleSignForm}
            >
              {isSignInForm ? "Sign up now." : "Sign in now."}
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            This page is my personal project and for practice purposes only.
            <a href="/" className="text-blue-600 ml-2">
              Learn more.
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
