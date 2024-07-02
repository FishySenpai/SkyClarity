import React, { useState, useEffect, useRef } from "react";
import Hotels from "./Hotels";
import hotelsData from "../../hotels.json";
import hotelsImg from "./hotels-img.jpg"
import useOutsideClick from "../useOutsideClick";
import Calendar from "react-calendar";
import HotelCards from "./HotelCards";
import FAQ from "../Flights/FAQ";
import faqs from "../faq.json"
import HotelsSearch from "./HotelsSearch";
const HotelsHome = () => {
  // const [hotelsData, setHotelsData] = useState();



  return (
    <div className="rounded text-gray-500 relative bg-gray-100 ">
      <img src={hotelsImg} className="absolute inset-0 bg-cover bg-center" />
      <div className="absolute top-52 left-[300px] ">
        <div className="text-5xl pb-3 text-white font-bold">
          Find the right hotel today
        </div>
        <div className="h-[160px]">
          <HotelsSearch home={true} />
        </div>
      </div>
      <div className="relative top-[600px] bg-gray-100 pb-12 rounded-3xl ">
        <div className="w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto pt-12 ">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <HotelCards />
            ))}
        </div>
        <div>
          <FAQ faqs={faqs.car} />
        </div>
      </div>
    </div>
  );
};

export default HotelsHome;
