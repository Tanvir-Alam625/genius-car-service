import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useServiceDetail from "../../../hooks/useServiceDetail";
import PageTitle from "../../../PageTitle/PageTitle";

const Checkout = () => {
  const [user] = useAuthState(auth);
  const { serviceId } = useParams();
  const { service } = useServiceDetail(serviceId);
  /// form handle submit data
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios.post("https://genius-car-service-625.onrender.com/order", order).then((response) => {
      const { data } = response;
      if (data.insertedId) {
        toast("Thank You Your Order booked...!❤");
      }
    });
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <PageTitle title="Checkout" />
      <h2 className="text-7xl">This is checkout: {service.name} </h2>
      <div className="form md:w-2/3  lg:w-1/3 w-full">
        <form className="my-8" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={user.displayName ? user.displayName : ""}
            className="py-2 border-2 rounded-md my-2 w-full px-2 "
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={user?.email}
            readOnly
            disabled
            className="py-2 border-2 rounded-md my-2 w-full px-2 "
          />
          <input
            type="text"
            name="service"
            placeholder="Service"
            required
            value={service.name}
            readOnly
            disabled
            className="py-2 border-2 rounded-md my-2 w-full px-2 "
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            autoComplete="off"
            className="py-2 border-2 rounded-md my-2 w-full px-2 "
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            required
            autoComplete="off"
            className="py-2 border-2 rounded-md my-2 w-full px-2 "
          />
          <button
            type="submit"
            className={`p-2 text-center border-2 bg-cyan-600  flex justify-center rounded-md capitalize text-xl text-white   duration-150 ease-in w-full mt-2 `}
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
