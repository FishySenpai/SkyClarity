import React from "react";
import faqs from "../faq.json";
const CarCards = () => {
  return (
    <div className="mx-auto  bg-white shadow-lg rounded-lg overflow-hidden ">
      <div className=" flex flex-col ">
        <img
          src="https://ak-d.tripcdn.com/images/02015120009f6uinhFF38_R_300_225_R5.jpg"
          alt="Airline Logo"
          className="w-[392px] h-[160px]"
        />
      </div>
      <div className="pb-3 pt-3  border-t border-gray-200 flex justify-between">
        <div className="pl-2  pb-2">
          <h2 className="text-xl font-bold text-gray-800">Car rental in London</h2>
          <p className="text-gray-700 text-sm font-semibold">Most popular car type:
            <span className="font-normal pl-0.5">Economy</span>
          </p>
        </div>
        <div className="text-right flex flex-col pr-2">
          <span className=" text-gray-900 text-[12px]">From</span>
          <span className="font-bold text-gray-800 text-xl pl-0.5">$84</span>
          <span className=" text-gray-900 text-[12px] mb-0.5">per night</span>
        </div>
      </div>
    </div>
  );
};

export default CarCards;
