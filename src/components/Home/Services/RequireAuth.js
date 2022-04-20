import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading) {
    return (
      <p className="text-2xl md:text-6xl text-cyan-500 my-28"> Loading......</p>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return (
      <div className="min-h-screen w-full  flex flex-col  justify-center items-center">
        <h2 className="text-2xl text-red-500 font-bold mb-4 ">
          Your Email is not Verified{" "}
        </h2>
        <p className="capitalize text-xl text-green-500 font-semibold mb-4">
          Please verify your email
        </p>
        <button
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
          className="py-2 px-8 bg-blue-500 rounded-md text-white text-xl  capitalize"
        >
          send Email verification{" "}
        </button>
        <ToastContainer />
      </div>
    );
  }
  return children;
};

export default RequireAuth;
