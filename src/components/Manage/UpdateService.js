import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const UpdateService = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const onSubmit = (data) => {
    const url = `https://genius-car-service-625.onrender.com/service/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast("One data Update successfully..!");
      });
  };
  return (
    <div className="min-h-screen w-full md:w-2/3 lg:w-1/3 px-2 mx-auto flex flex-col justify-center items-center ">
      <h2 className="capitalize text-5xl text-blue-500 text-center my-5">
        Update Your item
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full ">
        <input
          placeholder="Name"
          className="mb-2 border-2 rounded-md shadow py-2 px-2 text-xl"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          placeholder="Description"
          className="mb-2 py-2 px-2 border-2 rounded-md shadow text-xl"
          {...register("description")}
        />
        <input
          placeholder="Price"
          className="mb-2 border-2 rounded-md py-2 px-2 shadow text-xl"
          type="number"
          {...register("price")}
        />
        <input
          placeholder="PhotoURL"
          className="mb-2 border-2 rounded-md py-2 px-2 shadow text-xl"
          type="text"
          {...register("img")}
        />
        <input
          type="submit"
          value="Update Service"
          className=" border-2 rounded-md shadow py-2 px-2 text-xl cursor-pointer bg-blue-500 text-white hover:bg-blue-400 duration-200 ease-in-out font-semibold"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateService;
