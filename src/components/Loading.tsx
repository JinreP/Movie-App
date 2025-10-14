"use client";

import { movieDatas } from "@/lib/Datas";
import useSWR from "swr";
import { HomeSkeleton } from "./skeleton/Home";

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
  if (isLoading) return <HomeSkeleton />;
  return <div>hello {data.name}!</div>;
}
