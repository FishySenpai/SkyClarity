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
        className="h-[622px] absolute inset-0 bg-cover bg-center"
      />
      <div className="absolute top-52 left-[300px]">
        <div className="text-5xl pb-3 text-white font-bold">
          Find the best car rental deals
        </div>
        <CarsSearch />
      </div>
      <div className="relative top-[600px] bg-gray-100 pb-12 rounded-t-3xl ">
        <div className="text-3xl pb-3 pl-[350px] text-gray-800 font-bold pt-12">
          <div>Popular car rental destinations</div>
          <span className="text-gray-700 font-normal text-[18px]">
            Here are the last-minute flight deals with the lowest prices. Act
            fast – they all depart within the next three months.
          </span>
        </div>
        <div className="w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto  ">
          {Object.keys(carCards).map((key) => {
            const card = carCards[key];
            return <CarCards card={card} key={key} />;
          })}
        </div>
        <div className="flex justify-center items-center pt-12">
          <div className="bg-white w-fit  text-gray-800 p-8 rounded-lg">
            <div className="max-w-[1150px] pb-8">
              <h3 className="text-3xl font-semibold mb-2">
                Compare cars across your favorite brands
              </h3>
              <div className="flex justify-center space-x-5 p-4 pl-1 ">
                {logos.map((logo, index) => (
                  <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-12 w-24"
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-between space-x-20">
              <div className="text-center max-w-xs">
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

              <div className="text-center max-w-xs">
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

              <div className="text-center max-w-xs">
                <img
                  src={supportImg}
                  alt="Precise searching"
                  className="mx-auto mb-4 w-32 h-28 "
                />
                <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                <p className="text-gray-600">
                  One-on-one support in multiple languages. Providing customers with best user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <CarRentalTips/>
        </div>
      </div>
    </div>
  );
};

export default CarRentalHome;
