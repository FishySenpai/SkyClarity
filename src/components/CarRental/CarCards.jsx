import React from "react";
import { Link } from "react-router-dom";

const CarCards = ({card, key}) => {
  return (
    <Link to={``}>
      <div className="mx-auto  bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          key={key}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="flex flex-col w-[392px] h-[170px] overflow-hidden">
            <img
              src={card.imageURL}
              alt={`Car card in ${card.location}`}
              className="object-cover object-bottom w-full h-full"
            />
          </div>
          <div className="p-4 border-t border-gray-200 flex justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Car rental in {card.location}
              </h2>
              <p className="text-gray-700 text-sm font-semibold">
                Most popular car type:
                <span className="font-normal pl-1">
                  {card.mostPopularCarType}
                </span>
              </p>
            </div>
            <div className="text-right flex flex-col">
              <span className="text-gray-900 text-xs">From</span>
              <span className="font-bold text-gray-800 text-xl">
                ${card.price.amount}
              </span>
              <span className="text-gray-900 text-xs">
                per {card.price.per}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarCards;
