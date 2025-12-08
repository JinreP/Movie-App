import { UpComingCard } from "@/components/ui/Cards";
import { SeeMore } from "@/components/Paginations";
import axios from "axios";
export default async function CategoryHome({
  params: { category },
  searchParams: { page },
}: {
  params: { category: string };
  searchParams: { page?: string };
}) {
  const movieDatas = async (category: string, page: number) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  };
  const currentPage = page ? parseInt(page) : 1;
  const seeMoreMovies = await movieDatas(category, currentPage);
  console.log(seeMoreMovies, "see more movies");

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
        <SeeMore
          category={category}
          page={seeMoreMovies.page}
          total={seeMoreMovies.total_pages}
        />
      </div>
    </div>
  );
}
