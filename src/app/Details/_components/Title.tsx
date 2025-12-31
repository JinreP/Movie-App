import React from "react";
export function Title({
  title,
  rating,
  date,
  popularity,
}: {
  title: string;
  rating: number;
  date: string;
  popularity: number;
}) {
  return (
    <div className="flex justify-between gap-200">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-300">{new Date(date).toLocaleDateString()}</p>
      </div>
      <div className="flex flex-col">
        <p className="">Rating</p>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
          >
            <path
              d="M12.9997 1.33325L16.6047 8.63659L24.6663 9.81492L18.833 15.4966L20.2097 23.5233L12.9997 19.7316L5.78967 23.5233L7.16634 15.4966L1.33301 9.81492L9.39467 8.63659L12.9997 1.33325Z"
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex">
            <p className=" font-bold">{rating}</p>
            <span className="text-gray-300">/10</span>
          </div>
        </div>
        <div className="text-gray-300">
          <p className="">{popularity}K</p>
        </div>
      </div>
    </div>
  );
}
