import { NavBar } from "../../components/ui/NavBar";
import { Title } from "@/app/Wicked/_components/Title";
import { Image } from "@/app/Wicked/_components/Image";
import { MoreLikeThis } from "@/lib/constant";
import { Text } from "@/components/ui/Text";
import { Genres } from "./_components/Genre";
import { Desc } from "./_components/Desc";
import { Authors } from "./_components/Authors";
import { MoreLikeThisM } from "./_components/MoreLikeThis";
import { Footer } from "@/components/Footer";
export default function Wicked(props: any) {
  return (
    <div className="BIGGEST ">
      <NavBar />;
      <Title />
      <div className="flex justify-center ">
        <Image />
      </div>
      <Genres />
      <Desc
        desc={
          "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. "
        }
      />
      <Authors author={"Director"} name={"Jon M. Chu"} />
      <Authors
        author={"Writers"}
        name={"Winnie Holzman ·  Dana Fox · Gregory Maguire"}
      />
      <Authors
        author={"Stars"}
        name={"Cynthia Erivo ·  Ariana Grande · Jeff Goldblum"}
      />
      <Text text={"More like this"} />
      <div className="flex flex-wrap gap-10  justify-center  items-center mt-10">
        {MoreLikeThis.map((movie, i) => (
          <MoreLikeThisM
            key={i}
            title={movie.title}
            imageUrl={movie.imageUrl}
            rating={movie.rating}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
