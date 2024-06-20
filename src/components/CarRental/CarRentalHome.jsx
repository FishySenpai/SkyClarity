import React, { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import carImg from "./car-img.jpg";
const CarRentalHome = () => {
  const [location, setLocation] = useState();
  const [locationId, setLocationId] = useState();
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
  const pickUpPopupRef = useRef(null);
  const dropOffPopupRef = useRef(null);
    const pickUpTimePopupRef = useRef(null);
    const dropOffTimePopupRef = useRef(null);

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
  useEffect(() => {
    setpickUpToggle(false);
  }, [pickUpDate]);
  useEffect(() => {
    setdropOffToggle(false);
  }, [dropOffDate]);
  return (
    <div className="bg-gray-100 rounded text-gray-500 relative">
      <img src={carImg} className="" />
      <div className="absolute top-52 left-[300px]">
        <div className="text-5xl pb-3 text-white font-bold">
          Find the best car rental deals
        </div>
        <div className="px-6 pt-8 bg-gray-100 h-[160px] rounded-md  ">
          <div className="flex flex-row space-x-5   ">
            <div className="relative h-fit ">
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
                className={`h-12 pl-10 w-[400px]  text-gray-800 border rounded px-2 border-gray-400 focus:border-blue-500 bg-gray-100 outline-none ${
                  location ? "font-semibold text-gray-800" : "font-normal"
                }`}
                type="search"
                placeholder="City, airport or station"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onFocus={() => setIsClicked(true)}
                onBlur={() => setIsClicked(false)}
              />
              <label
                htmlFor="text"
                className="absolute -top-3 left-2 px-1 bg-gray-100 text-sm"
              >
                Pick-up Location
              </label>
            </div>
            <div className="relative h-fit ">
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
                className={`h-12 pl-10 w-[400px]  text-gray-800 border rounded px-2 border-gray-400 focus:border-blue-500 bg-gray-100 outline-none ${
                  location ? "font-semibold text-gray-800" : "font-normal"
                }`}
                type="search"
                placeholder="City, airport or station"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onFocus={() => setIsClicked(true)}
                onBlur={() => setIsClicked(false)}
              />
              <label
                htmlFor="text"
                className="absolute -top-3 left-2 px-1 bg-gray-100 text-sm"
              >
                Pick-up Location
              </label>
            </div>
            <div ref={pickUpPopupRef}>
              <div
                className="relative cursor-pointer h-fit"
                onClick={() => {
                  setpickUpToggle(!pickUpToggle);
                  setdropOffToggle(false);
                  setCabinDrop(false);
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
                  className={`h-12 pl-10 w-[150px] border rounded px-2 border-gray-400 border-r-0 focus:border-blue-500 bg-gray-100 outline-none cursor-pointer ${
                    pickUpDate ? "font-semibold text-gray-800" : "font-normal"
                  }`}
                  type="search"
                  placeholder="Select Date"
                  value={pickUpDate}
                  readOnly
                />

                <label
                  htmlFor="text"
                  className="absolute -top-3 left-2 px-1 bg-gray-100 text-sm"
                >
                  Pick-up
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
                  setCabinDrop(false);
                }}
              >
                <input
                  className={`h-12 w-[75px] absolute -left-[23px]  border-t border-r border-b rounded px-2 pl-3 border-gray-400 focus:border-blue-500 bg-gray-100 outline-none cursor-pointer ${
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
                  <div className="absolute top-[46px] -left-[22px] z-10 bg-white border border-gray-400 max-h-60 w-[75px] rounded-md overflow-hidden">
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
            <div ref={dropOffPopupRef}>
              <div
                className="relative cursor-pointer h-fit "
                onClick={() => {
                  setdropOffToggle(!dropOffToggle);
                  setpickUpToggle(false);
                  setCabinDrop(false);
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
                  className={`h-12 pl-10 w-[180px] border rounded px-2 border-gray-400 focus:border-blue-500 bg-gray-100 outline-none cursor-pointer  ${
                    dropOffDate ? "font-semibold text-gray-800" : "font-normal"
                  }`}
                  type="search"
                  placeholder="Select Date"
                  value={dropOffDate}
                  readOnly
                />

                <label
                  htmlFor="text"
                  className="absolute -top-3 left-2 px-1 bg-gray-100 text-sm"
                >
                  Drop-off
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
                    minDate={new Date()}
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
                  setCabinDrop(false);
                }}
              >
                <input
                  className={`h-12 w-[75px] absolute -left-[23px]  border-t border-r border-b rounded px-2 pl-3 border-gray-400 focus:border-blue-500 bg-gray-100 outline-none cursor-pointer ${
                    dropOffTime ? "font-semibold text-gray-800" : "font-normal"
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
                  <div className="absolute top-[46px] -left-[22px] z-10 bg-white border border-gray-400 max-h-60 w-[75px] rounded-md overflow-hidden">
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
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-[18px] w-[18px] absolute left-3 top-[14px]"
              >
                <path
                  d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                  fill="white"
                />
              </svg>
              <button className="bg-gray-900 text-white p-2.5 pl-9 pr-3.5 rounded-md font-semibold text-lg">
                Search
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4 pt-5">
            <span className="font-semibold text-gray-900">
              Popular filters:
            </span>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Free cancellation</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">4 stars</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2">3 stars</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRentalHome;
