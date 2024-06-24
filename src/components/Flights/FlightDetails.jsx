import React from "react";
import flightDetailsJson from "./flightDetails.json";
const FlightDetails = () => {
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
  const options = [
    { name: "Mytrip", price: "Rs 296,499", reviews: 1947 },
    { name: "Trip.com", price: "Rs 301,182", reviews: 1611 },
    { name: "Kiwi.com", price: "Rs 347,273", reviews: 734 },
    { name: "Emirates", price: "Rs 383,389", reviews: 711 },
    { name: "Bravofly", price: "Rs 398,013", reviews: 604 },
  ];
  function formatDuration(durationInMinutes) {
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    return `${hours}h${minutes}m`;
  }

  return (
    <div className="bg-white">
      <header className="bg-blue-900 text-white p-4 ">
        <div className="container mx-auto flex justify-between items-center h-[180px]">
          <a href="#" className="text-white">
            Back
          </a>
          <div className="text-center">
            <h1 className="text-2xl">New York</h1>
            <p>1 adult • One way • Economy class</p>
          </div>
          <div></div>
        </div>
      </header>
      <div className="flex flex-row">
        <div className="p-4 w-[600px]">
          <h2 className="mb-2">Book your ticket</h2>
          <button className="mb-4 p-2 border">Read before booking</button>
          <ul>
            {flightDetailsJson?.data.itinerary.pricingOptions.map((option) => (
              <li
                key={option.agents[0].name}
                className="flex justify-between items-center mb-4 p-2 border"
              >
                <div>
                  <p>{option.agents[0].name}</p>
                  <p className="text-gray-500">
                    {option.agents[0].rating.count} reviews
                  </p>
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
                </div>
                <div>
                  <p>{option.totalPrice}</p>
                  <button className="bg-blue-900 text-white p-2">Select</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 border-l">
          <h2 className="mb-2">Flight details</h2>
          <div>
            <p>{flightDetailsJson.data.itinerary.legs[0].departure}</p>
            <div className="flex flex-row ">
              <div className="flex flex-row px-4 w-[200px]">
                <img
                  className="h-[30px] w-[32px] "
                  src={
                    flightDetailsJson.data.itinerary.legs[0].segments[0]
                      .marketingCarrier.logo
                  }
                  alt=""
                />
                <div className="pr-3 pl-4">
                  {flightDetailsJson.data.itinerary.legs[0].name}
                </div>
              </div>
              <div className="pr-4">
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
                  {flightDetailsJson.data.itinerary.legs[0].origin.displayCode}
                </div>
              </div>

              <div className="flex flex-row ">
                <div className="flex flex-col">
                  <div className="flex flex-row text-sm justify-center ">
                    {/* {formatDuration(
                      flight.legs?.reduce(
                        (totalDuration, leg) =>
                          totalDuration + leg.durationInMinutes,
                        0
                      )
                    )} */}
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
                    <div className="text-red-400 text-sm bg-gray-200 rounded">
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
              <div className="flex flex-col pl-4">
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
            <div className="border p-2 mb-2">
              {flightDetailsJson.data.itinerary.legs[0].segments.map(
                (segment, index) => {
                  return (
                    <div>
                      <p>
                        <img src={segment.operatingCarrier.logo} alt="" className="h-[30px] w-8"/>{" "}
                        {segment.flightNumber}
                      </p>
                      <p>
                        {" "}
                        {new Date(segment.departure).toLocaleTimeString([], {
                          hour: "numeric",
                          minute: "2-digit",
                          hour12: true,
                        })}{" "}
                        {segment.origin.displayCode} {segment.origin.city} →{" "}
                        {new Date(segment.arrival).toLocaleTimeString([], {
                          hour: "numeric",
                          minute: "2-digit",
                          hour12: true,
                        })}{" "}
                        {segment.destination.displayCode} {segment.destination.city}
                      </p>
                      <p>{formatDuration(segment.duration)}</p>
                    </div>
                  );
                }
              )}
            </div>
            <p>
              Journey duration:{" "}
              {formatDuration(
                flightDetailsJson.data.itinerary.legs[0].duration
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
