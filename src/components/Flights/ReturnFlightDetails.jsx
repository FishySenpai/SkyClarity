import React from "react";

const ReturnFlightDetails = ({ flightDetails }) => {
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
    <div className="p-4 border-l bg-white rounded-lg 1md:ml-8  w-full 1md:w-[400px] lg:w-[463px] mt-4">
      <div>
        <p className="font-bold">
          Return:
          <span className="font-normal pl-1">
            {formatDate(flightDetails.data.itinerary.legs[1].departure)}
          </span>
        </p>
        <div className="flex flex-row bg-white py-3">
          <div className="flex flex-row  ">
            <img
              className="h-[30px] w-[60px] "
              src={`https://www.skyscanner.net/images/airlines/small/${flightDetails.data.itinerary.legs[1].segments[0].marketingCarrier.displayCode}.png
                    
                  `}
              alt=""
            />
          </div>
          <div className="pl-6 pr-2">
            <div className="text-lg font-semibold">
              {new Date(
                flightDetails.data.itinerary.legs[1].departure
              ).toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })}
            </div>
            <div>
              {" "}
              {flightDetails.data.itinerary.legs[1].origin.displayCode}
            </div>
          </div>

          <div className="flex flex-row ">
            <div className="flex flex-col">
              <div className="flex flex-row text-[12px] justify-center ">
                {formatDuration(flightDetails?.data.itinerary.legs[1].duration)}
              </div>
              <div className="flex flex-row">
                <div className="w-2 h-2 mt-[9px]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                      fill="gray"
                    />
                  </svg>
                </div>
                -----
                <div className="text-red-400 text-sm bg-gray-200 rounded px-1">
                  {flightDetails?.data.itinerary.legs[1].stopCount} stops
                </div>
                -----
                <div className="w-2 h-2 mt-[9px]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
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
                flightDetails.data.itinerary.legs[1].arrival
              ).toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })}
            </div>
            <div>
              {flightDetails.data.itinerary.legs[1].destination.displayCode}
            </div>
          </div>
        </div>
        <div className="border p-2 mb-2 flex flex-col space-y-6">
          {flightDetails.data.itinerary.legs[1].segments.map(
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
                        {segment.operatingCarrier.name} {segment.flightNumber}
                      </p>
                      <p className="pl-3">
                        {new Date(segment.departure).toLocaleTimeString([], {
                          hour: "numeric",
                          minute: "2-digit",
                          hour12: true,
                        })}{" "}
                        {segment.origin.displayCode} {segment.origin.city}
                      </p>
                      <p className="pl-3">
                        {new Date(segment.arrival).toLocaleTimeString([], {
                          hour: "numeric",
                          minute: "2-digit",
                          hour12: true,
                        })}{" "}
                        {segment.destination.displayCode}{" "}
                        {segment.destination.city}
                      </p>
                    </div>
                  </div>
                  {index === 0 ? (
                    <div className=" bg-red-100 px-5 py-2 rounded-md text-[#e70866] font-semibold text-center">
                      {formatDuration(
                        flightDetails?.data.itinerary.legs[1].duration
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
              {formatDate(flightDetails.data.itinerary.legs[1].arrival)}
            </p>
            <p>
              <span className="font-bold text-gray-800 pl-3 pr-1">
                Journey duration:
              </span>
              {formatDuration(flightDetails.data.itinerary.legs[1].duration)}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnFlightDetails;
