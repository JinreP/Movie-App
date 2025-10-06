import React from "react";

export function Authors(props: any) {
  const { author, name } = props;
  return (
    <div className="flex gap-10 ">
      <h1 className="font-bold">{author}</h1>
      <p className="">{name}</p>
    </div>
  );
}
