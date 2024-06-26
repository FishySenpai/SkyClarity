import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import hotelDetails from "../../hotelDetails.json";
import reviews from "./reviews.json";
import similarHotels from "./similarHotels.json";
const HotelDetails = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [images, setImages] = useState(
    hotelDetails?.data.gallery?.images?.slice(0, 70)
  );
  console.log(images);
  console.log(id);
  console.log(hotelDetails);
  console.log(reviews);
  console.log(similarHotels);
  const fetchHotelDetails = async () => {
    const url = `https://skyscanner80.p.rapidapi.com/api/v1/hotels/detail?id=${id}&currency=USD&market=US&locale=en-US`;
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
    } catch (error) {
      console.error(error);
    }
  };
  //   useEffect(()=>{
  //     fetchHotelDetails();
  //   }, [id])
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="bg-gray-100 flex flex-col justify-between items-center pb-12">
      <div>test</div>
      <div className="flex space-x-1 ">
        <img src={images[29].gallery} alt="" className="w-[900px] h-[500px]" />
        <div className="flex flex-col space-y-1">
          <img src={images[8].gallery} alt="" className="w-[600px] h-[300px]" />
          <div className="flex space-x-1">
            <img
              src={images[13].gallery}
              alt=""
              className="w-[300px] h-[200px]"
            />
            <img
              src={images[6].gallery}
              alt=""
              className="w-[300px] h-[200px]"
            />
          </div>
        </div>
        <div>
          <img
            src={images[12].gallery}
            alt=""
            className="w-[400px] h-[250px]"
          />
          <img
            src={images[19].gallery}
            alt=""
            className="w-[400px] h-[250px]"
          />
        </div>
      </div>
      {/* <div className="flex flex-wrap relative w-[1000px] ">
        <button
          onClick={() => {
            handlePrevClick();
          }}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full z-50"
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
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="relative bg-white">
          {images ? (
            <img
              className="w-[1000px] h-[600px]"
              src={
                images[currentImageIndex].gallery
                  ? images[currentImageIndex].gallery
                  : images[currentImageIndex].dynamic
              }
              alt=""
            />
          ) : (
            ""
          )}
        </div>
        <button
          onClick={() => {
            handleNextClick();
          }}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full z-50"
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
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div> */}

      <div className="mr-48 pt-4 space-y-2">
        <div className="text-4xl font-bold flex flex-row">
          <div>{hotelDetails.data.general.name}</div>
          <div className="mt-3 ml-1 flex">
            {Array(hotelDetails.data.general.stars)
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
          </div>
        </div>
        <div className="text-sm flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            height={16}
            width={16}
          >
            <path
              d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
              fill="gray"
            />
          </svg>
          <div className="ml-2 text-[15px]">
            {hotelDetails.data.location.address}
          </div>
        </div>
        <div className="flex flex-row pt-2">
          <div className="text-md text-gray-600 flex flex-row pr-2">
            <div className="text-4xl text-black font-semibold">
              {hotelDetails.data.reviewRatingSummary.score}
            </div>
            <div className="mt-3.5">
              /{hotelDetails.data.reviewRatingSummary.totalScore}
            </div>
          </div>
          <div className="space-x-6 flex ">
            <div className="text-sm text-gray-600 flex flex-col ">
              <div className="text-md text-black font-semibold">
                {hotelDetails.data.reviewRatingSummary.scoreDesc}
              </div>
              {hotelDetails.data.reviewRatingSummary.count}
            </div>
            <div className="px-3 py-2 bg-white text-gray-700 text-sm rounded-lg h-fit shadow-lg">
              {hotelDetails.data.reviewRatingSummary.cleanlinessMessage}
            </div>
            <div className="px-3 py-2 bg-white text-gray-700 text-sm rounded-lg h-fit shadow-lg">
              {hotelDetails.data.reviewRatingSummary.locationMessage}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className="text-lg font-semibold">Check in and check out</p>
          <div className="flex space-x-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-6 w-6"
            >
              <path
                d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                fill="gray"
              />
            </svg>
            <p>
              Check in from:{" "}
              <span className="text-md font-semibold">
                {hotelDetails?.data.goodToKnow.checkinTime.time}
              </span>
            </p>
            <p>
              Check out before:{" "}
              <span className="text-md font-semibold">
                {hotelDetails?.data.goodToKnow.checkoutTime.time}
              </span>
            </p>
          </div>
          <div className="">
            <p>Good to know</p>
            <div className="space-y-6 bg-white p-4 divide-y-2 divide-gray-300">
              <div className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="h-6 w-6"
                >
                  <path
                    d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"
                    fill="gray"
                  />
                </svg>
                <p className="text-2xl font-semibold text-gray-800">Children</p>
                <p className="text-gray-800 pl-24 ">
                  {
                    hotelDetails?.data.goodToKnow.policies.content[0].values[0]
                      .content
                  }
                </p>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="h-6 w-6"
                >
                  <path
                    d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"
                    fill="gray"
                  />
                </svg>
                <p className="text-2xl font-semibold text-gray-800">
                  Additional Beds
                </p>
                <p className="text-gray-800 pl-24 ">
                  {
                    hotelDetails?.data.goodToKnow.policies.content[1].values[0]
                      .content
                  }
                </p>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="h-6 w-6"
                >
                  <path
                    d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"
                    fill="gray"
                  />
                </svg>
                <p className="text-2xl font-semibold text-gray-800">
                  Breakfast
                </p>
                <div>
                  <p className="text-gray-800 pl-24 ">
                    {
                      hotelDetails?.data.goodToKnow.policies.content[3]
                        .values[0].content
                    }
                  </p>
                  <p className="text-gray-800 pl-24 ">
                    {
                      hotelDetails?.data.goodToKnow.policies.content[3]
                        .details[0].values[0].content
                    }
                  </p>
                  <p className="text-gray-800 pl-24 ">
                    {
                      hotelDetails?.data.goodToKnow.policies.content[3]
                        .details[1].values[0].content
                    }
                  </p>
                </div>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="h-6 w-6"
                >
                  <path
                    d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"
                    fill="gray"
                  />
                </svg>
                <p className="text-2xl font-semibold text-gray-800">
                  Payment Methods
                </p>
                <div>
                  <p className="text-gray-800 pl-24 ">
                    {
                      hotelDetails?.data.goodToKnow.policies.content[5]
                        .values[0].title
                    }
                  </p>
                  <div className="flex">
                    <p className="text-gray-800 pl-24 font-semibold">
                      {
                        hotelDetails?.data.goodToKnow.policies.content[5]
                          .values[0].content[0]
                      }
                    </p>
                    <p className="text-gray-800 pl-4 font-semibold ">
                      {
                        hotelDetails?.data.goodToKnow.policies.content[5]
                          .values[0].content[1]
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[1000px] pt-6">
          <p className="font-bold text-2xl pb-3">Reviews</p>
          {reviews.data.reviews.slice(0, 7).map((review, index) => {
            return (
              <div className="pb-4 pt-4 flex border-t-2 border-gray-300">
                <div className="text-sm space-y-2 w-[200px] ">
                  <p className="font-semibold text-[17px]">
                    {review.travelGuestType
                      ? review.travelGuestType
                      : "Solo Traveler"}
                  </p>
                  <p className="text-[14px]">{review.checkinDate}</p>
                  <p className="text-[14px]">{review.reviewDate}</p>
                </div>
                <div className="w-[800px] ml-8">
                  <div className="flex">
                    <p className="font-semibold text-[17px] ">
                      {review.rating}.0
                    </p>
                    <img
                      src={`https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/${Math.round(
                        review.rating
                      )}.0-64600-5.png`}
                      alt=""
                      className="h-5 mt-1"
                    />
                  </div>
                  <p className="font-semibold text-[17px] pt-2">
                    {review.title ? review.title : "Good Service"}
                  </p>
                  <p className="pt-2 text-[15px]">{review.review}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <p className="font-bold text-2xl pb-3">Hotel Recommendations</p>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 `}>
            {similarHotels.data?.slice(0, show ? 9 : 3).map((hotel, index) => {
              return (
                <div className="mx-auto  bg-white shadow-lg rounded-lg overflow-hidden w-fit ">
                  <div className=" flex flex-col ">
                    <img
                      src={hotel.heroImage}
                      alt="Airline Logo"
                      className="w-[392px] h-[160px]"
                    />
                    <div className="pl-2 pt-3  flex justify-between px-2">
                      <h2 className="text-xl font-bold text-gray-800 w-[250px] overflow-hidden whitespace-nowrap text-ellipsis">
                        {hotel.name}
                      </h2>

                      <p className="text-gray-600 flex flex-row mt-1">
                        {Array(hotel.stars)
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
                    <span className="text-gray-800 text-sm px-2 flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        height="16"
                        width="16"
                      >
                        <path
                          d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                          fill="gray"
                        ></path>
                      </svg>{" "}
                      <p>{hotel.distance} from hotel</p>
                    </span>
                    <div className="px-2 flex pt-2 space-x-1">
                      <span className="text-gray-800 font-bold text-[17px] ">
                        {hotel.rating.formatValue}
                      </span>
                      <img
                        src={hotel.rating.taImage}
                        alt=""
                        className="h-4 mt-1.5"
                      />
                      <span className="text-gray-600 text-[12px] mt-1">
                        {hotel.rating.count} reviews
                      </span>
                      <div className="text-right flex flex-col pl-28 pr-2 pb-2">
                        <span className="font-bold text-gray-800 text-xl pl-0.5">
                          ${(hotel.rawPrice / 83.58).toFixed(0)}
                        </span>
                        <span className=" text-gray-900 text-sm mb-0.5">
                          per night
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="text-center text-blue-600 cursor-pointer pt-4"
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? "See less" : "See more"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
