"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { NavBar } from "@/components/ui/NavBar";
import { FeaturedMovie } from "@/components/ui/Hero";

import { Popular } from "@/components/ui/UpComing";
import { Movies, TopRated, popularMoviesData, Upcoming } from "@/lib/constant";
import { Footer } from "@/components/Footer";
import { Text } from "@/components/ui/Text";

export default function Home() {
  return (
    <div className="">
      <NavBar />
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
        <div className="flex flex-wrap gap-10   items-center mt-10">
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

        <div className="flex flex-wrap gap-10 justify-start items-center mt-10">
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

        <div className="flex flex-wrap gap-10 justify-start items-center mt-10">
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
      <Footer />
    </div>
  );
}
