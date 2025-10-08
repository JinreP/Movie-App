import { MovieMap } from "@/components/ui/MovieMap";
import { MovieType } from "@/lib/type";

export function AnimationCards({movies}: {movies: MovieType[]}) {

  return (
    <div className="flex flex-wrap gap-10 justify-center  items-center mt-10">
      <div className="w-[1050px] flex flex-wrap gap-10 ml-23">
        {movies.map((movie, i) => (
          <MovieMap
            key={i}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            results={undefined}
            id={movie.id}
          />
        ))}
      </div>
    </div>
  );
}
