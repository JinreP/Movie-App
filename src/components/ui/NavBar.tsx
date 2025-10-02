import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Genres } from "@/components/ui/Genres";
import { Theme } from "./Theme";

export function NavBar() {
  return (
    <div className="flex gap-2 w-full h-20  items-center justify-around">
      <div className="flex gap-5 items-center  justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M5.83366 2.16675V18.8334M14.167 2.16675V18.8334M1.66699 10.5001H18.3337M1.66699 6.33341H5.83366M1.66699 14.6667H5.83366M14.167 14.6667H18.3337M14.167 6.33341H18.3337M3.48366 2.16675H16.517C17.5203 2.16675 18.3337 2.9801 18.3337 3.98341V17.0167C18.3337 18.0201 17.5203 18.8334 16.517 18.8334H3.48366C2.48034 18.8334 1.66699 18.0201 1.66699 17.0167V3.98341C1.66699 2.9801 2.48034 2.16675 3.48366 2.16675Z"
            stroke="#4338CA"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <a href="http://localhost:3000/">
          <p className="font-bold text-2xl text-purple-500">Movie Z</p>
        </a>
      </div>

      <div className="flex gap-5  items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"secondary"}
              className="flex gap-2  justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M4 6.5L8 10.5L12 6.5"
                  stroke="#18181B"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Genre
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold">Genres</h1>{" "}
                <p className="text-2xl ">See lists of movies by genre</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Genres />
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="relative">
          <Input
            type="text"
            className="w-[500px] pl-15  h-[45px]"
            placeholder="Search you're movie"
          />
          <svg
            className="absolute left-3 top-3"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 16 17"
            fill="none"
          >
            <g opacity="0.5">
              <path
                d="M6.93262 3.1333C9.30738 3.1333 11.2323 5.05837 11.2324 7.43311C11.2324 8.44873 10.8814 9.38107 10.293 10.1167L10.0127 10.4663L13.3564 13.8101C13.3628 13.8166 13.3663 13.825 13.3662 13.8335L13.3564 13.8569C13.3435 13.8698 13.3226 13.8697 13.3096 13.8569L9.96582 10.5132L9.61621 10.7935C8.88058 11.3819 7.94824 11.7329 6.93262 11.7329C4.55788 11.7328 2.63281 9.80786 2.63281 7.43311C2.63292 5.05844 4.55795 3.13341 6.93262 3.1333ZM6.93262 3.19971C4.59476 3.19981 2.69932 5.09525 2.69922 7.43311C2.69922 9.77105 4.5947 11.6664 6.93262 11.6665C9.27063 11.6665 11.166 9.77111 11.166 7.43311C11.1659 5.09519 9.27056 3.19971 6.93262 3.19971Z"
                fill="#09090B"
                stroke="#09090B"
              />
            </g>
          </svg>
        </div>
      </div>

      <Theme />
    </div>
  );
}
