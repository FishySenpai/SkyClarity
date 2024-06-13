import React, { useState, useEffect } from "react";
import flightsJson from "../../flights.json";
import hotelsData from "../../hotels.json";
import FlightsFilter from "../Flights/FlightsFilter";
import { Link } from "react-router-dom";
import HotelInfo from "./HotelInfo";
const Hotels = () => {
  const [flights, setFlights] = useState(flightsJson);

  const fetchHotels = async () => {
    const url =
      "https://skyscanner80.p.rapidapi.com/api/v1/hotels/search?entityId=27544008&checkin=2024-06-22&checkout=2024-07-20&rooms=1&adults=1&resultsPerPage=15&page=1&priceType=PRICE_PER_NIGHT&sorting=-relevance&currency=USD&market=US&locale=en-US";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "325a7f72damshf16ffcb2c3ed7bep1f566djsn006db2e1a65a",
        "x-rapidapi-host": "skyscanner80.p.rapidapi.com",
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
        {console.log(hotelsData)}
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
            <div>
              {hotelsData.hotels.slice(0, 10).map((hotel, index) => (
                // <Link to={`/hotels/hotel/${hotel.id}`}>

                <HotelInfo index={hotel.id} hotel={hotel} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Hotels;
