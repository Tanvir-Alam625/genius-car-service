import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useServiceDetail from "../../../hooks/useServiceDetail";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const { service } = useServiceDetail(serviceId);
  const navigate = useNavigate();
  return (
    <div className="my-12 min-h-screen">
      <h1 className="text-6xl">The details{service.name}</h1>
      <button
        onClick={() => navigate(`/checkout/${serviceId}`)}
        className="py-2 px-8 text-center border-2  rounded-md capitalize text-xl text-white bg-cyan-600 hover:bg-cyan-400 duration-150 ease-in mt-2"
      >
        Checkout Proceed
      </button>
    </div>
  );
};

export default ServiceDetails;
