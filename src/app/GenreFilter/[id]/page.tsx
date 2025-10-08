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
import { genreDatas } from "@/lib/Datas";

export default async function GenreHome({
  params: { id },
}: {
  params: { id: string };
}) {
  const genreDetails = await genreDatas(id);
  console.log(genreDetails, " DOTA 2");
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
          {
            <Pagination className="mt-10">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          }
        </div>
      </div>
    );
  }
}
