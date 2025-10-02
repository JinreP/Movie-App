import React from "react";

export function Desc(props: any) {
  const { desc } = props;
  return (
    <div className="Image flex flex-wrap px-70 mt-2">
      <h3 className="text-gray-500">{desc}</h3>
    </div>
  );
}
