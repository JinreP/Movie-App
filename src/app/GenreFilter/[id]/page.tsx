import { GenresFiltering } from "../_components/GenresFilter";
import { AnimationCards } from "../_components/CardFiltering";
import { genreDatas, movieGenres } from "@/lib/Datas";
import { Paginations } from "../_components/Pagination";
import { genreType } from "@/lib/type";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
export default async function GenreHome({
  params: { id },
}: {
  params: { id: string; page: number };
}) {
  const genreDetails = await genreDatas(id);
  const genres = await movieGenres();

  console.log(genreDetails, " Genre Details");

  {
    return (
      <div className="">
        <div className="flex gap-5 justify-center items-center  flex-col">
          <h1 className="text-4xl pr-328 mt-10">Search filter</h1>
          <div className="flex">
            <GenresFiltering />
            <div className="flex flex-col">
              <h1 className="text-4xl pl-25">
                {genres.find((g: genreType) => g.id.toString() === id).name}
              </h1>
              <AnimationCards movies={genreDetails.results} />
            </div>
          </div>

          {/* <Pagination className="mt-10 pl-280">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href={`/GenreFilter/${1 - 1}`} />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink>4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext />
              </PaginationItem>
            </PaginationContent>
          </Pagination> */}
        </div>
      </div>
    );
  }
}
