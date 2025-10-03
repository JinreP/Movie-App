import { Button } from "@/components/ui/button";
import { Genres } from "@/components/ui/Genres";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { GenresFiltering } from "./_components/GenresFilter";
import { AnimationCards } from "./_components/CardFiltering";

export default function GenreHome() {
  return (
    <div>
      <h1 className="text-4xl">Search filter</h1>
      <div className="flex gap-5 mt-5">
        <GenresFiltering />
        <AnimationCards title={""} rating={0} imageUrl={""} />
      </div>
    </div>
  );
}
