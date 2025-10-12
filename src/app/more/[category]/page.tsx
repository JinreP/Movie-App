import { UpComingCard } from "@/components/ui/Cards";
import axios from "axios";

export default async function CategoryHome({
  params: { category },
}: {
  params: { category: string };
}) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl pr-280">{category}</h1>
        <UpComingCard movies={[]} />
      </div>
    </div>
  );
}
