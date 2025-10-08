import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { GenresFiltering } from "../_components/GenresFilter";
import { AnimationCards } from "../_components/CardFiltering";
import axios from "axios";
import { genreMovies } from "@/components/ui/Cards";

export default async function GenreHome({
  params: { id },
}: {
  params: { id: string };
}) {
  const genreDatas = async (id: string) => {
    const genreFilter = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${id}&page=${1}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
          accept: "application/json",
        },
      }
    );
    return genreFilter.data;
  };
  const genreDetails = await genreDatas(id);
  console.log(genreDetails, " asdf");
  {
    return (
      <div className="">
        <div className="flex gap-5 justify-center items-center  flex-col">
          <h1 className="text-4xl pr-328 mt-10">Search filter</h1>
          <div className="flex">
            <GenresFiltering />
            <div className="flex flex-col">
              <h1 className="text-4xl pl-25">{genreDetails.name}</h1>
              <AnimationCards movies={genreDetails.results} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <Pagination className="mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination> */
}
