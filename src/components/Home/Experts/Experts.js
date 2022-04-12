import React from "react";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "./Expert";

const Experts = () => {
  const expertsData = [
    { id: 1, name: "simth rouse", img: expert1 },
    { id: 2, name: "simth rouse", img: expert2 },
    { id: 3, name: "simth rouse", img: expert3 },
    { id: 4, name: "simth rouse", img: expert4 },
    { id: 5, name: "simth rouse", img: expert5 },
    { id: 6, name: "simth rouse", img: expert6 },
  ];

  return (
    <div>
      <h2 className="text-5xl text-center font-semibold text-cyan-500 mb-8 mt-12">
        Our Experts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  lg:gap-6 px-2 md:px-4 lg:px-8 my-8">
        {expertsData.map((expert) => (
          <Expert key={expert.id} data={expert} />
        ))}
      </div>
    </div>
  );
};

export default Experts;
