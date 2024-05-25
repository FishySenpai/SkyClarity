import React, { useState, useEffect } from "react";
import flightsJson from "../../flights.json";
import hotels from "../../hotels.json";
import FlightsFilter from "../Flights/FlightsFilter";
import { Link } from "react-router-dom";
const Hotels = () => {
  const [flights, setFlights] = useState(flightsJson);
  const [shortestMinPrice, setShortestMinPrice] = useState(0);
  const [cheapestMinPrice, setCheapestMinPrice] = useState(Infinity);
  const [shortestMinDuration, setShortestMinDuration] = useState(Infinity);
  const [cheapestMinDuration, setCheapestMinDuration] = useState(0);
  const [bestDuration, setBestDuration] = useState();
  const [bestPrice, setBestPrice] = useState();
  const [thumbnails, setThumbnails] = useState([]);
  const [hoveredHotelId, setHoveredHotelId] = useState(null);

  const handleMouseOver = (hotelId) => {
    setHoveredHotelId(hotelId);
  };

  const handleMouseOut = () => {
    console.log("test")
    setHoveredHotelId(null);
  };
  const handleImageClick = (hotelId, image) => {
    setThumbnails((prevThumbnails) => ({
      ...prevThumbnails,
      [hotelId]: image,
    }));
  };

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


  const fetchHotels = async () => {
    const url =
      "https://skyscanner80.p.rapidapi.com/api/v1/hotels/search?entityId=27539520&checkin=2024-04-30&checkout=2024-05-25&rooms=1&adults=1&resultsPerPage=15&page=1&currency=USD&market=US&locale=en-US";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "325a7f72damshf16ffcb2c3ed7bep1f566djsn006db2e1a65a",
        "X-RapidAPI-Host": "skyscanner80.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  if (flights) {
    return (
      <div>
        {console.log(hotels)}
        <button
          onClick={fetchHotels}
          className="bg-gray-900 text-white p-3 m-12 ml-96"
        >
          Click Me
        </button>

        <div className="flex flex-row">
          <div>
            <FlightsFilter flights={flights} />
          </div>
          <div className="flex flex-col cursor-pointer">
            <div className="flex flex-row bg-gray-100 rounded mb-1 text-gray-700 ">
              <div className="pl-3 border-b-4 border-white hover:border-gray-800">
                <div className="w-[215px] text-lg font-semibold">Best</div>
                {/* <div className="flex flex-row">
                  <div>${bestPrice?.toFixed(0)} . </div>
                  <div className="pl-1">{formatDuration(bestDuration)}</div>
                </div> */}
              </div>
              <div className=" pl-3 border-b-4 border-white hover:border-gray-800">
                <div className="w-[215px] text-lg font-semibold">Cheapest</div>
                {/* <div className="flex flex-row">
                  <div>${cheapestMinPrice.toFixed(0)} . </div>
                  <div className="pl-1">
                    {formatDuration(cheapestMinDuration)}
                  </div>
                </div> */}
              </div>
              <div className=" pl-3 border-b-4 border-white hover:border-gray-800">
                <div className="w-[215px] text-lg font-semibold">Fastest</div>
                <div className="flex flex-row">
                  {/* <div>{shortestMinPrice} . </div>
                  <div className="pl-1">
                    {formatDuration(shortestMinDuration)}
                  </div> */}
                </div>
              </div>
            </div>
            <div>
              {hotels?.hotelCards.slice(0, 5).map((hotel, index) => (
                <Link to={`/hotels/hotel/${hotel.id}`}>
                  <div className="bg-gray-100 rounded text-gray-700 w-[680px] mb-2  flex flex-row divide-x-2 divide-gray-400">
                    <div className="w-[530px] py-4">
                      <div key={index} className="flex flex-row ">
                        <div
                          className="px-3 relative"
                          onMouseOver={() => handleMouseOver(hotel.id)}
                          onMouseOut={handleMouseOut}
                        >
                          <div className="w-[350px] h-[350px]">
                            <img
                              className="w-[350px] h-[350px] rounded"
                              src={
                                thumbnails[hotel.id]
                                  ? thumbnails[hotel.id]
                                  : hotel.images[0]
                              }
                              alt="image"
                            />
                          </div>
                          {hoveredHotelId === hotel.id ? (
                            <div className="flex flex-row pl-9 w-[300px] absolute top-[220px] bg-gray-100 bg-opacity-70">
                              {hotel.images.map((image) => (
                                <ul className="flex flex-row" key={image}>
                                  <li>
                                    <button
                                      onMouseOver={() =>
                                        handleImageClick(hotel.id, image)
                                      }
                                    >
                                      <img
                                        className="h-[60px] w-[55px] mr-6 mt-2"
                                        src={image}
                                        alt="image"
                                      />
                                    </button>
                                  </li>
                                </ul>
                              ))}
                            </div>
                          ) : null}
                        </div>
                        <div>
                          <div className="pr-3 font-semibold text-lg ">
                            {hotel.name}
                          </div>
                          <div>{hotel.distance}</div>
                          <div className="flex flex-row space-x-2">
                            <div>{hotel.reviewsSummary.score}</div>
                            <div>{hotel.reviewsSummary.scoreDesc}</div>
                            <div>{hotel.reviewsSummary.total} reviews</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pl-8 ">
                      <div className="text-lg font-semibold  mt-3 ">
                        {/* US {flight.price.formatted} */}
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
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Hotels;
