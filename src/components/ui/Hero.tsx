"use client";

import { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

type Props = {
  text: string;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
};

const Movies: Props[] = [
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
export function FeaturedMovie(props: Props) {
  const { title, description, imageUrl, text, rating } = props;
  const [upComing, setUpComing] = useState(0);
  const next = () => {
    setUpComing(() => (upComing + 1) % Movies.length);
  };

  const back = () => {
    setUpComing(() => (upComing - 1 + Movies.length) % Movies.length);
  };
  const movie = Movies[upComing];

  return (
    <div>
      <section className="relative w-full h-[500px] rounded-xl overflow-hidden">
        <img
          src={movie.imageUrl}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative p-8 text-white">
          <p className="text-2xl md:text-4xl mb-2">{movie.text}</p>
          <h1 className="text-4xl md:text-5xl font-bold">{movie.title}</h1>
          <p className="mt-4 max-w-[600px]">{movie.description}</p>

          <div className="absolute right-5 top-40 flex gap-3">
            <Button variant="secondary" onClick={back} className="absolute left-5 top-40">
              ◀
            </Button>
            <Button variant="secondary" onClick={next}>
              ▶
            </Button>
          </div>

          <Button variant="secondary" className="mt-5 flex items-center gap-2">
            ▶ Watch Trailer
          </Button>
        </div>
      </section>
    </div>
  );
}
