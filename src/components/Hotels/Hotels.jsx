import React, { useState, useEffect } from "react";
import hotelsImg from "./hotels-img.jpg";
import HotelInfo from "./HotelInfo";
import HotelsFilter from "./HotelsFilter";
import hotelsDataJson from "../../hotels.json";
import HotelsSearch from "./HotelsSearch";
import { useParams } from "react-router-dom";
import HotelsLoading from "./HotelsLoading";
import NoResults from "../Assets/noresults.png";
const Hotels = () => {
  const [hotelsData, setHotelsData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [filteredData, setFilteredData] = useState(hotelsData?.hotels);
  const [popularFilters, setPopularFilters] = useState([]);
  const [priceRange, setPriceRange] = useState([]);
  const [starRating, setStarRating] = useState([]);
  const [guestRating, setGuestRating] = useState([]);
  const { destination, destinationId, checkIn, checkOut } = useParams();
  const isValidParam = (param) => {
    return !param.startsWith(":") && param.trim() !== "";
  };
  const fetchHotels = async (id) => {
    const url = `https://skyscanner80.p.rapidapi.com/api/v1/hotels/search?entityId=${destinationId}&checkin=${checkIn}&checkout=${checkOut}&rooms=1&adults=1&resultsPerPage=15&page=1&priceType=PRICE_PER_NIGHT&sorting=-relevance&currency=USD&market=US&locale=en-US`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_X_RapidAPI_Key,
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
  console.log(hotelsData);
  function formatCurrency(input) {
    if (typeof input !== "string") {
      // Handle cases where input is not a string (or undefined)
      return "Invalid input";
    }
    const currencyMatch = input.match(/₹ ([\d,]+)/);
    if (currencyMatch) {
      const amount = parseFloat(currencyMatch[1].replace(/,/g, ""));
      const usdAmount = amount / 83.4;
      return input.replace(`₹ ${currencyMatch[1]}`, `${usdAmount.toFixed(0)}`);
    }
    // Check for input starting with "₹" and extract the numeric part
    if (input.startsWith("₹")) {
      const amount = parseFloat(input.replace(/[^\d,]/g, "").replace(/,/g, ""));
      const usdAmount = amount / 83.4;
      return `${usdAmount.toFixed(0)}`;
    }

    // Check for input like "₹ 184,845 for 28 nights" and extract the numeric part

    // If already in USD or unrecognized format, return as is
    return input;
  }
  useEffect(() => {
    console.log("test");
    console.log(priceRange);
    const newFilteredData = hotelsData?.hotels
      .filter((hotel) => {
        // Filter by price
        if (Array.isArray(starRating) && starRating.length > 0) {
          console.log("Stars:", starRating, hotel.stars);
          return starRating.toLocaleString().includes(hotel.stars);
        }
        return true; // Show all flights if no price filter is applied
      })
      .filter((hotel) => {
        // Filter by price
        if (Array.isArray(guestRating) && guestRating.length > 0) {
          console.log("Stars:", guestRating, hotel.stars);
          return guestRating
            .toLocaleString()
            .includes(hotel.reviewSummary.value);
        }
        return true; // Show all flights if no price filter is applied
      })
      .filter((hotel) => {
        // Filter by price
        if (Array.isArray(priceRange) && priceRange.length > 0) {
          return priceRange.some((range) => {
            const [min, max] = range.split(" - ").map(Number);
            const hotelPrice = formatCurrency(hotel.price); // or formatCurrency(hotel.price) if needed
            console.log(min, max, priceRange, formatCurrency(hotel.price));
            return hotelPrice >= min && hotelPrice <= max;
          });
        }
        return true; // If no priceRange is provided, include all hotels
      })
      .slice(0, 20);

    setFilteredData(newFilteredData);
  }, [starRating, guestRating, priceRange]);
  useEffect(() => {
    setFilteredData(hotelsData?.hotels);
    console.log(filteredData);
  }, [hotelsData]);
  return (
    <div className="bg-gray-50">
      <img
        src={hotelsImg}
        className="h-[300px] absolute inset-0 top-[65px] w-full bg-cover bg-center overflow-hidden"
      />
      <div className="absolute top-36 1lg:top-32 w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-start 1md:items-center">
          <div className="h-[120px] w-full 1md:w-fit relative z-50">
            <HotelsSearch home={true} />
          </div>
        </div>
      </div>
      <div className="flex flex-row absolute top-[300px] justify-center mx-auto bg-gray-100 pt-12 rounded-t-3xl w-full">
        {hotelsData ? (
          <>
            <div className="hidden xl:block">
              <HotelsFilter
                hotelsData={hotelsData}
                popularFilters={popularFilters}
                setPopularFilters={setPopularFilters}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                starRating={starRating}
                setStarRating={setStarRating}
                guestRating={guestRating}
                setGuestRating={setGuestRating}
              />
            </div>
            <div className="flex flex-col pt-[150px] 1lg:pt-0 ">
              {console.log(filteredData)}
              <div className="w-full 1sm:w-[625px] 1md:w-[880px] 1lg:w-[975px]">
                {filteredData?.map((hotel, index) => (
                  // <Link to={`/hotels/hotel/${hotel.id}`}>
                  <HotelInfo key={hotel.id} index={hotel.id} hotel={hotel} />
                ))}
                {filteredData?.length === 0 ? (
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
          </>
        ) : (
          <HotelsLoading />
        )}
      </div>
    </div>
  );
};

export default Hotels;
