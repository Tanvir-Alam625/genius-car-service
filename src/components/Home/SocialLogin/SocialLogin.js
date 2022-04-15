import React from "react";
import auth from "../../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import GoogleIcon from "../../../images/google/google.png";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  //   if (user) {
  //     Navigate("/");
  //   }

  return (
    <>
      <p>{error}</p>
      <button
        onClick={() => signInWithGoogle()}
        className="px-2 py-2 lg:px-6 lg:py-8  justify-center h-12 text-center border-2 rounded-md capitalize  text-xl mb-2 flex  items-center  text-gray-600 w-full"
        title="Login with google"
      >
        <img src={GoogleIcon} alt="google" className="w-8 mr-4 capitalize" />
        signup with google
      </button>
    </>
  );
};

export default SocialLogin;
