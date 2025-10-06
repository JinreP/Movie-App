import { Badge } from "@/components/ui/badge";

export function Genres() {
  return (
    <div className="flex flex-col   mt-10 gap-2">
      <div className="flex gap-2 px-50">
        <Badge variant="outline">Fairy tail</Badge>
        <Badge variant="outline">Pop musical</Badge>
        <Badge variant="outline">Fantasy</Badge>
        <Badge variant="outline">Musical</Badge>
        <Badge variant="outline">Romance</Badge>
      </div>
    </div>
  );
}
