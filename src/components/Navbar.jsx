// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 w-full">
          <div className="flex flex-col 2sm:flex-row 2sm:items-center w-full">
            <div className="flex-shrink-0 pt-4">
              <Link to="/" className="text-white font-bold">
                Your Logo
              </Link>
            </div>
            <div className="block w-full pb-4">
              <div className="2sm:ml-10 flex justify-end text-right space-x-4 w-full">
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white px-3  rounded-md text-sm font-medium"
                >
                  Flights
                </Link>
                <Link
                  to="/hotels"
                  className="text-gray-300 hover:text-white px-3 rounded-md text-sm font-medium"
                >
                  Hotels
                </Link>
                <Link
                  to="/carhire"
                  className="text-gray-300 hover:text-white px-3 rounded-md text-sm font-medium"
                >
                  Car Rental
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white px-3 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
