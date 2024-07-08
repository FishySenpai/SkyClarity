import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const destinations = [
  {
    name: "Prague",
    entityId: "27562985",
    imageUrl:
      "https://www.headout.com/blog/wp-content/uploads/2019/02/Prague-scaled.jpg", // Replace with actual image URL
  },
  {
    name: "Edinburgh",
    entityId: "27540851",
    imageUrl:
      "https://cdn.sanity.io/images/usjcrtzz/production/80fcaa320015a4e400c17181dad2a4930185ba14-781x600.png?w=300&q=75&fit=max&auto=format&dpr=2", // Replace with actual image URL
  },
  {
    name: "Glasgow",
    entityId: "27541852",
    imageUrl:
      "https://cdn.sanity.io/images/usjcrtzz/production/6dc820363040e5ca4a3e1d26c8fc657a45db790d-780x600.png?w=300&q=75&fit=max&auto=format&dpr=2", // Replace with actual image URL
  },
  {
    name: "Melbourne",
    entityId: "27544894",
    imageUrl:
      "https://content.r9cdn.net/rimg/dimg/e7/e2/a092e93b-city-13998-1641eaba8a3.jpg?width=1366&height=768&xhint=1016&yhint=1024&crop=true", // Replace with actual image URL
  },
  {
    name: "Berlin",
    entityId: "27547053",
    imageUrl:
      "https://destinationwellknown.com/wp-content/uploads/2022/10/berlin-city.jpg", // Replace with actual image URL
  },
  {
    name: "Amsterdam",
    entityId: "27536561",
    imageUrl:
      "https://www.holland.com/upload_mm/2/3/6/75601_fullimage_aerial%20view%20of%20downtown%20amsterdam%2C%20the%20netherlands%20during%20a%20dramatic%20beautiful%20sunset%20foto%20repistu%20via%20istock.jpg", // Replace with actual image URL
  },
];
const getRandomDateInRange = (startDate, rangeInDays) => {
  const randomDays = Math.floor(Math.random() * rangeInDays);
  const randomDate = new Date(startDate);
  randomDate.setDate(randomDate.getDate() + randomDays);
  return randomDate.toISOString().split("T")[0];
};
const today = new Date();
const checkIn = getRandomDateInRange(today, 30);
const checkOut = getRandomDateInRange(new Date(checkIn), 30);

console.log("Check-in Date:", checkIn);
console.log("Check-out Date:", checkOut);
const DestinationCard = ({ destination }) => (
  <div className="relative overflow-hidden rounded-sm shadow-lg  flex-shrink-0">
    {" "}
    <Link
      to={`/hotels/search/${destination.name}/${destination.entityId}/${checkIn}/${checkOut}`}
    >
      <img
        src={destination.imageUrl}
        alt={destination.name}
        className=" w-[340px]  2sm:w-[250px] h-[320px] 1sm:w-[340px] 1md:w-[400px] 1lg:w-[305px] 1sm:h-[400px] object-cover "
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <h2 className="text-white text-xl font-bold">{destination.name}</h2>
      </div>{" "}
    </Link>
  </div>
);

const PopularDestinations = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [totalScrollWidth, setTotalScrollWidth] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const scrollContainerRef = useRef(null);
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
    const scrollAmount = 1475; // Adjust this value as needed
    const newScrollPosition = Math.max(0, scrollPosition - scrollAmount);
    setScrollPosition(newScrollPosition);
    if (container) {
      container.scroll({ left: newScrollPosition, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    const scrollAmount = 10; // Adjust this value as needed
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
    <div>
      <div className="text-3xl pb-3 w-[340px] 2sm:w-[540px]  1sm:w-[680px] 1md:w-[840px] 1lg:w-[982px] 1xl:w-[1350px] flex flex-col mx-auto 1xl:pl-5 text-gray-800 font-bold pt-12">
        <div>Popular Destinations</div>
        <span className="text-gray-700 font-normal text-[18px]">
          The key to a great city break? A perfectly placed base. Check out the
          best luxury hotels across cities worldwide.
        </span>
      </div>
      <div className="relative w-[340px] 2sm:w-[540px]  1sm:w-[680px] 1md:w-[840px] 1lg:w-[982px] 1xl:w-[1350px] flex space-x-6 mx-auto  overflow-hidden">
        {showLeftArrow ? (
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
        ) : (
          ""
        )}
        <div
          className="w-[1000px] xl:w-[1300px] flex space-x-6 mx-auto  overflow-hidden"
          ref={scrollContainerRef}
        >
          {destinations.map((destination) => (
            <DestinationCard key={destination.name} destination={destination} />
          ))}
        </div>
        {showRightArrow ? (
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
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PopularDestinations;
