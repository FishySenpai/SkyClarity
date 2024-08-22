import React, { useState, useEffect, useRef } from "react";
import Hotels from "./Hotels";
import hotelsData from "../../hotels.json";
import hotelsImg from "./hotels-img.jpg";
import useOutsideClick from "../useOutsideClick";
import Calendar from "react-calendar";
import HotelCards from "./HotelCards";
import FAQ from "../Flights/FAQ";
import faqs from "../faq.json";
import HotelsSearch from "./HotelsSearch";
import hotelCards from "./hotelCards.json";
import hotelImg from "./hotel1.png";
import globeImg from "./clock.png";
import saveImg from "./save.jpg";
import PopularDestinations from "./PopularDestinations";
const HotelsHome = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [totalScrollWidth, setTotalScrollWidth] = useState(0);
  const scrollContainerRef = useRef(null);
  // const [hotelsData, setHotelsData] = useState();
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  useEffect(() => {
    const container = scrollContainerRef.current;

    function handleScroll() {
      if (container) {
        // Check if there's content to scroll to the left
        setShowLeftArrow(container.scrollLeft > 0);

        // Check if there's content to scroll to the right
        setShowRightArrow(
          container.scrollLeft < container.scrollWidth - container.clientWidth
        );
      }
    }

    // Attach the scroll event listener
    container.addEventListener("scroll", handleScroll);

    // Initial check when the component mounts
    handleScroll();

    // Clean up the event listener when the component unmounts
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);
const scrollLeft = () => {
  const container = scrollContainerRef.current;
  const scrollAmount = window.innerWidth * 0.90; // 75% of the window's width
  const newScrollPosition = Math.max(0, scrollPosition - scrollAmount);
  setScrollPosition(newScrollPosition);
  if (container) {
    container.scroll({ left: newScrollPosition, behavior: "smooth" });
  }
};

const scrollRight = () => {
  const container = scrollContainerRef.current;
  const scrollAmount = window.innerWidth * 0.80; // 75% of the window's width
  const newScrollPosition = Math.min(
    container.scrollWidth - container.clientWidth,
    scrollPosition + scrollAmount
  );
  setScrollPosition(newScrollPosition);
  if (container) {
    container.scroll({ left: newScrollPosition, behavior: "smooth" });
  }
};


  return (
    <div className="rounded text-gray-500 relative bg-gray-100 ">
      <img
        src={hotelsImg}
        className="absolute inset-0 w-full h-[578px] object-cover"
      />

      <div className="absolute top-28 2sm:top-36 1lg:top-52 w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-start 1md:items-center">
          <div className="h-[160px] w-full 1md:w-fit relative">
            <div className="text-[28px] 2sm:text-4xl 1lg:text-5xl pb-3 text-white font-bold text-left ml-2">
              Find the right hotel today
            </div>
            <HotelsSearch home={true} />
          </div>
        </div>
      </div>

      <div className="relative top-[600px] bg-gray-100 pb-12 rounded-3xl  ">
        <div className="text-3xl pb-3 text-gray-800 font-bold 1md:pt-12 w-[340px] 2sm:w-[540px]  1sm:w-[680px] 1md:w-[840px] 1lg:w-[982px] 1xl:w-[1350px] flex flex-col mx-auto 1xl:pl-5">
          <div>Top Luxury 5-star Hotels</div>
          <span className="text-gray-700 font-normal text-[18px]">
            The key to a great city break? A perfectly placed base. Check out
            the best luxury hotels across cities worldwide.
          </span>
        </div>
        <div className="relative w-[340px] 2sm:w-[540px]  1sm:w-[680px] 1md:w-[840px] 1lg:w-[982px] 1xl:w-[1350px] flex  mx-auto  overflow-hidden">
          <button
            onClick={scrollLeft}
            className={`z-50 absolute -left-0 1lg:left-0 top-1/3 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full shadow-lg ${
              showLeftArrow ? "" : "opacity-0"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="h-6 w-6"
            >
              <path
                d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                fill="rgb(31 41 55)"
              />
            </svg>
          </button>
          <div
            className="w-[1300px] flex space-x-6 mx-auto  overflow-hidden"
            ref={scrollContainerRef}
          >
            {Object.values(hotelCards).map((hotel, index) => (
              <HotelCards hotel={hotel} />
            ))}
          </div>
          {showRightArrow ? (
            <button
              onClick={scrollRight}
              className="z-50 absolute right-3 top-1/3 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="h-6 w-6"
              >
                <path
                  d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                  fill="rgb(31 41 55)"
                />
              </svg>
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="">
          <PopularDestinations />
        </div>
        <div className="flex justify-center items-center pt-16 w-[340px] 2sm:w-[540px]  1sm:w-[680px] 1md:w-[840px] 1lg:w-[982px] 1xl:w-[1350px] mx-auto">
          <div className="bg-white w-fit  text-gray-800 p-8 rounded-lg">
            <div className="max-w-[1230px] text-center pb-8">
              <h3 className="text-3xl font-semibold mb-2">
                Compare hotels across your favorite brands
              </h3>
              <p className="text-gray-600">
                It’s easy around here. 100 million travelers use us as their
                go-to tool, comparing flight deals and offers from more than
                1,200 airlines and travel providers. With so many options to
                choose from in one place, you can say hello to savings and
                goodbye to stress – here’s how.
              </p>
            </div>
            <div className="flex flex-col 1md:flex-row justify-center items-center 1md:justify-between space-y-8 1md:space-y-8 1md:space-x-20">
              <div className="text-center  1md:max-w-xs">
                <img
                  src={hotelImg}
                  alt="Hotel deals"
                  className="mx-auto mb-4 w-36 h-32"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Precise searching
                </h3>
                <p className="text-gray-600">
                  Find hotels with swimming pools, free cancellation, and
                  flexible booking. Or whatever matters most to you.
                </p>
              </div>

              <div className="text-center  1md:max-w-xs 1md:pb-[34px]">
                <img
                  src={globeImg}
                  alt="Up-to-date pricing"
                  className="mx-auto mb-4 w-32 h-32"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Up-to-date pricing
                </h3>
                <p className="text-gray-600">
                  We always show you the most recent pricing overview we can
                  find so you know exactly what to expect.
                </p>
              </div>

              <div className="text-center  1md:max-w-xs  1md:pb-[55px]">
                <img
                  src={saveImg}
                  alt="Precise searching"
                  className="mx-auto mb-4 w-32 h-32"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Compare confidently
                </h3>
                <p className="text-gray-600">
                  Compare hotel prices from 100s of sites at once. And find the
                  cheapest deals.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[340px] 2sm:w-[540px]  1sm:w-[680px] 1md:w-[840px] 1lg:w-[982px] 1xl:w-[1300px] mx-auto">
          <FAQ faqs={faqs.car} />
        </div>
      </div>
    </div>
  );
};

export default HotelsHome;
