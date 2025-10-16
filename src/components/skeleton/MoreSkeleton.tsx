import { Skeleton } from "../ui/skeleton";

export function MoreSkeleton({ count = 10 }: { count: number }) {
  return (
    <div className="w-[1400px] mx-auto flex flex-wrap gap-10 mt-10 justify-center">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="w-[230px]">
          <Skeleton className="h-[340px] w-full rounded-md" />
        </div>
      ))}
      <Skeleton className="w-[350px] h-[50px] ml-240" />
    </div>
  );
}
