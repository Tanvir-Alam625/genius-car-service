import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

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
        <input
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
          className=" border-2 rounded-md shadow py-2 px-2 text-xl cursor-pointer text-blue-500 font-semibold"
        />
      </form>
    </div>
  );
};

export default AddService;
