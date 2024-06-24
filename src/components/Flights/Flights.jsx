import React, { useState, useEffect } from "react";
import FlightsFilter from "./FlightsFilter";
const Flights = ({ flights }) => {
  const [shortestMinPrice, setShortestMinPrice] = useState(0);
  const [cheapestMinPrice, setCheapestMinPrice] = useState(Infinity);
  const [shortestMinDuration, setShortestMinDuration] = useState(Infinity);
  const [cheapestMinDuration, setCheapestMinDuration] = useState(0);
  const [bestDuration, setBestDuration] = useState();
  const [bestPrice, setBestPrice] = useState();
  useEffect(() => {
    if (flights && flights.itineraries) {
      let shortestDuration = Infinity;
      let shortestPrice = 0;
      let cheapestPrice = Infinity;
      let cheapestDuration = 0;
      let bestDuration = Infinity;
      let bestPrice = Infinity;

      flights.itineraries.forEach((flight) => {
        const duration = flight.legs[0].durationInMinutes;
        const price = flight.price.raw;

        // Update shortest duration and corresponding price
        if (duration < shortestDuration) {
          shortestDuration = duration;
          shortestPrice = flight.price.formatted;
        }

        // Update cheapest price and corresponding duration
        if (price < cheapestPrice) {
          cheapestPrice = price;
          cheapestDuration = duration;
        }
        const cost = duration + price; // Total cost of time and money
        const bestCost = bestDuration + bestPrice; // Total cost of time and money for the best flight so far
        if (cost < bestCost) {
          bestDuration = duration;
          bestPrice = price;
        }
      });

      // Update state after iterating through all flights
      setShortestMinDuration(shortestDuration);
      setShortestMinPrice(shortestPrice);
      setCheapestMinDuration(cheapestDuration);
      setCheapestMinPrice(cheapestPrice);
      setBestDuration(bestDuration);
      setBestPrice(bestPrice);
    }
  }, [flights]);

  function formatDuration(durationInMinutes) {
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    return `${hours}h${minutes}m`;
  }
  if (flights) {
    return (
      <div className="flex flex-row">
        <div>
          <FlightsFilter flights={flights} />
        </div>
        <div className="flex flex-col cursor-pointer">
          <div className="flex flex-row bg-gray-100 rounded mb-1 text-gray-700 ">
            <div className="pl-3 border-b-4 border-white hover:border-gray-800">
              <div className="w-[215px] text-lg font-semibold">Best</div>
              <div className="flex flex-row">
                <div>${bestPrice?.toFixed(0)} . </div>
                <div className="pl-1">{formatDuration(bestDuration)}</div>
              </div>
            </div>
            <div className=" pl-3 border-b-4 border-white hover:border-gray-800">
              <div className="w-[215px] text-lg font-semibold">Cheapest</div>
              <div className="flex flex-row">
                <div>${cheapestMinPrice.toFixed(0)} . </div>
                <div className="pl-1">
                  {formatDuration(cheapestMinDuration)}
                </div>
              </div>
            </div>
            <div className=" pl-3 border-b-4 border-white hover:border-gray-800">
              <div className="w-[215px] text-lg font-semibold">Fastest</div>
              <div className="flex flex-row">
                <div>{shortestMinPrice} . </div>
                <div className="pl-1">
                  {formatDuration(shortestMinDuration)}
                </div>
              </div>
            </div>
          </div>
          <div>
            {console.log(flights)}
            {flights?.itineraries.slice(0, 20).map((flight, index) => (
              <div className="bg-gray-100 rounded text-gray-700 w-[680px] mb-2  flex flex-row divide-x-2 divide-gray-400">
                <div className="w-[530px] py-4">
                  {flight.legs?.map((leg, index) => (
                    <div key={index} className="flex flex-row ">
                      <div className="flex flex-row px-4 w-[200px]">
                        <img
                          className="h-[30px] w-[32px] "
                          src={leg.carriers?.marketing[0].logoUrl}
                          alt=""
                        />
                        <div className="pr-3 pl-4">
                          {leg.carriers?.marketing[0].name}
                        </div>
                      </div>
                      <div className="pr-4">
                        <div className="text-lg font-semibold">
                          {new Date(leg.departure).toLocaleTimeString([], {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                          })}
                        </div>
                        <div> {leg.origin.displayCode}</div>
                      </div>

                      <div className="flex flex-row ">
                        <div className="flex flex-col">
                          <div className="flex flex-row text-sm justify-center ">
                            {formatDuration(
                              flight.legs?.reduce(
                                (totalDuration, leg) =>
                                  totalDuration + leg.durationInMinutes,
                                0
                              )
                            )}
                          </div>
                          <div className="flex flex-row">
                            <div className="w-2 h-2 mt-[9px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                                  fill="gray"
                                />
                              </svg>
                            </div>
                            -----
                            <div className="text-red-400 text-sm bg-gray-200 rounded">
                              {leg.stopCount} stops
                            </div>
                            -----
                            <div className="w-2 h-2 mt-[9px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                                  fill="gray"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="flex flex-row justify-center">
                            {leg.segments?.slice(0, -1).map((stop, index) => (
                              <div key={index} className="text-[12px]">
                                {stop.destination.displayCode}
                                {index !== leg.segments.length - 2 && ","}
                              </div>
                            ))}
                          </div>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xml:space="preserve"
                          viewBox="0 0 12 12"
                          class="h-5 w-5 mt-[20px]"
                        >
                          <path
                            fill="#898294"
                            d="M3.922 12h.499a.52.52 0 0 0 .444-.247L7.949 6.8l3.233-.019A.8.8 0 0 0 12 6a.8.8 0 0 0-.818-.781L7.949 5.2 4.866.246A.525.525 0 0 0 4.421 0h-.499a.523.523 0 0 0-.489.71L5.149 5.2H2.296l-.664-1.33a.523.523 0 0 0-.436-.288L0 3.509 1.097 6 0 8.491l1.196-.073a.523.523 0 0 0 .436-.288l.664-1.33h2.853l-1.716 4.49a.523.523 0 0 0 .489.71"
                          ></path>
                        </svg>
                      </div>
                      <div className="flex flex-col pl-4">
                        <div className=" text-lg font-semibold">
                          {new Date(leg.arrival).toLocaleTimeString([], {
                            hour: "numeric",
                            minute: "2-digit",
                            hour12: true,
                          })}
                        </div>
                        <div>{leg.destination.displayCode}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pl-8 ">
                  <div className="text-lg font-semibold  mt-3 ">
                    US {flight.price.formatted}
                  </div>
                  <div>
                    <button className="px-3 py-1 rounded bg-gray-800 text-white mt-1 font-semibold flex flex-row">
                      Select
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
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Flights;
