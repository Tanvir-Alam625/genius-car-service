import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://genius-car-service-625.onrender.com/service")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return [services, setServices];
};
export default useServices;
