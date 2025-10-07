import { Title } from "@/app/Details/_components/Title";
import { Text } from "@/components/ui/Text";
import { Genres } from "../_components/Genre";
import { Desc } from "../_components/Desc";
import { Authors } from "../_components/Authors";
import axios from "axios";
import { Image } from "../_components/Image";
import { castType, crewType, initType, MovieType } from "@/lib/type";
import { MovieMap } from "@/components/ui/MovieMap";
import { MoreLikeThisMovies } from "@/components/ui/Cards";
export default async function MovieDetailsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  //Movie Details
  const movieDatas = async (id: string) => {
    const detailsData = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjkwMWUzNTJlOTFkMmU1OTcyNThhYzU1ZDM2ZmZmMiIsIm5iZiI6MTc1OTA1MDY1Ny4zMjUsInN1YiI6IjY4ZDhmYmExOTBlY2QwMDlhYWI5YTFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZd1y3tFFfxvZlPqBNIqCDw0G_aMwCZzWxffwENlwT8`,
          accept: "application/json",
        },
      }
    );
    return detailsData.data;
  };
  const movieDetail = await movieDatas(id);
  console.log(movieDetail, " asdf");
  //Movie Authors
  const movieAuthors = async (id: string) => {
    const AuthorsData = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjkwMWUzNTJlOTFkMmU1OTcyNThhYzU1ZDM2ZmZmMiIsIm5iZiI6MTc1OTA1MDY1Ny4zMjUsInN1YiI6IjY4ZDhmYmExOTBlY2QwMDlhYWI5YTFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZd1y3tFFfxvZlPqBNIqCDw0G_aMwCZzWxffwENlwT8`,
          accept: "application/json",
        },
      }
    );
    return AuthorsData.data;
  };
  const movieAuthorsId: initType = await movieAuthors(id);

  console.log(movieAuthorsId, "sdadada");
  const crew: crewType[] = movieAuthorsId.crew;
  const cast: castType[] = movieAuthorsId.cast;
  //More like this movies

  const moreLikeThis = async (id: string) => {
    const moreLikeThisMovie = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1
`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjkwMWUzNTJlOTFkMmU1OTcyNThhYzU1ZDM2ZmZmMiIsIm5iZiI6MTc1OTA1MDY1Ny4zMjUsInN1YiI6IjY4ZDhmYmExOTBlY2QwMDlhYWI5YTFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZd1y3tFFfxvZlPqBNIqCDw0G_aMwCZzWxffwENlwT8`,
          accept: "application/json",
        },
      }
    );
    return moreLikeThisMovie.data;
  };
  const moreLikeThisMovies = await moreLikeThis(id);

  console.log(moreLikeThisMovies, "sdadada");

  return (
    <div className=" flex justify-center items-center flex-col">
      <div className="flex gap-100">
        <Title
          title={movieDetail.title}
          rating={movieDetail.vote_average}
          date={movieDetail.release_date}
          popularity={movieDetail.popularity}
        />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div className="flex">
          <Image
            poster_path={movieDetail.poster_path}
            backdrop_path={movieDetail.backdrop_path}
          />
        </div>
        <div className="flex  gap-5 flex-col  w-[1500px] ">
          <Genres genres={movieDetail.genres} />
          <Desc desc={movieDetail.overview} />
          <div className="flex flex-col gap-5 pl-50 ">
            <Authors crew={crew} cast={cast} />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-10  justify-center  items-center mt-10">
        <Text text={"More like this"} />

        <div className=" flex gap-10">
          <MoreLikeThisMovies movies={moreLikeThisMovies.results} />
        </div>
      </div>
    </div>
  );
}
