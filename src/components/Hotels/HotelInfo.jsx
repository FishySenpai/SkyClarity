import React, { useState } from "react";

const HotelInfo = ({ hotel, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + hotel.images.length) % hotel.images.length
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hotel.images.length);
  };
  return (
    <div>
      <div className="bg-gray-100 rounded text-gray-700 w-[880px] mb-2 mr-12 flex flex-row divide-x-2 divide-gray-400">
        <div className="w-[650px] py-4">
          <div key={index} className="flex flex-row ">
            <div className="px-3 relative">
              <div className="w-[300px] h-[250px]">
                <button
                  onClick={() => {
                    handlePrevClick();
                  }}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full z-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <img
                  className="w-[300px] h-[250px] rounded"
                  src={hotel.images[currentImageIndex]}
                  alt="image"
                />
                <button
                  onClick={() => {
                    handleNextClick();
                  }}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full z-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <div className="pr-3 font-semibold text-lg ">{hotel.name}</div>
              <div className="flex flex-row pt-2">
                {Array(hotel.stars)
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
              </div>
              <div className="pt-2">
                {hotel.relevantPoiDistance
                  ? hotel.relevantPoiDistance
                  : hotel.distance}
              </div>
              <div className="flex flex-row space-x-2 pt-1">
                <div>{hotel.reviewSummary?.value}</div>
                <div>
                  <img src={hotel.reviewSummary?.taImage} alt="" />
                </div>
              </div>
              <div className="flex flex-row space-x-2 pt-1">
                <div>"{hotel.reviewSummary?.description}"</div>
                <div>{hotel.reviewSummary?.count} reviews</div>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-6 pt-6">
          <div className="flex flex-row">
            <div className="pr-2">Provider: </div>
            <div className="font-semibold">
              {hotel.cheapestOfferPartnerName}
            </div>
          </div>
          <div className="flex flex-row pt-2">
            <div className="text-pink-600 line-through">
              {hotel.cug?.priceWithoutDiscount}
            </div>
            <div className="text-pink-600 pl-2">{hotel.cug?.discount}</div>
          </div>

          <div className="text-2xl font-bold  mt-3 ">{hotel.price}</div>
          <div className="pt-2">{hotel.priceDescription}</div>
          <div className="text-sm">{hotel.taxPolicy}</div>
          <div className="pt-4">
            <button className="px-3 py-1 rounded bg-gray-800 text-white mt-1 font-semibold flex flex-row">
              View Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-3 h-4 ml-2 mt-1"
              >
                <path
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
