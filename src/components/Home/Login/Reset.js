import React from "react";

const Reset = () => {
  return (
    <div className="h-full w-full flex justify-center items-center my-12">
      <form className="md:w-2/3  lg:w-1/3 w-full p-8  shadow  flex items-start flex-col">
        <h2 className="text-4xl mb-4 font-bold font-sans text-center text-cyan-500 capitalize">
          Enter Your Email
        </h2>
        <input
          // ref={emailRef}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="py-2 border-2 rounded-md my-2 w-full px-2  text-xl"
          required
        />
        <button className="cursor-pointer text-white px-6 py-2 mt-6 rounded-md bg-cyan-600 font-semibold  ">
          Reset
        </button>
      </form>
    </div>
  );
};

export default Reset;
