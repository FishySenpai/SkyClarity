import React from "react"
import flightCardImg from "./flightCardImg.webp";
const FlightCards = () => {
  return (
      <div className="mx-auto  bg-white shadow-lg rounded-lg overflow-hidden">
        <div className=" flex flex-col ">
          <img
            src={flightCardImg}
            alt="Airline Logo"
            className="w-[392px] h-[160px]"
          />
          <div className="pl-2 pt-3 pb-2">
            <h2 className="text-xl font-bold text-gray-800">Gilgit</h2>
            <p className="text-gray-600">Pakistan</p>
          </div>
        </div>
        <div className="py-4 bg-blue-50 border-t border-gray-200">
          <div className="flex justify-between items-center px-2">
            <div className=" flex flex-row space-x-2">
              <div className="">
                <img
                  src="https://content.skyscnr.com/90094684365e61f5c05f1417bbcf6c67/ai-template-pia-thumb-1-xxxhdpi.png?resize=100%3A9999px&quality=100"
                  alt=""
                  className="w-[56px] h-[18px] mt-2"
                />
              </div>
              <div className="flex flex-col pl-5">
                <span className="text-gray-800 font-semibold">Islamabad</span>
                <span className="text-gray-800  ">Sat, Aug 24</span>
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-7 w-7 mb-5"
            >
              <path
                d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"
                fill="rgb(55 65 81)"
              />
            </svg>
            <div className=" flex flex-row space-x-2">
              <div className="flex flex-col pr-5">
                <span className="text-gray-800 font-semibold">Gilgit</span>
                <span className="text-gray-800 ">Sat, Aug 24</span>
              </div>
            </div>
          </div>
          <span className="text-gray-600 pl-[92px]">Economy</span>
          <div className="text-right flex flex-row justify-end items-end pt-2 pr-2">
            <span className="text-gray-600 text-right ">From</span>
            <span className="font-semibold text-gray-800 text-xl pl-0.5">
              $84
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-4 h-4 mb-1.5"
            >
              <path d="M8.095 4.887a1.496 1.496 0 0 1 2.008 0l5.948 6.397a1 1 0 0 1 .003 1.358l-6.01 6.532a1.427 1.427 0 0 1-1.949-.138 1.57 1.57 0 0 1-.103-1.997l4.638-5.078-4.535-4.97a1.72 1.72 0 0 1 0-2.104"></path>
            </svg>
          </div>
        </div>
      </div>
  );
}

export default FlightCards