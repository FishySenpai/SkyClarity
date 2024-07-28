import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 w-full">
          <div className="flex flex-col 2sm:flex-row 2sm:items-center w-full">
            <div className="flex-shrink-0 pb-2 pt-4 2sm:pt-0">
              <NavLink to="/" className="text-white font-bold">
                Your Logo
              </NavLink>
            </div>
            <div className="block w-full pb-4 2sm:pb-0">
              <div className="2sm:ml-10 flex justify-end text-right space-x-2 w-full">
                <NavLink
                  exact
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-600 px-3 rounded-md text-sm font-medium"
                      : "text-gray-300 hover:text-white px-3 rounded-md text-sm font-medium"
                  }
                >
                  Flights
                </NavLink>
                <NavLink
                  to="/hotels"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-600 px-3 rounded-md text-sm font-medium"
                      : "text-gray-300 hover:text-white px-3 rounded-md text-sm font-medium"
                  }
                >
                  Hotels
                </NavLink>
                <NavLink
                  to="/carhire"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-600 px-3 rounded-md text-sm font-medium"
                      : "text-gray-300 hover:text-white px-3 rounded-md text-sm font-medium"
                  }
                >
                  Car Rental
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-600 px-3 rounded-md text-sm font-medium"
                      : "text-gray-300 hover:text-white px-3 rounded-md text-sm font-medium"
                  }
                >
                  Contact
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
