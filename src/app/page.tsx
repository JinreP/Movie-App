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

export default function Home() {
  return (
    <div className="">
      <div className="  ">
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {Movies.map((movie) => (
              <CarouselItem key={movie.title}>
                <FeaturedMovie
                  text={movie.text}
                  title={movie.title}
                  description={movie.description}
                  imageUrl={movie.imageUrl}
                  rating={movie.rating}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4  " />
          <CarouselNext className="absolute right-4  " />
        </Carousel>
        <Text text={"Upcoming"} />
        <div className="flex flex-wrap gap-10  justify-center  items-center mt-10">
          {Upcoming.map((movie, i) => (
            <Popular
              key={i}
              title={movie.title}
              imageUrl={movie.imageUrl}
              rating={movie.rating}
            />
          ))}
        </div>
        <Text text={"Popular"} />

        <div className="flex flex-wrap gap-10  justify-center  items-center mt-10">
          {popularMoviesData.map((movie, i) => (
            <Popular
              key={i}
              title={movie.title}
              imageUrl={movie.imageUrl}
              rating={movie.rating}
            />
          ))}
        </div>

        <Text text={"TopRated"} />

        <div className="flex flex-wrap gap-10 justify-center  items-center mt-10">
          {TopRated.map((movie, i) => (
            <Popular
              key={i}
              title={movie.title}
              imageUrl={movie.imageUrl}
              rating={movie.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
