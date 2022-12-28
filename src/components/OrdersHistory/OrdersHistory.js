import axios from "axios";
import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
const OrdersHistory = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const ordersHistory = async () => {
      const email = user.email;
      const url = `https://genius-car-service-625.onrender.com/orders?email=${email}`;
      await axios.get(url).then((response) => {
        const { data } = response;
        setOrders(data);
      });
    };
    ordersHistory();
  }, [user]);
  return (
    <div className="min-h-screen">
      <h2>order history{orders.length}</h2>
    </div>
  );
};

export default OrdersHistory;
