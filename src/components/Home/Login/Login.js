import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import GoogleIcon from "../../../images/google/google.png";
import PageTitle from "../../../PageTitle/PageTitle";
import Signup from "../Signup/Signup";
import "../Signup/Signup.css";
//login function handler
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  //google sign in
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [myError, setMyError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  // const google = new GoogleAuthProvider();
  const from = location.state?.from?.pathname || "/";

  //navigate
  if (user || userGoogle) {
    navigate(from, { replace: true });
  }
  // form submit function handler
  const handleSubmitFunction = (event) => {
    event.preventDefault();
    // const email = emailRef.current.value;
    // const password = passwordRef.current.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    if (error) {
      setMyError(error.message);
      return;
    }
    signInWithEmailAndPassword(email, password);
  };
  //@@@@@@@
  // jsx
  //@@@@@@@
  return (
    <div className="flex flex-col  items-center  my-8 md:my-12">
      <PageTitle title="Login" />
      {/* form section  */}
      <div className="md:w-2/3  lg:w-1/3 w-full mb-8 mt-8 border-2 shadow rounded-md px-2 md:px-8 py-4">
        <form onSubmit={handleSubmitFunction}>
          <h2 className="text-4xl mb-4 font-bold font-sans text-center text-cyan-500 capitalize">
            Login genius car
          </h2>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="py-2 border-2 rounded-md my-2 w-full px-2 "
            required
          />

          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            className="py-2 border-2 rounded-md  mb-2  w-full px-2"
            required
          />
          <p className="text-red-500 text-xl">{myError}</p>
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
        <p className="text-xl">
          Forget Password?{" "}
          <span
            className="text-cyan-500 cursor-pointer"
            onClick={() => navigate("/reset")}
          >
            Reset Password
          </span>
        </p>
        <div className="sing-with-btn my-4 flex i w-full justify-around">
          <button
            onClick={() => signInWithGoogle()}
            className="px-2 py-2 lg:px-6 lg:py-8  justify-center h-12 text-center border-2 rounded-md capitalize  text-xl mb-2 flex  items-center  text-gray-600 w-full"
            title="Login with google"
          >
            <img
              src={GoogleIcon}
              alt="google"
              className="w-8 mr-4 capitalize"
            />
            signup with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
