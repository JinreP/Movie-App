import { Skeleton } from "../ui/skeleton";

export function MoreSkeleton({ count = 20 }: { count: number }) {
  return (
    <div className="w-[1400px] mx-auto flex flex-wrap gap-10 mt-10 justify-center">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="w-[230px]">
          <Skeleton className="h-[340px] w-full rounded-md" />
          <div className="mt-3 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </div>
      ))}
    </div>
  );
}
