"use client";

import { movieDatas } from "@/lib/Datas";
import useSWR from "swr";

export function Loading({
  category,
  page,
}: {
  category: string;
  page: number;
}) {
  const fetcher = () => movieDatas(category);
  const { data, error, isLoading } = useSWR(
    `/api/movies?category=${category}&page=${page}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
}
