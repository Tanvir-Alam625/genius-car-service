import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ data }) => {
  const navigate = useNavigate();
  const { name, img, description, price, _id } = data;

  return (
    <div className="border rounded-md  shadow">
      <img src={img} alt="service" className=" w-full rounded-t-md" />
      <div className="service-info text-left  p-4">
        <h1 className="text-3xl font-semibold text-gray-600 capitalize">
          {name}
        </h1>
        <p className="text-gray-600 text-xl my-3">
          Price: <span className="text-cyan-500">${price}</span>
        </p>
        <small className="text-gray-600 text-sm">{description}</small>
        <div className="btn">
          <button
            onClick={() => navigate(`/service/${_id}`)}
            className="border rounded my-2  px-8 py-2 shadow text-xl capitalize bg-cyan-500 text-gray-600 text-center"
          >
            get now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
