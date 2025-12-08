import Image from "next/image";
import Link from "next/link";

export function SearchListItem({ movie }: { movie: any }) {
  return (
    <div className="flex justify-between items-center border-b border-gray-800 py-4 w-full">
      <div className="flex items-center gap-4">
        <Image
          src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
          alt={movie.title}
          width={70}
          height={100}
          className="rounded-md"
        />

        <div className="flex flex-col">
          <h2 className="text-[18px] font-medium">{movie.title}</h2>
          <p className="text-gray-400 text-sm">⭐ {movie.vote_average}/10</p>
          <p className="text-gray-500 text-sm">
            {movie.release_date?.slice(0, 4)}
          </p>
        </div>
      </div>

      <Link
        href={`/Details/${movie.id}`}
        className="flex items-center gap-2 text-gray-300 hover:text-white transition"
      >
        See more →
      </Link>
    </div>
  );
}
