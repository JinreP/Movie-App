import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export function Genres() {
  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film-Noir",
    "Game-Show",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "News",
    "Reality-TV",
    "Romance",
    "Sci-FI",
    "Short",
    "Sport",
    "Talk-Show",
    "Thriller",
    "War",
    "Western",
  ];
  return (
    <div className=" flex flex-wrap w-[500px]">
      {genres.map((genre, index) => (
        <div className="flex " key={index}>
          <DropdownMenuItem key={index}>
            {genre}{" "}
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
        </div>
      ))}
    </div>
  );
}
