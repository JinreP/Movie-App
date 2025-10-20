"use client";

import { Button } from "@/components/ui/button";
import { movieTrailer } from "@/lib/Datas";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export function Image({
  backdrop_path,
  poster_path,
  id,
}: {
  backdrop_path: string;
  poster_path: string;
  id: string;
}) {
  const [trailers, setTrailers] = useState<string | null>(null);
  const handleTrailer = async () => {
    try {
      const trailerUrl = await movieTrailer(id);
      const trailer = trailerUrl?.results?.find(
        (t: any) => t.site === "YouTube" && t.type === "Trailer"
      );
      if (trailer) {
        setTrailers(`https://www.youtube.com/watch?v=${trailer.key}`);
      }
    } catch (error) {
      console.error(error);
    }
  };
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
        <div className="absolute left-3 bottom-5">
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex items-center gap-3 cursor-pointer">
                <Button
                  onClick={handleTrailer}
                  variant={"secondary"}
                  className="rounded-[50%]"
                >
                  <svg
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
                <h2 className="text-white">Play trailer</h2>
                <p className="text-white">2:35</p>
              </div>
            </DialogTrigger>

            <DialogContent className="max-w-4xl">
              <DialogTitle>Movie Trailer</DialogTitle>
              {trailers && (
                <div className="flex justify-center items-center aspect-video">
                  <ReactPlayer
                    src={trailers}
                    width="100%"
                    height="100%"
                    controls
                    playing
                  />
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
