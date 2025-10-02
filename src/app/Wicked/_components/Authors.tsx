import React from "react";

export function Authors(props: any) {
  const { author, name } = props;
  return (
    <div className="flex flex-col  gap-2">
      <div className="">
        <div className="flex gap-10 items-center px-50 mt-2 ">
          <h1 className="font-bold">{author}</h1>
          <p className="">{name}</p>
        </div>
      </div>
    </div>
  );
}
