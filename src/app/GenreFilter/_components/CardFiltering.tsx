import { MovieMap } from "@/components/ui/MovieMap";
import { AnimationMovie } from "@/lib/constant";
import { AnimationCard } from "@/lib/type";

export function AnimationCards(Props: AnimationCard) {
  const { title, imageUrl, rating } = Props;

  return (
    <div className="flex flex-wrap gap-10 justify-center  items-center mt-10">
      <div className="w-[1050px] flex flex-wrap gap-10 ml-23">
        {AnimationMovie.map((movie, i) => (
          <MovieMap
            key={i}
            title={movie.title}
            imageUrl={movie.imageUrl}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
}
