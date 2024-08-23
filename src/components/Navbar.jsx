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
                      ? "text-gray-800 px-3 rounded-2xl py-1 bg-white text-md font-[600] border-2 border-gray-400"
                      : "text-white hover:text-white px-3 rounded-md text-md font-[600] "
                  }
                >
                  {({ isActive }) => (
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        className="h-5 w-5 mr-0.5 -rotate-[40deg]"
                      >
                        <path
                          d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"
                          fill={isActive ? "rgb(31 41 55)" : "white"}
                        />
                      </svg>
                      <span className="">Flights</span>
                    </div>
                  )}
                </NavLink>
                <NavLink
                  exact
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-800 px-3 rounded-2xl py-1 bg-white text-md font-[600] border-2 border-gray-400"
                      : "text-white hover:text-white px-3 rounded-md text-md font-[600] "
                  }
                >
                  {({ isActive }) => (
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        className="h-5 w-[18px] mr-0.5 "
                      >
                        <path
                          d="M0 32C0 14.3 14.3 0 32 0L480 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-176 0 0-48c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 48L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 64C14.3 64 0 49.7 0 32zm96 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8l144 0z"
                          fill={isActive ? "rgb(31 41 55)" : "white"}
                        />
                      </svg>
                      <span className="">Hotels</span>
                    </div>
                  )}
                </NavLink>{" "}
                <NavLink
                  exact
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-800 px-3 rounded-2xl py-1 bg-white text-md font-[600] border-2 border-gray-400"
                      : "text-white hover:text-white px-3 rounded-md text-md font-[600] "
                  }
                >
                  {({ isActive }) => (
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        className="h-5 w-5 mr-0.5 "
                      >
                        <path
                          d="M171.3 96L224 96l0 96-112.7 0 30.4-75.9C146.5 104 158.2 96 171.3 96zM272 192l0-96 81.2 0c9.7 0 18.9 4.4 25 12l67.2 84L272 192zm256.2 1L428.2 68c-18.2-22.8-45.8-36-75-36L171.3 32c-39.3 0-74.6 23.9-89.1 60.3L40.6 196.4C16.8 205.8 0 228.9 0 256L0 368c0 17.7 14.3 32 32 32l33.3 0c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80l130.7 0c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80l33.3 0c17.7 0 32-14.3 32-32l0-48c0-65.2-48.8-119-111.8-127zM434.7 368a48 48 0 1 1 90.5 32 48 48 0 1 1 -90.5-32zM160 336a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                          fill={isActive ? "rgb(31 41 55)" : "white"}
                        />
                      </svg>
                      <span className="">Car rental</span>
                    </div>
                  )}
                </NavLink>{" "}
                <NavLink
                  exact
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-800 px-3 rounded-2xl py-1 bg-white text-md font-[600] border-2 border-gray-400"
                      : "text-white hover:text-white px-3 rounded-md text-md font-[600] "
                  }
                >
                  {({ isActive }) => (
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        className="h-5 w-5 mr-0.5 -rotate-[40deg]"
                      >
                        <path
                          d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"
                          fill={isActive ? "rgb(31 41 55)" : "white"}
                        />
                      </svg>
                      <span className="">Contact</span>
                    </div>
                  )}
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
