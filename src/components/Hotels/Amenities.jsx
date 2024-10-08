import React, { useState } from "react";

const Amenities = () => {
  const [show, setShow ] = useState(false);
  const amenitiesData = [
    {
      id: "PopularAndEssential",
      category: "Popular and essential",
      items: [
        {
          id: "WifiService",
          description: "WiFi",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              width="1.5rem"
              height="1.5rem"
            >
              <path
                d="M1.246 8.85a.853.853 0 0 1 .089-1.278A17.5 17.5 0 0 1 12 4a17.5 17.5 0 0 1 10.665 3.572.854.854 0 0 1 .09 1.278L21.74 9.92a1.03 1.03 0 0 1-1.34.101A14.36 14.36 0 0 0 12 7.29a13.9 13.9 0 0 0-8.395 2.703 1.036 1.036 0 0 1-1.363-.089zm4.805 3.37a.827.827 0 0 0-.113 1.33l.928.873a1.065 1.065 0 0 0 1.245.118 7.79 7.79 0 0 1 7.778-.001 1.065 1.065 0 0 0 1.245-.118l.928-.872a.83.83 0 0 0-.113-1.332 11.61 11.61 0 0 0-11.898.001zm4.395 5.297a.717.717 0 0 0-.117 1.16l.968 1.024a.976.976 0 0 0 1.38.026l.026-.026.968-1.024a.717.717 0 0 0-.117-1.16 3.53 3.53 0 0 0-3.108 0"
                fill="rgb(17 24 39)"
              ></path>
            </svg>
          ),
        },
        {
          id: "Parking",
          description: "Parking",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              width="1.5rem"
              height="1.5rem"
            >
              <path
                d="M12 2a10 10 0 1 0 10 10A10.03 10.03 0 0 0 12 2m1.5 12H10v2a1 1 0 0 1-2 0V7h5.5a3.5 3.5 0 0 1 0 7m1.5-3.5a1.5 1.5 0 0 1-1.5 1.5H10V9h3.5a1.5 1.5 0 0 1 1.5 1.5"
                fill="rgb(17 24 39)"
              ></path>
            </svg>
          ),
        },
        {
          id: "AirConditioning",
          description: "Air conditioning",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              width="1.5rem"
              height="1.5rem"
            >
              <path
                d="M13 3a1 1 0 0 0-2 0v3.296L8.659 4.247a1 1 0 0 0-1.317 1.506L11 8.953V11H8.954L5.753 7.341a1 1 0 1 0-1.506 1.317L6.297 11H3a1 1 0 0 0 0 2h3.296l-2.049 2.341a1 1 0 1 0 1.506 1.318L8.953 13H11v2.046l-3.659 3.201a1 1 0 1 0 1.317 1.506L11 17.703V21a1 1 0 0 0 2 0v-3.296l2.341 2.049a1 1 0 1 0 1.318-1.506L13 15.047V13h2.046l3.201 3.659a1 1 0 0 0 1.506-1.317L17.703 13H21a1 1 0 0 0 0-2h-3.296l2.049-2.342a1 1 0 0 0-1.506-1.317L15.047 11H13V8.954l3.659-3.201a1 1 0 0 0-1.317-1.506L13 6.297z"
                fill="rgb(17 24 39)"
              ></path>
            </svg>
          ),
        },
        {
          id: "AirportShuttle",
          description: "Airport Shuttle",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              width="1.5rem"
              height="1.5rem"
            >
              <path
                d="M2 4a1 1 0 0 0-1 1v10a3 3 0 0 0 3 3h9.518a.55.55 0 0 0 .526-.48A2.797 2.797 0 0 1 17 15a3.01 3.01 0 0 1 2.924 2.565.54.54 0 0 0 .518.435h1.826C23 18 23 16.5 23 15.5a6.72 6.72 0 0 0-1-4 6.36 6.36 0 0 0-3.525-2.442 1.34 1.34 0 0 1-.775-.432l-2.311-2.88A3.77 3.77 0 0 0 12.015 4h-1.553a.973.973 0 0 0-.888 1 .973.973 0 0 0 .888 1h1.56c1.11 0 1.622 0 2.072.603l.767 1.01A1.455 1.455 0 0 1 14.35 10h-3.4a2 2 0 0 1-1.868-1.286L7.92 5.671A1.95 1.95 0 0 0 6.023 4zm15 16a2 2 0 1 0-2.001-2A2 2 0 0 0 17 20"
                fill="rgb(17 24 39)"
              ></path>
            </svg>
          ),
        },
        {
          id: "Pool",
          description: "Pool",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width="1.5rem"
              height="1.5rem"
            >
              <path
                d="M309.5 178.4L447.9 297.1c-1.6 .9-3.2 2-4.8 3c-18 12.4-40.1 20.3-59.2 20.3c-19.6 0-40.8-7.7-59.2-20.3c-22.1-15.5-51.6-15.5-73.7 0c-17.1 11.8-38 20.3-59.2 20.3c-10.1 0-21.1-2.2-31.9-6.2C163.1 193.2 262.2 96 384 96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-26.9 0-52.3 6.6-74.5 18.4zM160 160A64 64 0 1 1 32 160a64 64 0 1 1 128 0zM306.5 325.9C329 341.4 356.5 352 384 352c26.9 0 55.4-10.8 77.4-26.1l0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 405.7 417 416 384 416c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7l0 0C136.7 341.2 165.1 352 192 352c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z"
                fill="rgb(17 24 39)"
              />
            </svg>
          ),
        },
        {
          id: "FitnessCenter",
          description: "Fitness Center",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              width="1.5rem"
              height="1.5rem"
            >
              <path
                d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"
                fill="rgb(17 24 39)"
              />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <div className="pt-6 max-w-[1060px]">
      <h2 className="text-3xl font-semibold mb-4">Amenities</h2>
      <div
        className={`flex flex-wrap justify-center ${
          show ? "" : "h-[120px] 2sm:h-[140px]"
        } overflow-hidden`}
      >
        {amenitiesData.map((category) =>
          category.items.map((item) => (
            <div
              key={item.id}
              className="rounded-lg w-[100px] h-[120px] 2sm:w-[160px] 2sm:h-[140px] bg-gray-50 mr-4 text-center flex flex-col justify-center items-center mb-4"
            >
              <span>{item.icon}</span>
              <p>{item.description}</p>
            </div>
          ))
        )}
      </div>
      <div
        className="text-center text-blue-600 cursor-pointer pt-4 2lg:hidden"
        onClick={() => setShow(!show)}
      >
        {show ? "See less" : "See more"}
      </div>
    </div>
  );
};
export default Amenities;
