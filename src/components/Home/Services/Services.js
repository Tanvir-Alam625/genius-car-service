import React, { useEffect, useState } from "react";
import PageTitle from "../../../PageTitle/PageTitle";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div id="service">
      <PageTitle title="Services" />
      <h2 className="text-5xl text-center font-semibold  text-cyan-500 mb-8 mt-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  lg:gap-6 px-2 md:px-4 lg:px-8 my-8">
        {services.map((service) => (
          <Service key={service.id} data={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
