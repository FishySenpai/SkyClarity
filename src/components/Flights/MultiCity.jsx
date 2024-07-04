import React, { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import useOutsideClick from "../useOutsideClick";
const MultiCity = ({
  from,
  setFrom,
  to,
  setTo,
  from2,
  setFrom2,
  to2,
  setTo2,
  from3,
  setFrom3,
  to3,
  setTo3,
  departDate,
  setDepartDate,
  departDate1,
  setDepartDate1,
  departDate2,
  setDepartDate2,
  setIsClicked,
  setCabinDrop,
  value,
  formatDate,
  flightCount,
  setFlightCount,
}) => {
  const departPopupRef = useRef(null);
  const departPopupRef1 = useRef(null);
  const departPopupRef2 = useRef(null);
    const [departToggle0, setDepartToggle0] = useState(false);
    const [departToggle1, setDepartToggle1] = useState(false);
    const [departToggle2, setDepartToggle2] = useState(false);
    useOutsideClick(departPopupRef, () => {
      setDepartToggle0(false);
    });
  useOutsideClick(departPopupRef1, () => {
    setDepartToggle1(false);
  });
  useOutsideClick(departPopupRef2, () => {
    setDepartToggle2(false);
  });

  useEffect(() => {
    setDepartToggle0(false);
  }, [departDate]);
    useEffect(() => {
      setDepartToggle1(false);
    }, [departDate1]);
      useEffect(() => {
        setDepartToggle2(false);
      }, [departDate2]);
  useEffect(() => {
    console.log(`Flight count updated: ${flightCount}`);
    // Add any additional logic that should run when flightCount changes
  }, [flightCount]);
  return (
    <>
      <div className="">
        <div className="flex items-center space-x-5 pb-8">
          <div className="relative h-fit">
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
              className="h-12 pl-10 border rounded px-2 border-gray-400 focus:border-blue-500 bg-whiteoutline-none"
              type="search"
              placeholder="City or airport"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              onFocus={() => setIsClicked(true)}
              onBlur={() => setIsClicked(false)}
            />
            <label
              htmlFor="text"
              className="absolute -top-3 left-2 px-1 bg-white text-sm"
            >
              From
            </label>
          </div>

          <div className="relative h-fit">
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
              className="h-12 pl-10 border rounded px-2 border-gray-400 focus:border-blue-500 bg-whiteoutline-none"
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
          <div ref={departPopupRef}>
            <div
              className="relative cursor-pointer h-fit"
              onClick={() => {
                setDepartToggle0(!departToggle0);
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
                className={`h-12 pl-10 w-[380px] border rounded px-2 border-gray-400 focus:border-blue-500 bg-whiteoutline-none cursor-pointer ${
                  departDate ? "font-semibold text-gray-800" : "font-normal"
                } `}
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
            {departToggle0 ? (
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
        </div>
        {flightCount > 0 ? (
          <div className="flex items-center space-x-5 ">
            <div className="relative h-fit">
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
                className="h-12 pl-10 border rounded px-2 border-gray-400 focus:border-blue-500 bg-whiteoutline-none"
                type="search"
                placeholder="City or airport"
                value={from2}
                onChange={(e) => setFrom2(e.target.value)}
                onFocus={() => setIsClicked(true)}
                onBlur={() => setIsClicked(false)}
              />
              <label
                htmlFor="text"
                className="absolute -top-3 left-2 px-1 bg-white text-sm"
              >
                From
              </label>
            </div>

            <div className="relative h-fit">
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
                className="h-12 pl-10 border rounded px-2 border-gray-400 focus:border-blue-500 bg-whiteoutline-none"
                type="search"
                placeholder="City or airport"
                value={to2}
                onChange={(e) => setTo2(e.target.value)}
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
            <div ref={departPopupRef1}>
              <div
                className="relative cursor-pointer h-fit"
                onClick={() => {
                  setDepartToggle1(!departToggle1);
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
                  className={`h-12 pl-10 w-[380px] border rounded px-2 border-gray-400 focus:border-blue-500 bg-whiteoutline-none cursor-pointer ${
                    departDate1 ? "font-semibold text-gray-800" : "font-normal"
                  } `}
                  type="search"
                  placeholder="Select Date"
                  value={departDate1}
                  readOnly
                />

                <label
                  htmlFor="text"
                  className="absolute -top-3 left-2 px-1 bg-white text-sm"
                >
                  Departure
                </label>
              </div>
              {departToggle1 ? (
                <div className="z-50 absolute">
                  <Calendar
                    onClickDay={(value, event) => {
                      setDepartDate1(formatDate(value));
                    }}
                    showWeekNumbers
                    value={value}
                    minDetail="month"
                    minDate={new Date(departDate)}
                  />
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          ""
        )}
        {flightCount > 1 ? (
          <div className="flex items-center space-x-5 pt-8">
            <div className="relative h-fit">
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
                className="h-12 pl-10 border rounded px-2 border-gray-400 focus:border-blue-500 bg-whiteoutline-none"
                type="search"
                placeholder="City or airport"
                value={from3}
                onChange={(e) => setFrom3(e.target.value)}
                onFocus={() => setIsClicked(true)}
                onBlur={() => setIsClicked(false)}
              />
              <label
                htmlFor="text"
                className="absolute -top-3 left-2 px-1 bg-white text-sm"
              >
                From
              </label>
            </div>

            <div className="relative h-fit">
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
                className="h-12 pl-10 border rounded px-2 border-gray-400 focus:border-blue-500 bg-whiteoutline-none"
                type="search"
                placeholder="City or airport"
                value={to3}
                onChange={(e) => setTo3(e.target.value)}
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
            <div ref={departPopupRef2}>
              <div
                className="relative cursor-pointer h-fit"
                onClick={() => {
                  setDepartToggle2(!departToggle2);
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
                  className={`h-12 pl-10 w-[380px] border rounded px-2 border-gray-400 focus:border-blue-500 bg-whiteoutline-none cursor-pointer ${
                    departDate2 ? "font-semibold text-gray-800" : "font-normal"
                  } `}
                  type="search"
                  placeholder="Select Date"
                  value={departDate2}
                  readOnly
                />

                <label
                  htmlFor="text"
                  className="absolute -top-3 left-2 px-1 bg-white text-sm"
                >
                  Departure
                </label>
              </div>
              {departToggle2 ? (
                <div className="z-50 absolute">
                  <Calendar
                    onClickDay={(value, event) => {
                      setDepartDate2(formatDate(value));
                    }}
                    showWeekNumbers
                    value={value}
                    minDetail="month"
                    minDate={new Date(departDate1)}
                  />
                </div>
              ) : null}
            </div>
            <div className="absolute right-[275px] p-6 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="h-6 w-6  p-[3px] bg-gray-300  rounded-full cursor-pointer"
                onClick={() => {
                  setFlightCount(flightCount - 1);
                }}
              >
                <path
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                  fill="gray"
                />
              </svg>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default MultiCity;
