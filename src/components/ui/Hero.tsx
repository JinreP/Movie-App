"use client";

import { Props } from "@/lib/type";
import { Button } from "./button";
import ReactPlayer from "react-player";

export function FeaturedMovie(props: Props) {
  const { title, description, imageUrl, text, rating } = props;
  function MyVideoPlayer() {
    return (
      <video>
        <source
          src="https://www.youtube.com/watch?v=xh-PvhEO_qg"
          type="video/mp4"
        />
      </video>
    );
  }

  return (
    <div>
      <section className="relative w-full h-[600px] rounded-xl overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="absolute bg-contain  w-full h-full "
        />
        <div className=" relative p-8 ml-30 mt-20 text-white">
          <p className="text-2xl  mb-2">{text}</p>
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="font-bold text-white flex items-center  mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M13.9997 2.33325L17.6047 9.63659L25.6663 10.8149L19.833 16.4966L21.2097 24.5233L13.9997 20.7316L6.78967 24.5233L8.16634 16.4966L2.33301 10.8149L10.3947 9.63659L13.9997 2.33325Z"
                fill="#FDE047"
                stroke="#FDE047"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {rating} <span className="text-gray-200">/10</span>
          </p>

          <p className="mt-4 max-w-[600px]">{description}</p>
          <a href="http://localhost:3000/Wicked">
            <Button
              variant="secondary"
              onClick={() => MyVideoPlayer()}
              className="mt-5 flex items-center gap-2"
            >
              ▶ Watch Trailer
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
