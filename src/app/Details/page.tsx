import { Title } from "@/app/Details/_components/Title";
import { Image } from "@/app/Details/_components/Image";
import { MoreLikeThis } from "@/lib/constant";
import { Text } from "@/components/ui/Text";
import { Genres } from "./_components/Genre";
import { Desc } from "./_components/Desc";
import { Authors } from "./_components/Authors";
import { MoreLikeThisM } from "./_components/MoreLikeThis";
import { kinoDetails } from "/Users/25LP3874/Documents/movie-app/src/lib/type";
export default function MovieDetailsPage({
  Details,
}: {
  Details: kinoDetails[];
}) {
  return (
    <div className="BIGGEST ">
      <Title />
      <div className="flex justify-center ">
        <Image />
      </div>
      <div className="flex justify-center flex-col">
        <Genres />
        <Desc
          desc={
            "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. "
          }
        />
        <div className="flex justify-center  pr-158  ">
          <div className="flex flex-col gap-5">
            <Authors author={"Director"} name={"Jon M. Chu"} />
            <Authors
              author={"Writers"}
              name={"Winnie Holzman ·  Dana Fox · Gregory Maguire"}
            />
            <Authors
              author={"Stars"}
              name={"....Cynthia Erivo ·  Ariana Grande · Jeff Goldblum"}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-10  justify-center  items-center mt-10">
        <Text text={"More like this"} />

        <div className="w-[1250px] flex gap-10">
          {MoreLikeThis.map((movie, i) => (
            <MoreLikeThisM
              key={i}
              title={movie.title}
              imageUrl={movie.imageUrl}
              rating={movie.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
