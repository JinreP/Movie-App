import { Button } from "@/components/ui/button";
import React from "react";

export function Image({
  backdrop_path,
  poster_path,
}: {
  backdrop_path: string;
  poster_path: string;
}) {
  return (
    <div className="Image flex gap-10 mt-2 justify-between  items-center">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        className="w-[290px] h-[428px]"
        alt="kino  "
      />
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
          className="w-[760px] h-[428px]"
          alt="kino"
        />
        <div className="flex items-center gap-3 absolute left-3 bottom-5">
          <Button variant={"secondary"} className="rounded-[50%] ">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3.33301 2L12.6663 8L3.33301 14V2Z"
                stroke="currentColor"
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <h2 className="text-white">Play trailer </h2>
          <p className="text-white">2:35</p>
        </div>
      </div>
    </div>
  );
}
