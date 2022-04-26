import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import useServices from "../../hooks/useServices";

const Manage = () => {
  const [services, setServices] = useServices();
  const navigate = useNavigate();
  const handleDeleteBtn = (id) => {
    const Proceed = window.confirm("Are Your Sure.?");
    if (Proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast("One service data successfully delete..!");
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  const handleUpdateBtn = (id) => {
    navigate(`/update/${id}`);
  };
  return (
    <div className="w-full md:w-2/3 border-2 mx-auto p-2 md:p-4 rounded-md">
      <h1 className="text-5xl text-center font-semibold font-mono my-5">
        Admin Panel
      </h1>

      {services.map((service) => (
        <div
          key={service._id}
          className="flex justify-between p-2 shadow-md mb-4 items-center rounded"
        >
          <div className="img">
            <img src={service.img} className="h-8 rounded" alt="service-img" />
            <small className="text-sm text-green-500">${service.price}</small>
          </div>
          <h5 className="font-semibold ">{service.name}</h5>
          <div className="mng-item">
            <button onClick={() => handleUpdateBtn(service._id)}>
              <PencilAltIcon className="h-6 w-6 hover:text-green-500 mr-4" />
            </button>
            <button onClick={() => handleDeleteBtn(service._id)}>
              <TrashIcon className="h-6 w-6 hover:text-red-500" />
            </button>
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default Manage;
