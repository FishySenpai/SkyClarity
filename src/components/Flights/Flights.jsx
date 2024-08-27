import React, { useState, useEffect } from "react";
import FlightsFilter from "./FlightsFilter";
import FlightsSearch from "./FlightsSearch";
import flighsJson from "./Assets/flights.json";
import flightsImg from "./Assets/flights-img.jpg";
import { useParams, Link } from "react-router-dom";
import FlightsLoading from "./FlightsLoading";
import NoResults from "../Assets/noresults.png";
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
  const [maxCurrentPrice, setMaxCurrentPrice] = useState(-Infinity);
  const [minCurrentPrice, setMinCurrentPrice] = useState(Infinity);
  const [maxCurrentDeparture, setMaxCurrentDeparture] = useState(-Infinity);
  const [minCurrentDeparture, setMinCurrentDeparture] = useState(Infinity);
  const [maxCurrentArrival, setMaxCurrentArrival] = useState(-Infinity);
  const [minCurrentArrival, setMinCurrentArrival] = useState(Infinity);
  const [maxCurrentDuration, setMaxCurrentDuration] = useState(-Infinity);
  const [minCurrentDuration, setMinCurrentDuration] = useState(Infinity);
  const [airline, setAirline] = useState("");
  const [filteredFlights, setFilteredFlights] = useState([]);

  const { fromLocation, fromId, toLocation, toId, departdate, returndate } =
    useParams();
  const [filters, setFilters] = useState("");
  const isValidParam = (param) => {
    return !param.startsWith(":") && param.trim() !== "";
  };
  useEffect(() => {
    console.log("test");
    const newFilteredFlights = flights?.itineraries
      .filter((flight) => {
        // Filter by stop count
        if (filters === "direct") {
          return (
            flight.legs[0].stopCount === 0 && flight.legs[1].stopCount === 0
          );
        } else if (filters === "1stop") {
          return flight.legs[0].stopCount === 1;
        } else if (filters === "2stops") {
          return flight.legs[0].stopCount === 2;
        }
        return true; // Show all flights if no stop count filter is applied
      })
      .filter((flight) => {
        console.log("Test");
        // Filter by departure
        if (
          maxCurrentDeparture !== -Infinity &&
          minCurrentDeparture !== Infinity
        ) {
          if (returndate) {
            const d1 = new Date(flight.legs[0]?.arrival);
            const d2 = new Date(flight.legs[1]?.arrival);
            const departure1 = d1.getHours();
            const departure2 = d2.getHours();
            console.log(
              "Departure Filter:",
              minCurrentDeparture,
              maxCurrentDeparture,
              departure1,
              departure2
            );

            return (
              departure1 <= maxCurrentDeparture &&
              departure2 <= maxCurrentDeparture &&
              departure1 >= minCurrentDeparture &&
              departure2 >= minCurrentDeparture
            );
          } else {
            const departure1 =
              flight.legs[0]?.arrival.getHours() +
              flight.legs[0]?.arrival.getMinutes() / 60;

            console.log("Departure Filter:", maxCurrentDeparture, departure1);
            return (
              departure1 <= maxCurrentDeparture &&
              departure1 >= minCurrentDeparture
            );
          }
        }
        return true; // Show all flights if no departure filter is applied
      })
      .filter((flight) => {
        console.log("Test");
        // Filter by departure
        if (maxCurrentArrival !== -Infinity && minCurrentArrival !== Infinity) {
          if (returndate) {
            const a1 = new Date(flight.legs[0]?.arrival);
            const a2 = new Date(flight.legs[1]?.arrival);
            const arrival1 = a1.getHours();

            const arrival2 = a2.getHours();

            console.log(
              "Arrival Filter:",
              maxCurrentArrival,
              minCurrentArrival,
              arrival1,
              arrival2
            );

            return (
              arrival1 <= maxCurrentArrival &&
              arrival2 <= maxCurrentArrival &&
              arrival1 >= minCurrentArrival &&
              arrival2 >= minCurrentArrival
            );
          } else {
            const arrival1 =
              flight.legs[0]?.arrival.getHours() +
              flight.legs[0]?.arrival.getMinutes() / 60;

            console.log(
              "Arrival Filter:",
              minCurrentArrival,
              maxCurrentArrival,
              arrival1
            );
            return (
              arrival1 <= maxCurrentArrival && arrival1 >= minCurrentArrival
            );
          }
        }
        return true; // Show all flights if no departure filter is applied
      })
      .filter((flight) => {
        // Filter by price
        if (maxCurrentPrice !== -Infinity && minCurrentPrice !== Infinity) {
          // Round the price up to the next whole number
          const roundedPrice = Math.ceil(flight.price.raw);

          console.log(
            "Price Filter:",
            minCurrentPrice,
            maxCurrentPrice,
            roundedPrice
          );
          return (
            roundedPrice <= maxCurrentPrice && roundedPrice >= minCurrentPrice
          );
        }
        return true; // Show all flights if no price filter is applied
      })
      .filter((flight) => {
        console.log("Test");
        // Filter by duration
        if (maxCurrentDuration !== -Infinity) {
          if (returndate) {
            const duration1 = flight.legs[0]?.durationInMinutes;
            const duration2 = flight.legs[1]?.durationInMinutes;
            console.log(
              "Duration Filter:",
              (maxCurrentDuration / 60).toFixed(0),
              (duration1 / 60).toFixed(0),
              (duration2 / 60).toFixed(0)
            );
            if ((duration1 / 60).toFixed(0) !== (duration2 / 60).toFixed(0)) {
              return (
                (duration1 / 60).toFixed(0) <=
                  (maxCurrentDuration / 60).toFixed(0) &&
                (duration2 / 60).toFixed(0) <=
                  (maxCurrentDuration / 60).toFixed(0)
              );
            }
          } else {
            const duration1 = flight.legs[0]?.durationInMinutes;
            console.log("Duration Filter:", maxCurrentDuration, duration1);
            return duration1 <= maxCurrentDuration;
          }
        }
        return true; // Show all flights if no duration filter is applied
      })
      .filter((flight) => {
        // Filter by price
        if (airline) {
          console.log(
            "Airline:",
            airline,
            flight.legs[0].carriers.marketing[0].name
          );
          return flight.legs[0].carriers.marketing[0].name === airline;
        }
        return true; // Show all flights if no price filter is applied
      })
      .slice(0, 20);

    setFilteredFlights(newFilteredFlights);
  }, [
    filters,
    minCurrentPrice,
    maxCurrentPrice,
    flights,
    minCurrentDeparture,
    maxCurrentDeparture,
    maxCurrentArrival,
    minCurrentArrival,
    maxCurrentDuration,
    airline,
  ]);

  const fetchReturnFlights = async () => {
    try {
      setFlights(null);
      if (
        isValidParam(fromId) &&
        isValidParam(toId) &&
        isValidParam(departdate) &&
        isValidParam(returndate)
      ) {
        const url = `https://sky-scanner3.p.rapidapi.com/flights/search-roundtrip?fromEntityId=${fromId}&toEntityId=${toId}&departDate=${departdate}&returnDate=${returndate}`;
        const options = {
          method: "GET",
          headers: {
            "x-rapidapi-key": import.meta.env.VITE_X_RapidAPI_Key,
            "x-rapidapi-host": "sky-scanner3.p.rapidapi.com",
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

  useEffect(() => {
    if (
      isValidParam(fromId) &&
      isValidParam(toId) &&
      isValidParam(departdate) &&
      isValidParam(returndate)
    ) {
      fetchReturnFlights();
    }
  }, [fromId, toId, departdate, returndate]);

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
            src="https://content.skyscnr.com/m/3719e8f4a5daf43d/original/Flights-Placeholder.jpg"
            alt="Destination"
            className="absolute inset-0 w-full h-full object-cover object-bottom"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-20 text-white font-semibold text-3xl capitalize">
            Departing to {toLocation || ""}
          </div>
        </div>
        {flights ? (
          <div className="flex flex-row w-full sm:w-fit 1lg:w-[1050px] xl:w-[1230px]">
            <div className="hidden 1lg:block">
              <FlightsFilter
                flights={flights}
                filters={filters}
                setFilters={setFilters}
                maxCurrentPrice={maxCurrentPrice}
                setMaxCurrentPrice={setMaxCurrentPrice}
                minCurrentPrice={minCurrentPrice}
                setMinCurrentPrice={setMinCurrentPrice}
                maxCurrentArrival={maxCurrentArrival}
                setMaxCurrentArrival={setMaxCurrentArrival}
                minCurrentArrival={minCurrentArrival}
                setMinCurrentArrival={setMinCurrentArrival}
                maxCurrentDeparture={maxCurrentDeparture}
                setMaxCurrentDeparture={setMaxCurrentDeparture}
                minCurrentDeparture={minCurrentDeparture}
                setMinCurrentDeparture={setMinCurrentDeparture}
                minCurrentDuration={minCurrentDuration}
                setMinCurrentDuration={setMinCurrentDuration}
                maxCurrentDuration={maxCurrentDuration}
                setMaxCurrentDuration={setMaxCurrentDuration}
                airline={airline}
                setAirline={setAirline}
              />
            </div>
            <div className="flex flex-col cursor-pointer w-full">
              <div className="flex flex-row rounded-lg px-4 space-x-2 py-2 pt-4 mb-2 text-gray-700 bg-white overflow-hidden w-full sm:w-[600px] 1sm:w-[700px] 1md:w-[800px] lg:w-[980px] 1lg:w-[743px] xl:w-[880px]">
                <div
                  className={`hover:border-b-4 hover:border-gray-600   ${
                    priceTag === "Best" ? "border-b-4 border-gray-700" : ""
                  } flex-1`}
                  onClick={() => {
                    setPriceTag("Best");
                    console.log(priceTag);
                  }}
                >
                  <div className="text-lg font-semibold">Best</div>
                  <div className="flex flex-row">
                    <div>${bestPrice?.toFixed(0)} . </div>
                    <div className="pl-1">{formatDuration(bestDuration)}</div>
                  </div>
                </div>
                <div
                  className={`hover:border-b-4 hover:border-gray-600   ${
                    priceTag === "Cheapest" ? "border-b-4 border-gray-700" : ""
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
                  className={`hover:border-b-4 hover:border-gray-600   ${
                    priceTag === "Fastest" ? "border-b-4 border-gray-700" : ""
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
                {filteredFlights?.map((flight, index) => (
                  <div className=" rounded text-gray-700 w-full  1sm:w-[700px] 1md:w-[800px] lg:w-[980px] 1lg:w-[743px] xl:w-[880px] mb-2 bg-white  flex flex-col divide-y-2 1sm:divide-y-0 1sm:flex-row 1sm:divide-x-2 divide-gray-300">
                    <div className="w-full 1sm:w-[520px] 1md:w-[640px] lg:w-[780px] 1lg:w-[590px] xl:w-[680px] pb-4 pt-2 ">
                      <div>
                        {["shortest", "cheapest"].includes(flight.tags?.[0]) ? (
                          <div className="ml-3 px-2 py-1 bg-gray-200 capitalize text-red-400 rounded-sm w-fit mb-4 text-sm absolute">
                            {flight.tags[0]}
                          </div>
                        ) : (
                          ""
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
                                  {formatDuration(leg.durationInMinutes)}
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
                      <Link to={`/flights/${flights?.token}/${flight.id}`}>
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
                      </Link>
                    </div>
                  </div>
                ))}
                {filteredFlights?.length === 0 ? (
                  <div className="w-full 1sm:w-[625px] 1md:w-[880px] 1lg:w-[925px]  ">
                    <div className="flex flex-col justify-center items-center">
                      <img src={NoResults} alt="" className="h-[300px] " />
                      <div className="text-3xl text-black font-semibold">
                        No Results Found
                      </div>
                      <div className="pt-1">
                        Oops! We couldn’t find any results. Please tweak your
                        search or try different filters.
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-row w-full sm:w-fit 1lg:w-[1050px] xl:w-[1230px]">
            <FlightsLoading />
          </div>
        )}
      </div>
    </div>
  );
};

export default Flights;
