import React, { useState, useRef } from "react";
import flightDetailsJson from "./flightDetails.json";
import useOutsideClick from "../useOutsideClick";
import CompleteYourTrip from "./CompleteYourTrip";
import warning from "./warning.png";
const FlightDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  useOutsideClick(modalRef, () => {
    console.log("test");
    setIsModalOpen(false);
  });
  const FetchFlightDetails = async () => {
    const url =
      "https://skyscanner80.p.rapidapi.com/api/v1/flights/detail?itineraryId=12569-2404200335--32119-1-12712-2404201400&token=eyJhIjoiMSIsImMiOjAsImkiOjAsImNjIjoiZWNvbm9teSIsIm8iOiJJU0IiLCJkIjoiTllDQSIsImQxIjoiMjAyNC0wNC0yMCJ9&currency=USD&market=US&locale=en-US";
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
    } catch (error) {
      console.error(error);
    }
  };
  //   FetchFlightDetails();
  console.log(flightDetailsJson);

  function formatDuration(durationInMinutes) {
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    return `${hours}h${minutes}m`;
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Array of day names
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // Array of month names
    const monthsOfYear = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const month = monthsOfYear[date.getMonth()];
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    return `${dayOfWeek}, ${month} ${day}, ${year}`;
  };
  return (
    <div className="bg-gray-100 text-gray-700">
      <header className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-center items-center h-[180px]">
          <div className="text-center">
            <h1 className="text-2xl">
              {flightDetailsJson?.data.itinerary.legs[0].destination.city}
            </h1>
            <p>1 adult • One way • Economy class</p>
          </div>
        </div>
      </header>

      <div className="flex flex-row justify-center mr-20 divide-x-[1px] divide-gray-300 ">
        <div className="p-4 w-[600px] ">
          <h2 className="mb-2 text-lg font-semibold">Book your ticket</h2>
          <ul className="">
            {flightDetailsJson?.data.itinerary.pricingOptions
              .slice(0, 6)
              .map((option) => (
                <li
                  key={option.agents[0].name}
                  className="flex justify-between items-center mb-4 p-2 border"
                >
                  <div className="space-y-2">
                    <p className="font-semibold">{option.agents[0].name}</p>

                    <div className="flex space-x-2">
                      <p className="flex">
                        {Array(Math.round(option.agents[0].rating.value))
                          .fill(0)
                          .map((_, index) => (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 576 512"
                              height="20"
                              width="20"
                            >
                              <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                fill="orange"
                              ></path>
                            </svg>
                          ))}
                      </p>
                      <p className="text-gray-500 text-[14px] ">
                        {option.agents[0].rating.count} reviews
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-5">
                    <p className="font-bold text-lg mt-1">
                      ${option.totalPrice.toFixed(0)}
                    </p>
                    <button
                      className="bg-gray-900 text-white p-2 px-4 rounded-md font-semibold"
                      onClick={() => {
                        setIsModalOpen(true);
                      }}
                    >
                      Select
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className="ml-8 ">
          <div className="p-4 border-l bg-white rounded-lg ml-8 w-[463px]">
            <h2 className="mb-2 font-bold text-lg">Flight details</h2>
            <div>
              <p className="font-bold">
                Departure:
                <span className="font-normal pl-1">
                  {formatDate(
                    flightDetailsJson.data.itinerary.legs[0].departure
                  )}
                </span>
              </p>
              <div className="flex flex-row bg-white py-3">
                <div className="flex flex-row  ">
                  <img
                    className="h-[30px] w-[60px] "
                    src={`https://www.skyscanner.net/images/airlines/small/${flightDetailsJson.data.itinerary.legs[0].segments[0].marketingCarrier.displayCode}.png
                    
                  `}
                    alt=""
                  />
                </div>
                <div className="pl-6 pr-2">
                  <div className="text-lg font-semibold">
                    {new Date(
                      flightDetailsJson.data.itinerary.legs[0].departure
                    ).toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </div>
                  <div>
                    {" "}
                    {
                      flightDetailsJson.data.itinerary.legs[0].origin
                        .displayCode
                    }
                  </div>
                </div>

                <div className="flex flex-row ">
                  <div className="flex flex-col">
                    <div className="flex flex-row text-[12px] justify-center ">
                      {formatDuration(
                        flightDetailsJson?.data.itinerary.legs[0].duration
                      )}
                    </div>
                    <div className="flex flex-row">
                      <div className="w-2 h-2 mt-[9px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                            fill="gray"
                          />
                        </svg>
                      </div>
                      -----
                      <div className="text-red-400 text-sm bg-gray-200 rounded px-1">
                        {flightDetailsJson?.data.itinerary.legs[0].stopCount}{" "}
                        stops
                      </div>
                      -----
                      <div className="w-2 h-2 mt-[9px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                            fill="gray"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xml:space="preserve"
                    viewBox="0 0 12 12"
                    class="h-5 w-5 mt-[20px]"
                  >
                    <path
                      fill="#898294"
                      d="M3.922 12h.499a.52.52 0 0 0 .444-.247L7.949 6.8l3.233-.019A.8.8 0 0 0 12 6a.8.8 0 0 0-.818-.781L7.949 5.2 4.866.246A.525.525 0 0 0 4.421 0h-.499a.523.523 0 0 0-.489.71L5.149 5.2H2.296l-.664-1.33a.523.523 0 0 0-.436-.288L0 3.509 1.097 6 0 8.491l1.196-.073a.523.523 0 0 0 .436-.288l.664-1.33h2.853l-1.716 4.49a.523.523 0 0 0 .489.71"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col pl-3">
                  <div className=" text-lg font-semibold">
                    {new Date(
                      flightDetailsJson.data.itinerary.legs[0].arrival
                    ).toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </div>
                  <div>
                    {
                      flightDetailsJson.data.itinerary.legs[0].destination
                        .displayCode
                    }
                  </div>
                </div>
              </div>
              <div className="border p-2 mb-2 flex flex-col space-y-6">
                {flightDetailsJson.data.itinerary.legs[0].segments.map(
                  (segment, index) => {
                    return (
                      <>
                        <div className="flex flex-row items-start ">
                          <p className="text-gray-500 pt-14 text-sm ml-5">
                            {formatDuration(segment.duration)}
                          </p>
                          <div className="flex flex-col items-center mt-0.5">
                            <img
                              src={segment.operatingCarrier.logo}
                              alt=""
                              className="h-6 w-6"
                            />

                            <div className="relative ">
                              <div className="w-2 h-2 mt-[20px]">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                                    fill="gray"
                                  ></path>
                                </svg>
                              </div>
                              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-7 bg-gray-300"></div>
                              <div className="w-2 h-2 mt-7">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <path
                                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                                    fill="gray"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col space-y-3 ">
                            <p className="font-bold pl-3">
                              {segment.operatingCarrier.name}{" "}
                              {segment.flightNumber}
                            </p>
                            <p className="pl-3">
                              {new Date(segment.departure).toLocaleTimeString(
                                [],
                                {
                                  hour: "numeric",
                                  minute: "2-digit",
                                  hour12: true,
                                }
                              )}{" "}
                              {segment.origin.displayCode} {segment.origin.city}
                            </p>
                            <p className="pl-3">
                              {new Date(segment.arrival).toLocaleTimeString(
                                [],
                                {
                                  hour: "numeric",
                                  minute: "2-digit",
                                  hour12: true,
                                }
                              )}{" "}
                              {segment.destination.displayCode}{" "}
                              {segment.destination.city}
                            </p>
                          </div>
                        </div>
                        {index === 0 ? (
                          <div className=" bg-red-100 px-5 py-2 rounded-md text-[#e70866] font-semibold">
                            {formatDuration(
                              flightDetailsJson?.data.itinerary.legs[0]
                                .layovers[0].duration
                            )}
                            <span className="pl-7 ">Connect in aiport</span>
                          </div>
                        ) : (
                          ""
                        )}
                      </>
                    );
                  }
                )}

                <div className="flex text-[13px]">
                  <p>
                    <span className="font-bold text-gray-800 pr-1">
                      Arrival Time:
                    </span>
                    {formatDate(
                      flightDetailsJson.data.itinerary.legs[0].arrival
                    )}
                  </p>
                  <p>
                    <span className="font-bold text-gray-800 pl-3 pr-1">
                      Journey duration:
                    </span>
                    {formatDuration(
                      flightDetailsJson.data.itinerary.legs[0].duration
                    )}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <CompleteYourTrip
            destination={
              flightDetailsJson?.data.itinerary.legs[0].destination.city
            }
          />
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-2">
          <div
            className="bg-white p-6 pb-20 rounded-lg relative w-[700px]"
            ref={modalRef}
          >
            <button
              className="absolute top-3 right-3 text-gray-400"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex">
              <img src={warning} alt="" className="h-11 w-11" />
              <div className="pl-3 space-y-2">
                <p className="font-semibold text-xl">Feature Disabled Notice</p>
                <p className="text-wrap text-gray-700">
                  Normally, it would redirect you to the booking website.
                  However, as this project is for personal demonstration this
                  functionality is disabled.
                </p>
              </div>
            </div>
            <button
              className="mt-4 bg-gray-900 text-white p-2 px-4 rounded-md font-semibold absolute right-5"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightDetails;
