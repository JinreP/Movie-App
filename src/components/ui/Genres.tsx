import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export function Genres() {
  return (
    <>
      <div className="flex">
        {" "}
        <DropdownMenuItem className="flex gap-2 items-center">
          {" "}
          Action{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            {" "}
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />{" "}
          </svg>{" "}
        </DropdownMenuItem>{" "}
        <DropdownMenuItem>
          {" "}
          Adventure{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            {" "}
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />{" "}
          </svg>{" "}
        </DropdownMenuItem>{" "}
        <DropdownMenuItem>
          {" "}
          Animation{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            {" "}
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />{" "}
          </svg>{" "}
        </DropdownMenuItem>{" "}
        <DropdownMenuItem>
          {" "}
          Biography{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            {" "}
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />{" "}
          </svg>{" "}
        </DropdownMenuItem>{" "}
        <DropdownMenuItem>
          {" "}
          Comedy{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            {" "}
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />{" "}
          </svg>{" "}
        </DropdownMenuItem>{" "}
      </div>
      <DropdownMenuSeparator />
      <div className="flex">
        <DropdownMenuItem className="flex gap-2 items-center">
          Crime
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 items-center">
          Documentary
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 items-center">
          Drama
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 items-center">
          Family
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 items-center">
          Fantasy
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
      </div>

      <DropdownMenuSeparator />

      <div className="flex">
        <DropdownMenuItem className="flex gap-2 items-center">
          Film-Noir
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 items-center">
          Game-Show
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 items-center">
          History
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 items-center">
          Horror
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 items-center">
          Music
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
      </div>

      <DropdownMenuSeparator />

      <div className="flex">
        <DropdownMenuItem className="flex gap-2 items-center">
          Musical
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 items-center">
          Mystery
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 items-center">
          News
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 items-center">
          Reality-TV
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 items-center">
          Romance
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
      </div>

      <DropdownMenuSeparator />

      <div className="flex">
        <DropdownMenuItem className="flex gap-2 items-center">
          Sci-Fi
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 items-center">
          Short
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 items-center">
          Sport
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 items-center">
          Talk-Show
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 items-center">
          Thriller
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 items-center">
          War
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
       
      </div>
              <DropdownMenuSeparator />

       <DropdownMenuItem className="flex gap-2 items-center">
          Western
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#09090B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </DropdownMenuItem>
    </>
  );
}
