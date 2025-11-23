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
  const [hotelsData, setHotelsData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [popularFilters, setPopularFilters] = useState([]);
  const [priceRange, setPriceRange] = useState([]);
  const [starRating, setStarRating] = useState([]);
  const [guestRating, setGuestRating] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [filterTag, setFilterTag] = useState("Recommended");
  const { destination, destinationId, checkIn, checkOut } = useParams();
  const filterRef = useRef(null);
  
  useOutsideClick(filterRef, () => {
    setShowFilter(false);
  });

  const isValidParam = (param) => {
    return param && !param.startsWith(":") && param.trim() !== "";
  };

  const fetchHotels = async () => {
    setIsLoading(true);
    const url = `https://blue-scraper.p.rapidapi.com/hotels/search?entityId=${destinationId}&checkin=${checkIn}&checkout=${checkOut}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_X_RapidAPI_Key2,
        "x-rapidapi-host": "blue-scraper.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log("Hotels API Response:", result);
      
      if (result.status && result.data) {
        setHotelsData(result.data);
      } else {
        console.error("Invalid API response:", result);
        setHotelsData(null);
      }
    } catch (error) {
      console.error("Error fetching hotels:", error);
      setHotelsData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (
      isValidParam(destinationId) &&
      isValidParam(checkIn) &&
      isValidParam(checkOut)
    ) {
      fetchHotels();
    } else {
      setIsLoading(false);
    }
  }, [destinationId, checkIn, checkOut]);

  // Helper function to convert price to number
  const getPriceValue = (hotel) => {
    if (!hotel.lowestPrice.rawBasePrice) return 0;
    return parseInt(hotel.lowestPrice.rawBasePrice);
  };

  // Filter hotels
  useEffect(() => {
    console.log("Applying filters:")
    if (!hotelsData?.results?.hotelCards) {
      setFilteredData([]);
      return;
    }

    let filtered = hotelsData.results.hotelCards.filter((hotel) => {
      // Filter by star rating
      if (starRating.length > 0) {
        const hotelStars = hotel.stars || 0;
        if (!starRating.includes(hotelStars.toString())) {
          return false;
        }
      }

      // Filter by guest rating
      if (guestRating.length > 0) {
        const hotelGuestRating = hotel.reviewsSummary?.score || 0;
        const roundedRating = Math.floor(hotelGuestRating);
        if (guestRating > hotelGuestRating) {
          return false;
        }
      }

      // Filter by price range
      if (priceRange.length > 0) {
        const hotelPrice = getPriceValue(hotel);
        const inRange = priceRange.some((range) => {
          const [min, max] = range.split(" - ").map(Number);
          return hotelPrice >= min && hotelPrice <= max;
        });
        if (!inRange) {
          return false;
        }
      }

      return true;
    });

    setFilteredData(filtered);
  }, [starRating, guestRating, priceRange]);

  // Sort hotels
  useEffect(() => {
    if (!filteredData || filteredData.length === 0) return;

    let sorted = [...filteredData];

    switch (filterTag) {
      case "TopReviews":
        sorted.sort((a, b) => {
          const ratingA = a.reviews?.value || 0;
          const ratingB = b.reviews?.value || 0;
          return ratingB - ratingA;
        });
        break;
      case "LowestPrice":
        sorted.sort((a, b) => {
          return getPriceValue(a) - getPriceValue(b);
        });
        break;
      case "MostStars":
        sorted.sort((a, b) => {
          const starsA = a.rating?.value || 0;
          const starsB = b.rating?.value || 0;
          return starsB - starsA;
        });
        break;
      case "Recommended":
      default:
        // Keep original order
        break;
    }

    setFilteredData(sorted);
  }, [filterTag]);

  const destinationName =
    hotelsData?.results?.searchSummary?.entity?.name || destination || "destination";
  const totalHotels =
    hotelsData?.results?.searchSummary?.filteredTotal || 0;

  return (
    <div className="bg-gray-50">
      <div className="relative">
        <img
          src={hotelsImg}
          className="h-[400px] absolute inset-0 w-full object-cover"
        />
        <div className="absolute top-24 1lg:top-20 w-full flex flex-col items-center">
          <div className="w-full flex flex-col items-start 1md:items-center">
            <div className="h-[120px] w-full 1md:w-fit relative z-50">
              <HotelsSearch home={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col absolute top-[505px] 2sm:top-[460px] 1sm:top-[400px] 1md:top-[330px] justify-center mx-auto bg-gray-100 pt-4 rounded-t-3xl w-full">
        <div className="text-2xl 2sm:text-3xl 2sm:pb-3 text-gray-800 font-bold pt-20 1lg:pt-2 w-full px-4  1sm:w-[680px] 1md:w-[900px] 1lg:w-[982px] xl:w-[1200px] 1xl:w-[1300px] flex flex-col 2sm:mx-auto 1xl:pl-5">
          <div>Available Hotels in {destinationName}</div>
          <span className="text-gray-700 font-normal text-[18px]">
            {isValidParam(checkIn) && isValidParam(checkOut)
              ? `Showing results for your stay from ${checkIn} to ${checkOut}. Use the filters on the left to find the perfect match.`
              : "Please enter your destination and dates to search for hotels."}
          </span>
        </div>

        <div className="flex flex-row justify-center mx-auto bg-gray-100 pt-4 rounded-t-3xl w-full relative">
          {isLoading ? (
            <HotelsLoading />
          ) : hotelsData && hotelsData.results ? (
            <>
              {showFilter && (
                <div className="fixed inset-0 bg-gray-900 opacity-50 z-50"></div>
              )}
              <div
                ref={filterRef}
                className={`${
                  showFilter
                    ? "fixed top-0 left-0 z-50 bg-white duration-500 "
                    : " fixed top-0 -left-[300px] z-50 bg-white duration-500"
                } xl:static xl:mx-12 xl:block h-full w-[300px]`}
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

              <div className="flex flex-col">
                <div className="flex flex-row sm:text-lg cursor-pointer font-semibold rounded-lg pl-4 sm:space-x-2 sm:py-2 pt-3 sm:pt-3 h-fit mb-2 text-gray-700 bg-white overflow-hidden w-full 1sm:w-[625px] 1md:w-[880px] 1lg:w-[923px]">
                  <div
                    className={`hover:border-b-4 hover:border-gray-600 pr-3 sm:pr-0 ${
                      filterTag === "Recommended"
                        ? "border-b-4 border-gray-700"
                        : ""
                    } flex-1`}
                    onClick={() => setFilterTag("Recommended")}
                  >
                    <div>Recommended</div>
                  </div>
                  <div
                    className={`hover:border-b-4 hover:border-gray-600 hidden 3sm:block ${
                      filterTag === "TopReviews"
                        ? "border-b-4 border-gray-700"
                        : ""
                    } flex-1`}
                    onClick={() => setFilterTag("TopReviews")}
                  >
                    <div>Top Reviews</div>
                  </div>
                  <div
                    className={`hover:border-b-4 hover:border-gray-600 hidden sm:block ${
                      filterTag === "LowestPrice"
                        ? "border-b-4 border-gray-700"
                        : ""
                    } flex-1`}
                    onClick={() => setFilterTag("LowestPrice")}
                  >
                    <div>Lowest Price</div>
                  </div>
                  <div
                    className={`hover:border-b-4 hover:border-gray-600 hidden 1md:block ${
                      filterTag === "MostStars"
                        ? "border-b-4 border-gray-700"
                        : ""
                    } flex-1`}
                    onClick={() => setFilterTag("MostStars")}
                  >
                    <div>Most Stars</div>
                  </div>
                  <div
                    className={`hover:border-b-4 hover:border-gray-600 block xl:hidden ${
                      filterTag === "ShowFilter"
                        ? "border-b-4 border-gray-700"
                        : ""
                    } flex-1`}
                  >
                    <button
                      className="w-fit flex items-center space-x-1 text-gray-700"
                      onClick={() => setShowFilter(!showFilter)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                      >
                        <path
                          d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"
                          fill="rgb(55 65 81)"
                        />
                      </svg>
                      <span>All Filters</span>
                    </button>
                  </div>
                </div>

                <div className="w-full 1sm:w-[625px] 1md:w-[880px] 1lg:w-[975px]">
                  {console.log("Rendering filtered hotels:", filteredData)},
                  {filteredData && filteredData.length > 0 ? (
                    filteredData.map((hotel) => (
                      <HotelInfo
                        key={hotel.id}
                        index={hotel.id}
                        hotel={hotel}
                      />
                    ))
                  ) : (
                    <div className="w-full 1sm:w-[625px] 1md:w-[880px] 1lg:w-[925px] pb-12">
                      <div className="flex flex-col justify-center items-center">
                        <img src={NoResults} alt="" className="h-[300px]" />
                        <div className="text-3xl text-black font-semibold">
                          No Results Found
                        </div>
                        <div className="pt-1">
                          Oops! We couldn't find any results. Please tweak your
                          search or try different filters.
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="w-full 1sm:w-[625px] 1md:w-[880px] 1lg:w-[925px] pb-12">
              <div className="flex flex-col justify-center items-center">
                <img src={NoResults} alt="" className="h-[300px]" />
                <div className="text-3xl text-black font-semibold">
                  No Hotels Found
                </div>
                <div className="pt-1">
                  Please enter a valid destination and dates to search for
                  hotels.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hotels;