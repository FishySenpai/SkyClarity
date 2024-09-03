import React, { useState, useEffect, useRef } from "react";
import hotelsImg from "./hotels-img.jpg";
import HotelInfo from "./HotelInfo";
import HotelsFilter from "./HotelsFilter";
import hotelsDataJson from "../../hotels.json";
import HotelsSearch from "./HotelsSearch";
import { useParams } from "react-router-dom";
import HotelsLoading from "./HotelsLoading";
import NoResults from "../Assets/noresults.png";
import useOutsideClick from "../useOutsideClick";
const Hotels = () => {
  const [hotelsData, setHotelsData] = useState(hotelsDataJson.data);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredData, setFilteredData] = useState(hotelsData?.hotels);
  const [popularFilters, setPopularFilters] = useState([]);
  const [priceRange, setPriceRange] = useState([]);
  const [starRating, setStarRating] = useState([]);
  const [guestRating, setGuestRating] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const { destination, destinationId, checkIn, checkOut } = useParams();
  const filterRef = useRef(null);
  useOutsideClick(filterRef, () => {
    console.log("test");
    setShowFilter(false);
  });
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
  // useEffect(() => {
  //   if (
  //     isValidParam(destinationId) &&
  //     isValidParam(checkIn) &&
  //     isValidParam(checkOut)
  //   ) {
  //     fetchHotels();
  //   }
  // }, [destination, destinationId, checkIn, checkOut]);
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
  // useEffect(() => {
  //   setShowFilter(false);
  // }, [popularFilters, guestRating, priceRange, starRating]);
  useEffect(() => {
    setFilteredData(hotelsData?.hotels);
    console.log(filteredData);
  }, [hotelsData]);
  return (
    <div className="bg-gray-50">
      <img
        src={hotelsImg}
        className="h-[400px] absolute inset-0 top-[65px] w-full bg-cover bg-center overflow-hidden"
      />
      <div className="absolute top-36 1lg:top-32 w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-start 1md:items-center">
          <div className="h-[120px] w-full 1md:w-fit relative z-50">
            <HotelsSearch home={true} />
          </div>
        </div>
      </div>
      <div className="flex flex-col absolute top-[470px] 2sm:top-[450px] 1sm:top-[400px] 1md:top-[300px] justify-center mx-auto bg-gray-100 pt-4 rounded-t-3xl w-full">
        <div className="text-2xl 2sm:text-3xl pb-3 text-gray-800 font-bold pt-16 1lg:pt-6 w-full px-4  1sm:w-[680px] 1md:w-[900px] 1lg:w-[982px] xl:w-[1200px] 1xl:w-[1300px] flex flex-col 2sm:mx-auto 1xl:pl-5">
          <div>Available Hotels in Glasgow</div>
          <span className="text-gray-700 font-normal text-[18px]">
            Showing results for your stay from September 20, 2024, to October 8,
            2024. Use the filters on the left to find the perfect match.
          </span>
          <button
            className="w-fit flex xl:hidden text-[18px] items-center space-x-1 bg-gray-800 rounded-lg text-gray-50 px-2"
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-4 w-4"
            >
              <path
                d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"
                fill="white"
              />
            </svg>
            <span>Filters</span>
          </button>
        </div>

        <div className="flex flex-row  justify-center mx-auto bg-gray-100 pt-4 rounded-t-3xl w-full">
          {hotelsData ? (
            <>
              {showFilter && (
                <div className="fixed inset-0 bg-gray-900 opacity-50 z-50"></div>
              )}

              <div
                ref={filterRef}
                className={`${
                  showFilter
                    ? "fixed top-0 left-0 z-50 bg-white duration-500"
                    : " fixed top-0 -left-[300px] z-50 bg-white  duration-500"
                } xl:static xl:mx-12 xl:block h-fit`}
              >
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

              <div className="flex flex-col  ">
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
    </div>
  );
};

export default Hotels;
