import React from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <div className="my-12">
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <h1 className="text-7xl">Not Found Page</h1>
    </div>
  );
};

export default NotFound;
