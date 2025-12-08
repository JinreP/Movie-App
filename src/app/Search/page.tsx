import { Search } from "./_components/Search";

export default function SearchPage({
  searchParams,
}: {
  searchParams: { query?: string; page?: string };
}) {
  return (
    <div className="">
      <Search searchParams={searchParams} />
    </div>
  );
}
