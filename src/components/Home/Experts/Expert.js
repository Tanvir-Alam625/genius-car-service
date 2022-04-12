import React from "react";

const Expert = ({ data }) => {
  const { img, name } = data;
  return (
    <div className="border rounded-md shadow">
      <img src={img} alt="expert" className=" w-full rounded-t-md" />

      <div className="expert-info text-left p-4">
        <h1 className="text-3xl font-semibold text-gray-600 capitalize">
          {name}
        </h1>
        <button className="border rounded my-2  px-8 py-2 shadow text-xl capitalize bg-cyan-500 text-gray-600 text-center">
          about now
        </button>
      </div>
    </div>
  );
};

export default Expert;
