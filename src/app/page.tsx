"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { useState } from "react";

import { Popular } from "@/components/ui/UpComing";
import { Movie, PopularProps } from "@/lib/type";
const PopularMovies: PopularProps[] = [
  { title: "Hello", rating: 10, imageUrl: "/wicked.jpg" },
  { title: "HD", rating: 10, imageUrl: "/wicked.jpg" },
  { title: "Hello", rating: 10, imageUrl: "/gladiator.png" },
  { title: "Hello", rating: 10, imageUrl: "/kino3.jpg" },
  { title: "HD", rating: 10, imageUrl: "/wicked.jpg" },
  { title: "Hello", rating: 10, imageUrl: "/gladiator.png" },
  { title: "Hello", rating: 10, imageUrl: "/kino3.jpg" },
  { title: "HD", rating: 10, imageUrl: "/wicked.jpg" },
  { title: "Hello", rating: 10, imageUrl: "/gladiator.png" },
  { title: "Hello", rating: 10, imageUrl: "/kino3.jpg" },
];
const Movies: Movie[] = [
  {
    text: "Now playing",
    title: "Wicked",
    description:
      "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
    imageUrl: "/wicked.jpg",
    rating: 6.9,
  },

  {
    text: "Now playing",
    title: "Gladiator II",
    description:
      "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
    imageUrl: "/gladiator.png",
    rating: 7.3,
  },

  {
    text: "Now Playing:",
    title: "Moana 2",
    description:
      "After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced. ",
    imageUrl: "/kino3.jpg",
    rating: 7.0,
  },
];

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
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
        <div className="flex gap-2 items-center justify-between ml-14 mt-10 mr-14">
          <h1 className="text-2xl font-bold">Upcoming</h1>{" "}
          <Button variant={"secondary"} className="flex gap-2 items-center">
            {" "}
            See more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3.33301 8.00004H12.6663M12.6663 8.00004L7.99967 3.33337M12.6663 8.00004L7.99967 12.6667"
                stroke="#18181B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
        <div className="flex flex-wrap gap-10 justify-center items-center mt-10">
          {PopularMovies.map((movie, i) => (
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
