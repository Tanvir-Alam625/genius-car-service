import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = "https://genius-car-service-625.onrender.com/service";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast("Service Data Added....!");
      });
  };

  return (
    <div className="flex justify-center min-h-screen w-full items-center flex-col px-2">
      <h2 className="text-4xl font-mono font-semibold my-6 text-blue-500 ">
        Add Service Items
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full  md:w-2/3 lg:w-1/3"
      >
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
          value="Add Service"
          className=" border-2 rounded-md shadow py-2 px-2 text-xl cursor-pointer  bg-blue-500 text-white hover:bg-blue-400 duration-200 ease-in-out font-semibold"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddService;
