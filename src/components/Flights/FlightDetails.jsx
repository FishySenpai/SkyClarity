import React, { useState, useRef, useEffect } from "react";
import flightDetailsJson from "./Assets/flightDetails.json";
import useOutsideClick from "../useOutsideClick";
import CompleteYourTrip from "./CompleteYourTrip";
import warning from "./Assets/warning.png";
import ReturnFlightDetails from "./ReturnFlightDetails";
import loading from "../Assets/loading.gif";
import { useParams } from "react-router-dom";

const FlightDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flightDetails, setFlightDetails] = useState();
  const [error, setError] = useState(null);
  const { sessionId, id, selected, fromId, toId, departdate, returndate } =
    useParams();
  const modalRef = useRef(null);

  useOutsideClick(modalRef, () => {
    console.log("test");
    setIsModalOpen(false);
  });

  const FetchFlightDetails = async () => {
    // Validate parameters
    if (!id || !sessionId) {
      console.error("Missing required parameters:", { id, sessionId });
      setError("Missing flight information");
      return;
    }

    console.log("Fetching flight details with:", {
      itineraryId: id,
      sessionId: sessionId,
      fromId,
      toId,
      departdate,
      returndate,
      selected,
    });

    // Build flights array based on trip type
    const flights = [];

    if (
      selected === "round-trip" &&
      fromId &&
      toId &&
      departdate &&
      returndate
    ) {
      flights.push({
        originIata: fromId,
        destinationIata: toId,
        departDate: departdate,
      });
      flights.push({
        originIata: toId,
        destinationIata: fromId,
        departDate: returndate,
      });
    } else if (selected === "one-way" && fromId && toId && departdate) {
      flights.push({
        originIata: fromId,
        destinationIata: toId,
        departDate: departdate,
      });
    } else {
      console.error("Missing flight route parameters");
      setError("Missing flight route information");
      return;
    }

    const url = "https://blue-scraper.p.rapidapi.com/flights/search-detail";
    const requestBody = {
      itineraryId: id,
      sessionId: sessionId,
      market: "US",
      locale: "en-US",
      currency: "USD",
      adults: 1,
      cabinClass: "economy",
      flights: flights,
    };

    console.log("Request body:", requestBody);

    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_X_RapidAPI_Key2,
        "x-rapidapi-host": "blue-scraper.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log("Flight details response status:", response.status);
      console.log("Flight details result:", result);

      if (response.status === 500) {
        console.error("Server error:", result);
        setError(
          "The flight details service is currently unavailable. Please try again later."
        );
        return;
      }

      if (result.status && result.data) {
        setFlightDetails(result.data);
        console.log("Flight details set successfully", flightDetails);
        setError(null);
      } else {
        console.error("Invalid flight details response:", result);
        setError(
          result.message ||
            "Unable to load flight details. The session may have expired."
        );
      }
    } catch (error) {
      console.error("Error fetching flight details:", error);
      setError("Network error. Please check your connection and try again.");
    }
  };

  useEffect(() => {
    console.log("Parameters:", {
      id,
      sessionId,
      selected,
      fromId,
      toId,
      departdate,
      returndate,
    });
    if (id && sessionId) {
      FetchFlightDetails();
    }
  }, [id, sessionId]);

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

  // Show error state
  if (error) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-red-500 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Unable to Load Flight Details
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.history.back()}
            className="bg-gray-900 text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Go Back
          </button>
          <button
            onClick={() => {
              setError(null);
              FetchFlightDetails();
            }}
            className="ml-3 bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (flightDetails) {
    return (
      <div className="bg-gray-100 text-gray-700">
        <header className="bg-gray-900 text-white p-4">
          <div className=" mx-auto flex justify-center items-center h-[180px]">
            <div className="text-center">
              <h1 className="text-2xl">
                {flightDetails?.itinerary?.legs?.[0]?.destination?.city ||
                  "Destination"}
              </h1>
              <p>
                1 adult • {selected === "round-trip" ? "Round trip" : "One way"}{" "}
                • Economy class
              </p>
            </div>
          </div>
        </header>

        <div className="flex flex-col 1md:flex-row justify-center items-center 1md:items-start lg:mr-20 1md:divide-x-[1px] divide-gray-300 ">
          <div className="p-4 w-full 1md:w-[600px] ">
            <h2 className="mb-2 text-lg font-semibold">Book your ticket</h2>
            <ul className="">
              {flightDetails?.itinerary?.pricingOptions
                ?.slice(0, 6)
                .map((option, index) => (
                  <li
                    key={option?.agents?.[0]?.name || index}
                    className="flex justify-between items-center mb-4 p-2 border"
                  >
                    <div className="space-y-2">
                      <p className="font-semibold">
                        {option?.agents?.[0]?.name || "Booking Agent"}
                      </p>

                      <div className="flex space-x-2">
                        <p className="flex">
                          {Array(
                            Math.round(option?.agents?.[0]?.rating?.value || 0)
                          )
                            .fill(0)
                            .map((_, index) => (
                              <svg
                                key={index}
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
                          {option?.agents?.[0]?.rating?.count || 0} reviews
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-5">
                      <p className="font-bold text-lg mt-1">
                        $
                        {option?.price?.raw?.toFixed(0) ||
                          option?.totalPrice?.toFixed(0) ||
                          0}
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
                )) || (
                <li className="text-gray-500">No pricing options available</li>
              )}
            </ul>
          </div>
          <div className="lg:ml-8 w-full lg:w-fit">
            <h2 className="mb-2 font-bold text-lg ml-8 mt-2">Flight details</h2>
            <div className="p-4 border-l bg-white rounded-lg 1md:ml-8  w-full 1md:w-[400px] lg:w-[463px]">
              <div>
                <p className="font-bold">
                  Departure:
                  <span className="font-normal pl-1">
                    {formatDate(
                      flightDetails?.itinerary?.legs?.[0]?.departure ||
                        new Date()
                    )}
                  </span>
                </p>
                <div className="flex flex-row bg-white py-3">
                  <div className="flex flex-row  ">
                    <img
                      className="h-[30px] w-[60px] "
                      src={
                        flightDetails?.itinerary?.legs?.[0]?.segments?.[0]
                          ?.operatingCarrier?.logo ||
                        flightDetails?.itinerary?.legs?.[0]?.segments?.[0]
                          ?.marketingCarrier?.logo ||
                        `https://www.skyscanner.net/images/airlines/small/${flightDetails?.itinerary?.legs?.[0]?.segments?.[0]?.marketingCarrier?.alternateId}.png`
                      }
                      alt="Airline logo"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  </div>
                  <div className="pl-6 pr-2">
                    <div className="text-lg font-semibold">
                      {new Date(
                        flightDetails?.itinerary?.legs?.[0]?.departure ||
                          new Date()
                      ).toLocaleTimeString([], {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </div>
                    <div>
                      {flightDetails?.itinerary?.legs?.[0]?.origin
                        ?.displayCode || ""}
                    </div>
                  </div>

                  <div className="flex flex-row ">
                    <div className="flex flex-col">
                      <div className="flex flex-row text-[12px] justify-center ">
                        {formatDuration(
                          flightDetails?.itinerary?.legs?.[0]
                            ?.durationInMinutes || 0
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
                          {flightDetails?.itinerary?.legs?.[0]?.stopCount || 0}{" "}
                          {flightDetails?.itinerary?.legs?.[0]?.stopCount === 1
                            ? "stop"
                            : "stops"}
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
                      xmlSpace="preserve"
                      viewBox="0 0 12 12"
                      className="h-5 w-5 mt-[20px]"
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
                        flightDetails?.itinerary?.legs?.[0]?.arrival ||
                          new Date()
                      ).toLocaleTimeString([], {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </div>
                    <div>
                      {flightDetails?.itinerary?.legs?.[0]?.destination
                        ?.displayCode || ""}
                    </div>
                  </div>
                </div>
                <div className="border p-2 mb-2 flex flex-col space-y-6">
                  {flightDetails?.itinerary?.legs?.[0]?.segments?.map(
                    (segment, index) => {
                      return (
                        <React.Fragment key={segment?.id || index}>
                          <div className="flex flex-row items-start ">
                            <p className="text-gray-500 pt-14 text-sm ml-5">
                              {formatDuration(segment?.durationInMinutes || 0)}
                            </p>
                            <div className="flex flex-col items-center mt-0.5">
                              <img
                                src={
                                  segment?.operatingCarrier?.logo ||
                                  segment?.marketingCarrier?.logo
                                }
                                alt=""
                                className="h-6 w-6"
                                onError={(e) =>
                                  (e.target.style.display = "none")
                                }
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
                                {segment?.operatingCarrier?.name ||
                                  segment?.marketingCarrier?.name}{" "}
                                {segment?.flightNumber || ""}
                              </p>
                              <p className="pl-3">
                                {new Date(
                                  segment?.departure || new Date()
                                ).toLocaleTimeString([], {
                                  hour: "numeric",
                                  minute: "2-digit",
                                  hour12: true,
                                })}{" "}
                                {segment?.origin?.displayCode}{" "}
                                {segment?.origin?.city}
                              </p>
                              <p className="pl-3">
                                {new Date(
                                  segment?.arrival || new Date()
                                ).toLocaleTimeString([], {
                                  hour: "numeric",
                                  minute: "2-digit",
                                  hour12: true,
                                })}{" "}
                                {segment?.destination?.displayCode}{" "}
                                {segment?.destination?.city}
                              </p>
                            </div>
                          </div>
                          {index <
                            (flightDetails?.itinerary?.legs?.[0]?.segments
                              ?.length || 0) -
                              1 && (
                            <div className=" bg-red-100 px-5 py-2 rounded-md text-[#e70866] font-semibold text-center">
                              Layover
                              <span className="pl-7 ">Connect in airport</span>
                            </div>
                          )}
                        </React.Fragment>
                      );
                    }
                  ) || (
                    <p className="text-gray-500">
                      No segment details available
                    </p>
                  )}
                  <div className="flex text-[13px]">
                    <p>
                      <span className="font-bold text-gray-800 pr-1">
                        Arrival Time:
                      </span>
                      {formatDate(
                        flightDetails?.itinerary?.legs?.[0]?.arrival ||
                          new Date()
                      )}
                    </p>
                    <p>
                      <span className="font-bold text-gray-800 pl-3 pr-1">
                        Journey duration:
                      </span>
                      {formatDuration(
                        flightDetails?.itinerary?.legs?.[0]
                          ?.durationInMinutes || 0
                      )}{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {flightDetails?.itinerary?.legs?.[1] ? (
              <ReturnFlightDetails flightDetails={flightDetails} />
            ) : (
              ""
            )}
            <CompleteYourTrip
              destination={
                flightDetails?.itinerary?.legs?.[0]?.destination?.city ||
                "your destination"
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
                  <p className="font-semibold text-xl">
                    Feature Disabled Notice
                  </p>
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
  } else {
    return (
      <div className="flex mt-12 justify-center h-[92vh]">
        <img src={loading} alt="" className="h-12" />
      </div>
    );
  }
};

export default FlightDetails;
