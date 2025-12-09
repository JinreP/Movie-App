"use client";

import { useEffect, useState } from "react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { movieGenres } from "@/lib/Datas";
import { genreType } from "@/lib/type";
import Link from "next/link";

export function Genres() {
  const [genres, setGenres] = useState<genreType[]>([]);

  useEffect(() => {
    async function loadGenres() {
      const data = await movieGenres();
      setGenres(data);
    }
    loadGenres();
  }, []);

  return (
    <div className="flex flex-wrap w-[500px]">
      {genres.map((genre) => (
        <Link
          key={genre.id}
          href={`/GenreFilter?genreId=${genre.id}&genreName=${genre.name}&page=1`}
        >
          <DropdownMenuItem>
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
      ))}
    </div>
  );
}
