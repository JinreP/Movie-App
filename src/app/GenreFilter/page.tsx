import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { GenresFiltering } from "./_components/GenresFilter";
import { AnimationCards } from "./_components/CardFiltering";

export default function GenreHome() {
  return (
    <div>
      <h1 className="text-4xl pl-90">Search filter</h1>
      <div className="flex gap-5 justify-center mt-5">
        <GenresFiltering />
        <AnimationCards title={""} rating={0} imageUrl={""} />
      </div>
      <Pagination className="mt-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
