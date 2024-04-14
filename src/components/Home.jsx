import React, { useState, useEffect } from "react";
import flightsJson from "../flights.json";
import Flights from "./Flights/Flights";
import Calendar from "react-calendar";
import "./Calender/Sample.css";

const Home = () => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [fromId, setFromId] = useState();
  const [toId, setToId] = useState();
  const [flights, setFlights] = useState(flightsJson);
  const [isClicked, setIsClicked] = useState(false);
  const [value, onChange] = useState(new Date());
  const [departToggle, setDepartToggle] = useState(false);
  const [departDate, setDepartDate] = useState();
  const [returnToggle, setReturnToggle] = useState(false);
  const [returnDate, setReturnDate] = useState();

  const fetchLocation = async (locationType, location) => {
    const url = `https://skyscanner80.p.rapidapi.com/api/v1/flights/auto-complete?query=${location}&market=US&locale=en-US`;
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

      if (locationType === "from") {
        setFromId(result.data[0].id);
        console.log(fromId);
      } else if (locationType === "to") {
        setToId(result.data[0].id);
        console.log(toId);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const fetchFlights = async () => {
    fetchLocation("from", from);
    fetchLocation("to", to);
    if (fromId && toId) {
      const url = `https://skyscanner80.p.rapidapi.com/api/v1/flights/search-one-way?fromId=${fromId}&toId=${toId}&departDate=2024-04-20&adults=1&currency=USD&market=US&locale=en-US`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "325a7f72damshf16ffcb2c3ed7bep1f566djsn006db2e1a65a",
          "X-RapidAPI-Host": "skyscanner80.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setFlights(result.data);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };
  useEffect(()=>{
    setDepartToggle(false);
  }, [departDate])
  useEffect(() => {
    setReturnToggle(false);
  }, [returnDate]);
  return (
    <div className=" text-white default-font bg-gray-500 ">
      <div className="bg-gray-100 rounded text-gray-500 ">
        <div className="flex flex-row space-x-12  p-12 ">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="h-6 w-6 absolute left-2 top-3"
            >
              <path
                d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"
                fill="gray"
              />
            </svg>
            <input
              className="h-12 pl-10 border rounded px-2 border-gray-400 focus:border-blue-500 bg-gray-100 outline-none"
              type="search"
              placeholder="City or airport"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              onFocus={() => setIsClicked(true)}
              onBlur={() => setIsClicked(false)}
            />
            <label
              htmlFor="text"
              className="absolute -top-3 left-2 px-1 bg-gray-100 text-sm"
            >
              From
            </label>
          </div>

          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="h-6 w-6 absolute left-2 top-3"
            >
              <path
                d="M.3 166.9L0 68C0 57.7 9.5 50.1 19.5 52.3l35.6 7.9c10.6 2.3 19.2 9.9 23 20L96 128l127.3 37.6L181.8 20.4C178.9 10.2 186.6 0 197.2 0h40.1c11.6 0 22.2 6.2 27.9 16.3l109 193.8 107.2 31.7c15.9 4.7 30.8 12.5 43.7 22.8l34.4 27.6c24 19.2 18.1 57.3-10.7 68.2c-41.2 15.6-86.2 18.1-128.8 7L121.7 289.8c-11.1-2.9-21.2-8.7-29.3-16.9L9.5 189.4c-5.9-6-9.3-14.1-9.3-22.5zM32 448H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm96-80a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128-16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                fill="gray"
              />
            </svg>
            <input
              className="h-12 pl-10 border rounded px-2 border-gray-400 focus:border-blue-500 bg-gray-100 outline-none"
              type="search"
              placeholder="City or airport"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              onFocus={() => setIsClicked(true)}
              onBlur={() => setIsClicked(false)}
            />
            <label
              htmlFor="text"
              className="absolute -top-3 left-2 px-1 bg-gray-100 text-sm"
            >
              To
            </label>
          </div>
          <div
            className="relative cursor-pointer"
            onClick={() => {
              setDepartToggle((prev) => !prev);
              setReturnToggle(false);
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
              className={`h-12 pl-10 w-[180px] border rounded px-2 border-gray-400 focus:border-blue-500 bg-gray-100 outline-none cursor-pointer ${
                departDate ? "font-semibold text-gray-800" : "font-normal"
              }`}
              type="search"
              placeholder="Select Date"
              value={departDate}
              readOnly
            />

            <label
              htmlFor="text"
              className="absolute -top-3 left-2 px-1 bg-gray-100 text-sm"
            >
              Departure
            </label>
            {departToggle ? (
              <div className="z-50 absolute">
                <Calendar
                  onClickDay={(value, event) => {
                    setDepartDate(formatDate(value));
                  }}
                  showWeekNumbers
                  value={value}
                  minDetail="month"
                  minDate={new Date()}
                />
              </div>
            ) : null}
          </div>
          <div
            className="relative cursor-pointer "
            onClick={() => {
              setReturnToggle((prev) => !prev);
              setDepartToggle(false);
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
                returnDate ? "font-semibold text-gray-800" : "font-normal"
              }`}
              type="search"
              placeholder="Select Date"
              value={returnDate}
              readOnly
            />

            <label
              htmlFor="text"
              className="absolute -top-3 left-2 px-1 bg-gray-100 text-sm"
            >
              Return
            </label>
            {returnToggle ? (
              <div className="z-50 absolute">
                <Calendar
                  onClickDay={(value, event) => {
                    setReturnDate(formatDate(value));
                  }}
                  showWeekNumbers
                  value={value}
                  minDetail="month"
                  minDate={new Date()}
                />
              </div>
            ) : null}
          </div>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-5 w-5 absolute left-2 top-3"
            >
              <path
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                fill="gray"
              />
            </svg>
            <input
              className="h-12 pl-10 border rounded px-2 text-gray-800 font-semibold  border-gray-400 focus:border-blue-500 bg-gray-100 outline-none"
              type="search"
              placeholder="1 Travelers"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              onFocus={() => setIsClicked(true)}
              onBlur={() => setIsClicked(false)}
            />
            <label
              htmlFor="text"
              className="absolute top-7 left-12 px-1  text-sm"
            >
              economy
            </label>
            <label
              htmlFor="text"
              className="absolute -top-3 left-2 px-1 bg-gray-100 text-sm"
            >
              Travelers & Class
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-12">
        <button onClick={() => fetchLocation("from", from)}>Click</button>
        <button onClick={() => fetchLocation("to", to)}>
          Click for Flight
        </button>
        <button onClick={fetchFlights}>get flight</button>
      </div>
      {/* <div>
        <Flights flights={flights} />
      </div> */}
    </div>
  );
};

export default Home;
