import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import hotelDetails from "../../hotelDetails.json";
import ReviewAndRecommendations from "./ReviewAndRecommendations";
import reviews from "./reviews.json";
import Amenities from "./Amenities";
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
    <div id="overview" className="bg-gray-100 flex flex-col justify-between items-center pb-12">
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

      <div className=" pt-4 space-y-2">
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
          <div className="space-x-3 flex ">
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
      <div className="flex justify-between items-center border-b pt-6 pb-2 w-[1000px]">
        {/* Navigation Links */}
        <div className="flex space-x-6 font-semibold">
          <a href="#overview" className="text-black">
            Overview
          </a>
          <a href="#policies" className="text-black">
            Policies
          </a>
          <a href="#reviews" className="text-black">
            Reviews
          </a>

          <a href="#amenities" className="text-black">
            Amenities
          </a>
          <a href="#recommendations" className="text-black">
            Recommendations
          </a>
        </div>

        {/* Price and Button */}
        <div className="flex items-center space-x-4">
          <span className="text-black text-lg font-semibold">$32</span>
          <button className="bg-blue-900 text-white px-4 py-2 rounded">
            View deals
          </button>
        </div>
      </div>
      <div className="text-gray-800 pt-6">
        <div>
          <Amenities/>
        </div>
        <div id="policies" className="w-[1000px]">
          <p className="font-semibold text-3xl pb-4">Policies</p>
          <div className="space-y-6 bg-slate-50 rounded-lg p-4  divide-y-2 divide-gray-300">
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="h-6 w-6 mt-1"
              >
                <path
                  d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"
                  fill="rgb(55 65 81)"
                />
              </svg>
              <p className="text-2xl pl-3 font-semibold text-gray-800 w-[250px]">
                Children
              </p>
              <p className="text-gray-800  mt-1">
                {
                  hotelDetails?.data.goodToKnow.policies.content[0].values[0]
                    .content
                }
              </p>
            </div>
            <div className="flex pt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="h-6 w-6 mt-1.5 "
              >
                <path
                  d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"
                  fill="rgb(55 65 81)"
                />
              </svg>
              <p className="text-2xl font-semibold text-gray-800 pl-3 w-[250px]">
                Additional Beds
              </p>
              <p className="text-gray-800  mt-1">
                {
                  hotelDetails?.data.goodToKnow.policies.content[1].values[0]
                    .content
                }
              </p>
            </div>
            <div className="flex pt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-6 w-6 mt-1.5"
              >
                <path
                  d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
                  fill="rgb(55 65 81)"
                />
              </svg>
              <p className="text-2xl pl-3 font-semibold text-gray-800 w-[250px]">
                Breakfast
              </p>
              <div className="space-y-1.5 mt-1">
                <p className="text-gray-800 ">
                  {
                    hotelDetails?.data.goodToKnow.policies.content[3].values[0]
                      .content
                  }
                </p>
                <p className="text-gray-800 ">
                  <span className="font-semibold w-[130px] inline-block">
                    Breakfast menu:
                  </span>
                  {
                    hotelDetails?.data.goodToKnow.policies.content[3].details[0]
                      .values[0].content
                  }
                </p>
                <p className="text-gray-800  ">
                  <span className="font-semibold w-[130px] inline-block">
                    Breakfast price:
                  </span>
                  {
                    hotelDetails?.data.goodToKnow.policies.content[3].details[1]
                      .values[0].content
                  }
                </p>
              </div>
            </div>
            <div className="flex pt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-6 w-6 mt-1"
              >
                <path
                  d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"
                  fill="rgb(55 65 81)"
                />
              </svg>
              <p className="text-2xl pl-3 font-semibold text-gray-800 w-[250px]">
                Pets
              </p>
              <p className="text-gray-800  mt-1">
                {
                  hotelDetails?.data.goodToKnow.policies.content[2].values[0]
                    .content
                }
              </p>
            </div>
            <div className="flex pt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512 "
                className="h-6 w-6 mt-1.5"
              >
                <path
                  d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"
                  fill="rgb(55 65 81)"
                />
              </svg>
              <p className="text-2xl pl-3 font-semibold text-gray-800 w-[250px]">
                Payment Methods
              </p>
              <div>
                <p className="text-gray-800  mt-1">
                  {
                    hotelDetails?.data.goodToKnow.policies.content[5].values[0]
                      .title
                  }
                </p>
                <div className="flex">
                  <p className="text-gray-800  font-semibold">
                    {
                      hotelDetails?.data.goodToKnow.policies.content[5]
                        .values[0].content[0]
                    }
                    ,
                  </p>
                  <p className="text-gray-800 pl-1 font-semibold ">
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
        <p id="details" className="text-3xl font-semibold pt-6">
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
        </div>
      </div>
      <ReviewAndRecommendations />
    </div>
  );
};

export default HotelDetails;
