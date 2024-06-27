import React, {useState} from "react";
import reviews from "./reviews.json";
import similarHotels from "./similarHotels.json";
const ReviewAndRecommendations = () => {
      const [show, setShow] = useState(false);
  console.log(reviews);
  console.log(similarHotels);
  return (
    <div>
      <div id="reviews" className="w-[1040px]  pt-6 text-gray-800 ml-1">
        <p className="font-semibold text-3xl pb-3">Reviews</p>
        {reviews.data.reviews.slice(0, 5).map((review, index) => {
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
      <div id="recommendations" >
        <p className="font-semibold  pt-6 text-3xl pb-4">Hotel Recommendations</p>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 gap-x-2 w-[1080px]`}>
          {similarHotels.data?.slice(0, show ? 9 : 3).map((hotel, index) => {
            return (
              <div className="mx-auto  bg-white shadow-lg rounded-lg overflow-hidden w-[350px] ">
                <div className=" flex flex-col ">
                  <div className="w-[350px] h-[150px] overflow-hidden">
                    <img src={hotel.heroImage} alt="Airline Logo" />
                  </div>

                  <div className="pl-2 pt-3  flex justify-between px-2">
                    <h2 className="text-xl font-bold text-gray-800 w-[250px] overflow-hidden whitespace-nowrap text-ellipsis">
                      {hotel.name}
                    </h2>

                    <p className="text-gray-600 flex flex-row mt-1.5">
                      {Array(hotel.stars)
                        .fill(0)
                        .map((_, index) => (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            height="15"
                            width="15"
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
                      {hotel.rating.count}
                    </span>
                    <div className="text-right flex flex-col pl-[102px] pr-2 pb-2">
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
  );
};

export default ReviewAndRecommendations;
