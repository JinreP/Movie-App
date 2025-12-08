
import { Text } from "@/components/Text";

import axios from "axios";
import { PopularMoviesCards, TopRatedCard, UpComingCard } from "@/components/Cards";
import { HeroMap } from "@/components/Hero";
export default async function Home() {
  const movieDatas = async (category: string) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
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

        <div className="flex  flex-col items-center mt-10">
          <Text text={"Upcoming"} />

          <UpComingCard movies={upComingMovies.results} />
        </div>
        <div className="flex  flex-col  justify-center  items-center mt-10">
          <Text text={"Popular"} />

          <PopularMoviesCards movies={popularMovies.results} />
        </div>
        <div className="flex justify-center flex-col  items-center mt-10">
          <Text text={"TopRated"} />

          <TopRatedCard movies={topRatedMovies.results} />
        </div>
      </div>
    </div>
  );
}
