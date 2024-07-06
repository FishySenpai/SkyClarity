import React, { useRef, useState } from "react";

const destinations = [
  {
    name: "London",
    imageUrl:
      "https://cdn.sanity.io/images/usjcrtzz/production/00d7886cf0a464ed2440030acdf24f0cb5a491d9-1600x906.jpg?w=300&q=75&fit=max&auto=format&dpr=2", // Replace with actual image URL
  },
  {
    name: "Edinburgh",
    imageUrl:
      "https://cdn.sanity.io/images/usjcrtzz/production/80fcaa320015a4e400c17181dad2a4930185ba14-781x600.png?w=300&q=75&fit=max&auto=format&dpr=2", // Replace with actual image URL
  },
  {
    name: "Glasgow",
    imageUrl:
      "https://cdn.sanity.io/images/usjcrtzz/production/6dc820363040e5ca4a3e1d26c8fc657a45db790d-780x600.png?w=300&q=75&fit=max&auto=format&dpr=2", // Replace with actual image URL
  },
  {
    name: "Liverpool",
    imageUrl:
      "https://cdn.sanity.io/images/usjcrtzz/production/28d3a900beac189bb92b2882ee8a61dc1dc1bb9e-780x600.png?w=300&q=75&fit=max&auto=format&dpr=2", // Replace with actual image URL
  },
  {
    name: "Glasgow",
    imageUrl:
      "https://cdn.sanity.io/images/usjcrtzz/production/6dc820363040e5ca4a3e1d26c8fc657a45db790d-780x600.png?w=300&q=75&fit=max&auto=format&dpr=2", // Replace with actual image URL
  },
  // Add more destinations if needed
];

const DestinationCard = ({ destination }) => (
  <div className="relative overflow-hidden rounded-sm shadow-lg  flex-shrink-0">
    <img
      src={destination.imageUrl}
      alt={destination.name}
      className="w-[305px] h-[400px] object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
      <h2 className="text-white text-xl font-bold">{destination.name}</h2>
    </div>
  </div>
);

const PopularDestinations = () => {
      const [scrollPosition, setScrollPosition] = useState(0);
      const [totalScrollWidth, setTotalScrollWidth] = useState(0);
  const scrollContainerRef = useRef(null);

 const scrollLeft = () => {
   const container = scrollContainerRef.current;
   const scrollAmount = 1475; // Adjust this value as needed
   const newScrollPosition = Math.max(0, scrollPosition - scrollAmount);
   setScrollPosition(newScrollPosition);
   if (container) {
     container.scroll({ left: newScrollPosition, behavior: "smooth" });
   }
 };

 const scrollRight = () => {
   const container = scrollContainerRef.current;
   const scrollAmount = 1475; // Adjust this value as needed
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
    <div className=" ">
      <div className="text-3xl pb-3 pl-[300px] text-gray-800 font-bold pt-12">
        <div>Popular Destinations</div>
        <span className="text-gray-700 font-normal text-[18px]">
          The key to a great city break? A perfectly placed base. Check out the
          best luxury hotels across cities worldwide.
        </span>
      </div>
      <div className="relative w-[1350px] flex space-x-6 mx-auto  overflow-hidden">
        <button
          onClick={scrollLeft}
          className="z-50 absolute  left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full shadow-lg"
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
          {destinations.map((destination) => (
            <DestinationCard key={destination.name} destination={destination} />
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="z-50 absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-2 rounded-full shadow-lg"
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
      </div>
    </div>
  );
};

export default PopularDestinations;
