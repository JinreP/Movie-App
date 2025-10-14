import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function GenreFilterPagination({ page, genreId, genreName }: any) {
  return (
    <div className="pl-280 mt-10">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={`/GenreFilter?genreId=${genreId}&genreName=${genreName}&page=${
                page - 1
              }`}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href={`/GenreFilter?genreId=${genreId}&genreName=${genreName}&page=1`}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href={`/GenreFilter?genreId=${genreId}&genreName=${genreName}&page=2`}
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href={`/GenreFilter?genreId=${genreId}&genreName=${genreName}&page=3`}
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href={`/GenreFilter?genreId=${genreId}&genreName=${genreName}&page=4`}
            >
              4
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href={`/GenreFilter?genreId=${genreId}&genreName=${genreName}&page=${
                page + 1
              }`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export function SeeMore({ page, total, category }: any) {
  return (
    <div className="pl-280 mt-10">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`/more/${category}?page=${page - 1}`} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href={`/more?category=${category}&total=${total}&page=1`}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href={`/more?category=${category}&total=${total}&page=2`}
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href={`/more?category=${category}&total=${total}&page=3`}
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href={`/more?category=${category}&total=${total}&page=4`}
            >
              4
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={`/more/${category}?page=${page + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
