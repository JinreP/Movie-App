import { Button } from "@/components/ui/button";
import React from "react";
import ReactPlayer from "react-player";

export function Image(props: any) {
  const { imageUrl, title } = props;
  //Trailer test
  // function CustomVideoPlayer() {
  //   return (
  //     <ReactPlayer
  //       src="https://www.youtube.com/watch?v=xh-PvhEO_qg"
  //       playing={true}
  //       controls={true}
  //       width="800px"
  //       height="450px"
  //     />
  //   );
  // }

  return (
    <div className="Image flex gap-10 mt-2 justify-between  items-center">
      <img src="wicked.jpg" className="w-[450px] h-[600px]" alt="" />
      <div className="relative">
        <img src="gladiator.png" className="w-[1200px] h-[600px]" alt="" />
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
