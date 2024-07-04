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
const HotelsHome = () => {
  // const [hotelsData, setHotelsData] = useState();

  return (
    <div className="rounded text-gray-500 relative bg-gray-100 ">
      <img src={hotelsImg} className="absolute inset-0 bg-cover bg-center" />
      <div className="absolute top-52 left-[300px] ">
        <div className="text-5xl pb-3 text-white font-bold">
          Find the right hotel today
        </div>
        <div className="h-[160px]">
          <HotelsSearch home={true} />
        </div>
      </div>

      <div className="relative top-[600px] bg-gray-100 pb-12 rounded-3xl ">
        <div className="text-3xl pb-3 pl-[350px] text-gray-800 font-bold pt-12">
          <div>Top Luxury 5-star Hotels</div>
          <span className="text-gray-700 font-normal text-[18px]">
            The key to a great city break? A perfectly placed base. Check out
            the best luxury hotels across cities worldwide.
          </span>
        </div>
        <div className="w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto  ">
          {Object.values(hotelCards).map((hotel, index) => (
            <HotelCards hotel={hotel} />
          ))}
        </div>
        <div className="flex justify-center items-center pt-12">
          <div className="bg-white w-fit  text-gray-800 p-8 rounded-lg">
            <div className="max-w-[1150px] text-center pb-8">
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
            <div className="flex justify-between space-x-20">
              <div className="text-center max-w-xs">
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

              <div className="text-center max-w-xs">
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

              <div className="text-center max-w-xs">
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
        <div>
          <FAQ faqs={faqs.car} />
        </div>
      </div>
    </div>
  );
};

export default HotelsHome;
