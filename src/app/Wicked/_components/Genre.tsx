import { Badge } from "@/components/ui/badge";
import { BadgeCheckIcon } from "lucide-react";

export function Genres() {
  const genres = ["Fairy Tale", "Pop Musical", "Fantasy", "Musical", "Romance"];
  return (
    <div className="flex flex-col   mt-10 gap-2">
      <div className="flex gap-2 px-69">
        <Badge variant="outline">Fairy tail</Badge>
        <Badge variant="outline">Pop musical</Badge>
        <Badge variant="outline">Fantasy</Badge>
        <Badge variant="outline">Musical</Badge>
        <Badge variant="outline">Romance</Badge>
      </div>
    </div>
  );
}
