import React, { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import "../Calender/Sample.css";
import useOutsideClick from "../useOutsideClick";
import MultiCity from "./MultiCity";
import loading from "../Assets/loading.png";
import { useNavigate, useParams } from "react-router-dom";

const FlightsSearch = ({
  setFlights,
  selectedOption,
  setSelectedOption,
  flightCount,
  setFlightCount,
}) => {
  const { fromLocation, fromId, toLocation, toId, departdate, returndate } =
    useParams();
  console.log(fromLocation, fromId, toLocation, toId, departdate, returndate);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [from2, setFrom2] = useState();
  const [to2, setTo2] = useState();
  const [from3, setFrom3] = useState();
  const [to3, setTo3] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [value, onChange] = useState(new Date());
  const [departToggle, setDepartToggle] = useState(false);
  const [departDate, setDepartDate] = useState();
  const [returnToggle, setReturnToggle] = useState(false);
  const [returnDate, setReturnDate] = useState();
  const [departDate1, setDepartDate1] = useState();
  const [departDate2, setDepartDate2] = useState();
  const [travelers, setTravelers] = useState("Travelers");
  const [cabinClass, setCabinClass] = useState("Economy");
  const [cabinDrop, setCabinDrop] = useState(false);
  const [cabinClassDrop, setCabinClassDrop] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const departPopupRef = useRef(null);
  const returnPopupRef = useRef(null);
  const cabinPopupRef = useRef(null);

  const handleMultiCityClick = () => {
    console.log(from);
    console.log(to);
    console.log(departDate);
    console.log(from2);
    console.log(to2);
    console.log(departDate1);
    console.log(from3);
    console.log(to3);
    console.log(departDate2);
  };
  const handleFlightCount = () => {
    if (flightCount < 2) {
      setFlightCount(flightCount + 1);
      console.log(flightCount);
    } else if (flightCount > 1) {
      setFlightCount(flightCount - 1);
      console.log(flightCount);
    }
  };
  const fetchLocation = async (location) => {
    const url = `https://sky-scanner3.p.rapidapi.com/flights/auto-complete?query=${location}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_X_RapidAPI_Key,
        "x-rapidapi-host": "sky-scanner3.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      return result.data[0].presentation.id;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleSearch = async () => {
    setIsLoading(true);
    const fromLocation = from; // Replace with actual input value
    const toLocation = to; // Replace with actual input value
    const departdate = departDate; // Replace with actual input value
    const returndate = returnDate; // Replace with actual input value

    const fromId = await fetchLocation(fromLocation);
    const toId = await fetchLocation(toLocation);
    const selected = selectedOption;
    if (fromId && toId) {
      setIsLoading(false)
      navigate(
        `/flights/${selected}/${fromLocation}/${fromId}/${toLocation}/${toId}/${departdate}/${returndate}`
      );
    } else {
      console.error("Failed to fetch location IDs");
    }
  };

  const fetchReturnFlights = async () => {
    try {
      setFlights(null);
      const [fromId, toId] = await Promise.all([
        fetchLocation(from),
        fetchLocation(to),
      ]);

      if (fromId && toId) {
        setFromId(fromId);
        setToId(toId);
        try {
          const response = await fetch(url, options);
          const result = await response.text();
          console.log(result);
        } catch (error) {
          console.error(error);
        }
        const url = `https://skyscanner80.p.rapidapi.com/api/v1/flights/search-roundtrip?fromId=${fromId}&toId=${toId}&departDate=${departDate}&returnDate=${returnDate}&adults=1&cabinClass=economy&currency=USD&market=US&locale=en-US`;
        const options = {
          method: "GET",
          headers: {
            "x-rapidapi-key": import.meta.env.VITE_X_RapidAPI_Key,
            "X-RapidAPI-Host": "skyscanner80.p.rapidapi.com",
          },
        };

        const response = await fetch(url, options);
        const result = await response.json();
        setFlights(result.data);
        console.log(result);
      } else {
        console.error("Failed to fetch location IDs");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (fromLocation) {
      setFrom(fromLocation);
      console.log("test");
    }
    if (toLocation) {
      setTo(toLocation);
    }
    if (departdate) {
      setDepartDate(departdate);
    }
    if (returndate && dateRegex.test(returndate)) {
      setReturnDate(returndate);
    }
  }, [fromLocation, toLocation, departdate, returndate]);
  useOutsideClick(departPopupRef, () => {
    setDepartToggle(false);
  });
  useOutsideClick(returnPopupRef, () => {
    setReturnToggle(false);
  });
  useOutsideClick(cabinPopupRef, () => {
    setCabinDrop(false);
  });
  useEffect(() => {
    setDepartToggle(false);
  }, [departDate]);
  useEffect(() => {
    setReturnToggle(false);
  }, [returnDate]);
  return (
    <div className=" bg-white relative rounded-lg text-gray-500 w-full 1sm:w-[700px] 1md:w-[800px] lg:w-[1000px] 1lg:w-[1100px] xl:w-[1200px] 1xl:w-[1306px]">
      <div className="flex items-center space-x-4 pt-4 pl-6 text-sm">
        <label className="flex items-center">
          <input
            type="radio"
            name="tripType"
            value="round-trip"
            checked={selectedOption === "round-trip"}
            onChange={() => setSelectedOption("round-trip")}
            className=" h-4 w-4 cursor-pointer text-blue-600"
          />
          <span className="ml-2">Round-trip</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="tripType"
            value="one-way"
            checked={selectedOption === "one-way"}
            onChange={() => setSelectedOption("one-way")}
            className=" h-4 w-4 cursor-pointer text-blue-600"
          />
          <span className="ml-2">One-way</span>
        </label>
        {/* <label className="flex items-center">
          <input
            type="radio"
            name="tripType"
            value="multi-city"
            checked={selectedOption === "multi-city"}
            onChange={() => setSelectedOption("multi-city")}
            className=" h-4 w-4 cursor-pointer text-blue-600"
          />
          <span className="ml-2">Multi-city</span>
        </label> */}
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-5 space-y-5 lg:space-y-0  p-6 ">
        {selectedOption === "multi-city" ? (
          <MultiCity
            from={from}
            setFrom={setFrom}
            to={to}
            setTo={setTo}
            from2={from2}
            setFrom2={setFrom2}
            to2={to2}
            setTo2={setTo2}
            from3={from3}
            setFrom3={setFrom3}
            to3={to3}
            setTo3={setTo3}
            departDate={departDate}
            setDepartDate={setDepartDate}
            departToggle={departToggle}
            setDepartToggle={setDepartToggle}
            returnToggle={returnToggle}
            setReturnToggle={setReturnToggle}
            departDate1={departDate1}
            setDepartDate1={setDepartDate1}
            departDate2={departDate2}
            setDepartDate2={setDepartDate2}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            cabinDrop={cabinDrop}
            setCabinDrop={setCabinDrop}
            value={value}
            formatDate={formatDate}
            flightCount={flightCount}
            setFlightCount={setFlightCount}
          />
        ) : (
          <>
            <div className="flex flex-row space-x-5 w-full">
              <div className="relative h-fit w-full ">
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
                  className={`h-12 w-full  pl-10 border rounded px-2 border-gray-400 focus:border-blue-500 outline-none ${
                    from ? "text-gray-800 font-semibold" : ""
                  }`}
                  type="search"
                  placeholder="City or airport"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  onFocus={() => setIsClicked(true)}
                  onBlur={() => setIsClicked(false)}
                />
                <label
                  htmlFor="text"
                  className="absolute -top-3 left-2 px-1 text-sm bg-white"
                >
                  From
                </label>
              </div>
              <div className="relative h-fit w-full">
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
                  className={`h-12 w-full pl-10 border rounded px-2 border-gray-400 focus:border-blue-500 bg-white outline-none ${
                    to ? "text-gray-800 font-semibold" : ""
                  }`}
                  type="search"
                  placeholder="City or airport"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  onFocus={() => setIsClicked(true)}
                  onBlur={() => setIsClicked(false)}
                />
                <label
                  htmlFor="text"
                  className="absolute -top-3 left-2 px-1 bg-white text-sm"
                >
                  To
                </label>
              </div>
            </div>
            <div className="flex flex-row space-x-5 w-full">
              {" "}
              <div ref={departPopupRef} className="w-full">
                <div
                  className="relative cursor-pointer h-fit "
                  onClick={() => {
                    setDepartToggle(!departToggle);
                    setReturnToggle(false);
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
                    className={`h-12 pl-10 w-full   border rounded px-2 border-gray-400 focus:border-blue-500 bg-white outline-none cursor-pointer ${
                      departDate ? "font-semibold text-gray-800" : "font-normal"
                    } ${selectedOption === "one-way" ? "w-[380px]" : ""}`}
                    type="search"
                    placeholder="Select Date"
                    value={departDate}
                    readOnly
                  />

                  <label
                    htmlFor="text"
                    className="absolute -top-3 left-2 px-1 bg-white text-sm"
                  >
                    Departure
                  </label>
                </div>
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
                ref={returnPopupRef}
                className={`${
                  selectedOption === "one-way" ? "hidden" : ""
                } w-full`}
              >
                <div
                  className="relative cursor-pointer h-fit"
                  onClick={() => {
                    setReturnToggle(!returnToggle);
                    setDepartToggle(false);
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
                    className={`h-12 pl-10 w-full   border rounded px-2 border-gray-400 focus:border-blue-500 bg-white outline-none cursor-pointer  ${
                      returnDate ? "font-semibold text-gray-800" : "font-normal"
                    }`}
                    type="search"
                    placeholder="Select Date"
                    value={returnDate}
                    readOnly
                  />

                  <label
                    htmlFor="text"
                    className="absolute -top-3 left-2 px-1 bg-white text-sm"
                  >
                    Return
                  </label>
                </div>
                {returnToggle ? (
                  <div className="z-50 absolute">
                    <Calendar
                      onClickDay={(value, event) => {
                        setReturnDate(formatDate(value));
                      }}
                      showWeekNumbers
                      value={value}
                      minDetail="month"
                      minDate={departDate ? new Date(departDate) : new Date()}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </>
        )}
        <div
          ref={cabinPopupRef}
          className={`relative ${cabinDrop ? "z-20" : ""}`}
        >
          <div
            onClick={() => {
              setCabinDrop(!cabinDrop);
              setDepartToggle(false);
              setReturnToggle(false);
            }}
            className="cursor-pointer"
          >
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
              className="h-12  pl-10 w-full lg:w-[200px] border cursor-pointer text-[16px] pb-2 rounded px-2 text-gray-800 font-semibold  border-gray-400 focus:border-blue-500  outline-none"
              type="search"
              value={adults + children + travelers}
              onFocus={() => setIsClicked(true)}
              onBlur={() => setIsClicked(false)}
              readOnly
            />
            <label
              htmlFor="text"
              className="absolute top-[27px] left-[42px] px-1   text-sm"
            >
              {cabinClass}
            </label>
            <label
              htmlFor="text"
              className="absolute -top-3 left-2 px-1 bg-white text-sm"
            >
              Travelers & Class
            </label>
          </div>
          {cabinDrop ? (
            <div className="flex flex-col text-gray-900 pt-4 bg-white rounded shadow-md p-2 absolute right-0">
              <div className="relative py-2 px-1">
                <input
                  className={`h-12  w-[260px] border rounded px-2 border-gray-400 focus:border-blue-500 bg-white outline-none cursor-pointer  ${
                    returnDate ? "font-semibold text-gray-800" : "font-normal"
                  }`}
                  type="search"
                  placeholder="Economy"
                  value={cabinClass}
                  onClick={() => {
                    setCabinClassDrop(!cabinClassDrop);
                  }}
                  readOnly
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-5 h-5 absolute top-5 right-2 px-1 z-50"
                >
                  <path
                    d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                    fill="gray"
                  />
                </svg>
                <label
                  htmlFor="text"
                  className="absolute -top-1 left-2 px-1 bg-white text-sm text-gray-500"
                >
                  Class
                </label>
                {cabinClassDrop ? (
                  <div className="bg-white shadow-md space-y-1 pb-2 pt-1 mb-2 flex flex-col">
                    <button
                      className="text-left hover:bg-gray-300 px-2"
                      onClick={() => {
                        setCabinClass("Economy");
                        setCabinClassDrop(false);
                      }}
                    >
                      Economy
                    </button>
                    <button
                      className="text-left hover:bg-gray-300 px-2"
                      onClick={() => {
                        setCabinClass("Premium Economy");
                        setCabinClassDrop(false);
                      }}
                    >
                      Premium Economy
                    </button>
                    <button
                      className="text-left hover:bg-gray-300 px-2"
                      onClick={() => {
                        setCabinClass("Business Class");
                        setCabinClassDrop(false);
                      }}
                    >
                      Business Class
                    </button>
                    <button
                      className="text-left hover:bg-gray-300 px-2"
                      onClick={() => {
                        setCabinClass("First Class");
                        setCabinClassDrop(false);
                      }}
                    >
                      First Class
                    </button>
                  </div>
                ) : null}
              </div>
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="h-6 w-6"
                >
                  <path
                    d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"
                    fill="dark gray"
                  />
                </svg>

                <div className="pl-1 font-semibold">Adult</div>
                <div className="p-1 rounded-full mb-1 bg-gray-900 ml-28">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-3 w-3"
                    onClick={() => {
                      if (adults > 1) {
                        setAdults(adults - 1);
                      }
                    }}
                  >
                    <path
                      d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="font-semibold ml-4">{adults}</div>
                <div className="p-1 rounded-full mb-1 bg-gray-900 ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-3 w-3 "
                    onClick={() => {
                      setAdults(adults + 1);
                    }}
                  >
                    <path
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-row pt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-5 w-6"
                >
                  <path
                    d="M152 88a72 72 0 1 1 144 0A72 72 0 1 1 152 88zM39.7 144.5c13-17.9 38-21.8 55.9-8.8L131.8 162c26.8 19.5 59.1 30 92.2 30s65.4-10.5 92.2-30l36.2-26.4c17.9-13 42.9-9 55.9 8.8s9 42.9-8.8 55.9l-36.2 26.4c-13.6 9.9-28.1 18.2-43.3 25V288H128V251.7c-15.2-6.7-29.7-15.1-43.3-25L48.5 200.3c-17.9-13-21.8-38-8.8-55.9zm89.8 184.8l60.6 53-26 37.2 24.3 24.3c15.6 15.6 15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-48-48C70 438.6 68.1 417 79.2 401.1l50.2-71.8zm128.5 53l60.6-53 50.2 71.8c11.1 15.9 9.2 37.5-4.5 51.2l-48 48c-15.6 15.6-40.9 15.6-56.6 0s-15.6-40.9 0-56.6L284 419.4l-26-37.2z"
                    fill="dark gray"
                  />
                </svg>
                <div className="pl-1 font-semibold">Children</div>
                <div className="p-1 rounded-full mb-1 bg-gray-900 ml-[89px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-3 w-3"
                    onClick={() => {
                      if (children > 0) {
                        setChildren(children - 1);
                      }
                    }}
                  >
                    <path
                      d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="font-semibold ml-4">{children}</div>
                <div className="p-1 rounded-full mb-1 bg-gray-900 ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-3 w-3 "
                    onClick={() => {
                      setChildren(children + 1);
                    }}
                  >
                    <path
                      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div className="w-full flex justify-end items-end mt-4 lg:w-auto lg:flex-none lg:justify-start lg:items-start lg:mt-0">
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
      <div className="pl-[22px] pb-4">
        <button
          className={`bg-gray-900 text-white p-2.5 pr-3.5 rounded-md font-semibold text-md h-[48px] w-fit absolute bottom-[38px] lg:relative lg:bottom-auto ${
            selectedOption === "multi-city" ? "" : "hidden"
          }`}
          onClick={handleFlightCount}
        >
          {flightCount === 2 ? "Remove Flight" : "Add Another Flight"}
        </button>
      </div>
    </div>
  );
};

export default FlightsSearch;
