import React, { useState, useEffect, useRef } from "react";
import Hotels from "./Hotels";
import hotelsData from "../../hotels.json";
import hotelsImg from "./hotels-img.jpg"
import useOutsideClick from "../useOutsideClick";
import Calendar from "react-calendar";
const HotelsHome = () => {
  // const [hotelsData, setHotelsData] = useState();
  const [location, setLocation] = useState();
  const [locationId, setLocationId] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [value, onChange] = useState(new Date());
  const [checkInToggle, setcheckInToggle] = useState(false);
  const [checkInDate, setcheckInDate] = useState('');
  const [checkOutToggle, setcheckOutToggle] = useState(false);
  const [checkOutDate, setcheckOutDate] = useState('');
  const [travelers, setTravelers] = useState("Travelers");
  const [cabinClass, setCabinClass] = useState("Economy");
  const [cabinDrop, setCabinDrop] = useState(false);
  const [cabinClassDrop, setCabinClassDrop] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const checkInPopupRef = useRef(null);
  const checkOutPopupRef = useRef(null);
  const cabinPopupRef = useRef(null);
  const fetchLocation = async (location) => {
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
      if (result.data && result.data.length > 0) {
        setLocationId(result.data[0].navigation.entityId);
      } else {
        throw new Error("No location ID found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchHotels = async (id) => {
    const url =
      `https://skyscanner80.p.rapidapi.com/api/v1/hotels/search?entityId=${id}&checkin=${checkInDate}&checkout=${checkOutDate}&rooms=1&adults=1&resultsPerPage=15&page=1&priceType=PRICE_PER_NIGHT&sorting=-relevance&currency=USD&market=US&locale=en-US`;
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

  const handleFetchHotels = async () => {
    await fetchLocation(location);
  };

  useEffect(() => {
    if (locationId) {
      fetchHotels(locationId);
    }
  }, [locationId]);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return`${year}-${month}-${day}`;
  };
  useOutsideClick(checkInPopupRef, () => {
    setcheckInToggle(false);
  });
  useOutsideClick(checkOutPopupRef, () => {
    setcheckOutToggle(false);
  });
  useOutsideClick(cabinPopupRef, () => {
    setCabinDrop(false);
  });

  useEffect(() => {
    setcheckInToggle(false);
  }, [checkInDate]);
  useEffect(() => {
    setcheckOutToggle(false);
  }, [checkOutDate]);
  return (
    <div>
      {" "}
      <div className="bg-gray-100 rounded text-gray-500 relative">
        <img src={hotelsImg} className="" />
        <div className="absolute top-52 left-[300px]">
          <div className="text-5xl pb-3 text-white font-bold">
            Find the right hotel today
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
                  placeholder="City or region"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onFocus={() => setIsClicked(true)}
                  onBlur={() => setIsClicked(false)}
                />
                <label
                  htmlFor="text"
                  className="absolute -top-3 left-2 px-1 bg-gray-100 text-sm"
                >
                  Destination
                </label>
              </div>

              <div ref={checkInPopupRef}>
                <div
                  className="relative cursor-pointer h-fit"
                  onClick={() => {
                    setcheckInToggle(!checkInToggle);
                    setcheckOutToggle(false);
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
                    className={`h-12 pl-10 w-[180px] border rounded px-2 border-gray-400 focus:border-blue-500 bg-gray-100 outline-none cursor-pointer ${
                      checkInDate
                        ? "font-semibold text-gray-800"
                        : "font-normal"
                    }`}
                    type="search"
                    placeholder="Select Date"
                    value={checkInDate}
                    readOnly
                  />

                  <label
                    htmlFor="text"
                    className="absolute -top-3 left-2 px-1 bg-gray-100 text-sm"
                  >
                    Check-in
                  </label>
                </div>
                {checkInToggle ? (
                  <div className="z-50 absolute">
                    <Calendar
                      onClickDay={(value, event) => {
                        setcheckInDate(formatDate(value));
                      }}
                      showWeekNumbers
                      value={value}
                      minDetail="month"
                      minDate={new Date()}
                    />
                  </div>
                ) : null}
              </div>
              <div ref={checkOutPopupRef}>
                <div
                  className="relative cursor-pointer h-fit "
                  onClick={() => {
                    setcheckOutToggle(!checkOutToggle);
                    setcheckInToggle(false);
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
                      checkOutDate
                        ? "font-semibold text-gray-800"
                        : "font-normal"
                    }`}
                    type="search"
                    placeholder="Select Date"
                    value={checkOutDate}
                    readOnly
                  />

                  <label
                    htmlFor="text"
                    className="absolute -top-3 left-2 px-1 bg-gray-100 text-sm"
                  >
                    Check-out
                  </label>
                </div>
                {checkOutToggle ? (
                  <div className="z-50 absolute">
                    <Calendar
                      onClickDay={(value, event) => {
                        setcheckOutDate(formatDate(value));
                      }}
                      showWeekNumbers
                      value={value}
                      minDetail="month"
                      minDate={new Date()}
                    />
                  </div>
                ) : null}
              </div>
              <div ref={cabinPopupRef} className="relative">
                <div
                  onClick={() => {
                    setCabinDrop(!cabinDrop);
                    setcheckInToggle(false);
                    setcheckOutToggle(false);
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
                    className="h-12 pl-10 w-[290px] border cursor-pointer text-[16px] pb-1 rounded px-2 text-gray-800 font-semibold border-gray-400 focus:border-blue-500 bg-gray-100 outline-none"
                    type="search"
                    value={`${rooms} rooms, ${adults} adults, ${children} children`}
                    onFocus={() => setIsClicked(true)}
                    onBlur={() => setIsClicked(false)}
                    readOnly
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="h-5 w-5 absolute right-2 top-3"
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                  </svg>
                  <label
                    htmlFor="text"
                    className="absolute -top-3 left-2 px-1 bg-gray-100 text-sm"
                  >
                    Rooms & Guests
                  </label>
                </div>
                {cabinDrop ? (
                  <div className="flex flex-col text-gray-900 pt-4 w-[290px] bg-white rounded shadow-md p-2 absolute right-0">
                    <div className="flex flex-row pb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-6 w-6"
                      >
                        <path d="M12.004 1A4.726 4.726 0 0 0 7 6a1.05 1.05 0 0 0 1 1 1.053 1.053 0 0 0 1.002-1c.005-2 1.001-3 3.002-3a2.653 2.653 0 0 1 3.002 3c0 2-1.006 3-2.008 3H9a2.15 2.15 0 0 0-2 2l.03 9a3.183 3.183 0 0 0 2.972 2.984l4.003.016A3.22 3.22 0 0 0 17 20V6a4.72 4.72 0 0 0-4.996-5"></path>
                      </svg>

                      <div className="pl-1 font-semibold">Rooms</div>
                      <div className="p-1 rounded-full mb-1 bg-gray-900 ml-[110px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="h-3 w-3 cursor-pointer"
                          onClick={() => {
                            if (rooms > 1) {
                              setRooms(rooms - 1);
                            }
                          }}
                        >
                          <path
                            d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="font-semibold ml-4">{rooms}</div>
                      <div className="p-1 rounded-full mb-1 bg-gray-900 ml-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="h-3 w-3 cursor-pointer"
                          onClick={() => {
                            setRooms(rooms + 1);
                          }}
                        >
                          <path
                            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                            fill="white"
                          />
                        </svg>
                      </div>
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
                      <div className="p-1 rounded-full mb-1 bg-gray-900 ml-[120px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="h-3 w-3 cursor-pointer"
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
                          className="h-3 w-3 cursor-pointer"
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
                      <div className="p-1 rounded-full mb-1 bg-gray-900 ml-[98px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="h-3 w-3 cursor-pointer"
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
                          className="h-3 w-3 cursor-pointer"
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
                <button
                  onClick={handleFetchHotels}
                  className="bg-gray-900 text-white p-2.5 pl-9 pr-3.5 rounded-md font-semibold text-lg"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4 pt-5">
              <span className="font-semibold text-gray-900">Popular filters:</span>
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
     <Hotels hotelsData={hotelsData} />
    </div>
  );
};

export default HotelsHome;
