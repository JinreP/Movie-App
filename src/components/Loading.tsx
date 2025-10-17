"use client";
import { movieDatas } from "@/lib/Datas";
import useSWR from "swr";
import { MoreSkeleton } from "./skeleton/MoreSkeleton";
import { GenreSkeleton } from "./skeleton/GenreSkeleton";
import { HomeSkeleton } from "./skeleton/Home";
import { DetailsSkeleton } from "./skeleton/DetailsSkeletonLoading";

export function SeeMoreLoading({ category, page }: any) {
  const fetcher = () => movieDatas(category);
  const { data, error, isLoading } = useSWR(
    `/api/movies?category=${category}&page=${page}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <MoreSkeleton count={10} />;
  return <div></div>;
}

export function GenreFilterLoading({ category, page }: any) {
  const fetcher = () => movieDatas(category);
  const { data, error, isLoading } = useSWR(
    `/api/movies?category=${category}&page=${page}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <GenreSkeleton count={10} />;
  return <div></div>;
}

export function HomePage({ category, page }: any) {
  const fetcher = () => movieDatas(category);
  const { data, error, isLoading } = useSWR(
    `/api/movies?category=${category}&page=${page}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <HomeSkeleton count={10} />;
  return <div></div>;
}

export function DetailsLoading({ category, page }: any) {
  const fetcher = () => movieDatas(category);
  const { data, error, isLoading } = useSWR(
    `/api/movies?category=${category}&page=${page}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <DetailsSkeleton count={5} />;
  return <div></div>;
}
