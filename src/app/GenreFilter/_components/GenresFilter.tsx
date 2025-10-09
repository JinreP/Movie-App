import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { movieGenres } from "@/lib/Datas";
import { genreType } from "@/lib/type";
import { log } from "console";
import Link from "next/link";

export async function GenresFiltering() {
  const genres = await movieGenres();
  console.log(genres, "genres");
  
  return (
    <div className="">
      <h1 className="text-3xl">Genres</h1>
      <p className="text-gray-500 mt-3">See lists of movies by genre</p>
      <div className=" flex flex-wrap w-[350px] gap-5">
        {genres.map((genre: genreType) => (
          <Link href={`/GenreFilter/${genre.id}`} key={genre.id}>
            <div className="flex items-center gap-2 mt-10">
              {genre.name}
              <svg
                className="text-gray-700 dark:text-white pt-1"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
