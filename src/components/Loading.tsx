"use client";
import { movieDatas } from "@/lib/Datas";
import useSWR from "swr";
import { MoreSkeleton } from "./skeleton/MoreSkeleton";

export function Loading({ category, page }: any) {
  const fetcher = () => movieDatas(category);
  const { data, error, isLoading } = useSWR(
    `/api/movies?category=${category}&page=${page}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <MoreSkeleton count={10} />;
  return <div>hello {data.name}!</div>;
}
