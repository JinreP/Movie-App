import { UpComingCard } from "@/components/ui/Cards";
import { MovieMap } from "@/components/ui/MovieMap";
import axios from "axios";

export default async function UpComing() {
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
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl pr-280">Upcoming</h1>

        <UpComingCard movies={popularMovies.results} />
      </div>
    </div>
  );
}
