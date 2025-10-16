"use client";

import { Props } from "@/lib/type";
import { Button } from "./button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import Autoplay from "embla-carousel-autoplay";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { getTrailer } from "@/lib/Datas";
import { useState } from "react";

export function FeaturedMovie(props: Props) {
  // const [trailer, setTrailer] = useState<any>(null);

  // async function WatchTrailer(movieId: number) {
  //   const trailerData = await getTrailer(movieId, "en");

  //   const traile =
  //     trailerData?.results?.find(
  //       (v: any) => v.type === "Trailer" && v.site === "YouTube"
  //     ) || trailerData.results;

  //   setTrailer(traile.key);
  // }

  const { title, description, vote_average, backdrop_path } = props;

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
          {/* <Dialog>
            <DialogTrigger>
              <Button
                variant="secondary"
                className="mt-5 flex items-center gap-2"
              >
                ▶ Watch Trailer
              </Button>
            </DialogTrigger>

            <DialogContent>
              <div className="flex justify-center items-center">
                <iframe
                  width="100%"
                  height="90%"
                  src={`https://www.youtube.com/embed/${trailer}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-xl"
                />
              </div>
            </DialogContent>
          </Dialog> */}
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
            delay: 5000,
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
