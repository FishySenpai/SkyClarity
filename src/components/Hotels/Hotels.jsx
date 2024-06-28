import React, { useState, useEffect } from "react";
import flightsJson from "../../flights.json";
import HotelInfo from "./HotelInfo";
import HotelsFilter from "./HotelsFilter";
import hotelsData from "../../hotels.json";
const Hotels = () => {
  const [flights, setFlights] = useState(flightsJson);
console.log(hotelsData)
  if (hotelsData) {
    return (
      <div className="mx-auto flex justify-center">
        <div className="flex flex-row">
          <div className="">
            <HotelsFilter hotelsData={hotelsData} />
          </div>
          <div className="flex flex-col">
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
