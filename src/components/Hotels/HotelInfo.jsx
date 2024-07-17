import React, { useState } from "react";
import { Link } from "react-router-dom";

const HotelInfo = ({ hotel, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
function formatCurrency(input) {
  if (typeof input !== "string") {
    // Handle cases where input is not a string (or undefined)
    return "Invalid input";
  }
  const currencyMatch = input.match(/₹ ([\d,]+)/);
  if (currencyMatch) {
    const amount = parseFloat(currencyMatch[1].replace(/,/g, ""));
    const usdAmount = amount / 83.4;
    return input.replace(`₹ ${currencyMatch[1]}`, `$${usdAmount.toFixed(0)}`);
  }
  // Check for input starting with "₹" and extract the numeric part
  if (input.startsWith("₹")) {
    const amount = parseFloat(input.replace(/[^\d,]/g, "").replace(/,/g, ""));
    const usdAmount = amount / 83.4;
    return `$${usdAmount.toFixed(0)}`;
  }

  // Check for input like "₹ 184,845 for 28 nights" and extract the numeric part


  // If already in USD or unrecognized format, return as is
  return input;
}

  // Example usage:
  const amount1 = "₹ 2,731";
  const amount2 = "$ 100"; // This would remain unchanged
  const formattedAmount1 = formatCurrency(amount1);
  const formattedAmount2 = formatCurrency(amount2);

  console.log(formattedAmount1); // Output: $ 32.73
  console.log(formattedAmount2); // Output: $ 100 (unchanged)

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
      <div className="bg-white rounded-xl text-gray-700 w-full 1sm:w-[625px] 1md:w-[880px] 1lg:w-[925px] mb-2 xl:mr-12 py-4 flex flex-col 1md:flex-row divide-gray-200">
        <div key={index} className="flex flex-col 1md:flex-row ">
          <div className="px-3 relative">
            <div className="relative w-full 1sm:w-[600px] 1md:w-[350px] h-[300px] 1sm:h-[350px] 1md:h-[250px] group">
              <button
                onClick={handlePrevClick}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-50 p-2 rounded-xl z-50 opacity-0 group-hover:opacity-100 transition-opacity"
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
                className=" w-full 1sm:w-[600px] 1md:w-[350px] h-[300px] 1sm:h-[350px] 1md:h-[250px] rounded transition-opacity duration-1000"
                src={hotel.images[currentImageIndex]}
                alt="image"
              />
              <button
                onClick={handleNextClick}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-50 p-2 rounded-xl z-50 opacity-0 group-hover:opacity-100 transition-opacity"
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
                {hotel.images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 mx-1 rounded-full ${
                      currentImageIndex === index ? "bg-white" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col 2sm:flex-row  divide-x-[1px] pt-4">
          <div className="pl-4 pr-4 w-full 1sm:w-[1000px] 1md:w-[550px] 1lg:w-[630px]">
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
            <div className="pt-2 text-sm">
              {hotel.relevantPoiDistance
                ? hotel.relevantPoiDistance
                : hotel.distance}
            </div>
            <div className="flex flex-row space-x-2 pt-1 ">
              <div>{hotel.reviewSummary?.value}</div>
              <div>
                <img src={hotel.reviewSummary?.taImage} alt="" />
              </div>
            </div>
            <div className="flex flex-row space-x-2 pt-1 ">
              <div>"{hotel.reviewSummary?.description}"</div>
              <div className="text-sm mt-0.5">
                {hotel.reviewSummary?.count} reviews
              </div>
            </div>
            <div className="cursor-pointer relative pt-1.5">
              {hotel.otherRates[0] ? (
                <div className="flex  border-y-[1px]  border-gray-200 py-1">
                  <img
                    src={`https://www.skyscanner.pk/images/websites/220x80/${hotel.otherRates[0]?.partnerId}.png`}
                    alt=""
                    className="h-[25px] w-[66px]"
                  />
                  <p className=" absolute right-0 font-semibold">
                    {formatCurrency(hotel.otherRates[0]?.price)}
                  </p>
                </div>
              ) : (
                ""
              )}
              {hotel.otherRates[1] ? (
                <div className="flex border-b-[1px]  border-gray-200 py-1">
                  <img
                    src={`https://www.skyscanner.pk/images/websites/220x80/${hotel.otherRates[1]?.partnerId}.png`}
                    alt=""
                    className="h-[25px] w-[66px]"
                  />
                  <p className=" absolute right-0 font-semibold">
                    {formatCurrency(hotel.otherRates[1]?.price)}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="pl-4  1md:pt-12 w-full flex flex-col pr-4 pt-2 justify-end items-end sm:flex-initial sm:pr-0 sm:pt-0 sm:justify-start sm:items-start">
            <div className="flex flex-row">
              <div className="font-semibold">
                <img
                  src={`https://www.skyscanner.pk/images/websites/220x80/${hotel.cheapestOfferPartnerId}.png`}
                  alt=""
                  className="h-[25px] w-[66px]"
                />
              </div>
            </div>
            <div className="flex flex-row pt-2">
              <div className="text-pink-600 line-through">
                {hotel.cug?.priceWithoutDiscount &&
                  formatCurrency(hotel.cug?.priceWithoutDiscount)}
              </div>
              <div className="text-pink-600 pl-2">{hotel.cug?.discount}</div>
            </div>

            <div className="text-2xl font-bold  mt-3 ">
              {formatCurrency(hotel.price)}
            </div>
            <div className="pt-2 hidden 2sm:block">
              {formatCurrency(hotel.priceDescription)}
            </div>
            <div className="text-sm hidden 2sm:block">{hotel.taxPolicy}</div>
            <div className="pt-4">
              <Link
                to={`/hotels/hotel/${hotel.hotelId}/${formatCurrency(
                  hotel.otherRates[0]?.price
                )}`}
              >
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
              </Link>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default HotelInfo;
