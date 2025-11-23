import React, { useState } from "react";
import { Link } from "react-router-dom";

const HotelInfo = ({ hotel, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function formatCurrency(price) {
    if (!price) return "N/A";

    // If it's already a formatted string with $, return as is
    if (typeof price === "string" && price.includes("$")) {
      return price;
    }

    // If it's a number, format it
    if (typeof price === "number") {
      return `$${price.toFixed(0)}`;
    }

    return price;
  }

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + hotel.images.length) % hotel.images.length
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hotel.images.length);
  };

  // Extract lowest price data
  const lowestPrice = hotel.lowestPrice || {};
  const otherPrices = hotel.otherPrices || [];

  return (
      <div className="bg-white rounded-xl text-gray-700 w-full 1sm:w-[625px] 1md:w-[880px] 1lg:w-[925px] mb-2 xl:mr-12 py-4 flex flex-col 1md:flex-row divide-gray-200">
        <div key={index} className="flex flex-col 1md:flex-row">
          <div className="px-3 relative">
            <div className="relative w-full 1sm:w-[600px] 1md:w-[350px] h-[300px] 1sm:h-[350px] 1md:h-[250px] group">
              <button
                onClick={handlePrevClick}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-50 p-2 rounded-xl z-50 1md:opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
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
                className="w-full 1sm:w-[600px] 1md:w-[350px] h-[300px] 1sm:h-[350px] 1md:h-[250px] rounded transition-opacity duration-1000"
                src={hotel.images[currentImageIndex]}
                alt="hotel"
              />
              <button
                onClick={handleNextClick}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-50 p-2 rounded-xl z-50 1md:opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
                {hotel.images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 mx-1 rounded-full ${
                      currentImageIndex === idx ? "bg-white" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col 2sm:flex-row divide-x-[1px] pt-4">
          <div className="pl-4 pr-4 w-full 1sm:w-[1000px] 1md:w-[550px] 1lg:w-[630px]">
            <div className="pr-3 font-semibold text-lg">{hotel.name}</div>

            {/* Star Rating */}
            {hotel.stars && (
              <div className="flex flex-row pt-2">
                {Array(parseInt(hotel.stars))
                  .fill(0)
                  .map((_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      height="20"
                      width="20"
                    >
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        fill="orange"
                      />
                    </svg>
                  ))}
              </div>
            )}

            {/* Distance */}
            <div className="pt-2 text-sm">
              {hotel.relevantPoiDistance || hotel.distance}
            </div>

            {/* Reviews Summary */}
            {hotel.reviewsSummary && (
              <>
                <div className="flex flex-row space-x-2 pt-1">
                  <div className="font-semibold">
                    {hotel.reviewsSummary.score}
                  </div>
                  <div className="mt-[3px]">
                    <img
                      src={hotel.reviewsSummary.imageUrl}
                      alt="rating"
                      className="h-5"
                    />
                  </div>
                </div>
                <div className="flex flex-row space-x-2 pt-1">
                  <div className="text-sm">
                    "{hotel.reviewsSummary.scoreDesc}"
                  </div>
                  <div className="text-sm text-gray-500">
                    {hotel.reviewsSummary.total} reviews
                  </div>
                </div>
              </>
            )}

            {/* Other Prices */}
            <div className="cursor-pointer relative pt-1.5">
              {otherPrices.slice(0, 2).map((rate, idx) => (
                <div
                  key={idx}
                  className={`flex border-b-[1px] border-gray-200 py-1 ${
                    idx === 0 ? "border-t-[1px]" : ""
                  }`}
                >
                  <img
                    src={rate.logo}
                    alt={rate.name}
                    className="h-[25px] w-[66px] object-contain"
                  />
                  <p className="absolute right-0 font-semibold">
                    {formatCurrency(rate.price)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Price Section */}
          <div className="pl-4 1md:pt-12 w-full flex flex-col pr-4 pt-2 justify-end items-end sm:flex-initial sm:pr-0 sm:pt-0 sm:justify-start sm:items-start">
            <div className="flex flex-row">
              <div className="font-semibold">
                <img
                  src={lowestPrice.partnerLogo}
                  alt={lowestPrice.partnerName}
                  className="h-[25px] w-[66px] object-contain"
                />
              </div>
            </div>

            {/* CUG Discount */}
            {lowestPrice.cug && (
              <div className="flex flex-row pt-2">
                <div className="text-pink-600 line-through">
                  {formatCurrency(lowestPrice.cug.originalPrice)}
                </div>
                <div className="text-pink-600 pl-2">
                  {lowestPrice.cug.discountBadge}
                </div>
              </div>
            )}

            <div className="text-2xl font-bold mt-3">
              {formatCurrency(lowestPrice.price)}
            </div>

            <div className="pt-2 hidden 2sm:block text-sm text-gray-600">
              Total: {formatCurrency(lowestPrice.priceWithAllTaxes)}
            </div>

            {/* Rate Features */}
            {lowestPrice.rateFeatures &&
              lowestPrice.rateFeatures.length > 0 && (
                <div className="text-xs text-green-600 pt-1 hidden 2sm:block">
                  {lowestPrice.rateFeatures[0]}
                </div>
              )}

            <div className="pt-4">
              <Link
                to={`/hotels/hotel/${hotel.id}/${formatCurrency(
                  lowestPrice.price
                )}`}
              >
                <button className="px-3 py-1 rounded bg-gray-800 text-white mt-1 font-semibold flex flex-row hover:bg-gray-700 transition-colors">
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
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HotelInfo;
