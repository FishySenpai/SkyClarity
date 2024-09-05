import React from "react";
import carAnimated from "./car-animated.png";
import hotelAnimated from "./hotel-animated.png";
const CompleteTrip = ({ destination }) => {
  return (
    <div className="p-8 pt-0 ">
      <h2 className="text-xl font-semibold mb-4">Complete your trip</h2>

      {/* Hotel Card */}
      <div className="bg-white rounded-lg mb-4 w-fit">
        <img
          src={hotelAnimated}
          alt="Hotel Icon"
          className="w-[363px] h-[150px] rounded-t-lg"
        />
        <div className="p-3 pb-0 ">
          <h3 className="text-lg font-semibold">
            Need a place to stay in {destination}?
          </h3>
          <p className="text-gray-600">
            Explore hotels in the best spots in{" "}
            <span className="font-semibold">{destination}</span>.
          </p>
        </div>
        <div className="flex justify-between items-center mt-2 p-3 pt-2 border-t-[2px] border-gray-200 ">
          <p className="text-gray-800 flex flex-col">
            <span className="text-[13px] text-gray-600">Prices from</span>{" "}
            <span className="font-semibold">$11 per night</span>
          </p>
          <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-semibold">
            Explore hotels
          </button>
        </div>
      </div>

      {/* Car Rental Card */}
      <div className=" bg-white rounded-lg w-fit">
        <img
          src={carAnimated}
          alt="Car Icon"
          className="rounded-t-lg w-[363px] h-[150px]"
        />
        <div className="p-3 pb-0 ">
          <h3 className="text-lg font-semibold">Car rental in {destination}</h3>
          <p className="text-gray-600 w-[340px] text-wrap">
            No crowds or public transportation, relax on the road.
          </p>
        </div>
        <div className="flex justify-between items-center mt-2 p-3 pt-2 border-t-[2px] border-gray-200 ">
          <p className="text-gray-800 flex flex-col">
            <span className="text-[13px] text-gray-600">Small cars from</span>{" "}
            <span className="font-semibold">$27 per day</span>
          </p>
          <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-semibold">
            Find a car
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompleteTrip;
