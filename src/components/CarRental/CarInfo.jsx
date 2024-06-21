import React, { useState, useEffect } from "react";
import carInfoJson from "./carInfo.json";
import seat from "./seat.png";
const carInfo = () => {
  const [groupsArray, setGroupsArray] = useState();
  useEffect(() => {
    if (carInfoJson?.data?.groups) {
      // Convert the object values to an array and set the state
      setGroupsArray(Object.values(carInfoJson.data.groups));
    }
  }, [carInfoJson]);
  console.log(carInfoJson);
  return (
    <div>
      <div className="flex flex-col cursor-pointer ">
        {/* <div className="flex flex-row bg-gray-100 rounded mb-1 text-gray-700 ">
          <div className="pl-3 border-b-4 border-white hover:border-gray-800">
            <div className="w-[215px] text-lg font-semibold">Best</div>
            <div className="flex flex-row">
              <div>${bestPrice?.toFixed(0)} . </div>
              <div className="pl-1">{formatDuration(bestDuration)}</div>
            </div>
          </div>
          <div className=" pl-3 border-b-4 border-white hover:border-gray-800">
            <div className="w-[215px] text-lg font-semibold">Cheapest</div>
            <div className="flex flex-row">
              <div>${cheapestMinPrice.toFixed(0)} . </div>
              <div className="pl-1">{formatDuration(cheapestMinDuration)}</div>
            </div>
          </div>
          <div className=" pl-3 border-b-4 border-white hover:border-gray-800">
            <div className="w-[215px] text-lg font-semibold">Fastest</div>
            <div className="flex flex-row">
              <div>{shortestMinPrice} . </div>
              <div className="pl-1">{formatDuration(shortestMinDuration)}</div>
            </div>
          </div>
        </div> */}
        <div>
          <div>{carInfoJson?.data.groups.cdat5t000640jfk.car_name}</div>
          {groupsArray?.map((car, index) => (
            <div className="bg-gray-100 rounded text-gray-700 w-[680px] mb-2  flex flex-row divide-x-2 divide-gray-400">
              <div className="w-[530px] py-4">
                <div className="flex flex-col ">
                  <div className="flex flex-col px-4">
                    <div className="pr-3 pl-4 text-lg font-semibold">
                      {car.car_name}
                    </div>
                    <div className="flex flex-row pl-4 space-x-2 text-sm relative">
                      <div>or similar</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="h-1.5 w-1.5 mt-2"
                      >
                        <path
                          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                          fill="gray"
                        />
                      </svg>
                      <div>{car.doors}</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="h-1.5 w-1.5 mt-2"
                      >
                        <path
                          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
                          fill="gray"
                        />
                      </svg>
                      <div>{car.cls}</div>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="flex flex-col">
                      <div className="flex flex-row space-x-2 pl-8">
                        <div className="flex flex-row bg-gray-200 rounded-sm p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            className="h-4 w-4 mt-1"
                          >
                            <path
                              d="M144 56c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v72H144V56zm176 72H288V56c0-30.9-25.1-56-56-56H152C121.1 0 96 25.1 96 56v72H64c-35.3 0-64 28.7-64 64V416c0 35.3 28.7 64 64 64c0 17.7 14.3 32 32 32s32-14.3 32-32H256c0 17.7 14.3 32 32 32s32-14.3 32-32c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64zM112 224H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 128H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                              fill="gray"
                            />
                          </svg>
                          <div className="pl-1 font-semibold">
                            {car.max_bags}
                          </div>
                        </div>
                        <div className="flex flex-row bg-gray-200 rounded-sm p-1">
                          <svg
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 240.235 240.235"
                            transform="scale(-1, 1)"
                            className="h-4 w-4 mt-1"
                          >
                            <path
                              d="M211.744,6.089C208.081,2.163,203.03,0,197.52,0h-15.143c-11.16,0-21.811,8.942-23.74,19.934l-0.955,5.436c-0.96,5.47,0.332,10.651,3.639,14.589c3.307,3.938,8.186,6.106,13.74,6.106h19.561c2.714,0,5.339-0.542,7.778-1.504l-2.079,17.761c-2.001-0.841-4.198-1.289-6.507-1.289h-22.318c-9.561,0-18.952,7.609-20.936,16.961l-19.732,93.027l-93.099-6.69c-5.031-0.36-9.231,1.345-11.835,4.693c-2.439,3.136-3.152,7.343-2.009,11.847l10.824,42.618c2.345,9.233,12.004,16.746,21.53,16.746h78.049h1.191h39.729c9.653,0,18.336-7.811,19.354-17.411l15.272-143.981c0.087-0.823,0.097-1.634,0.069-2.437l5.227-44.648c0.738-1.923,1.207-3.967,1.354-6.087l0.346-4.97C217.214,15.205,215.407,10.016,211.744,6.089z"
                              fill="gray"
                            ></path>
                          </svg>
                          <div className="pl-1 font-semibold">
                            {car.max_seats}
                          </div>
                        </div>
                        <div className="flex flex-row bg-gray-200 rounded-sm p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="h-4 w-4 mt-1"
                          >
                            <path
                              d="M224 0c17.7 0 32 14.3 32 32V62.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.8 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7v70.3l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V449.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49V311.7l-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3V129.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V32c0-17.7 14.3-32 32-32z"
                              fill="gray"
                            />
                          </svg>
                          <div className="pl-1 font-semibold">
                            {" "}
                            {car.ac ? "AC" : null}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row bg-gray-200 rounded-sm ml-8 mt-2 w-[90px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="h-4 w-4 mt-1"
                        >
                          <path
                            d="M9 1.5A1.5 1.5 0 007.5 3v6.75a.75.75 0 01-.75.75H6a1.5 1.5 0 000 3h6a1.5 1.5 0 000-3h-.75a.75.75 0 01-.75-.75V3A1.5 1.5 0 009 1.5zm9 3A1.5 1.5 0 1016.5 3 1.5 1.5 0 0018 4.5zm0 18a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zM19.5 12a1.5 1.5 0 11-1.5-1.5 1.5 1.5 0 011.5 1.5zM18 9a1.5 1.5 0 10-1.5-1.5A1.5 1.5 0 0018 9zm1.5 7.5A1.5 1.5 0 1118 15a1.5 1.5 0 011.5 1.5zM9 15a1.5 1.5 0 00-1.5 1.5V21a1.5 1.5 0 003 0v-4.5A1.5 1.5 0 009 15z"
                            fill="gray"
                          ></path>
                        </svg>
                        <div className="capitalize font-semibold ">
                          {car.trans}
                        </div>
                      </div>
                    </div>
                    <div className="pl-24">
                      <img
                        src={`https://logos.skyscnr.com/images/carhire/sippmaps/${car.img}`}
                        className="h-[118px] w-[181px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pl-8 ">
                <div className="text-lg font-semibold  mt-3 ">
                  US {car.min_price}
                </div>
                <div>
                  <button className="px-3 py-1 rounded bg-gray-800 text-white mt-1 font-semibold flex flex-row">
                    Select
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-3 h-4 ml-2 mt-1"
                    >
                      <path
                        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default carInfo;
