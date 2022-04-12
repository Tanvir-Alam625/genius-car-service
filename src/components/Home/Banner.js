import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../images/banner/banner1.jpg";
import banner2 from "../../images/banner/banner2.jpg";
import banner3 from "../../images/banner/banner3.jpg";

const Banner = () => {
  return (
    <>
      <Carousel>
        <div className="relative">
          <img src={banner1} alt="first" />
          <div className=" mt-[-200px]  md:mt-[-300px] lg:mt-[-400px] text-white flex justify-center absolute ">
            <div className="w-2/3 text-left">
              <h2 className="text-4xl lg:text-6xl font-semibold my-4 ">
                First Slider{" "}
              </h2>
              <p className="text-sm md:text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita veniam dolorum fugit nobis optio consectetur id rem
                quibusdam.
              </p>
              <button className="text-xl px-4 md:px-8 py-2 md:py-4 mt-2 md:mt-4 rounded-md bg-cyan-500 capitalize">
                Expolre now
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={banner2} alt="second" />
          <div className="  mt-[-200px]  md:mt-[-300px] lg:mt-[-400px] text-white flex justify-center absolute  ">
            <div className="w-2/3 text-left">
              <h2 className="text-4xl lg:text-6xl font-semibold my-4 ">
                Second Slider{" "}
              </h2>
              <p className="text-sm md:text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita veniam dolorum fugit nobis optio consectetur id rem
                quibusdam.
              </p>
              <button className="text-xl px-4 md:px-8 py-2 md:py-4 mt-2 md:mt-4 rounded-md bg-cyan-500 capitalize">
                Expolre now
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={banner3} alt="third" />
          <div className=" mt-[-200px]  md:mt-[-300px] lg:mt-[-400px] text-white flex justify-center absolute mx-auto ">
            <div className="w-2/3 text-left">
              <h2 className="text-xl md:text-4xl lg:text-6xl font-light md:font-semibold my-0 md:my-4 ">
                Third Slider
              </h2>
              <p className=" text-sm md:text-xl ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita veniam dolorum fugit nobis optio consectetur id rem
                quibusdam.
              </p>
              <button className=" text-sm md:text-xl px-4 md:px-8 py-2 md:py-4 mt-2 md:mt-4 rounded-md bg-cyan-500 capitalize">
                Expolre now
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
