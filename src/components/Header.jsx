import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_IMG } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

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

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex items-center justify-between">
      <img className="w-44" src={LOGO_IMG} alt="logo" />

      {user && (
        <div className="flex gap-4">
          <img
            src={user?.photoURL}
            alt="user-icon"
            className="w-12 h-fit rounded-lg"
          />
          <button
            className="border-black border-2 text-white font-bold rounded-lg p-2 hover:bg-black hover:text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
