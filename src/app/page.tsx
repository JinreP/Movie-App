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

type Movie = {
  text: string;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
};

const Movies: Movie[] = [
  {
    text: "Now playing",
    title: "Wicked",
    description:
      "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
    imageUrl: "wicked.jpg",
    rating: 6.9,
  },

  {
    text: "Now playing",
    title: "Gladiator II",
    description:
      "After his home is conquered by the tyrannical emperors who now lead Rome, Lucius is forced to enter the Colosseum and must look to his past to find strength to return the glory of Rome to its people.",
    imageUrl: "gladiator.png",
    rating: 7.3,
  },

  {
    text: "Now Playing:",
    title: "Moana 2",
    description:
      "After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced. ",
    imageUrl: "kino3.jpg",
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
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {Movies.map((movie, index) => (
              <CarouselItem key={index}>
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
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
}
