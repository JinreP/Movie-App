import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { movieGenres } from "@/lib/Datas";
import { genreType } from "@/lib/type";
import Link from "next/link";

export async function Genres() {
  const genres = await movieGenres();

  return (
    <div className=" flex flex-wrap w-[500px]">
      {genres.map((genre: genreType) => (
        <div className="flex " key={genre.id}>
          <Link
            href={`/GenreFilter?genreId=${genre.id}&genreName=${genre.name}&page=1`}
          >
            <DropdownMenuItem key={genre.id}>
              {genre.name}
              <svg
                className="text-gray-700 dark:text-white"
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
            </DropdownMenuItem>
          </Link>
        </div>
      ))}
    </div>
  );
}
