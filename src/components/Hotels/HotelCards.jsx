import React from "react";
const HotelCards = () => {
  return (
    <div className="mx-auto  bg-white shadow-lg rounded-lg overflow-hidden ">
      <div className=" flex flex-col ">
        <img
          src="https://ak-d.tripcdn.com/images/02015120009f6uinhFF38_R_300_225_R5.jpg"
          alt="Airline Logo"
          className="w-[392px] h-[160px]"
        />
        <div className="pl-2 pt-3  flex justify-between px-2">
          <h2 className="text-xl font-bold text-gray-800">
            Beach Luxury Hotel
          </h2>
          <p className="text-gray-600 flex flex-row mt-1">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  height="20"
                  width="20"
                >
                  <path
                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    fill="orange"
                  ></path>
                </svg>
              ))}
          </p>
        </div>
        <span className="text-gray-800 text-sm px-2">
          3.72km from city center
        </span>
        <div className="px-2 flex pt-2 space-x-1">
          <span className="text-gray-800 font-bold text-[17px] ">4</span>
          <img
            src="https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/4.0-64600-4.png"
            alt=""
            className="h-4 mt-1.5"
          />
          <span className="text-gray-600 text-[12px] mt-1">3423 reviews</span>
        </div>
      </div>
      <div className="pb-3 pt-3 bg-blue-50 border-t border-gray-200 flex justify-between">
        <div className="pl-2  pb-2">
          <h2 className="text-xl font-bold text-gray-800">Gilgit</h2>
          <p className="text-gray-600">Pakistan</p>
        </div>
        <div className="text-right flex flex-col pt-2 pr-2">
          <span className="font-bold text-gray-800 text-xl pl-0.5">$84</span>
          <span className=" text-gray-900 text-sm mb-0.5">per night</span>
        </div>
      </div>
    </div>
  );
};

export default HotelCards;
