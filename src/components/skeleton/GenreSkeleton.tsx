import { Skeleton } from "../ui/skeleton";

export function GenreSkeleton({ count = 12 }: { count: number }) {
  return (
    <div className="flex justify-center  mt-10">
      <div className="flex w-full  gap-20">
        <div className="w-[260px]">
          <Skeleton className="h-10 w-32 mb-2" />
          <Skeleton className="h-6 w-48 mb-6" />

          <div className="flex flex-wrap gap-5 mt-4 w-[400px]">
            {Array.from({ length: 23 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-6 w-10 rounded-full" />{" "}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-[1000px]">
          <Skeleton className="h-8 w-[260px] mb-6" />

          <div className="flex flex-wrap gap-6">
            {Array.from({ length: count }).map((_, i) => (
              <div key={i} className="w-[230px]">
                <Skeleton className="h-[340px] rounded-md" />
              </div>
            ))}
          </div>

          <Skeleton className="w-[350px] h-[50px] mt-10" />
        </div>
      </div>
    </div>
  );
}
