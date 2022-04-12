import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <h2 className="text-2xl  text-gray-500 "> No copyright &copy; {year} </h2>
    </footer>
  );
};

export default Footer;
