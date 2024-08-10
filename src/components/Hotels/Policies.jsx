import React from "react"

const Policies = ({hotelDetails}) => {
  const policies = hotelDetails?.data.goodToKnow.policies;
  return (
    <div id="policies" className="w-full">
      <p className="font-semibold text-3xl pb-4">Policies</p>
      <div className="space-y-6 bg-slate-50 rounded-lg p-4  divide-y-2 divide-gray-300">
        <div className="flex w-full">
          <div className="flex min-w-[130px] 2sm:min-w-[150px] 1sm:min-w-[275px] mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="h-6 w-6 mt-1"
            >
              <path
                d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"
                fill="rgb(55 65 81)"
              />
            </svg>
            <p className="text-lg 1sm:text-2xl pl-3 font-semibold text-gray-800">
              Children
            </p>
          </div>
          <p className="text-gray-800  mt-1">
            {policies.content[0].values[0].content}
          </p>
        </div>
        <div className="flex pt-4">
          <div className="flex min-w-[130px] 2sm:min-w-[150px] 1sm:min-w-[275px] mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              className="h-6 w-6 mt-1.5 "
            >
              <path
                d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"
                fill="rgb(55 65 81)"
              />
            </svg>
            <p className="text-lg 1sm:text-2xl font-semibold text-gray-800 pl-3">
              Additional Beds
            </p>{" "}
          </div>
          <p className="text-gray-800  mt-1 text-wrap">
            {policies.content[1].values[0].content}
          </p>
        </div>
        <div className="flex pt-4">
          {" "}
          <div className="flex min-w-[130px] 2sm:min-w-[150px] 1sm:min-w-[275px] mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-6 w-6 mt-1.5"
            >
              <path
                d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
                fill="rgb(55 65 81)"
              />
            </svg>
            <p className="text-lg 1sm:text-2xl pl-3 font-semibold text-gray-800">
              Breakfast
            </p>{" "}
          </div>
          <div className="space-y-1.5 mt-1">
            <p className="text-gray-800 ">
              {policies.content[4].values[0].content}
            </p>
            <p className="text-gray-800 ">
              <span className="font-semibold w-[130px] inline-block">
                Breakfast menu:
              </span>
              {policies.content[4].values[0].content}
            </p>
            <p className="text-gray-800  ">
              <span className="font-semibold w-[130px] inline-block">
                Breakfast price:
              </span>
              {policies.content[4].values[0].content}
            </p>
          </div>
        </div>
        <div className="flex pt-4">
          {" "}
          <div className="flex min-w-[130px] 2sm:min-w-[150px] 1sm:min-w-[275px] mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-6 w-6 mt-1"
            >
              <path
                d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"
                fill="rgb(55 65 81)"
              />
            </svg>
            <p className="text-lg 1sm:text-2xl pl-3 font-semibold text-gray-800">
              Pets
            </p>{" "}
          </div>
          <p className="text-gray-800  mt-1">
            {policies.content[3].values[0].content}
          </p>
        </div>
        <div className="flex pt-4">
          {" "}
          <div className="flex max-w-[130px] min-w-[130px] 2sm:min-w-[150px] 1sm:min-w-[275px] mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512 "
              className="h-6 w-6 mt-1.5"
            >
              <path
                d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"
                fill="rgb(55 65 81)"
              />
            </svg>
            <p className="text-lg 1sm:text-2xl pl-3 font-semibold text-gray-800">
              Payment Methods
            </p>{" "}
          </div>
          <div>
            <p className="text-gray-800  mt-1">
              {policies.content[6].values[0].title}
            </p>
            <div className="flex">
              <p className="text-gray-800  font-semibold">
                {policies.content[6].values[0].content[0]},
              </p>
              <p className="text-gray-800 pl-1 font-semibold ">
                {policies.content[6].values[0].content[1]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policies