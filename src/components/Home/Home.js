import React from "react";
import Banner from "./Banner";
import Experts from "./Experts/Experts";
import Services from "./Services/Services";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Genius cart services</title>
      </Helmet>
      <Banner />
      <Services />
      <Experts />
    </>
  );
};

export default Home;
