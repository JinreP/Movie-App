import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export function GenresFiltering() {
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
    <div className="">
      <h1 className="text-3xl">Genres</h1>
      <p className="text-gray-500 mt-3">See lists of movies by genre</p>
      <div className=" flex flex-wrap w-[350px] gap-5">
        {genres.map((genre, index) => (
          <div className="flex mt-5" key={index}>
            <div key={index} className="flex text-[14px] items-center ">
              {genre}
              <svg
                className="text-gray-700 dark:text-white pt-[2px] shrink-0"
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
          </div>
        ))}
      </div>
    </div>
  );
}
