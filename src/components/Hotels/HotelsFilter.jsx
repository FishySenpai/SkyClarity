import React, { useEffect, useState } from "react";
import TimeRangeSlider from "../Flights/TimeRangeSlider";

const HotelsFilter = ({ flights,  hotelsData }) => {
  const [minPrice, setMinPrice] = useState(Infinity);
  const [maxPrice, setMaxPrice] = useState(-Infinity);
  const [minDuration, setMinDuration] = useState(Infinity);
  const [maxDuration, setMaxDuration] = useState(-Infinity);
  const [showStops, setShowStops] = useState(true);
  const [showDepartureTimes, setShowDepartureTimes] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showJourneyDuration, setShowJourneyDuration] = useState(true);
  const [showAirlines, setShowAirlines] = useState(true);

  useEffect(() => {
    if (flights && flights.itineraries) {
      setMinDuration((flights.filterStats.duration.min / 60).toFixed(0));
      setMaxDuration((flights.filterStats.duration.max / 60).toFixed(0));
      flights.itineraries.forEach((flight) => {
        const price = parseFloat(flight.price.raw);

        // Update minimum and maximum price
        setMinPrice((prevMinPrice) => Math.min(prevMinPrice, price));
        setMaxPrice((prevMaxPrice) => Math.max(prevMaxPrice, price));

        // Update minimum and maximum duration in hours, rounded to 2 decimal places
      });
    }
  }, [flights]);

  // Add a useEffect to log the updated minPrice
  useEffect(() => {
    console.log("Updated minPrice:", minPrice);
    console.log("Updated maxPrice:", maxPrice);
    console.log("Updated minDuration:", minDuration);
    console.log("Updated maxDuration:", maxDuration);
  }, [minPrice]);

  return (
    <div className="mx-12 px-4 rounded bg-gray-100 default-font text-gray-700 text-sm divide-y-2 divide-slate-300">
      <div>
        <div className="flex flex-row">
          <div className="font-semibold text-lg py-2">Stops</div>
        </div>
      </div>

      <div>
        <div className="flex flex-row">
          <div className="font-semibold text-lg py-2">Departure Times</div>
        </div>
      </div>

      <div className="">
        <div className="flex flex-row">
          <div className="font-semibold text-lg py-2">Price</div>
          <div className="pl-44 pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-4 w-4"
              onClick={() => {
                setShowPrice((prev) => !prev);
              }}
            >
              <path
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                fill="gray"
              />
            </svg>
          </div>
        </div>
        {showPrice && (
          <div className="pb-12">
            {hotelsData.filters[0].values.map((bucket, index) => (
              <div key={bucket.id} className="flex items-center mb-2">
                <input type="checkbox" id={bucket.id} className="mr-2" />
                <label htmlFor={bucket.id} className="text-sm justify-between">
                  {`Rs ${bucket.minPrice.toLocaleString()} - Rs ${
                    bucket.maxPrice ? bucket.maxPrice.toLocaleString() : "+"
                  }`}
                  <span className="text-gray-500 ml-2 ">{bucket.count}</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="">
        <div className="flex flex-row">
          <div className="font-semibold text-lg py-2">Price</div>
          <div className="pl-44 pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-4 w-4"
              onClick={() => {
                setShowPrice((prev) => !prev);
              }}
            >
              <path
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                fill="gray"
              />
            </svg>
          </div>
        </div>
        {showPrice && (
          <div className="pb-12">
            {hotelsData.filters[1].values.map((stars, index) => (
              <div key={stars.id} className="flex items-center mb-2">
                <input type="checkbox" id={stars.id} className="mr-2" />
                <label htmlFor={stars.id} className="text-sm flex flex-row">
                  {stars.label}
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
                  <span className="text-gray-500 ml-2 ">{stars.count}</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="">
        <div className="flex flex-row">
          <div className="font-semibold text-lg py-2">Price</div>
          <div className="pl-44 pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-4 w-4"
              onClick={() => {
                setShowPrice((prev) => !prev);
              }}
            >
              <path
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                fill="gray"
              />
            </svg>
          </div>
        </div>
        {showPrice && (
          <div className="pb-12">
            {hotelsData.filters[3].values.map((guest, index) => (
              <div key={guest.id} className="flex items-center mb-2">
                <input type="checkbox" id={guest.id} className="mr-2" />
                <label htmlFor={guest.id} className="text-sm justify-between">
                  {guest.label}
                  <span className="text-gray-500 ml-2 ">{guest.count}</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="">
        <div className="flex flex-row">
          <div className="font-semibold text-lg py-2">Journey Duration</div>
          <div className="pl-16 pt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-4 w-4"
              onClick={() => {
                setShowJourneyDuration((prev) => !prev);
              }}
            >
              <path
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                fill="gray"
              />
            </svg>
          </div>
        </div>
        {showJourneyDuration && (
          <div className="pb-12">
            {minDuration !== Infinity && maxDuration !== -Infinity && (
              <TimeRangeSlider
                min={minDuration}
                max={maxDuration}
                onChange={({ min, max }) =>
                  console.log(`min = ${min}, max = ${max}`)
                }
                inputType="time"
              />
            )}
          </div>
        )}
      </div>
      <div className="mb-12 pb-3">
        <div className="flex flex-row">
          <div className="font-semibold text-lg py-2">Airlines</div>
          <div className="pl-36 pt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-4 w-4"
              onClick={() => {
                setShowAirlines((prev) => !prev);
              }}
            >
              <path
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                fill="gray"
              />
            </svg>
          </div>
        </div>
        {showAirlines && (
          <div>
            {flights?.filterStats.carriers
              .slice(0, 10)
              .map((carrier, index) => (
                <div>
                  <div className="flex flex-row">
                    <input type="checkbox" defaultChecked />
                    <div className="pl-2">{carrier.name}</div>
                  </div>
                  <div className="pl-5">None</div>{" "}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelsFilter;
