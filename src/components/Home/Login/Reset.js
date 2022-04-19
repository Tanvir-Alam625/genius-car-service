import React, { useRef, useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../../../PageTitle/PageTitle";

const Reset = () => {
  const emailRef = useRef("");
  const [message, setMessage] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  if (error) {
    setMessage(error.code);
  }
  const handleResetPass = async (event) => {
    const email = emailRef.current.value;
    event.preventDefault();
    await sendPasswordResetEmail(email);
    toast("Check Your Email");
  };
  //   if (sending) {
  //     Navigate("/login");
  //   }

  return (
    <div className="h-full w-full flex justify-center items-center my-12">
      <PageTitle title="Reset Password" />
      <form
        onSubmit={handleResetPass}
        className="md:w-2/3  lg:w-1/3 w-full p-8  shadow  flex items-start flex-col"
      >
        <h2 className="text-4xl mb-4 font-bold font-sans text-center text-cyan-500 capitalize">
          Enter Your Email
        </h2>
        <input
          ref={emailRef}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="py-2 border-2 rounded-md my-2 w-full px-2  text-xl"
          required
        />
        <button
          type="submit"
          className="cursor-pointer text-white px-6 py-2 mt-6 rounded-md bg-cyan-600 font-semibold  "
        >
          Reset
        </button>
        <p className="text-xl text-cyan-500 font-semibold">{message}</p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Reset;
