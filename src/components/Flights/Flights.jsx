import React, { useState, useEffect } from "react";
import FlightsFilter from "./FlightsFilter";
import FlightsSearch from "./FlightsSearch";
import flighsJson from "./Assets/flights.json";
import flightsImg from "./Assets/flights-img.jpg";
import { useParams } from "react-router-dom";
const Flights = () => {
  const [shortestMinPrice, setShortestMinPrice] = useState(0);
  const [cheapestMinPrice, setCheapestMinPrice] = useState(Infinity);
  const [shortestMinDuration, setShortestMinDuration] = useState(Infinity);
  const [cheapestMinDuration, setCheapestMinDuration] = useState(0);
  const [bestDuration, setBestDuration] = useState();
  const [bestPrice, setBestPrice] = useState();
  const [flights, setFlights] = useState(flighsJson);
  const [selectedOption, setSelectedOption] = useState("round-trip");
  const [priceTag, setPriceTag] = useState("Best");
  const { fromLocation, fromId, toLocation, toId, departdate, returndate } =
    useParams();

  const isValidParam = (param) => {
    return !param.startsWith(":") && param.trim() !== "";
  };

  const fetchReturnFlights = async () => {
    try {
      setFlights(null);
      if (
        isValidParam(fromId) &&
        isValidParam(toId) &&
        isValidParam(departdate) &&
        isValidParam(returndate)
      ) {
        const url = `https://skyscanner80.p.rapidapi.com/api/v1/flights/search-roundtrip?fromId=${fromId}&toId=${toId}&departDate=${departdate}&returnDate=${returndate}&adults=1&cabinClass=economy&currency=USD&market=US&locale=en-US`;
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "325a7f72damshf16ffcb2c3ed7bep1f566djsn006db2e1a65a",
            "X-RapidAPI-Host": "skyscanner80.p.rapidapi.com",
          },
        };

        try {
          const response = await fetch(url, options);
          const result = await response.json();
          setFlights(result.data);
          console.log(result);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error(
          "Invalid parameters: fromId, toId, departDate, or returnDate"
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   if (
  //     isValidParam(fromId) &&
  //     isValidParam(toId) &&
  //     isValidParam(departdate) &&
  //     isValidParam(returndate)
  //   ) {
  //     fetchReturnFlights();
  //   }
  // }, [fromId, toId, departdate, returndate]);

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
      <div className="bg-gray-50">
        <div className="relative">
          <div className="h-[600px] lg:h-[300px] absolute inset-0  bg-cover bg-center overflow-hidden">
            <img src={flightsImg} className="" />
          </div>
          <div className="absolute top-36 lg:top-16 z-50 w-full flex flex-col items-center">
            <div className="w-fit flex flex-col items-center">
              <div className="h-[160px] w-full 1sm:w-fit relative ">
                <FlightsSearch
                  flight={flights}
                  setFlights={setFlights}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col absolute pt-[150px] top-[450px] lg:top-[300px] justify-center items-center mx-auto 1lg:pr-[50px] bg-gray-100 lg:pt-12 rounded-t-3xl w-full">
          <div className="relative h-[60px] w-full sm:w-[600px] 1sm:w-[700px] 1md:w-[800px] lg:w-[980px] 1lg:w-[1050px] xl:w-[1230px] 1lg:ml-12  rounded-t-lg overflow-hidden">
            <img
              src={flights?.destinationImageUrl}
              alt="Destination"
              className="absolute inset-0 w-full h-full object-cover object-bottom"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-20 text-white font-semibold text-3xl capitalize">
              Departing to {toLocation}
            </div>
          </div>

          <div className="flex flex-row w-full sm:w-fit 1lg:w-[1050px] xl:w-[1230px]">
            <div className="hidden 1lg:block">
              <FlightsFilter flights={flights} />
            </div>
            <div className="flex flex-col cursor-pointer w-full">
              <div className="flex flex-row rounded-lg px-4 space-x-2 py-2 pt-4 mb-2 text-gray-700 bg-white overflow-hidden w-full sm:w-[600px] 1sm:w-[700px] 1md:w-[800px] lg:w-[980px] 1lg:w-[743px] xl:w-[880px]">
                <div
                  className={`border-b-4 border-white hover:border-gray-600 ${
                    priceTag === "Best" ? "border-gray-700" : ""
                  } flex-1`}
                  onClick={() => {
                    setPriceTag("Best");
                  }}
                >
                  <div className="text-lg font-semibold">Best</div>
                  <div className="flex flex-row">
                    <div>${bestPrice?.toFixed(0)} . </div>
                    <div className="pl-1">{formatDuration(bestDuration)}</div>
                  </div>
                </div>
                <div
                  className={`border-b-4 border-white hover:border-gray-600 ${
                    priceTag === "Cheapest" ? "border-gray-700" : ""
                  } flex-1`}
                  onClick={() => {
                    setPriceTag("Cheapest");
                  }}
                >
                  <div className="text-lg font-semibold">Cheapest</div>
                  <div className="flex flex-row">
                    <div>${cheapestMinPrice.toFixed(0)} . </div>
                    <div className="pl-1">
                      {formatDuration(cheapestMinDuration)}
                    </div>
                  </div>
                </div>
                <div
                  className={`border-b-4 border-white hover:border-gray-600 ${
                    priceTag === "Fastest" ? "border-gray-700" : ""
                  } flex-1`}
                  onClick={() => {
                    setPriceTag("Fastest");
                  }}
                >
                  <div className="text-lg font-semibold">Fastest</div>
                  <div className="flex flex-row">
                    <div>{shortestMinPrice} . </div>
                    <div className="pl-1">
                      {formatDuration(shortestMinDuration)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                {console.log(flights)}
                {flights?.itineraries.slice(0, 20).map((flight, index) => (
                  <div className=" rounded text-gray-700 w-full  1sm:w-[700px] 1md:w-[800px] lg:w-[980px] 1lg:w-[743px] xl:w-[880px] mb-2 bg-white  flex flex-col divide-y-2 1sm:divide-y-0 1sm:flex-row 1sm:divide-x-2 divide-gray-300">
                    <div className="w-full 1sm:w-[520px] 1md:w-[640px] lg:w-[780px] 1lg:w-[590px] xl:w-[680px] pb-4 pt-2 ">
                      <div>
                        {["shortest", "cheapest"].includes(
                          flight.legs[0]?.tags?.[0]
                        ) && (
                          <div className="ml-6 px-2 py-1 bg-gray-200 capitalize text-gray-700 rounded-sm w-fit mb-4">
                            {flight.legs[0].tags[0]}
                          </div>
                        )}
                      </div>
                      {flight.legs?.map((leg, index) => (
                        <div
                          key={index}
                          className="flex flex-col  relative min-h-[80px]"
                        >
                          <div className="flex flex-row absolute top-10 justify-between">
                            <div className="flex flex-row px-4 1md:w-[220px] lg:w-[300px] 1lg:w-[220px]">
                              <img
                                className="h-[40px] w-[50px] "
                                src={leg.carriers?.marketing[0].logoUrl}
                                alt=""
                              />
                              <div className="xl:pr-3 pl-4 pt-2 text-lg hidden 2sm:block 1sm:hidden 1md:block h-10 overflow-hidden">
                                {leg.carriers?.marketing[0].name}
                              </div>
                            </div>
                            <div className="pr-4">
                              <div className="sm:text-lg font-semibold">
                                {new Date(leg.departure).toLocaleTimeString(
                                  [],
                                  {
                                    hour: "numeric",
                                    minute: "2-digit",
                                    hour12: true,
                                  }
                                )}
                              </div>
                              <div> {leg.origin.displayCode}</div>
                            </div>

                            <div className="flex flex-row ">
                              <div className="flex flex-col">
                                <div className="flex flex-row  justify-center ">
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
                                  <div className="w-[25px] 2sm:w-[50px] xl:w-[65px] h-4 overflow-hidden">
                                    ----------
                                  </div>
                                  <div className="text-red-400 text-sm bg-gray-200 rounded">
                                    {leg.stopCount} stops
                                  </div>
                                  <div className="w-[25px] 2sm:w-[50px] xl:w-[65px] h-4 overflow-hidden">
                                    ----------
                                  </div>
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
                                  {leg.segments
                                    ?.slice(0, -1)
                                    .map((stop, index) => (
                                      <div key={index} className="text-sm">
                                        {stop.destination.displayCode}
                                        {index !== leg.segments.length - 2 &&
                                          ","}
                                      </div>
                                    ))}
                                </div>
                              </div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xml:space="preserve"
                                viewBox="0 0 12 12"
                                class="h-6 w-6 mt-[25px]"
                              >
                                <path
                                  fill="#898294"
                                  d="M3.922 12h.499a.52.52 0 0 0 .444-.247L7.949 6.8l3.233-.019A.8.8 0 0 0 12 6a.8.8 0 0 0-.818-.781L7.949 5.2 4.866.246A.525.525 0 0 0 4.421 0h-.499a.523.523 0 0 0-.489.71L5.149 5.2H2.296l-.664-1.33a.523.523 0 0 0-.436-.288L0 3.509 1.097 6 0 8.491l1.196-.073a.523.523 0 0 0 .436-.288l.664-1.33h2.853l-1.716 4.49a.523.523 0 0 0 .489.71"
                                ></path>
                              </svg>
                            </div>
                            <div className="flex flex-col pl-4">
                              <div className=" sm:text-lg font-semibold">
                                {new Date(leg.arrival).toLocaleTimeString([], {
                                  hour: "numeric",
                                  minute: "2-digit",
                                  hour12: true,
                                })}
                              </div>
                              <div>{leg.destination.displayCode}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="pr-5 pt-4 pb-8 1sm:pr-0 1sm:pl-8 1sm:py-8 flex flex-col items-end justify-end">
                      <div className="text-lg font-semibold  mt-3 ">
                        US {flight.price.formatted}
                      </div>
                      <div>
                        <button className="px-5 py-2 rounded bg-gray-800 text-white mt-1 font-semibold flex flex-row">
                          Select
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-3 h-4 ml-2 mt-[4px]"
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
        </div>
      </div>
    );
  }
};

export default Flights;
