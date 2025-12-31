import { Search } from "./_components/Search";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="">
      <Search searchParams={params} />
    </div>
  );
}
