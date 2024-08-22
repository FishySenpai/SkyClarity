import React, { useEffect, useState } from "react";
import TimeRangeSlider from "../Flights/TimeRangeSlider";

const HotelsFilter = ({
  hotelsData,
  popularFilters,
  setPopularFilters,
  priceRange,
  setPriceRange,
  starRating,
  setStarRating,
  guestRating,
  setGuestRating,
}) => {
  const [seeMoreProperties, setSeeMoreProperties] = useState(false);
  const [seeMoreChains, setSeeMoreChains] = useState(false);
  const [seeMoreDistricts, setSeeMoreDistricts] = useState(false);

  const handlePriceChange = (event) => {
    const { value, checked } = event.target;
    setPriceRange((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleRatingChange = (event) => {
    const { value, checked } = event.target;
    setGuestRating((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };
  const handleStarChange = (event) => {
    const { value, checked } = event.target;
    setStarRating((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };
  if (hotelsData) {
    return (
      <div className="mx-12 px-6 w-[270px] bg-white rounded-lg default-font text-gray-700 text-sm divide-y-2 divide-slate-300">
        <div className="pt-1">
          <div className="flex flex-row">
            <div className="font-semibold text-lg py-2">Popular Filters</div>
          </div>
          <div className="pb-3">
            {hotelsData.filters[7]?.values.slice(0,1).map((cancellation, index) => (
              <div key={cancellation.id} className="flex items-center mb-2">
                <input type="checkbox" id={cancellation.id} className="mr-2" />
                <label
                  htmlFor={cancellation.id}
                  className="flex justify-between w-full text-sm"
                >
                  {cancellation.label}
                </label>
              </div>
            ))}
            {hotelsData.filters[2]?.values.map((meal, index) => (
              <div key={meal.id} className="flex items-center mb-2">
                <input type="checkbox" id={meal.id} className="mr-2" />
                <label
                  htmlFor={meal.id}
                  className="flex justify-between w-full text-sm"
                >
                  {meal.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-1">
          <div className="flex flex-row">
            <div className="font-semibold text-lg py-2">Price</div>
          </div>

          <div className="pb-3">
            {hotelsData.filters[0].values.map((bucket, index) => (
              <div key={bucket.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={bucket.id}
                  className="mr-2"
                  value={`${(bucket.minPrice / 278).toFixed(0)} - ${
                    bucket.maxPrice ? (bucket.maxPrice / 278).toFixed(0) : "+"
                  }`}
                  onChange={handlePriceChange}
                  checked={priceRange.includes(
                    `${(bucket.minPrice / 278).toFixed(0)} - ${
                      bucket.maxPrice ? (bucket.maxPrice / 278).toFixed(0) : "+"
                    }`
                  )}
                />
                <label
                  htmlFor={bucket.id}
                  className="flex justify-between w-full text-sm"
                >
                  {`$ ${(bucket.minPrice / 278).toFixed(0)} - $ ${
                    bucket.maxPrice ? (bucket.maxPrice / 278).toFixed(0) : "+"
                  }`}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-1">
          <div className="flex flex-row">
            <div className="font-semibold text-lg py-2">Star Rating</div>
          </div>
          <div className="pb-3">
            {hotelsData.filters[1]?.values.map((stars, index) => (
              <div key={stars.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={stars.id}
                  className="mr-2"
                  value={stars.id}
                  onChange={handleStarChange}
                  checked={starRating.includes(stars.id)}
                />
                <label
                  htmlFor={stars.id}
                  className="flex justify-between w-full text-sm"
                >
                  <span className="flex items-center">
                    <span className="w-[50px]">{stars.label}</span>
                    {stars.id !== "no_stars" &&
                      [...Array(parseInt(stars.id))].map((_, starIndex) => (
                        <svg
                          key={starIndex}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          height="20"
                          width="20"
                          className="ml-1"
                        >
                          <path
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            fill="orange"
                          ></path>
                        </svg>
                      ))}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-1">
          <div className="flex flex-row">
            <div className="font-semibold text-lg py-2">Guest Rating</div>
          </div>
          <div className="pb-3">
            {hotelsData.filters[4]?.values
              .slice()
              .reverse()
              .map((guest, index) => (
                <div key={guest.id} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id={guest.id}
                    className="mr-2"
                    value={guest.id}
                    onChange={handleRatingChange}
                    checked={guestRating.includes(guest.id)}
                  />
                  <label
                    htmlFor={guest.id}
                    className="flex justify-between w-full text-sm"
                  >
                    <span className="flex items-center">
                      <span className="mx-2 font-semibold w-[30px]">
                        {guest.id}+
                      </span>
                      <span>{guest.label}</span>
                    </span>
                  </label>
                </div>
              ))}
          </div>
        </div>
        {/* <div className="pt-1">
          <div className="flex flex-row">
            <div className="font-semibold text-lg py-2">Property type</div>
          </div>
          <div className="pb-3">
            <div
              className={`${
                seeMoreProperties ? "" : "h-[160px] overflow-hidden"
              }`}
            >
              {hotelsData.filters[9]?.values
                .slice()
                .sort((a, b) => b.count - a.count) // Sort by count in descending order
                .map((type, index) => (
                  <div
                    key={type.id}
                    className={`flex items-center mb-2 ${
                      type.count === 0 ? "text-gray-500" : ""
                    }`}
                  >
                    <input type="checkbox" id={type.id} className="mr-2" />
                    <label
                      htmlFor={type.id}
                      className={`flex justify-between w-full text-sm ${
                        type.count === 0 ? "text-gray-500" : ""
                      }`}
                    >
                      {type.label}
                      <span className="ml-2">{type.count}</span>
                    </label>
                  </div>
                ))}
            </div>
            <button
              className="text-blue-600 pt-2"
              onClick={() => {
                setSeeMoreProperties(!seeMoreProperties);
              }}
            >
              {seeMoreProperties ? "See less" : "See more"}
            </button>
          </div>
        </div>
        <div className="pt-1">
          <div className="flex flex-row">
            <div className="font-semibold text-lg py-2">Hotel Chains</div>
          </div>
          <div className="pb-3">
            <div
              className={`${seeMoreChains ? "" : "h-[160px] overflow-hidden"}`}
            >
              {hotelsData.filters[6].values.slice(0, 10).map((chain, index) => (
                <div
                  key={chain.id}
                  className={`flex items-start mb-2 ${
                    chain.count === 0 ? "text-gray-500" : ""
                  }`}
                >
                  <input type="checkbox" id={chain.id} className="mr-2 mt-1" />
                  <label
                    htmlFor={chain.id}
                    className="flex flex-col sm:flex-row justify-between w-full text-sm"
                  >
                    <span className="flex-1">{chain.label}</span>
                    <span className="text-gray-500 ml-2">{chain.count}</span>
                  </label>
                </div>
              ))}
            </div>
            <button
              className="text-blue-600 pt-2"
              onClick={() => {
                setSeeMoreChains(!seeMoreChains);
              }}
            >
              {seeMoreChains ? "See less" : "See more"}
            </button>
          </div>
        </div>
        <div className="pt-1">
          <div className="flex flex-row">
            <div className="font-semibold text-lg py-2">Neighbourhoods</div>
          </div>
          <div className="pb-3">
            <div
              className={`${
                seeMoreDistricts ? "" : "h-[160px] overflow-hidden"
              }`}
            >
              {hotelsData.filters[10]?.values
                .slice(0, 10)
                .map((district, index) => (
                  <div
                    key={district.id}
                    className={`flex items-center mb-2 ${
                      district.count === 0 ? "text-gray-500" : ""
                    }`}
                  >
                    <input type="checkbox" id={district.id} className="mr-2" />
                    <label
                      htmlFor={district.id}
                      className="flex justify-between w-full text-sm"
                    >
                      {district.label}
                      <span className="text-gray-500 ml-2 ">
                        {district.count}
                      </span>
                    </label>
                  </div>
                ))}
            </div>
            <button
              className="text-blue-600 pt-2"
              onClick={() => {
                setSeeMoreDistricts(!seeMoreDistricts);
              }}
            >
              {seeMoreDistricts ? "See less" : "See more"}
            </button>
          </div>
        </div> */}
      </div>
    );
  }
};

export default HotelsFilter;
