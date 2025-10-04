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
      .get("/api/movies/popular", {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
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
