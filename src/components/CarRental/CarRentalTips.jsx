import React from "react";

const CarRentalTips = () => {
  const tips = [
    {
      src: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" height="20px">
          <path d="M171.3 96H224v96H111.3l30.4-75.9C146.5 104 158.2 96 171.3 96zM272 192V96h81.2c9.7 0 18.9 4.4 25 12l67.2 84H272zm256.2 1L428.2 68c-18.2-22.8-45.8-36-75-36H171.3c-39.3 0-74.6 23.9-89.1 60.3L40.6 196.4C16.8 205.8 0 228.9 0 256V368c0 17.7 14.3 32 32 32H65.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H385.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H608c17.7 0 32-14.3 32-32V320c0-65.2-48.8-119-111.8-127zM434.7 368a48 48 0 1 1 90.5 32 48 48 0 1 1 -90.5-32zM160 336a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" fill="gray"/>
        </svg>
      `,
      title: "Book now, cancel later",
      description:
        "There are many car and van rental options with flexible booking policies and free cancellation, so you can snap up the best deal with total flexibility to change your plans last-minute if you need to.",
      linkUrl: "#",
    },
    {
      src: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"fill="gray" />
        </svg>
      `,
      title: "Rent cars for a whole month",
      description:
        "Want to rent a car for almost a month? Often, car rental companies avoid costly admin in between pickups by renting out cars for longer periods. So see if monthly car rental is cheaper than the three weeks you need it for by selecting 30 days.",
      linkUrl: "#",
    },
    {
      src: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M32 64C32 28.7 60.7 0 96 0H256c35.3 0 64 28.7 64 64V256h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V222c-27.6-7.1-48-32.2-48-62V96L384 64c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3V168v24 32V376c0 39.8-32.2 72-72 72s-72-32.2-72-72V344c0-22.1-17.9-40-40-40h-8V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64zM96 80v96c0 8.8 7.2 16 16 16H240c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16z" fill="gray"/>
        </svg>
      `,
      title: "Compare fuel policies",
      description:
        "To save money on topping up the tank before you take off, look out for deals with a 'full-to-full' fuel tank policy.",
      linkUrl: "#",
    },
    {
      src: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M6 5.5C6 3.567 7.57 2 9.506 2a3.51 3.51 0 0 1 3.375 2.545h6.676a1.2 1.2 0 0 1 1.073.662 3.5 3.5 0 0 1 0 3.13l-.067.135a.957.957 0 0 1-1.711-.854l.067-.134c.161-.322.207-.685.136-1.03H17.16c.059.64-.06 1.294-.355 1.884l-.068.134a.957.957 0 0 1-1.71-.854l.067-.134c.161-.322.207-.685.136-1.03h-2.35A3.51 3.51 0 0 1 9.506 9 3.503 3.503 0 0 1 6 5.5m3.506-1.591a1.591 1.591 0 1 0 0 3.182 1.592 1.592 0 0 0 0-3.182M3 13.5v7a1.5 1.5 0 0 1-3 0v-7a1.5 1.5 0 0 1 3 0m2 .5a2 2 0 0 1 2-2h6.6a2 2 0 0 1 .77.154l3.015 1.256a1 1 0 0 1 .615.923v.167a1 1 0 0 1-1 1h-3.917a.75.75 0 0 0 0 1.5h2.371a1 1 0 0 0 .407-.086l6.432-2.86a1 1 0 0 1 1.301.467l.044.09a1 1 0 0 1-.27 1.227l-7.153 5.724a2 2 0 0 1-1.25.438H7a2 2 0 0 1-2-2z"fill="gray"></path>
        </svg>
      `,
      title: "Skip the lines",
      description:
        "We call out keyless or self-service pick-up when you search with us. No keys to pick up or paperwork to fill in means no queues. Just head to your preferred car rental location, hop in and hit the road.",
      linkUrl: "",
    },
    {
      src: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8.5 2a7.8 7.8 0 0 0-5.276 1.892A.81.81 0 0 0 3 4.48v15.913A1.667 1.667 0 0 0 4.72 22h7.561A1.666 1.666 0 0 0 14 20.392V4.542a.9.9 0 0 0-.287-.675A7.87 7.87 0 0 0 8.5 2m3.329 9.299-3.455 6.048a.2.2 0 0 1-.374-.1V14a1 1 0 0 0-1-1H5.345a.2.2 0 0 1-.174-.299l3.455-6.048a.2.2 0 0 1 .374.1v3.246a1 1 0 0 0 1 1h1.655a.2.2 0 0 1 .174.3M21 9.5v5.764a3 3 0 1 1-6 0V12a1 1 0 0 1 2 0v3.264a1 1 0 1 0 2 0V9.5l-2.8-2.1a1 1 0 1 1 1.2-1.6l2.8 2.1a2 2 0 0 1 .8 1.6"fill="gray"></path>
        </svg>
      `,
      title: "Go greener",
      description:
        "Limit your impact on this beautiful planet while you explore it. Filter by electric vehicles, which will be charged up and ready to go when you pick them up, meaning no worries about fuel policies either.",
      linkUrl: "",
    },
    {
      src: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z" fill="gray"/>
        </svg>`,
      title: "Look further afield",
      description:
        "If you're on a budget, it's often cheaper to hop on public transportation to a car rental pick-up location a little farther away.",
      linkUrl: "",
    },
  ];
  return (
    <div className=" p-4 px-0 pt-12">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        How to find the best car rental deal
      </h1>
      <p className="text-gray-700 mb-8">
        We’re frequently named the most trusted travel search site out there.
        We’re free to use and we’ll do the hard work for you by searching
        hundreds of car rental companies, so you can instantly compare prices
        and then book. Here’s how to get the most out of your car rental search.
      </p>
      <div className="grid md:grid-cols-2 space-y-4 md:space-x-4">
        <div className="flex md:px-4">
          <div className="mr-4 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="h-6 w-6"
            >
              <path
                d="M171.3 96H224v96H111.3l30.4-75.9C146.5 104 158.2 96 171.3 96zM272 192V96h81.2c9.7 0 18.9 4.4 25 12l67.2 84H272zm256.2 1L428.2 68c-18.2-22.8-45.8-36-75-36H171.3c-39.3 0-74.6 23.9-89.1 60.3L40.6 196.4C16.8 205.8 0 228.9 0 256V368c0 17.7 14.3 32 32 32H65.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H385.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H608c17.7 0 32-14.3 32-32V320c0-65.2-48.8-119-111.8-127zM434.7 368a48 48 0 1 1 90.5 32 48 48 0 1 1 -90.5-32zM160 336a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                fill="gray"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Book now, cancel later
            </h2>
            <p className="text-gray-700 mb-2 ">
              There are many car and van rental options with flexible booking
              policies and free cancellation, so you can snap up the best deal
              with total flexibility to change your plans last-minute if you
              need to.
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-4 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path
                d="M6 5.5C6 3.567 7.57 2 9.506 2a3.51 3.51 0 0 1 3.375 2.545h6.676a1.2 1.2 0 0 1 1.073.662 3.5 3.5 0 0 1 0 3.13l-.067.135a.957.957 0 0 1-1.711-.854l.067-.134c.161-.322.207-.685.136-1.03H17.16c.059.64-.06 1.294-.355 1.884l-.068.134a.957.957 0 0 1-1.71-.854l.067-.134c.161-.322.207-.685.136-1.03h-2.35A3.51 3.51 0 0 1 9.506 9 3.503 3.503 0 0 1 6 5.5m3.506-1.591a1.591 1.591 0 1 0 0 3.182 1.592 1.592 0 0 0 0-3.182M3 13.5v7a1.5 1.5 0 0 1-3 0v-7a1.5 1.5 0 0 1 3 0m2 .5a2 2 0 0 1 2-2h6.6a2 2 0 0 1 .77.154l3.015 1.256a1 1 0 0 1 .615.923v.167a1 1 0 0 1-1 1h-3.917a.75.75 0 0 0 0 1.5h2.371a1 1 0 0 0 .407-.086l6.432-2.86a1 1 0 0 1 1.301.467l.044.09a1 1 0 0 1-.27 1.227l-7.153 5.724a2 2 0 0 1-1.25.438H7a2 2 0 0 1-2-2z"
                fill="gray"
              ></path>
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Skip the lines
            </h2>
            <p className="text-gray-700 mb-2">
              We call out keyless or self-service pick-up when you search with
              us. No keys to pick up or paperwork to fill in means no queues.
              Just head to your preferred car rental location, hop in and hit
              the road.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-6 w-6"
            >
              <path
                d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                fill="gray"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Rent cars for a whole month
            </h2>
            <p className="text-gray-700 mb-2">
              Want to rent a car for almost a month? Often, car rental companies
              avoid costly admin in between pickups by renting out cars for
              longer periods. So see if monthly car rental is cheaper than the
              three weeks you need it for by selecting 30 days.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-3 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-7 w-7"
            >
              <path
                d="M8.5 2a7.8 7.8 0 0 0-5.276 1.892A.81.81 0 0 0 3 4.48v15.913A1.667 1.667 0 0 0 4.72 22h7.561A1.666 1.666 0 0 0 14 20.392V4.542a.9.9 0 0 0-.287-.675A7.87 7.87 0 0 0 8.5 2m3.329 9.299-3.455 6.048a.2.2 0 0 1-.374-.1V14a1 1 0 0 0-1-1H5.345a.2.2 0 0 1-.174-.299l3.455-6.048a.2.2 0 0 1 .374.1v3.246a1 1 0 0 0 1 1h1.655a.2.2 0 0 1 .174.3M21 9.5v5.764a3 3 0 1 1-6 0V12a1 1 0 0 1 2 0v3.264a1 1 0 1 0 2 0V9.5l-2.8-2.1a1 1 0 1 1 1.2-1.6l2.8 2.1a2 2 0 0 1 .8 1.6"
                fill="gray"
              ></path>
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Go greener
            </h2>
            <p className="text-gray-700 mb-2">
              Limit your impact on this beautiful planet while you explore it.
              Filter by electric vehicles, which will be charged up and ready to
              go when you pick them up, meaning no worries about fuel policies
              either.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-6 w-6"
            >
              <path
                d="M32 64C32 28.7 60.7 0 96 0H256c35.3 0 64 28.7 64 64V256h8c48.6 0 88 39.4 88 88v32c0 13.3 10.7 24 24 24s24-10.7 24-24V222c-27.6-7.1-48-32.2-48-62V96L384 64c-8.8-8.8-8.8-23.2 0-32s23.2-8.8 32 0l77.3 77.3c12 12 18.7 28.3 18.7 45.3V168v24 32V376c0 39.8-32.2 72-72 72s-72-32.2-72-72V344c0-22.1-17.9-40-40-40h-8V448c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V64zM96 80v96c0 8.8 7.2 16 16 16H240c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16z"
                fill="gray"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Compare fuel policies
            </h2>
            <p className="text-gray-700 mb-2">
              To save money on topping up the tank before you take off, look out
              for deals with a 'full-to-full' fuel tank policy.
            </p>
          </div>
        </div>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="h-6 w-6 mr-4 mt-1 absolute"
          >
            <path
              d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
              fill="gray"
            />
          </svg>

          <div className="pl-10">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Look further afield
            </h2>
            <p className="text-gray-700 mb-2">
              If you're on a budget, it's often cheaper to hop on public
              transportation to a car rental pick-up location a little farther
              away.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRentalTips;
