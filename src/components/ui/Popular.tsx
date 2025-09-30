"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PopularProps } from "@/lib/type";

export function Popular(Props: PopularProps) {
  const { title, imageUrl, rating } = Props;
  return (
    <div className="flex gap-2 ">
      <Card className="w-[250px]  flex h-[439px]">
        <CardContent>
          <img
            src={imageUrl}
            className="w-[250px]  bg-contain  h-[340px]"
            alt={title}
          />
        </CardContent>
        <CardHeader>
          <CardDescription className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.99967 1.33337L10.0597 5.50671L14.6663 6.18004L11.333 9.42671L12.1197 14.0134L7.99967 11.8467L3.87967 14.0134L4.66634 9.42671L1.33301 6.18004L5.93967 5.50671L7.99967 1.33337Z"
                fill="#FDE047"
                stroke="#FDE047"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {rating} <span className="text-gray-300">/10</span>
          </CardDescription>

          <CardTitle>{title}</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
