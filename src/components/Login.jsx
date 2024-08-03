import React, { useEffect, useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isSignInForm]);

  const toggleSignForm = () => {
    setIsSignInForm((prev) => !prev);
  };

  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute w-full h-full">
        <img
          className="w-full h-full object-cover brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/f5a613af-ff99-444d-8305-e4cecd6d6cf6/US-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_591dffe8-33f4-4fb4-a734-9ff362a96145_large.jpg"
          alt="background-image"
        />
      </div>

      <form
        action=""
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 bg-[rgba(0,0,0,0.7)] w-3/12 h-4/6 opacity-100 flex flex-col rounded-lg"
      >
        <h1 className="font-semibold text-4xl text-white m-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 m-4 -mb-1 bg-inherit border border-gray-400 rounded-md text-white"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-4 m-4 -mb-1 bg-inherit border border-gray-400 rounded-md text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-4 m-4 bg-inherit border border-gray-400 rounded-md text-white"
        />
        <button className="p-4 m-4 text-white bg-red-700 rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-lg text-gray-400 text-center my-4">OR</p>

        <div className="m-4 flex flex-col gap-8">
          <div className="flex gap-2 items-center">
            <p className="text-gray-400 text-xl">
              {isSignInForm ? "New to Netflix?" : "Already have an account?"}
            </p>
            <button
              type="button"
              className="text-white text-xl"
              onClick={toggleSignForm}
            >
              {isSignInForm ? "Sign up now." : "Sign in now."}
            </button>
          </div>
          <p className="text-gray-400">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <a href="/" className="text-blue-600">
              Learn more.
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
