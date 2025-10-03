"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { FeaturedMovie } from "@/components/ui/Hero";

import { Movies, TopRated, popularMoviesData, Upcoming } from "@/lib/constant";
import { Text } from "@/components/ui/Text";
import { Popular } from "@/components/ui/Popular";
import {
  PopularMoviesCards,
  TopRatedCard,
  UpComingCard,
} from "@/components/ui/Cards";

export default function Home() {
  return (
    <div className="">
      <div className="  ">
     
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
