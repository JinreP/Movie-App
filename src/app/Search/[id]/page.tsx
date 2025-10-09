import { searchMovie } from "@/lib/Datas";

export default async function SearchMovie({
  params: { id },
}: {
  params: { id: string };
}) {
  const search = await searchMovie(id);

  console.log(search, " Search Details");

  {
    return <div className="">11111</div>;
  }
}
