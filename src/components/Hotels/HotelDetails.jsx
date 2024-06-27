import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import hotelDetails from "../../hotelDetails.json";
import ReviewAndRecommendations from "./ReviewAndRecommendations";
import reviews from "./reviews.json";
import Amenities from "./Amenities";
import Policies from "./Policies";
const HotelDetails = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState(
    hotelDetails?.data.gallery?.images?.slice(0, 70)
  );
  console.log(images);
  console.log(id);
  console.log(hotelDetails);

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
    <div
      id="overview"
      className="bg-gray-100 flex flex-col justify-between items-center pb-12"
    >
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

      <div className=" pt-4 space-y-2 mr-6">
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
            <div className="text-sm text-gray-600 flex flex-col pr-5">
              <div className="text-md text-black font-semibold">
                {hotelDetails.data.reviewRatingSummary.scoreDesc}
              </div>
              {hotelDetails.data.reviewRatingSummary.count}
            </div>
            <div className="px-4 py-3.5 flex bg-white text-gray-700 text-sm rounded-lg h-fit shadow-lg">
              <img
                src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/service-rating.a8729bfd.svg"
                alt=""
              />
              <p className="mt-0.5 pl-1">
                {hotelDetails.data.reviewRatingSummary.cleanlinessMessage}
              </p>
            </div>
            <div className="px-4 pr-6 pb-[18px] pt-2.5 flex bg-white text-gray-700 text-sm rounded-lg h-fit shadow-lg">
              <img
                src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/location-rating.55b6ed9c.svg"
                alt=""
              />
              <p className="mt-1   pl-1">
                {hotelDetails.data.reviewRatingSummary.locationMessage}
              </p>
            </div>
            <div className="px-4 pt-1 pb-1.5 flex w-[300px] bg-white text-gray-700 text-sm rounded-lg h-[54px] shadow-lg">
              <p className="mt-1 pl-1 overflow-hidden text-ellipsis line-clamp-2  text-[13px]">
                "{reviews.data.reviews[0].review}"
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center border-b pt-6 pb-2 w-[1035px] mr-6">
        {/* Navigation Links */}
        <div className="flex space-x-6 font-semibold">
          <a href="#overview" className="text-black">
            Overview
          </a>
          <a href="#policies" className="text-black">
            Policies
          </a>
          <a href="#amenities" className="text-black">
            Amenities
          </a>
          <a href="#reviews" className="text-black">
            Reviews
          </a>
          <a href="#recommendations" className="text-black">
            Recommendations
          </a>
        </div>

        {/* Price and Button */}
        <div className="flex items-center space-x-4">
          <span className="text-black text-2xl mb-2 font-bold">$32</span>
          <button className="bg-gray-900 font-bold text-white px-4 py-2 rounded">
            Select
          </button>
        </div>
      </div>
      <div className="text-gray-800 pt-6">
        <Policies hotelDetails={hotelDetails} />
        <div id="amenities">
          <Amenities />
        </div>

        {/* <p id="details" className="text-3xl font-semibold pt-6">
          Check in & check out
        </p>
        <div className="flex space-x-6 pt-4 text-lg  pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="h-8 w-8"
          >
            <path
              d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
              fill="rgb(55 65 81)"
            />
          </svg>
          <div>
            <p className="pb-2">
              Check in from:{" "}
              <span className="text-md font-semibold text-gray-800">
                {hotelDetails?.data.goodToKnow.checkinTime.time}
              </span>
            </p>
            <p className="">
              Check out before:{" "}
              <span className="text-md font-semibold text-gray-800">
                {hotelDetails?.data.goodToKnow.checkoutTime.time}
              </span>
            </p>
          </div>
        </div> */}
        <ReviewAndRecommendations />
      </div>
    </div>
  );
};

export default HotelDetails;
