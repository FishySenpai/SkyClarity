import React from "react";
import carAnimated from "./Assets/car-animated.png"
import hotelAnimated from "./Assets/hotel-animated.png";
const CompleteYourTrip = ({destination}) => {
  return (
    <div className="p-8 ">
      <h2 className="text-xl font-semibold mb-4">Complete your trip</h2>

      {/* Hotel Card */}
      <div className="bg-white rounded-lg mb-4">
        <img
          src={hotelAnimated}
          alt="Hotel Icon"
          className="w-[463px] h-[200px] rounded-t-lg"
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
      <div className=" bg-white rounded-lg">
        <img src={carAnimated} alt="Car Icon" className="rounded-t-lg w-[463px] h-[200px]" />
        <div className="p-3 pb-0 ">
          <h3 className="text-lg font-semibold">Car rental in {destination}</h3>
          <p className="text-gray-600">
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

export default CompleteYourTrip;
