import { castType, crewType } from "@/lib/type";
import React from "react";
export function Authors({
  cast,
  crew,
}: {
  cast: castType[];
  crew: crewType[];
}) {
  const directors = crew.filter((p) => p.job === "Director");

  const topCast = cast.slice(0, 3);

  {
    return (
      <div className="flex flex-col gap-10">
        <div className="flex gap-10">
          <span className="font-bold">Director : </span>
          {directors.map(
            (director) =>
              director.job === "Director" && (
                <p key={director.id}>{director.name}</p>
              )
          )}
        </div>
        <div className="flex gap-10  items-center">
          <span className="font-bold">Writers :</span>
          {crew.splice(0, 3).map((c) => (
            <p>{c.name}</p>
          ))}
        </div>
        <div className="flex gap-10">
          <span className="font-bold">Top actors : </span>
          {topCast.map((t) => {
            return <p>{t.name}</p>;
          })}
        </div>
      </div>
    );
  }
}
