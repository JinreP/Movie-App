import { Button } from "./button";

export function Text(props: any) {
  const { text } = props;
  return (
    <div className="flex   justify-between gap-270 mt-10">
      <h1 className="text-2xl font-bold">{text}</h1>{" "}
      <Button variant={"secondary"} className="flex gap-2 items-center">
        See more
        <svg
          className="text-black dark:text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M3.33301 8.00004H12.6663M12.6663 8.00004L7.99967 3.33337M12.6663 8.00004L7.99967 12.6667"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
}
