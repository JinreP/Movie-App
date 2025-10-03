"use client";

import { HeroMap } from "@/components/ui/Hero";

import { Text } from "@/components/ui/Text";
import {
  PopularMoviesCards,
  TopRatedCard,
  UpComingCard,
} from "@/components/ui/Cards";

export default function Home() {
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
