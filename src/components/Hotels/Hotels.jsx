import React, { useState, useEffect } from "react";
import flightsJson from "../../flights.json";
import HotelInfo from "./HotelInfo";
import HotelsFilter from "./HotelsFilter";
const Hotels = ({hotelsData}) => {
  const [flights, setFlights] = useState(flightsJson);

  if (hotelsData) {
    return (
      <div>


        <div className="flex flex-row">
          <div>
            <HotelsFilter hotelsData={hotelsData}/>
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
