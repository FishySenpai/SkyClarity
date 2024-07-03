import React from "react";
import flightCardImg from "./Assets/flightCardImg.webp";
import { Link } from "react-router-dom";

const FlightCards = ({ card }) => {
  const getRandomDateInRange = (startDate, rangeInDays) => {
    const randomDays = Math.floor(Math.random() * rangeInDays);
    const randomDate = new Date(startDate);
    randomDate.setDate(randomDate.getDate() + randomDays);
    return randomDate.toISOString().split("T")[0];
  };
const convertDate = (dateString) => {
  const date = new Date(dateString);

  const options = { weekday: "short", month: "short", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
};
  const today = new Date();
  const departdate = getRandomDateInRange(today, 30);
  const returndate = getRandomDateInRange(new Date(departdate), 30);

  console.log("Check-in Date:", departdate);
  console.log("Check-out Date:", returndate);

  return (
    <Link
      to={`/flights/search/${card.from}/${card.fromId}/${card.to}/${card.toId}/${departdate}/${returndate}`}
    >
      {" "}
      <div className="mx-auto  bg-white shadow-lg rounded-lg overflow-hidden">
        <div className=" flex flex-col ">
          <div className="w-[392px] h-[160px] overflow-hidden relative ">
            {" "}
            <img
              src={card.imageURL}
              alt="Airline Logo"
              className="absolute bottom-0"
            />
          </div>
          <div className="pl-2 pt-3 pb-2">
            <h2 className="text-xl font-bold text-gray-800">{card.to}</h2>
            <p className="text-gray-600">{card.country}</p>
          </div>
        </div>
        <div className="py-4 bg-blue-50 border-t border-gray-200">
          <div className="flex justify-between items-center px-2">
            <div className=" flex flex-row space-x-2">
              <div className="w-[66px] h-[40px] flex justify-center">
                <img
                  src={card.airLineImageURL}
                  alt=""
                  className="max-w-[66px] max-h-[40px]  mt-2"
                />
              </div>
              <div className="flex flex-col  ">
                <span className="text-gray-800 font-semibold">{card.from}</span>
                <span className="text-gray-800  ">
                  {convertDate(departdate)}
                </span>
              </div>
            </div>
            <div className="text-black text-4xl font-bold">⇌</div>
            <div className=" flex flex-row space-x-2">
              <div className="flex flex-col pr-5">
                <span className="text-gray-800 font-semibold">{card.to}</span>
                <span className="text-gray-800 ">
                  {convertDate(returndate)}
                </span>
              </div>
            </div>
          </div>
          <span className="text-gray-500 text-sm pl-[82px]">
            {card.flightClass}
          </span>
          <div className="text-right flex flex-row justify-end items-end pt-2 pr-2">
            <span className="text-gray-600 text-right ">From</span>
            <span className="font-semibold text-gray-800 text-xl pl-0.5">
              {card.price}
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
    </Link>
  );
};

export default FlightCards;
