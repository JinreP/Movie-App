"use client";

import { HeroMap } from "@/components/ui/Hero";

import { Text } from "@/components/ui/Text";
import {
  PopularMoviesCards,
  TopRatedCard,
  UpComingCard,
} from "@/components/ui/Cards";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/discover/movie?page=1", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjkwMWUzNTJlOTFkMmU1OTcyNThhYzU1ZDM2ZmZmMiIsIm5iZiI6MTc1OTA1MDY1Ny4zMjUsInN1YiI6IjY4ZDhmYmExOTBlY2QwMDlhYWI5YTFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZd1y3tFFfxvZlPqBNIqCDw0G_aMwCZzWxffwENlwT8",
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  return (
    <div className="">
      <div className="  ">
        <HeroMap
          text={""}
          title={""}
          description={""}
          imageUrl={""}
          rating={0}
        />
        <Text text={"Upcoming"} />
        <div className="flex flex-wrap gap-10  justify-center  items-center mt-10">
          <UpComingCard title={""} rating={0} imageUrl={""} />
        </div>
        <Text text={"Popular"} />

        <div className="flex flex-wrap gap-10  justify-center  items-center mt-10">
          <PopularMoviesCards title={""} rating={0} imageUrl={""} />
        </div>

        <Text text={"TopRated"} />

        <div className="flex flex-wrap gap-10 justify-center  items-center mt-10">
          <TopRatedCard title={""} rating={0} imageUrl={""} />
        </div>
      </div>
    </div>
  );
}
