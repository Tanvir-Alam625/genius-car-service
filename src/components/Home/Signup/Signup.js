import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleIcon from "../../../images/google/google.png";
import Login from "../Login/Login";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Signup.css";
import SocialLogin from "../SocialLogin/SocialLogin";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
//login function handler
const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [condition, setCondition] = useState(false);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //navigate
  if (user || userGoogle) {
    navigate(from, { replace: true });
  }
  // form submit function handler
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const cPassword = event.target.cPassword.value;
    console.log(name, email, password, cPassword);
    if (password !== cPassword) {
      setPasswordError("your password not match!");
      return;
    }
    setPasswordError("");
    createUserWithEmailAndPassword(email, password);
  };

  //@@@@@@@
  // jsx
  //@@@@@@@
  return (
    <div className="flex flex-col  items-center mx-2  my-8 md:my-12">
      {/* form section  */}
      <div className="md:w-2/3  lg:w-1/3 w-full mb-8 mt-8 border-2 shadow rounded-md px-2 md:px-8 py-4">
        <form onSubmit={handleSubmitForm}>
          <h2 className="text-4xl mb-4 font-bold font-sans text-center text-cyan-500 capitalize">
            Sign Up genius car
          </h2>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Full Name"
            className="py-2 border-2 rounded-md my-2 w-full px-2 "
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="py-2 border-2 rounded-md my-2 w-full px-2 "
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="py-2 border-2 rounded-md my-2 w-full px-2 "
            required
          />
          <br />
          <input
            type="password"
            name="cPassword"
            placeholder="Confirm Password"
            id="cPassword"
            className="py-2 border-2 rounded-md  mb-2  w-full px-2"
            required
          />
          <div className="condition flex justify-start items-center my-2">
            <input
              type="checkbox"
              name="trams"
              id="condition"
              onClick={() => setCondition(!condition)}
              className="mr-2"
            />
            <label
              htmlFor="condition"
              className={`text-sm ${
                condition ? "text-cyan-500" : "text-red-400"
              }`}
            >
              Accept Genius Car trams and condition
            </label>
          </div>
          <p className="text-red-500">
            {error} {passwordError} {errorGoogle}
          </p>
          <div className="link flex justify-start">
            <p>
              Already SignUp?
              <Link
                to="/login"
                className="cursor-pointer text-cyan-600 font-semibold  "
                element={<Login />}
              >
                Login
              </Link>
            </p>
          </div>

          <button
            type="submit"
            // disabled={!condition}
            disabled={loading || !condition ? true : false}
            className={`p-2 text-center border-2 bg-cyan-600  flex justify-center rounded-md capitalize text-xl text-white   duration-150 ease-in w-full mt-2 ${
              condition
                ? "bg-cyan-600 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {loading ? <div className="loader h-8"></div> : <p>Sign Up</p>}
          </button>
        </form>
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

export default Signup;
