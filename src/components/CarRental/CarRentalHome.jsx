import React, { useState, useEffect, useRef } from "react";
import Calendar from "react-calendar";
import carImg from "./car-img.jpg";
import useOutsideClick from "../useOutsideClick";
import faqs from "../faq.json"
import FAQ from "../Flights/FAQ";
import CarCards from "./CarCards";
import carCards from "./carCards.json";
import CarsSearch from "./CarsSearch";
const CarRentalHome = () => {
  const [pickUpLocation, setPickUpLocation] = useState();
  const [pickUpLocationId, setPickUpLocationId] = useState();
  const [dropOffLocation, setDropOffLocation] = useState();
  const [dropOffLocationId, setDropOffLocationId] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [value, onChange] = useState(new Date());
  const [pickUpToggle, setpickUpToggle] = useState(false);
  const [pickUpDate, setpickUpDate] = useState("");
  const [dropOffToggle, setdropOffToggle] = useState(false);
  const [dropOffDate, setdropOffDate] = useState("");
  const [pickUpTime, setPickUpTime] = useState("10:00");
  const [togglePickUpTime, setTogglePickUpTime] = useState(false);
  const [dropOffTime, setDropOffTime] = useState("10:00");
  const [toggleDropOffTime, setToggleDropOffTime] = useState(false);
  const [driverCheck, setDriverCheck] = useState(true);
  const [dropOffCheck, setDropOffCheck] = useState(false);
  const pickUpPopupRef = useRef(null);
  const dropOffPopupRef = useRef(null);
  const pickUpTimePopupRef = useRef(null);
  const dropOffTimePopupRef = useRef(null);


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
        <div className="w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto pt-12 ">
          {Object.keys(carCards).map((key) => {
            const card = carCards[key];
            return <CarCards card={card} key={key}/>;
          })}
        </div>
        <div>
          <FAQ faqs={faqs.car} />
        </div>
      </div>
    </div>
  );
};

export default CarRentalHome;
