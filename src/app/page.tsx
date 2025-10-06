import { HeroMap } from "@/components/ui/Hero";

import { Text } from "@/components/ui/Text";
import {
  PopularMoviesCards,
  TopRatedCard,
  UpComingCard,
} from "@/components/ui/Cards";
import axios from "axios";
export default async function Home() {
  const movieDatas = async (category: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjkwMWUzNTJlOTFkMmU1OTcyNThhYzU1ZDM2ZmZmMiIsIm5iZiI6MTc1OTA1MDY1Ny4zMjUsInN1YiI6IjY4ZDhmYmExOTBlY2QwMDlhYWI5YTFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZd1y3tFFfxvZlPqBNIqCDw0G_aMwCZzWxffwENlwT8`,
        },
      }
    );
    return response.data;
  };

  const popularMovies = await movieDatas("popular");
  const upComingMovies = await movieDatas("upcoming");
  const topRatedMovies = await movieDatas("top_rated");
  const playingNow = await movieDatas("now_playing");

  return (
    <div className="">
      <div className=" ">
        <HeroMap hero={playingNow.results} />

        <Text text={"Upcoming"} />
        <div className="flex flex-wrap gap-10  justify-center  items-center mt-10">
          <UpComingCard movies={upComingMovies.results} />
        </div>
        <Text text={"Popular"} />
        <div className="flex flex-wrap gap-10  justify-center  items-center mt-10">
          <PopularMoviesCards movies={popularMovies.results} />
        </div>
        <Text text={"TopRated"} />
        <div className="flex flex-wrap gap-10 justify-center  items-center mt-10">
          <TopRatedCard movies={topRatedMovies.results} />
        </div>
      </div>
    </div>
  );
}
