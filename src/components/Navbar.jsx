import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-gray-900 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between 2sm:h-20 w-full">
          <div className="flex flex-col 2sm:flex-row 2sm:items-center 2sm:py-0">
            <div className="flex-shrink-0 pb-2 pt-4 2sm:pt-0 ">
              <NavLink
                to="/"
                className="text-white text-2xl font-semibold italic"
              >
                <div className="">
                  <span>Sky</span>
                  <span className="text-pink-600">Clarity</span>
                </div>
              </NavLink>
            </div>
            <div className="block w-full pb-4 2sm:pb-0">
              <div className=" 2sm:ml-10 flex justify-end text-right space-x-10 w-full text-[17px] font-[600]">
                <NavLink
                  to="/"
                  className={`${
                    activeLink === "flights"
                      ? "text-white after:bg-white after:scale-x-100"
                      : "text-gray-200 after:bg-gray-100 after:scale-x-0 hover:after:scale-x-100"
                  } relative   w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:w-full after:left-0 after:-bottom-[3px] after:transition after:duration-300 after:origin-center`}
                  onClick={() => handleSetActive("flights")}
                >
                  <div className="flex">
                    <span>Flights</span>
                  </div>
                </NavLink>
                <NavLink
                  to="/hotels"
                  className={`${
                    activeLink === "hotels"
                      ? "text-white after:bg-white after:scale-x-100"
                      : "text-gray-200 after:bg-gray-100 after:scale-x-0 hover:after:scale-x-100"
                  } relative   w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:w-full after:left-0 after:-bottom-[3px] after:transition after:duration-300 after:origin-center`}
                  onClick={() => handleSetActive("hotels")}
                >
                  <div className="flex">
                    <span>Hotels</span>
                  </div>
                </NavLink>
                <NavLink
                  to="/carhire"
                  className={`${
                    activeLink === "carhire"
                      ? "text-white after:bg-white after:scale-x-100"
                      : "text-gray-200 after:bg-gray-100 after:scale-x-0 hover:after:scale-x-100"
                  } relative   w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:w-full after:left-0 after:-bottom-[3px] after:transition after:duration-300 after:origin-center`}
                  onClick={() => handleSetActive("carhire")}
                >
                  <div className="flex">
                    <span>Car Rental</span>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
