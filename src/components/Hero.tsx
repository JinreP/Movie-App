"use client";

import { Props } from "@/lib/type";
import { Button } from "./button";
import ReactPlayer from "react-player";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import Autoplay from "embla-carousel-autoplay";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { movieTrailer } from "@/lib/Datas";
import { DialogTitle } from "@radix-ui/react-dialog";

export function FeaturedMovie(props: Props) {
  const { title, description, vote_average, backdrop_path, id } = props;
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
    <div>
      <section
        className="relative w-full bg-cover bg-center object-cover  h-[600px] bg-no-repeat  rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
        }}
      >
        <div className=" relative p-8 ml-30 mt-20 text-white">
          <p className="text-2xl  mb-2 ">Now Playing: </p>
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="font-bold text-white flex items-center  mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M13.9997 2.33325L17.6047 9.63659L25.6663 10.8149L19.833 16.4966L21.2097 24.5233L13.9997 20.7316L6.78967 24.5233L8.16634 16.4966L2.33301 10.8149L10.3947 9.63659L13.9997 2.33325Z"
                fill="#FDE047"
                stroke="#FDE047"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {vote_average} <span className="text-gray-200">/10</span>
          </p>

          <p className="mt-4 max-w-[600px]">{description}</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                onClick={handleTrailer}
                variant="secondary"
                className="mt-5 flex items-center gap-2"
              >
                ▶ Watch Trailer
              </Button>
            </DialogTrigger>

            <DialogContent>
              {trailers && (
                <div className="flex justify-center items-center  aspect-video">
                  <ReactPlayer
                    src={trailers}
                    width="100%"
                    height="100%"
                    controls
                    playing
                  />
                </div>
              )}
              <DialogTitle>SS</DialogTitle>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </div>
  );
}

export function HeroMap({ hero }: { hero: Props[] | undefined }) {
  console.log("harjinu zolo o", hero);

  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {hero?.map((movie, i) => (
            <CarouselItem key={movie.title}>
              <FeaturedMovie
                text={movie.text}
                description={movie.overview}
                key={i}
                id={movie.id}
                title={movie.title}
                vote_average={movie.vote_average}
                backdrop_path={movie.backdrop_path}
                overview={""}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4  " />
        <CarouselNext className="absolute right-4  " />
      </Carousel>
    </div>
  );
}
