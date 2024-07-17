import React, { useState, useEffect } from "react";
import carInfoJson from "./carInfo.json";
import CarFilter from "./CarFilter";
import CarsSearch from "./CarsSearch";
import carImg from "./car-img.jpg";
import { useParams } from "react-router-dom";
import CompleteTrip from "./CompleteTrip";
const CarInfo = () => {
  const [groupsArray, setGroupsArray] = useState();
  const [providersArray, setProvidersArray] = useState();
  const [showDeal, setShowDeal] = useState();
  const {pickUp, pickUpId, pickDate, dropDate} = useParams();
  const [carsInfo, setCarsInfo] = useState(carInfoJson)
    const isValidParam = (param) => {
      return !param.startsWith(":") && param.trim() !== "";
    };

    const fetchCars = async () => {
      try {
        setCarsInfo(null);
        if (
          isValidParam(pickUpId) &&
          isValidParam(pickDate) 
        ) {
          const url = `https://skyscanner80.p.rapidapi.com/api/v1/cars/search-cars?pickUpEntityId=${pickUpId}&pickUpDate=${pickDate}&pickUpTime=10%3A00&currency=USD&market=US&locale=en-US`;
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
            setCarsInfo(result);
            console.log(result);
          } catch (error) {
            console.error(error);
          }
        } else {
          console.error(
            "Invalid parameters: fromId, toId, departDate, or returnDate"
          );
        }
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      if (isValidParam(pickUpId) && isValidParam(pickDate)) {
        fetchCars();
      }
    }, [pickUpId, pickDate]);
  useEffect(() => {
    if (carsInfo?.data?.groups) {
      // Convert the object values to an array and set the state
      setGroupsArray(Object.values(carsInfo.data.groups));
    }
    if (carsInfo?.data?.providers) {
      const providersWithId = Object.entries(carsInfo.data.providers).map(
        ([prv_id, providerData]) => ({
          prv_id,
          ...providerData,
        })
      );
      setProvidersArray(providersWithId);
    }
  }, [carsInfo]);
  console.log(carsInfo);
  return (
    <div className="bg-gray-50">
      {" "}
      <img
        src={carImg}
        className="h-[300px] absolute inset-0 top-[65px] w-full bg-cover bg-center overflow-hidden"
      />
      <div className="absolute top-36 lg:top-32 w-full flex flex-col items-center">
        <div className="w-fit flex flex-col items-center">
          <div className="h-[160px] w-full 1sm:w-fit relative z-50">
            <CarsSearch />
          </div>
        </div>
      </div>
      <div className="flex flex-row absolute top-[300px] justify-center mx-auto bg-gray-100 pt-12 rounded-t-3xl w-full">
        <div className="mr-12 hidden lg:block">
          <CarFilter />
        </div>
        <div className="flex flex-col mt-6 pt-[100px] lg:pt-0 w-full 1sm:w-fit">
          <div>
            {groupsArray?.slice(0, 15).map((car, index) => (
              <div
                className={`bg-white rounded text-gray-700 w-full 1sm:w-[670px] mb-2 flex flex-col divide-gray-400 ${
                  showDeal === index ? "divide-y-[1px]" : ""
                } `}
              >
                <div className="flex flex-col 1sm:flex-row divide-y-2 1sm:divide-y-0 1sm:divide-x-2 divide-gray-400 w-full">
                  <div className="w-full 1sm:w-[480px] pb-8 1sm:pb-0 py-4 ">
                    <div className="flex flex-col ">
                      <div className="flex flex-col px-4">
                        <div className="pr-3 text-lg font-semibold">
                          {car.car_name}
                        </div>
                        <div className="flex flex-row  space-x-2 text-sm relative">
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
                          <div className="capitalize">
                            {car.doors.replace(/_/g, " ")}
                          </div>
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
                          <div className="capitalize">{car.cls}</div>
                          <img
                            src={`https://logos.skyscnr.com/images/carhire/vendors/${carsInfo?.data.quotes[index].vndr_id}.png`}
                            alt=""
                            className="absolute right-0 -top-10 h-[35px] w-[70px]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row relative">
                        <div className="flex flex-col">
                          <div className="flex flex-row space-x-2 pl-4 pt-4">
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
                              <div className="pl-1 font-semibold text-[14px]">
                                {car.max_seats}
                              </div>
                            </div>
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
                              <div className="pl-1 font-semibold text-[14px]">
                                {car.max_bags}
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
                              <div className="pl-1 font-semibold text-[14px]">
                                {" "}
                                {car.ac ? "AC" : null}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row bg-gray-200 rounded-sm ml-4 mt-2 w-[90px] p-1">
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
                            <div className="capitalize font-semibold text-[14px] ">
                              {car.trans}
                            </div>
                          </div>
                          {carsInfo?.data.quotes[index].pickup_type ? (
                            <div className="flex flex-row mt-4 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="h-4 w-4 mt-1 mr-1 ml-4"
                              >
                                <path
                                  d="M22.854 9.233l-8.087-8.087a3.913 3.913 0 00-5.534 0L1.146 9.233a3.913 3.913 0 000 5.534l8.087 8.087a3.913 3.913 0 005.534 0l8.087-8.087a3.913 3.913 0 000-5.534zM9 12.023a.45.45 0 01-.34.437l-3.113.778a.842.842 0 01-.71-1.491L8.28 9.165a.45.45 0 01.72.36zm10.334.902a.842.842 0 01-.881.313L14.06 12.14a.45.45 0 00-.559.436v3.174l1.063.532a.79.79 0 01-.545 1.473L12 17.25l-2.018.505a.79.79 0 01-.545-1.473l1.063-.532v-9c0-1.5.672-2.25 1.5-2.25s1.5.75 1.5 2.25v1.31a1.5 1.5 0 00.845 1.35l4.818 2.337a.842.842 0 01.17 1.178z"
                                  fill="gray"
                                ></path>
                              </svg>
                              <div className="capitalize text-black text-[14px]">
                                Pickup:{" "}
                                {carsInfo?.data.quotes[index].pickup_type}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="absolute right-4">
                          <img
                            src={`https://logos.skyscnr.com/images/carhire/sippmaps/${car.img}`}
                            className="h-[118px] w-[181px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-4 text-gray-950 flex flex-col pr-4 pt-2 justify-end items-end sm:flex-initial sm:pr-0 sm:pt-0 sm:justify-start sm:items-start">
                    <div className="font-semibold pt-3 hidden 1sm:block">1 deal</div>
                    <div className="flex flex-row text-2xl font-bold  mt-3 ">
                      ${car.min_price.toFixed(0)}
                      <div className="text-sm font-normal text-gray-600 mt-2.5">
                        total
                      </div>
                    </div>
                    <div className="hidden 1sm:flex flex-row pt-3  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 mt-1 mr-1"
                      >
                        <path
                          d="M22 7.382a1.935 1.935 0 00-.514.068.647.647 0 01-.747-.279 2.722 2.722 0 00-.057-.103l-1.53-2.75a3.986 3.986 0 00-3.473-2.068H8.321a3.985 3.985 0 00-3.473 2.068l-1.53 2.75q-.03.05-.057.103a.647.647 0 01-.747.279A1.935 1.935 0 002 7.382a2.026 2.026 0 00-2 2.052c0 .958.14 1.566 1.005 1.792a.626.626 0 01.495.577v8.447a1.5 1.5 0 001.5 1.5h1.5a1.5 1.5 0 001.5-1.5v-1.5h12v1.5a1.5 1.5 0 001.5 1.5H21a1.5 1.5 0 001.5-1.5v-8.447a.626.626 0 01.495-.577C23.86 11 24 10.393 24 9.434a2.026 2.026 0 00-2-2.052zM6 10.5v-3a.75.75 0 011.5 0v1.045a5.251 5.251 0 019.047.079.75.75 0 01-1.298.752 3.752 3.752 0 00-6.687.374H9.75a.75.75 0 010 1.5h-3A.75.75 0 016 10.5zM18 15a.75.75 0 01-1.5 0v-1.045a5.251 5.251 0 01-9.047-.079.75.75 0 011.298-.752 3.751 3.751 0 006.687-.374H14.25a.75.75 0 010-1.5h3A.75.75 0 0118 12z"
                          fill="gray"
                        ></path>
                      </svg>
                      Free Cancellation
                    </div>
                    <div>
                      <button
                        className={`px-8 py-1 rounded bg-gray-800 text-white mt-4 1sm:mt-8 mb-4 font-semibold flex flex-row ${
                          showDeal === index ? "px-[50px] bg-gray-700" : ""
                        } `}
                        onClick={() => {
                          showDeal === index
                            ? setShowDeal(null)
                            : setShowDeal(index);
                        }}
                      >
                        {showDeal === index ? "Hide" : "View deal"}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-4 h-4  mt-[5px]"
                        >
                          {showDeal === index ? (
                            <path
                              d="M4.887 15.905a1.496 1.496 0 010-2.008l6.397-5.948a1 1 0 011.358-.004l6.532 6.012a1.427 1.427 0 01-.138 1.948 1.572 1.572 0 01-1.997.103L11.96 11.37l-4.97 4.535a1.72 1.72 0 01-2.104 0z"
                              fill="white"
                            ></path>
                          ) : (
                            <path
                              d="M19.113 8.095a1.496 1.496 0 010 2.008l-6.397 5.948a1 1 0 01-1.358.003l-6.532-6.01a1.427 1.427 0 01.138-1.949 1.572 1.572 0 011.997-.103l5.078 4.638 4.97-4.535a1.72 1.72 0 012.104 0z"
                              fill="white"
                            ></path>
                          )}
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  {showDeal === index && (
                    <div className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-white">
                      <div className="flex flex-col space-y-1">
                        {providersArray.map((prv, id) => {
                          const quotePrvId =
                            carsInfo?.data.quotes[index].prv_id;
                          return quotePrvId === prv.prv_id ? (
                            <div key={prv.prv_id} className="flex items-center">
                              <span className="font-semibold text-lg mb-2">
                                {prv.provider_name}
                              </span>
                              <div className="flex items-center ml-2 text-orange-500">
                                {[...Array(Math.round(prv.rating))].map(
                                  (_, i) => (
                                    <svg
                                      key={i}
                                      className="h-4 w-4"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M9.049 2.927C9.321 2.266 10.679 2.266 10.951 2.927L12.091 5.91C12.217 6.27 12.554 6.53 12.931 6.575L16.144 6.972C16.859 7.058 17.15 7.935 16.619 8.413L14.128 10.666C13.843 10.916 13.716 11.33 13.822 11.712L14.634 14.559C14.832 15.282 14.088 15.865 13.435 15.476L10.436 13.74C10.136 13.573 9.864 13.573 9.564 13.74L6.565 15.476C5.912 15.865 5.168 15.282 5.366 14.559L6.178 11.712C6.284 11.33 6.157 10.916 5.872 10.666L3.381 8.413C2.85 7.935 3.141 7.058 3.856 6.972L7.069 6.575C7.446 6.53 7.783 6.27 7.909 5.91L9.049 2.927Z" />
                                    </svg>
                                  )
                                )}
                                <span className="ml-2 bg-gray-200 text-gray-600 text-xs rounded-full px-2 py-0.5">
                                  {prv.reviews}
                                </span>
                              </div>
                            </div>
                          ) : null;
                        })}

                        <div className="text-sm text-gray-600">
                          <span className="font-semibold text-lg ">
                            {carsInfo?.data.quotes[index].new_score.toFixed(1)}
                          </span>
                          <span className="text-xs text-gray-400">/10</span>
                          <a href="#" className="ml-2 ">
                            Very good deal
                          </a>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600 text-sm ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="gray"
                          >
                            <path d="M10.5 3A1.5 1.5 0 0112 1.5a10.493 10.493 0 11-9.547 6.124 1.5 1.5 0 112.742 1.218l-.016.034A7.5 7.5 0 1012 4.5 1.5 1.5 0 0110.501 3z"></path>
                            <path
                              d="M6.728 3.214a1.5 1.5 0 012.058.514l4.5 7.5a1.5 1.5 0 11-2.557 1.57l-.015-.026-4.5-7.5a1.5 1.5 0 01.514-2.058z"
                              fill="gray"
                            ></path>
                          </svg>
                          <span>Unlimited mileage</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                          >
                            <path
                              d="M7.5 1.5c-3 0-4.925.895-5.756 2.026a1.496 1.496 0 00-.244.88V20.09a2.195 2.195 0 001.875 2.41h8.25a2.193 2.193 0 001.875-2.41V4.5a1.623 1.623 0 00-.313-1.014C12.262 2.358 10.5 1.5 7.5 1.5zm3 8.25a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-3A.75.75 0 015.25 6h4.5a.75.75 0 01.75.75zm12 1.354v4.646a3.75 3.75 0 01-7.5 0v-3a1.5 1.5 0 013 0v3a.75.75 0 001.5 0v-4.647a1.5 1.5 0 00-.55-1.16l-3.4-2.783a1.5 1.5 0 011.9-2.32v-.001l3.4 2.782a4.5 4.5 0 011.65 3.483z"
                              fill="gray"
                            ></path>
                          </svg>
                          <span className="text-sm capitalize">
                            {carsInfo?.data.quotes[index].fuel_pol.replace(
                              /_/g,
                              " "
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="text-right text-gray-600 ">
                        <div className="flex flex-row text-lg font-semibold pb-8 pl-14">
                          ${car.min_price.toFixed(0)}
                          <div className="text-[15px] font-normal text-gray-700">
                            total
                          </div>
                        </div>
                        <a
                          className="mt-2 px-7 py-1 bg-gray-800 text-white rounded-sm flex items-center font-semibold"
                          href={`https://www.skyscanner.us/${carsInfo?.data.quotes[index].dplnk}`}
                          target="_blank"
                        >
                          Reserve
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-3 h-4 ml-2 mt-0.5 "
                          >
                            <path
                              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                              fill="white"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden 2xl:block">
          <CompleteTrip />
        </div>
      </div>{" "}
    </div>
  );
};

export default CarInfo;
