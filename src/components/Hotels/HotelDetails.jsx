import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import hotelDetailsJson from "../../hotelDetails.json";
import ReviewAndRecommendations from "./ReviewAndRecommendations";
import reviews from "./reviews.json";
import Amenities from "./Amenities";
import Policies from "./Policies";
import useOutsideClick from "../useOutsideClick";
const HotelDetails = () => {
  const { id, price } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImages, setShowImages] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hotelDetails, setHotelDetails] = useState(hotelDetailsJson);
  const [images, setImages] = useState(
    hotelDetailsJson.data?.gallery?.images?.slice(0, 70)
  );
  const imagesRef = useRef(null);

  console.log(images);
  console.log(id);
  console.log(hotelDetails);

  useOutsideClick(imagesRef, () => {
    setShowImages(false);
  });

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
      setHotelDetails(result);
      setImages(result?.data?.gallery?.images?.slice(0, 70) || []);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   if (id) {
  //     fetchHotelDetails();
  //   }
  // }, [id]);

  if (hotelDetails && images) {
    return (
      <div
        id="overview"
        className="bg-gray-100 flex flex-col justify-between items-center pb-12 "
      >
        <div
          className="flex space-x-1 cursor-pointer w-full h-[28vw]"
          onClick={() => {
            setShowImages(true);
          }}
        >
          <img src={images[4].gallery} alt="" className="w-[50%] h-[100%]" />
          <div className="flex flex-col space-y-1 w-[30%] h-[99.2%]">
            <img src={images[8].gallery} alt="" className="w-[100%] h-[60%]" />
            <div className="flex space-x-1 w-full h-[40%]">
              <img
                src={images[13].gallery}
                alt=""
                className="w-[50%] h-[100%]"
              />
              <img
                src={images[6].gallery}
                alt=""
                className="w-[49.3%] h-[100%]"
              />
            </div>
          </div>
          <div className="w-[20%] h-[99.2%]">
            <img
              src={images[12].gallery}
              alt=""
              className="w-[400px] h-[50%]"
            />
            <div className="relative mt-1 h-[50%]">
              <img
                src={images[19].gallery}
                alt=""
                className="w-[400px] h-[100%]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white text-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-8 w-8"
                >
                  <path
                    d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                    fill="white"
                  />
                </svg>
                <span className="font-semibold text-md">
                  Click to see all images
                </span>
              </div>
            </div>
          </div>
        </div>

        {showImages && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-2 ">
            <div
              className="bg-white p-4 pb-20 rounded-lg relative"
              ref={imagesRef}
            >
              <div className="font-semibold text-3xl pb-3">
                Featured Hotel Images
              </div>
              <button
                className="absolute top-3 right-4 text-gray-800"
                onClick={() => {
                  setShowImages(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex flex-row  w-[1480px] ">
                <div className="flex flex-wrap w-[1270px] h-[750px]  overflow-auto">
                  {hotelDetails.data.gallery.images
                    .slice(3, 40) // Adjust the slice range as per your requirement
                    .map((image, index) => (
                      <div
                        className={`${
                          image.category === selectedCategory ||
                          selectedCategory === "All"
                            ? ""
                            : "hidden"
                        } `}
                      >
                        <img
                          key={index}
                          src={
                            image.category === selectedCategory ||
                            selectedCategory === "All"
                              ? image.gallery ||
                                image.thumbnail ||
                                image.dynamic
                              : null
                          }
                          alt=""
                          className={`${
                            image.gallery || image.thumbnail || image.dynamic
                              ? "w-[400px] h-[305px] rounded-lg"
                              : ""
                          } m-2`}
                        />
                      </div>
                    ))}
                </div>
                <div className="fixed right-[220px] w-[180px]">
                  <h2 className="text-lg font-semibold mb-4">Categories</h2>
                  {hotelDetails.data.gallery.categories.map(
                    (category, index) => (
                      <button
                        key={index}
                        className="block text-left w-full py-2 px-4 mb-2 rounded-md text-gray-800 hover:bg-gray-200"
                        onClick={() => {
                          setSelectedCategory(category.name);
                        }}
                      >
                        {category.displayName}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="w-full 1lg:w-fit">
          <div className=" pt-4 space-y-2 mr-6 w-full">
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
                  {hotelDetails?.data.reviewRatingSummary.score}
                </div>
                <div className="mt-3.5">
                  /{hotelDetails?.data.reviewRatingSummary.totalScore}
                </div>
              </div>
              <div className="space-x-6 flex ">
                <div className="text-sm text-gray-600 flex flex-col pr-5">
                  <div className="text-md text-black font-semibold">
                    {hotelDetails?.data.reviewRatingSummary.scoreDesc}
                  </div>
                  {hotelDetails.data.reviewRatingSummary.count}
                </div>
                <div className="px-4 py-3.5 hidden  w-full 1lg:w-[270px] sm:flex bg-white text-gray-700 text-sm rounded-lg h-fit shadow-lg">
                  <img
                    src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/service-rating.a8729bfd.svg"
                    alt=""
                  />
                  <p className="mt-0.5 pl-1">
                    This hotel's service is rated 4.5/5
                  </p>
                </div>
                <div className="px-4 pr-6 pb-[18px] hidden w-full 1lg:w-[270px] pt-2.5 sm:flex bg-white text-gray-700 text-sm rounded-lg h-fit shadow-lg">
                  <img
                    src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/location-rating.55b6ed9c.svg"
                    alt=""
                  />
                  <p className="mt-1   pl-1">
                    his hotel's location is rated 4.5/5
                  </p>
                </div>
                <div className="px-4 pt-1 pb-1.5 flex w-full 1lg:w-[320px] bg-white text-gray-700 text-sm rounded-lg lg:h-[54px] shadow-lg">
                  <p className="mt-1 pl-1 overflow-hidden text-ellipsis line-clamp-2  text-[13px]">
                    "Tastefully appointed rooms. Excellent food options. But
                    what trumps everything is the service level of everything
                    ... concierge , front desk, in room dining , or laundry...
                    Top of the class!"
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center border-b pt-6 pb-2 w-full mr-6">
            {/* Navigation Links */}
            <div className="flex space-x-6 font-semibold">
              <a href="#overview" className="text-black">
                Overview
              </a>
              <a href="#policies" className="text-black hidden sm:block">
                Policies
              </a>
              <a href="#amenities" className="text-black hidden sm:block">
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
              <span className="text-black text-2xl mb-2 font-bold">
                {price}
              </span>
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
            <ReviewAndRecommendations />
          </div>
        </div>
      </div>
    );
  }
};

export default HotelDetails;
