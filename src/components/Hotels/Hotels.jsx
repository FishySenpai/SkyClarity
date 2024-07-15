import React, { useState, useEffect } from "react";
import hotelsImg from "./hotels-img.jpg";
import HotelInfo from "./HotelInfo";
import HotelsFilter from "./HotelsFilter";
import hotelsDataJson from "../../hotels.json";
import HotelsSearch from "./HotelsSearch";
import { useParams } from "react-router-dom";
const Hotels = () => {
  const [hotelsData, setHotelsData] = useState(hotelsDataJson);
  const { destination, destinationId, checkIn, checkOut } = useParams();
  const isValidParam = (param) => {
    return !param.startsWith(":") && param.trim() !== "";
  };
  const fetchHotels = async (id) => {
    const url = `https://skyscanner80.p.rapidapi.com/api/v1/hotels/search?entityId=${destinationId}&checkin=${checkIn}&checkout=${checkOut}&rooms=1&adults=1&resultsPerPage=15&page=1&priceType=PRICE_PER_NIGHT&sorting=-relevance&currency=USD&market=US&locale=en-US`;
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
      setHotelsData(result.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (
      isValidParam(destinationId) &&
      isValidParam(checkIn) &&
      isValidParam(checkOut)
    ) {
      fetchHotels();
    }
  }, [destination, destinationId, checkIn, checkOut]);
  console.log(hotelsData);

  return (
    <div className="bg-gray-50">
      <img
        src={hotelsImg}
        className="h-[300px] absolute inset-0 top-[65px] w-full bg-cover bg-center overflow-hidden"
      />
      <div className="absolute top-32 left-[300px] h-[110px]">
        <HotelsSearch home={false} />
      </div>
      <div className="flex flex-row absolute top-[300px] pl-[267px] bg-gray-100 pt-12 rounded-t-3xl w-full">
        <div className="">
          {hotelsData ? <HotelsFilter hotelsData={hotelsData} /> : ""}
        </div>
        <div className="flex flex-col">
          <div>
            {hotelsData?.hotels.slice(0, 10).map((hotel, index) => (
              // <Link to={`/hotels/hotel/${hotel.id}`}>

              <HotelInfo index={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
