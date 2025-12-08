import { GenresFiltering } from "@/app/GenreFilter/_components/GenresFilter";
import { MovieMap } from "@/components/MovieMap";
import { movieGenres, searchMovies } from "@/lib/Datas";
import { SearchPageProps } from "@/lib/type";

export async function Search({ searchParams }: SearchPageProps) {
  const query = searchParams.query || "";
  const page = Number(searchParams.page) || 1;

  const results = query ? await searchMovies(query, page) : null;
  const genres = await movieGenres();

  return (
    <div className="flex justify-center gap-10 mt-10">
      <div className="flex flex-col w-[900px]">
        <h1 className="font-bold text-2xl mb-4">Search results</h1>

        <p className="text-gray-400 mb-6">
          {results?.total_results} results for “{query}”
        </p>

        <div className="flex flex-wrap gap-6">
          {results?.results.map((movie: any) => (
            <MovieMap
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
              results={undefined}
            />
          ))}
        </div>
      </div>

      <div className="">
        <GenresFiltering />
      </div>
    </div>
  );
}
