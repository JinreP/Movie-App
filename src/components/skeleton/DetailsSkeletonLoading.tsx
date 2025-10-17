import { Skeleton } from "../ui/skeleton";

export function DetailsSkeleton({ count }: any) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex justify-between gap-185 mb-10">
        <div className="flex flex-col gap-2 ">
          <Skeleton className="w-[250px] h-[30px] " />
          <Skeleton className="w-[100px] h-[30px] " />
        </div>
        <div className="flex flex-col gap-2 ">
          {/* <Skeleton className="w-[80px] h-[30px] " /> */}
          <p>Rating</p>
          <Skeleton className="w-[90px] h-[30px] " />
          <Skeleton className="w-[100px] h-[30px] " />
        </div>
      </div>
      <div className="flex gap-10   ">
        <Skeleton className="w-[290px] h-[428px] " />
        <Skeleton className="w-[760px] h-[428px] " />
      </div>
      <div className="flex gap-5 mt-10 pr-220">
        <Skeleton className="w-[60px] h-[30px] " />
        <Skeleton className="w-[60px] h-[30px] " />
        <Skeleton className="w-[60px] h-[30px] " />
      </div>
      <Skeleton className="w-[1100px] mt-10 h-[25px]" />
      <Skeleton className="w-[700px] mt-2 h-[25px] mr-100" />

      <div className="flex flex-col gap-5 mt-10 pr-140">
        <div className="flex gap-10">
          <Skeleton className="w-[90px] h-[30px] " />{" "}
          <Skeleton className="w-[100px] h-[30px] " />
        </div>
        <div className="flex gap-10">
          <Skeleton className="w-[90px] h-[30px] " />{" "}
          <Skeleton className="w-[400px] h-[30px] " />
        </div>
        <div className="flex gap-10">
          <Skeleton className="w-[90px] h-[30px] " />{" "}
          <Skeleton className="w-[400px] h-[30px] " />
        </div>
      </div>
      <div className="flex gap-229   mt-10">
        <Skeleton className="w-[300px] h-[30px] " />
        <Skeleton className="w-[100px] h-[30px] " />
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
