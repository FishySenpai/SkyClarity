import React, { useEffect, useState } from "react";
import TimeRangeSlider from "./TimeRangeSlider";

const FlightsFilter = ({
  flights,
  filters,
  setFilters,
  max,
  setMax,
  maxCurrentArrival,
  setMaxCurrentArrival,
  maxCurrentDeparture,
  setMaxCurrentDeparture,
  maxCurrentDuration,
  setMaxCurrentDuration,
  airline,
  setAirline,
}) => {
  const [minPrice, setMinPrice] = useState(Infinity);
  const [maxPrice, setMaxPrice] = useState(-Infinity);
  const [minDuration, setMinDuration] = useState(Infinity);
  const [maxDuration, setMaxDuration] = useState(-Infinity);
  const [showStops, setShowStops] = useState(true);
  const [showDepartureTimes, setShowDepartureTimes] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [showJourneyDuration, setShowJourneyDuration] = useState(true);
  const [showAirlines, setShowAirlines] = useState(true);
  const [showArrivalTimes, setShowArrivalTimes] = useState(true);
  const [minDepartureTime, setMinDepartureTime] = useState(Infinity);
  const [maxDepartureTime, setMaxDepartureTime] = useState(-Infinity);
  const [minArrivalTime, setMinArrivalTime] = useState(Infinity);
  const [maxArrivalTime, setMaxArrivalTime] = useState(-Infinity);

  useEffect(() => {
    if (flights && flights.itineraries) {
      setMinDuration((flights.filterStats.duration.min / 60).toFixed(0));
      setMaxDuration((flights.filterStats.duration.max / 60).toFixed(0));

      flights.itineraries.forEach((flight) => {
        const price = parseFloat(flight.price.raw);
        const departureDate = new Date(flight.legs[0].departure);
        const arrivalDate = new Date(flight.legs[0].arrival);

        const departureTime =
          departureDate.getHours() + departureDate.getMinutes() / 60;
        const arrivalTime =
          arrivalDate.getHours() + arrivalDate.getMinutes() / 60;

        // Update minimum and maximum price
        setMinPrice((prevMinPrice) => Math.min(prevMinPrice, price).toFixed(0));
        setMaxPrice((prevMaxPrice) => Math.max(prevMaxPrice, price).toFixed(0));

        // Update minimum and maximum departure time
        setMinDepartureTime((prevMinDepartureTime) =>
          Math.min(prevMinDepartureTime, departureTime).toFixed(0)
        );
        setMaxDepartureTime((prevMaxDepartureTime) =>
          Math.max(prevMaxDepartureTime, departureTime).toFixed(0)
        );

        // Update minimum and maximum arrival time
        setMinArrivalTime((prevMinArrivalTime) =>
          Math.min(prevMinArrivalTime, arrivalTime).toFixed(0)
        );
        setMaxArrivalTime((prevMaxArrivalTime) =>
          Math.max(prevMaxArrivalTime, arrivalTime).toFixed(0)
        );
      });
    }
  }, [flights]);
  // Add a useEffect to log the updated minPrice
  useEffect(() => {
    console.log("Updated minPrice:", minPrice);
    console.log("Updated maxPrice:", maxPrice);
    console.log("Updated minDuration:", minDuration);
    console.log("Updated maxDuration:", maxDuration);
    console.log("Updated minDepart:", minDepartureTime);
    console.log("Updated maxDepart:", maxDepartureTime);
    console.log("Updated minarrival:", minArrivalTime);
    console.log("Updated maxarrival:", maxArrivalTime);
  }, [minPrice]);

  return (
    <div className="mx-6 xl:mr-12 px-4 space-y-3 rounded bg-white default-font text-gray-700 text-sm divide-y-2 divide-slate-300 w-fit xl:w-[300px]">
      <div>
        <div
          className="flex flex-row relative pt-2"
          onClick={() => {
            setShowStops((prev) => !prev);
          }}
        >
          <div className="font-semibold text-lg py-2">Stops</div>
          <div className="absolute right-2 pt-3">
            {showStops ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-3 w-3"
                transform="rotate(180)"
              >
                <path
                  d="M19.113 8.095a1.496 1.496 0 0 1 0 2.008l-6.397 5.948a1 1 0 0 1-1.358.003l-6.532-6.01a1.427 1.427 0 0 1 .138-1.949 1.57 1.57 0 0 1 1.997-.103l5.078 4.638 4.97-4.535a1.72 1.72 0 0 1 2.104 0"
                  fill="gray"
                ></path>
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  fill="gray"
                />{" "}
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-3 w-3"
              >
                <path
                  d="M19.113 8.095a1.496 1.496 0 0 1 0 2.008l-6.397 5.948a1 1 0 0 1-1.358.003l-6.532-6.01a1.427 1.427 0 0 1 .138-1.949 1.57 1.57 0 0 1 1.997-.103l5.078 4.638 4.97-4.535a1.72 1.72 0 0 1 2.104 0"
                  fill="gray"
                ></path>
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  fill="gray"
                />{" "}
              </svg>
            )}
          </div>
        </div>

        {showStops && (
          <div className="pb-3">
            <div
              className={`${
                flights.filterStats.stopPrices.direct.formattedPrice
                  ? ""
                  : "text-gray-500"
              }`}
            >
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  checked={filters === "direct"}
                  onChange={(event) =>
                    setFilters(event.target.checked ? "direct" : "")
                  }
                  className={`${
                    flights.filterStats.stopPrices.direct.formattedPrice
                      ? ""
                      : "cursor-not-allowed"
                  }`}
                />

                <div className="pl-2">Direct</div>
              </div>
              <div className="pl-5">
                {flights.filterStats.stopPrices.direct.formattedPrice
                  ? `from US ${flights.filterStats.stopPrices.direct.formattedPrice}`
                  : "None"}
              </div>
            </div>
            <div
              className={`${
                flights.filterStats.stopPrices.one.formattedPrice
                  ? ""
                  : "text-gray-500"
              }`}
            >
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  checked={filters === "1stop"}
                  onChange={(event) =>
                    setFilters(event.target.checked ? "1stop" : "")
                  }
                  className={`${
                    flights.filterStats.stopPrices.one.formattedPrice
                      ? ""
                      : "cursor-not-allowed"
                  }`}
                />
                <div className="pl-2">1 Stop</div>
              </div>
              <div className="pl-5">
                {flights.filterStats.stopPrices.one.formattedPrice
                  ? `from US ${flights.filterStats.stopPrices.one.formattedPrice}`
                  : "None"}
              </div>
            </div>
            <div
              className={`${
                flights.filterStats.stopPrices.twoOrMore.formattedPrice
                  ? ""
                  : "text-gray-500"
              }`}
            >
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  checked={filters === "2stops"}
                  onChange={(event) =>
                    setFilters(event.target.checked ? "2stops" : "")
                  }
                  className={`${
                    flights.filterStats.stopPrices.twoOrMore.formattedPrice
                      ? ""
                      : "cursor-not-allowed"
                  }`}
                />
                <div className="pl-2">2+ Stops</div>
              </div>
              <div className="pl-5">
                {flights.filterStats.stopPrices.twoOrMore.formattedPrice
                  ? `from US ${flights.filterStats.stopPrices.twoOrMore.formattedPrice}`
                  : "None"}
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <div
          className="flex flex-row relative"
          onClick={() => {
            setShowDepartureTimes((prev) => !prev);
          }}
        >
          <div className="font-semibold text-lg py-2">Departure Times</div>
          <div className="absolute right-2 pt-3">
            {showDepartureTimes ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-3 w-3"
                transform="rotate(180)"
              >
                <path
                  d="M19.113 8.095a1.496 1.496 0 0 1 0 2.008l-6.397 5.948a1 1 0 0 1-1.358.003l-6.532-6.01a1.427 1.427 0 0 1 .138-1.949 1.57 1.57 0 0 1 1.997-.103l5.078 4.638 4.97-4.535a1.72 1.72 0 0 1 2.104 0"
                  fill="gray"
                ></path>
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  fill="gray"
                />{" "}
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-3 w-3"
              >
                <path
                  d="M19.113 8.095a1.496 1.496 0 0 1 0 2.008l-6.397 5.948a1 1 0 0 1-1.358.003l-6.532-6.01a1.427 1.427 0 0 1 .138-1.949 1.57 1.57 0 0 1 1.997-.103l5.078 4.638 4.97-4.535a1.72 1.72 0 0 1 2.104 0"
                  fill="gray"
                ></path>
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  fill="gray"
                />{" "}
              </svg>
            )}
          </div>
        </div>
        {showDepartureTimes && (
          <div className="pb-12">
            {minDepartureTime !== Infinity &&
              maxDepartureTime !== -Infinity && (
                <TimeRangeSlider
                  min={minDepartureTime}
                  max={maxDepartureTime}
                  onChange={({ min, max }) => {
                    console.log(`min = ${min}, max = ${max}`);
                    setMaxCurrentDeparture(max);
                  }}
                  inputType="time"
                />
              )}
          </div>
        )}
      </div>
      <div>
        <div
          className="flex flex-row relative"
          onClick={() => {
            setShowArrivalTimes((prev) => !prev);
          }}
        >
          <div className="font-semibold text-lg py-2">Arrival Times</div>
          <div className="absolute right-2 pt-3">
            {showArrivalTimes ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-3 w-3"
                transform="rotate(180)"
              >
                <path
                  d="M19.113 8.095a1.496 1.496 0 0 1 0 2.008l-6.397 5.948a1 1 0 0 1-1.358.003l-6.532-6.01a1.427 1.427 0 0 1 .138-1.949 1.57 1.57 0 0 1 1.997-.103l5.078 4.638 4.97-4.535a1.72 1.72 0 0 1 2.104 0"
                  fill="gray"
                ></path>
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  fill="gray"
                />{" "}
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-3 w-3"
              >
                <path
                  d="M19.113 8.095a1.496 1.496 0 0 1 0 2.008l-6.397 5.948a1 1 0 0 1-1.358.003l-6.532-6.01a1.427 1.427 0 0 1 .138-1.949 1.57 1.57 0 0 1 1.997-.103l5.078 4.638 4.97-4.535a1.72 1.72 0 0 1 2.104 0"
                  fill="gray"
                ></path>
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  fill="gray"
                />{" "}
              </svg>
            )}
          </div>
        </div>
        {showArrivalTimes && (
          <div className="pb-12">
            {minArrivalTime !== Infinity && maxArrivalTime !== -Infinity && (
              <TimeRangeSlider
                min={minArrivalTime}
                max={maxArrivalTime}
                onChange={({ min, max }) => {
                  console.log(`min = ${min}, max = ${max}`);
                  setMaxCurrentArrival(max);
                }}
                inputType="time"
              />
            )}
          </div>
        )}
      </div>
      <div className="">
        <div
          className="flex flex-row relative"
          onClick={() => {
            setShowPrice((prev) => !prev);
          }}
        >
          <div className="font-semibold text-lg py-2">Price</div>
          <div className="absolute right-2 pt-3">
            {showPrice ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-3 w-3"
                transform="rotate(180)"
              >
                <path
                  d="M19.113 8.095a1.496 1.496 0 0 1 0 2.008l-6.397 5.948a1 1 0 0 1-1.358.003l-6.532-6.01a1.427 1.427 0 0 1 .138-1.949 1.57 1.57 0 0 1 1.997-.103l5.078 4.638 4.97-4.535a1.72 1.72 0 0 1 2.104 0"
                  fill="gray"
                ></path>
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  fill="gray"
                />{" "}
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-3 w-3"
              >
                <path
                  d="M19.113 8.095a1.496 1.496 0 0 1 0 2.008l-6.397 5.948a1 1 0 0 1-1.358.003l-6.532-6.01a1.427 1.427 0 0 1 .138-1.949 1.57 1.57 0 0 1 1.997-.103l5.078 4.638 4.97-4.535a1.72 1.72 0 0 1 2.104 0"
                  fill="gray"
                ></path>
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  fill="gray"
                />{" "}
              </svg>
            )}
          </div>
        </div>
        {showPrice && (
          <div className="pb-12">
            {minPrice !== Infinity && maxPrice !== -Infinity && (
              <TimeRangeSlider
                min={minPrice}
                max={maxPrice}
                onChange={({ min, max }) => {
                  console.log(`min = ${min}, max = ${max}`);
                  setMax(max);
                }}
                inputType="price"
              />
            )}
          </div>
        )}
      </div>
      <div className="">
        <div
          className="flex flex-row relative"
          onClick={() => {
            setShowJourneyDuration((prev) => !prev);
          }}
        >
          <div className="font-semibold text-lg py-2">Journey Duration</div>
          <div className="absolute right-2 pt-3">
            {showJourneyDuration ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-3 w-3"
                transform="rotate(180)"
              >
                <path
                  d="M19.113 8.095a1.496 1.496 0 0 1 0 2.008l-6.397 5.948a1 1 0 0 1-1.358.003l-6.532-6.01a1.427 1.427 0 0 1 .138-1.949 1.57 1.57 0 0 1 1.997-.103l5.078 4.638 4.97-4.535a1.72 1.72 0 0 1 2.104 0"
                  fill="gray"
                ></path>
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  fill="gray"
                />{" "}
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-3 w-3"
              >
                <path
                  d="M19.113 8.095a1.496 1.496 0 0 1 0 2.008l-6.397 5.948a1 1 0 0 1-1.358.003l-6.532-6.01a1.427 1.427 0 0 1 .138-1.949 1.57 1.57 0 0 1 1.997-.103l5.078 4.638 4.97-4.535a1.72 1.72 0 0 1 2.104 0"
                  fill="gray"
                ></path>
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  fill="gray"
                />{" "}
              </svg>
            )}
          </div>
        </div>
        {showJourneyDuration && (
          <div className="pb-12 ">
            {minDuration !== Infinity && maxDuration !== -Infinity && (
              <TimeRangeSlider
                min={minDuration}
                max={maxDuration}
                onChange={({ min, max }) => {
                  console.log(
                    `min = ${min}, max = ${max}, duration= ${maxCurrentDuration}`
                  );
                  setMaxCurrentDuration(max * 60);
                }}
                inputType="time"
              />
            )}
          </div>
        )}
      </div>
      <div className="mb-12 pb-3">
        <div
          className="flex flex-row relative"
          onClick={() => {
            setShowAirlines((prev) => !prev);
          }}
        >
          <div className="font-semibold text-lg py-2">Airlines</div>
          <div className="absolute right-2 pt-3">
            {showAirlines ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-3 w-3"
                transform="rotate(180)"
              >
                <path
                  d="M19.113 8.095a1.496 1.496 0 0 1 0 2.008l-6.397 5.948a1 1 0 0 1-1.358.003l-6.532-6.01a1.427 1.427 0 0 1 .138-1.949 1.57 1.57 0 0 1 1.997-.103l5.078 4.638 4.97-4.535a1.72 1.72 0 0 1 2.104 0"
                  fill="gray"
                ></path>
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  fill="gray"
                />{" "}
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-3 w-3"
              >
                <path
                  d="M19.113 8.095a1.496 1.496 0 0 1 0 2.008l-6.397 5.948a1 1 0 0 1-1.358.003l-6.532-6.01a1.427 1.427 0 0 1 .138-1.949 1.57 1.57 0 0 1 1.997-.103l5.078 4.638 4.97-4.535a1.72 1.72 0 0 1 2.104 0"
                  fill="gray"
                ></path>
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                  fill="gray"
                />{" "}
              </svg>
            )}
          </div>
        </div>
        {showAirlines && (
          <div>
            {flights?.filterStats.carriers
              .slice(0, 10)
              .map((carrier, index) => (
                <div>
                  <div className="flex flex-row mb-3">
                    <input
                      type="checkbox"
                      checked={airline === carrier.name}
                      onChange={(event) => {
                        airline === carrier.name
                          ? setAirline("")
                          : setAirline(carrier.name);
                      }}
                    />
                    <div className="pl-2">{carrier.name}</div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightsFilter;
