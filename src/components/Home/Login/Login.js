import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useRef, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import GoogleIcon from "../../../images/google/google.png";
import Signup from "../Signup/Signup";
import "../Signup/Signup.css";
//login function handler
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  // all use
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const google = new GoogleAuthProvider();
  const from = location.state?.from?.pathname || "/";

  //navigate
  if (user) {
    navigate(from, { replace: true });
  }
  const handleGoogle = () => {
    signInWithPopup(auth, google)
      .then((result) => {
        const user = result.user;
        console.log(user.photoURL);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // form submit function handler
  const handleSubmitFunction = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    if (error) {
      return;
    }
    signInWithEmailAndPassword(email, password);
  };

  //@@@@@@@
  // jsx
  //@@@@@@@
  return (
    <div className="flex flex-col  items-center  my-8 md:my-12">
      {/* form section  */}
      <div className="md:w-2/3  lg:w-1/3 w-full mb-8 mt-8 border-2 shadow rounded-md px-2 md:px-8 py-4">
        <form onSubmit={handleSubmitFunction}>
          <h2 className="text-4xl mb-4 font-bold font-sans text-center text-cyan-300 capitalize">
            Login genius car
          </h2>
          <input
            ref={emailRef}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="py-2 border-2 rounded-md my-2 w-full px-2 "
            required
          />

          <br />
          <input
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            className="py-2 border-2 rounded-md  mb-2  w-full px-2"
            required
          />
          <p className="text-red-500 text-xl">{error && error}</p>
          <div className="link flex justify-start">
            <p>
              New to Genius Car?
              <Link
                to="/signup"
                className="cursor-pointer text-cyan-600 font-semibold  "
                element={<Signup />}
              >
                Sign Up
              </Link>
            </p>
          </div>
          <button
            type="submit"
            className="p-2 text-center border-2 flex justify-center rounded-md capitalize text-xl text-white bg-cyan-600 hover:bg-cyan-400 duration-150 ease-in w-full mt-2"
          >
            {loading ? <div className="loader h-8"></div> : <p>LogIn</p>}
          </button>
        </form>
        <div className="sing-with-btn my-4 flex i w-full justify-around">
          <button
            className="px-2 py-2 lg:px-6 lg:py-8 justify-center h-12 text-center border-2 rounded-md capitalize  text-xl mb-2 flex  items-center  text-gray-600 w-full"
            title="Login with google"
            onClick={handleGoogle}
          >
            <img
              src={GoogleIcon}
              alt="google"
              className="w-8 mr-4 capitalize"
            />
            Login with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
