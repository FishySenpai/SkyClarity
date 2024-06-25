import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import hotelDetails from "../../hotelDetails.json";
import reviews from "./reviews.json";
import similarHotels from "./similarHotels.json"
const HotelDetails = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState(
    hotelDetails?.data.gallery?.images?.slice(0, 70)
  );
  console.log(images);
  console.log(id);
  console.log(hotelDetails);
  console.log(reviews);
  console.log(similarHotels)
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
      </div>
    </div>
  );
};

export default HotelDetails;
