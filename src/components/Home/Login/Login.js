import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../../../images/google/google.png";
import Signup from "../Signup/Signup";
//login function handler
const Login = () => {
  // all use
  const emailRef = useRef("");
  const passwordRef = useRef("");
  // error state
  const [error, setError] = useState("");
  // form submit function handler
  const handleSubmitFunction = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };

  //@@@@@@@
  // jsx
  //@@@@@@@
  return (
    <div className="flex flex-col  items-center  my-8 md:my-12">
      {/* form section  */}
      <form
        onSubmit={handleSubmitFunction}
        className="md:w-2/3  lg:w-1/3 w-full mb-8 mt-8 border-2 shadow rounded-md px-2 md:px-8 py-4"
      >
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
        <p className="text-red-500 text-xl">{error}</p>
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
        <p className="text-red-500">{error}</p>
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
        <button className="p-2 text-center border-2 rounded-md capitalize text-xl text-white bg-cyan-600 hover:bg-cyan-400 duration-150 ease-in w-full mt-2">
          LogIn
        </button>
        <div className="sing-with-btn my-4 flex i w-full justify-around">
          <button
            className="px-2 py-2 lg:px-6 lg:py-8 justify-center h-12 text-center border-2 rounded-md capitalize  text-xl mb-2 flex  items-center  text-gray-600 w-full"
            title="Login with google"
          >
            <img
              src={GoogleIcon}
              alt="google"
              className="w-8 mr-4 capitalize"
            />
            Login with google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
