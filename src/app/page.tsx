"use client";

import { HeroMap } from "@/components/ui/Hero";

import { Text } from "@/components/ui/Text";
import {
  PopularMoviesCards,
  TopRatedCard,
  UpComingCard,
} from "@/components/ui/Cards";
import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "@/lib/type";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?page=1", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjkwMWUzNTJlOTFkMmU1OTcyNThhYzU1ZDM2ZmZmMiIsIm5iZiI6MTc1OTA1MDY1Ny4zMjUsInN1YiI6IjY4ZDhmYmExOTBlY2QwMDlhYWI5YTFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZd1y3tFFfxvZlPqBNIqCDw0G_aMwCZzWxffwENlwT8`,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      });
  }, []);

  return (
    <div className="">
      <div className=" ">
        {movies.map((movie, i) => {
          return (
            <HeroMap
              key={i}
              text={"Now Playing"}
              title={movie.title}
              description={movie.description}
              imageUrl={" https://image.tmdb.org/t/p"}
              rating={movie.rating}
            />
          );
        })}

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
function setPopularMovies(arg0: any) {
  throw new Error("Function not implemented.");
}
