import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const User = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="absolute flex flex-col justify-between w-[300px] h-[500px] bg-cyan-500 p-4 right-2 top-16 rounded-md">
      <div className="info">
        <h2 className="tex-1xl font-sans font-semibold text-white my-6">
          Email: {user?.email}
        </h2>
      </div>
      <button
        onClick={() => signOut(auth)}
        className="p-2  mt-4 text-center border rounded-md capitalize text-xl text-white"
      >
        SignOut
      </button>
    </div>
  );
};

export default User;
