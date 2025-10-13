import {
  PopularMoviesCards,
  TopRatedCard,
  UpComingCard,
} from "@/components/ui/Cards";
import axios from "axios";

export default async function CategoryHome({
  params: { category },
}: {
  params: { category: string };
}) {
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
  const seeMoreMovies = await movieDatas(category);

  let title = "";
  if (category === "popular") {
    title = "Popular";
  } else if (category === "top_rated") {
    title = "Top rated";
  } else {
    title = "Upcoming";
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl pr-280">{title}</h1>
        <UpComingCard movies={seeMoreMovies.results} />
      </div>
    </div>
  );
}
