import { MovieType } from "@/lib/type";
import { MovieMap } from "./MovieMap";

export function UpComingCard({ movies }: { movies: MovieType[] }) {
  console.log("hello ssss", movies);

  return (
    <div className="flex gap-2 ">
      <div className="flex flex-wrap gap-10  justify-center ml-23 items-center mt-10">
        <div className="w-[1400px] flex flex-wrap gap-10">
          {movies?.slice(0, 10).map((movie, i) => (
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
    </div>
  );
}

export function PopularMoviesCards({ movies }: { movies: MovieType[] }) {
  console.log("hello movies", movies);
  return (
    <div className="flex flex-wrap gap-10 justify-center  items-center mt-10">
      <div className="w-[1400px] flex flex-wrap gap-10 ml-23">
        {movies?.slice(0, 10).map((movie, i) => (
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

export function TopRatedCard({ movies }: { movies: MovieType[] }) {
  return (
    <div className="flex flex-wrap gap-10 justify-center ml-23 items-center mt-10">
      <div className="w-[1400px] flex flex-wrap gap-10">
        {movies?.slice(0, 10).map((movie, i) => (
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

export function MoreLikeThisMovies({ movies }: { movies: MovieType[] }) {
  return (
    <div className="flex flex-wrap gap-10 justify-center ml-23 items-center mt-10">
      <div className="w-[1400px] flex flex-wrap gap-10">
        {movies?.slice(0, 5).map((movie, i) => (
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

export function genreMovies({ movies }: { movies: MovieType[] }) {
  return (
    <div className="flex flex-wrap gap-10 justify-center ml-23 items-center mt-10">
      <div className="w-[1400px] flex flex-wrap gap-10">
        {movies?.slice(0, 10).map((movie, i) => (
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
