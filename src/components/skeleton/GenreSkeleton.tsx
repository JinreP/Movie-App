import { Skeleton } from "../ui/skeleton";

export function GenreSkeleton({ count = 5 }: { count: number }) {
  return (
    <div className="w-full flex flex-wrap gap-10 mt-10 justify-center">
      <div className="flex flex-wrap w-[1400px]">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="w-[60px]">
            <Skeleton className="h-[30px] w-full rounded-md" />
          </div>
        ))}
      </div>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="w-[230px]">
          <Skeleton className="h-[340px] w-full rounded-md" />
        </div>
      ))}
      <Skeleton className="w-[350px] h-[50px] ml-240" />
    </div>
  );
}
