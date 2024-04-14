import React, {useEffect, useState} from "react";
import TimeRangeSlider from "./TimeRangeSlider";

const FlightsFilter = ({ flights }) => {
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
        setMinDuration(((flights.filterStats.duration.min)/60).toFixed(0));
        setMaxDuration(((flights.filterStats.duration.max) / 60).toFixed(0));
        flights.itineraries.forEach((flight) => {
          const price = parseFloat(flight.price.raw);;

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
          <div className="pl-44 pt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-4 w-4"
              onClick={() => {
                setShowStops((prev) => !prev);
              }}
            >
              <path
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                fill="gray"
              />
            </svg>
          </div>
        </div>
        {showStops && (
          <div className="pb-3">
            <div>
              <div className="flex flex-row">
                <input type="checkbox" />
                <div className="pl-2">Direct</div>
              </div>
              <div className="pl-5">None</div>
            </div>
            <div>
              <div className="flex flex-row">
                <input type="checkbox" />
                <div className="pl-2">1 Stop</div>
              </div>
              <div className="pl-5">
                from US {flights.filterStats.stopPrices.one.formattedPrice}
              </div>
            </div>
            <div>
              <div className="flex flex-row">
                <input type="checkbox" />
                <div className="pl-2">2+ Stops</div>
              </div>
              <div className="pl-5">
                from US{" "}
                {flights.filterStats.stopPrices.twoOrMore.formattedPrice}
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <div className="flex flex-row">
          <div className="font-semibold text-lg py-2">Departure Times</div>
          <div className="pl-20 pt-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-4 w-4"
              onClick={() => {
                setShowDepartureTimes((prev) => !prev);
              }}
            >
              <path
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                fill="gray"
              />
            </svg>
          </div>
        </div>
        {showDepartureTimes && (
          <div className="pb-12">
            <TimeRangeSlider
              min={0}
              max={24}
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
              inputType="time"
            />
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
            {minPrice !== Infinity && maxPrice !== -Infinity && (
              <TimeRangeSlider
                min={minPrice}
                max={maxPrice}
                onChange={({ min, max }) =>
                  console.log(`min = ${min}, max = ${max}`)
                }
                inputType="price"
              />
            )}
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

export default FlightsFilter;
