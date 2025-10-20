import { GenresFiltering } from "./_components/GenresFilter";
import { AnimationCards } from "./_components/CardFiltering";
import { genreDatas, movieGenres } from "@/lib/Datas";
import { GenreFilterPagination } from "../../components/ui/Paginations";
type GenrePageDetails = {
  searchParams: Promise<{
    genreId: string;
    genreName: string;
    page: any;
    total_pages: number;
  }>;
};
export default async function GenreHome({ searchParams }: GenrePageDetails) {
  const params = await searchParams;
  const { genreId, genreName, page = 1, total_pages } = params;
  const genreDetails = await genreDatas(genreId, page);

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
                "{genreDetails.total_results}" titles in {genreName}
              </h1>
              <AnimationCards movies={genreDetails.results} />
            </div>
          </div>
        </div>
        <GenreFilterPagination
          page={page}
          genreName={genreName}
          genreId={genreId}
          total={total_pages}
        />
      </div>
    );
  }
}
