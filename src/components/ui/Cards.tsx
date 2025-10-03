"use client";

import { popularMoviesData, TopRated, Upcoming } from "@/lib/constant";
import { topRated, UpComing } from "@/lib/type";
import { MovieMap } from "./MovieMap";

export function UpComingCard(Props: UpComing) {
  const { title, imageUrl, rating } = Props;
  return (
    <div className="flex gap-2 ">
      <div className="flex flex-wrap gap-10  justify-center ml-23 items-center mt-10">
        <div className="w-[1400px] flex flex-wrap gap-10">
          {Upcoming.map((movie, i) => (
            <MovieMap
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

export function TopRatedCard(Props: topRated) {
  const { title, imageUrl, rating } = Props;

  return (
    <div className="flex flex-wrap gap-10 justify-center ml-23 items-center mt-10">
      <div className="w-[1400px] flex flex-wrap gap-10">
        {TopRated.map((movie, i) => (
          <MovieMap
            key={i}
            title={movie.title}
            imageUrl={movie.imageUrl}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
}

export function PopularMoviesCards(Props: topRated) {
  const { title, imageUrl, rating } = Props;

  return (
    <div className="flex flex-wrap gap-10 justify-center  items-center mt-10">
      <div className="w-[1400px] flex flex-wrap gap-10 ml-23">
        {popularMoviesData.map((movie, i) => (
          <MovieMap
            key={i}
            title={movie.title}
            imageUrl={movie.imageUrl}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
}
