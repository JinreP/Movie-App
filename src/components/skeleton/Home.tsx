import { Skeleton } from "../ui/skeleton";

export function HomeSkeleton({ count }: any) {
  return (
    <div className=" w-full min-h-screen bg-no-repeat  ">
      <div className="mb-2">
        <Skeleton className="w-full h-[600px] mb-12" />
      </div>
      <div className="flex gap-252  ml-25">
        <Skeleton className="w-[200px] h-[50px] " />
        <Skeleton className="w-[100px] h-[50px] " />
      </div>
      <div className="w-[1400px] mx-auto flex flex-wrap gap-10 mt-10 justify-center">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="w-[230px]">
            <Skeleton className="h-[340px] w-full rounded-md" />
          </div>
        ))}
      </div>
      <div className="flex gap-252 ml-25 mt-10">
        <Skeleton className="w-[200px] h-[50px] " />
        <Skeleton className="w-[100px] h-[50px] " />
      </div>
      <div className="w-[1400px] mx-auto flex flex-wrap gap-10 mt-10 justify-center">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="w-[230px]">
            <Skeleton className="h-[340px] w-full rounded-md" />
          </div>
        ))}
      </div>
      <div className="flex gap-252  ml-25 mt-10">
        <Skeleton className="w-[200px] h-[50px] " />
        <Skeleton className="w-[100px] h-[50px] " />
      </div>
      <div className="w-[1400px] mx-auto flex flex-wrap gap-10 mt-10 justify-center">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="w-[230px]">
            <Skeleton className="h-[340px] w-full rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}
