import { Badge } from "@/components/ui/badge";

export function Genres({ genres }: { genres: any }) {
  return (
    <div className="flex flex-col   mt-10 gap-2">
      <div className="flex gap-2 px-50">
        {genres.map((genre: any, i: string) => {
          console.log(genre);
          return (
            <div key={genre.id}>
              <Badge variant="outline">{genre.name}</Badge>
            </div>
          );
        })}
      </div>
    </div>
  );
}
