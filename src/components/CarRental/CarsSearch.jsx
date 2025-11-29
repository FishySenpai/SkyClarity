import React, { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import useOutsideClick from "../useOutsideClick";
import { useNavigate, useParams } from "react-router-dom";
import loading from "../Assets/loading.png";
const CarsSearch = ({ dropOffCheck, setDropOffCheck }) => {
  const { pickUp, pickUpId, pickDate, dropDate } = useParams();
  const [pickUpLocation, setPickUpLocation] = useState();
  const [pickUpLocationId, setPickUpLocationId] = useState();
  const [dropOffLocation, setDropOffLocation] = useState();
  const [dropOffLocationId, setDropOffLocationId] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [value, onChange] = useState(new Date());
  const [pickUpToggle, setpickUpToggle] = useState(false);
  const [pickUpDate, setpickUpDate] = useState("");
  const [dropOffToggle, setdropOffToggle] = useState(false);
  const [dropOffDate, setdropOffDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("10:00");
  const [togglePickUpTime, setTogglePickUpTime] = useState(false);
  const [dropOffTime, setDropOffTime] = useState("10:00");
  const [toggleDropOffTime, setToggleDropOffTime] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [driverCheck, setDriverCheck] = useState(true);

  const pickUpPopupRef = useRef(null);
  const dropOffPopupRef = useRef(null);
  const pickUpTimePopupRef = useRef(null);
  const dropOffTimePopupRef = useRef(null);

  const navigate = useNavigate();
  const fetchLocation = async (location) => {
    const url = `https://blue-scraper.p.rapidapi.com/cars/autocomplete?query=${location}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_X_RapidAPI_Key2,
        "X-RapidAPI-Host": "blue-scraper.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      return result.data[0].entity_id;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

const handleSearch = async () => {
  setIsLoading(true);
  const pickUp = pickUpLocation;
  const dropOff = dropOffLocation;
  const pickDate = pickUpDate;
  const dropDate = dropOffDate;
  const pickTime = pickUpTime;
  const dropTime = dropOffTime;

  const pickUpId = await fetchLocation(pickUp);

  if (pickUpId && pickDate && dropDate) {
    setIsLoading(false);
    // Encode times for URL (replace : with %3A)
    const encodedPickTime = pickTime.replace(":", "%3A");
    const encodedDropTime = dropTime.replace(":", "%3A");
    navigate(
      `/carhire/search/${pickUp}/${pickUpId}/${pickDate}/${pickTime}/${dropDate}/${dropTime}`
    );
  } else {
    setIsLoading(false);
    console.error("Failed to fetch location IDs or missing date/time");
  }
};

  const times = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      times.push(timeString);
    }
  }
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  useOutsideClick(pickUpPopupRef, () => {
    setpickUpToggle(false);
  });
  useOutsideClick(dropOffPopupRef, () => {
    setdropOffToggle(false);
  });
  useOutsideClick(pickUpTimePopupRef, () => {
    setTogglePickUpTime(false);
  });
  useOutsideClick(dropOffTimePopupRef, () => {
    setToggleDropOffTime(false);
  });

  useEffect(() => {
    if (pickUp) {
      setPickUpLocation(pickUp);
      console.log("test");
    }
    if (pickUpId) {
      setPickUpLocationId(pickUpId);
    }
    if (pickDate) {
      setpickUpDate(pickDate);
    }
    if (dropDate) {
      setdropOffDate(dropDate);
    }
  }, [pickUp, pickUpId, pickDate, dropDate]);

  useEffect(() => {
    setpickUpToggle(false);
  }, [pickUpDate]);
  useEffect(() => {
    setdropOffToggle(false);
  }, [dropOffDate]);
  return (
    <div className="px-6 pt-8 flex flex-col lg:flex-row lg:space-x-5 bg-white lg:h-[160px] rounded-md  w-full 1sm:w-[700px] 1md:w-[800px] lg:w-[1000px] 1lg:w-[1100px] xl:w-[1200px] 1xl:w-[1306px] ">
      <div className="flex flex-col w-full">
        <div className="flex flex-col lg:flex-row lg:space-x-5">
          <div className="flex flex-col 2sm:flex-row space-y-5 2sm:space-y-0 2sm:space-x-5   w-full">
            <div className="relative h-fit w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-5 w-5 absolute left-2 top-3.5"
              >
                <path
                  d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z"
                  fill="gray"
                />
              </svg>
              <input
                className={`h-12 pl-10 w-full  text-gray-800 border rounded px-2 border-gray-400 focus:border-blue-500 bg-white outline-none ${
                  pickUpLocation ? "font-semibold text-gray-800" : "font-normal"
                } ${dropOffCheck ? "" : "w-full"}`}
                type="search"
                placeholder="City, airport or station"
                value={pickUpLocation}
                onChange={(e) => setPickUpLocation(e.target.value)}
                onFocus={() => setIsClicked(true)}
                onBlur={() => setIsClicked(false)}
              />
              <label
                htmlFor="text"
                className="absolute -top-3 left-2 px-1 bg-white text-sm"
              >
                Pick-up Location
              </label>
            </div>
            <div
              className={`relative h-fit w-full ${
                dropOffCheck ? "" : "hidden"
              } `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-5 w-5 absolute left-2 top-3.5"
              >
                <path
                  d="M0 32C0 14.3 14.3 0 32 0H480c17.7 0 32 14.3 32 32s-14.3 32-32 32V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H304V464c0-26.5-21.5-48-48-48s-48 21.5-48 48v48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64C14.3 64 0 49.7 0 32zm96 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H240zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H112zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H368zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8H328z"
                  fill="gray"
                />
              </svg>
              <input
                className={`h-12 pl-10 w-full  text-gray-800 border rounded px-2 border-gray-400 focus:border-blue-500 bg-white outline-none ${
                  dropOffLocation
                    ? "font-semibold text-gray-800"
                    : "font-normal"
                }`}
                type="search"
                placeholder="City, airport or station"
                value={dropOffLocation}
                onChange={(e) => setDropOffLocation(e.target.value)}
                onFocus={() => setIsClicked(true)}
                onBlur={() => setIsClicked(false)}
              />
              <label
                htmlFor="text"
                className="absolute -top-3 left-2 px-1 bg-white text-sm"
              >
                Drop-off Location
              </label>
            </div>
          </div>
          <div className="flex flex-col 2sm:flex-row space-y-5 2sm:space-y-0 2sm:space-x-5 py-5 lg:py-0 w-full">
            <div className="flex flex-row w-full">
              <div ref={pickUpPopupRef} className="w-full ">
                <div
                  className="relative cursor-pointer h-fit w-full"
                  onClick={() => {
                    setpickUpToggle(!pickUpToggle);
                    setdropOffToggle(false);
                    setToggleDropOffTime(false);
                    setTogglePickUpTime(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-5 w-5 absolute left-2 top-3"
                  >
                    <path
                      d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                      fill="gray"
                    />
                  </svg>
                  <input
                    className={`h-12 pl-10 w-full border rounded px-2 border-gray-400 border-r-0 focus:border-blue-500 bg-white outline-none cursor-pointer ${
                      pickUpDate ? "font-semibold text-gray-800" : "font-normal"
                    }`}
                    type="search"
                    placeholder="Select Date"
                    value={pickUpDate}
                    readOnly
                  />

                  <label
                    htmlFor="text"
                    className="absolute -top-3 left-2 px-1 bg-white text-sm"
                  >
                    Pick-up Date
                  </label>
                </div>
                {pickUpToggle ? (
                  <div className="z-50 absolute">
                    <Calendar
                      onClickDay={(value, event) => {
                        setpickUpDate(formatDate(value));
                      }}
                      showWeekNumbers
                      value={value}
                      minDetail="month"
                      minDate={new Date()}
                    />
                  </div>
                ) : null}
              </div>
              <div ref={pickUpTimePopupRef} className="pr-12">
                <div
                  className="relative cursor-pointer h-fit"
                  onClick={() => {
                    setTogglePickUpTime(!togglePickUpTime);
                    setpickUpToggle(false);
                    setdropOffToggle(false);
                    setToggleDropOffTime(false);
                  }}
                >
                  <input
                    className={`h-12 w-[75px] absolute -left-[23px]  border-t border-r border-b rounded px-2 pl-3 border-gray-400 focus:border-blue-500 bg-white outline-none cursor-pointer ${
                      pickUpTime ? "font-semibold text-gray-800" : "font-normal"
                    }`}
                    type="search"
                    placeholder="Select Date"
                    value={pickUpTime}
                    readOnly
                  />
                  <label className="absolute -left-[23px] pt-0.5 text-gray-400">
                    |
                  </label>
                  <label className="absolute -left-[23px] top-[17px] text-gray-400">
                    |
                  </label>
                  {togglePickUpTime && (
                    <div className="absolute top-[46px] -left-[22px] z-10 bg-white border border-gray-400 max-h-60 w-[75px] rounded-md overflow-auto">
                      {times.map((time) => (
                        <div
                          key={time}
                          className={`p-2 cursor-pointer hover:bg-blue-500 hover:text-white ${
                            time === pickUpTime ? "bg-blue-500 text-white" : ""
                          }`}
                          onClick={() => {
                            setPickUpTime(time);
                            setTogglePickUpTime(false);
                          }}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full">
              <div ref={dropOffPopupRef} className="w-full ">
                <div
                  className="relative cursor-pointer h-fit w-full"
                  onClick={() => {
                    setdropOffToggle(!dropOffToggle);
                    setpickUpToggle(false);
                    setToggleDropOffTime(false);
                    setTogglePickUpTime(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-5 w-5 absolute left-2 top-3"
                  >
                    <path
                      d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                      fill="gray"
                    />
                  </svg>
                  <input
                    className={`h-12 pl-10 w-full border rounded px-2 border-gray-400 focus:border-blue-500 bg-white outline-none cursor-pointer  ${
                      dropOffDate
                        ? "font-semibold text-gray-800"
                        : "font-normal"
                    }`}
                    type="search"
                    placeholder="Select Date"
                    value={dropOffDate}
                    readOnly
                  />

                  <label
                    htmlFor="text"
                    className="absolute -top-3 left-2 px-1 bg-white text-sm"
                  >
                    Drop-off Date
                  </label>
                </div>
                {dropOffToggle ? (
                  <div className="z-50 absolute">
                    <Calendar
                      onClickDay={(value, event) => {
                        setdropOffDate(formatDate(value));
                      }}
                      showWeekNumbers
                      value={value}
                      minDetail="month"
                      minDate={pickUpDate ? new Date(pickUpDate) : new Date()}
                    />
                  </div>
                ) : null}
              </div>
              <div ref={dropOffTimePopupRef} className="pr-12">
                <div
                  className="relative cursor-pointer h-fit"
                  onClick={() => {
                    setToggleDropOffTime(!toggleDropOffTime);
                    setpickUpToggle(false);
                    setdropOffToggle(false);
                    setTogglePickUpTime(false);
                  }}
                >
                  <input
                    className={`h-12 w-[75px] absolute -left-[23px]  border-t border-r border-b rounded px-2 pl-3 border-gray-400 focus:border-blue-500 bg-white outline-none cursor-pointer ${
                      dropOffTime
                        ? "font-semibold text-gray-800"
                        : "font-normal"
                    }`}
                    type="search"
                    placeholder="Select Date"
                    value={dropOffTime}
                    readOnly
                  />
                  <label className="absolute -left-[23px] pt-0.5 text-gray-400">
                    |
                  </label>
                  <label className="absolute -left-[23px] top-[17px] text-gray-400">
                    |
                  </label>
                  {toggleDropOffTime && (
                    <div className="absolute top-[46px] -left-[22px] z-10 bg-white border border-gray-400 max-h-60 w-[75px] rounded-md overflow-auto">
                      {times.map((time) => (
                        <div
                          key={time}
                          className={`p-2 cursor-pointer hover:bg-blue-500 hover:text-white ${
                            time === dropOffTime ? "bg-blue-500 text-white" : ""
                          }`}
                          onClick={() => {
                            setDropOffTime(time);
                            setToggleDropOffTime(false);
                          }}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex 2sm:items-center 2sm:space-x-4 lg:pt-4 flex-col 2sm:flex-row ">
          <span className="font-semibold text-gray-900">Popular filters:</span>
          <div className="flex 2sm:space-x-5">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                onClick={() => {
                  setDropOffCheck(!dropOffCheck);
                }}
              />
              <span className="ml-2">Return car to a different location</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                defaultChecked
                onClick={() => {
                  setDriverCheck(!driverCheck);
                }}
              />
              <span className="ml-2">Driver aged between 25 - 75</span>
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-end py-4 lg:py-0">
        <button
          onClick={handleSearch}
          className={`bg-gray-900 text-white p-2.5 pr-3.5 rounded-md font-semibold text-lg h-[48px] w-[120px] flex items-center justify-center ${
            isLoading ? "cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? (
            <img
              src={loading}
              alt="Loading..."
              className="h-[25px] w-[25px] spin mr-2"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-[18px] w-[18px] mr-2"
            >
              <path
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                fill="white"
              />
            </svg>
          )}
          <span className="text-lg">Search</span>
        </button>
      </div>
    </div>
  );
};

export default CarsSearch;
