import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import React from "react";
import useServices from "../../hooks/useServices";

const Manage = () => {
  const [services, setServices] = useServices();
  return (
    <div className="w-full md:w-2/3 border-2 mx-auto p-2 md:p-4">
      <h1 className="text-5xl text-center font-semibold font-mono my-5">
        Admin Panel
      </h1>

      {services.map((service) => (
        <div className="flex justify-between p-2 shadow-md mb-4 items-center">
          <img src={service.img} className="h-8" alt="service-img" />
          <h5 className="font-semibold ">{service.name}</h5>
          <div className="mng-item">
            <button>
              <PencilAltIcon className="h-6 w-6 hover:text-green-500 mr-4" />
            </button>
            <button>
              <TrashIcon className="h-6 w-6 hover:text-red-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Manage;
