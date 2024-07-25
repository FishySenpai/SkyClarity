import React, { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import carImg from "./car-img.jpg";
import useOutsideClick from "../useOutsideClick";
import faqs from "../faq.json";
import FAQ from "../Flights/FAQ";
import CarCards from "./CarCards";
import carCards from "./carCards.json";
import CarsSearch from "./CarsSearch";
import searchImg from "./search.png";
import compareImg from "./compare.png";
import supportImg from "./support.png";
import CarRentalTips from "./CarRentalTips";
const CarRentalHome = () => {
   const logos = [
     {
       src: "https://ak-d.tripcdn.com/images/1of5k12000cedj57dEABF.png",
       alt: "Avis",
     },
     {
       src: "https://ak-d.tripcdn.com/images/1of4212000cedjfclA684.png",
       alt: "Alamo",
     },
     {
       src: "https://ak-d.tripcdn.com/images/1of3x12000cedjgyt22C4.png",
       alt: "Budget",
     },
     {
       src: "https://ak-d.tripcdn.com/images/1of4812000cedk9m3642B.webp",
       alt: "Dollar",
     },
     {
       src: "https://ak-d.tripcdn.com/images/1of2912000cedkh2tC620.webp",
       alt: "Enterprise",
     },
     {
       src: "https://ak-d.tripcdn.com/images/1of2c12000cedl01xC898.webp",
       alt: "Europcar",
     },
     {
       src: "https://ak-d.tripcdn.com/images/1of3t12000cedk3if0845.webp",
       alt: "Hertz",
     },
     {
       src: "https://ak-d.tripcdn.com/images/1of0v12000cedkbs982AC.webp",
       alt: "National",
     },
     {
       src: "https://ak-d.tripcdn.com/images/1of2m12000cedkg3h4944.png",
       alt: "Thrifty",
     },
     {
       src: "https://ak-d.tripcdn.com/images/1of5f12000cedko3gE0FE.webp",
       alt: "Sixt",
     },
   ];
  return (
    <div className="bg-gray-100 rounded text-gray-500 relative">
      <img
        src={carImg}
        className="absolute inset-0 w-full h-[678px] object-cover"
      />
      <div className="absolute top-36 lg:top-52 w-full flex flex-col items-center">
        <div className="w-fit flex flex-col items-center">
          <div className="h-[160px] w-full 1sm:w-fit relative ">
            <div className="text-4xl 1lg:text-5xl pb-3 text-white font-bold text-left w-[95%]">
              Find cheap flight deals
            </div>
            <CarsSearch />
          </div>
        </div>
      </div>
      <div className="relative top-[600px] bg-gray-100 pb-12 rounded-t-3xl ">
        <div
          className="text-3xl pb-3 text-gray-800 font-bold pt-12 pl-6 sm:pl-0 sm:w-[600px] 1sm:w-[680px]  1md:w-[820px] lg:w-[935px] 1lg:w-[935px] 1xl:w-[1240px] flex flex-col 
        mx-auto 1xl:pl-5"
        >
          <div>Popular car rental destinations</div>
          <span className="text-gray-700 font-normal text-[18px]">
            Here are the last-minute flight deals with the lowest prices. Act
            fast – they all depart within the next three months.
          </span>
        </div>
        <div className="sm:w-[600px] 1sm:w-[680px] 1md:w-[830px] lg:w-[950px] xl:w-[1200px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto  ">
          {Object.keys(carCards).map((key) => {
            const card = carCards[key];
            return <CarCards card={card} key={key} />;
          })}
        </div>
        <div className="flex justify-center items-center pt-12 sm:w-[600px] 1sm:w-[680px] 1md:w-[830px] lg:w-[950px] xl:w-[1200px] mx-4 sm:mx-auto">
          <div className="bg-white w-fit  text-gray-800 p-8 rounded-lg">
            <div className="max-w-[1150px] pb-8">
              <h3 className="text-2xl 2sm:text-3xl font-semibold mb-2">
                Compare cars across your favorite brands
              </h3>
              <div className="flex flex-wrap justify-center space-x-5 p-4 pl-1 ">
                {logos.map((logo, index) => (
                  <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 w-11 sm:h-12 sm:w-20 mb-4"
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col 1md:flex-row justify-center items-center 1md:justify-between space-y-8 1md:space-y-8 1md:space-x-20">
              <div className="text-center 1md:max-w-xs">
                <img
                  src={searchImg}
                  alt="Hotel deals"
                  className="mx-auto mb-4 w-36 h-28"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Precise Searching
                </h3>
                <p className="text-gray-600">
                  From family-friendly SUVs to luxury convertibles, you’ll get a
                  great price on every type of car rental.
                </p>
              </div>

              <div className="text-center  1md:max-w-xs 1md:pb-[34px]">
                <img
                  src={compareImg}
                  alt="Up-to-date pricing"
                  className="mx-auto mb-4 w-32 h-28"
                />
                <h3 className="text-xl font-semibold mb-2">Compare Pricing</h3>
                <p className="text-gray-600">
                  Compare rental cars on fuel policy, mileage, provider rating,
                  flexible booking, cleanliness, customer service and more.
                </p>
              </div>

              <div className="text-center  1md:max-w-xs 1md:pb-[33px]">
                <img
                  src={supportImg}
                  alt="Precise searching"
                  className="mx-auto mb-4 w-32 h-28 "
                />
                <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                <p className="text-gray-600">
                  One-on-one support in multiple languages. Providing customers
                  with best user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:w-[600px] 1sm:w-[680px] 1md:w-[830px] lg:w-[950px] xl:w-[1200px] mx-4 sm:mx-auto">
          <CarRentalTips />
        </div>
      </div>
    </div>
  );
};

export default CarRentalHome;
