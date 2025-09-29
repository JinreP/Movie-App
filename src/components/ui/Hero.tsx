import { Button } from "@/components/ui/button";

export function FeaturedMovie(props: any) {
  const { title, description, imageUrl, text } = props;
  return (
    <section className=" w-full h-[500px] rounded-xl overflow-hidden">
      <img src={imageUrl} alt={title} className="absolute  w-full h-[600px] " />
      <div className="relative p-8 text-white mt-30 ml-10">
        <p className="text-4xl mb-2  ">{text}</p>

        <h1 className="text-5xl font-bold">{title}</h1>
        <div className="flex gap-2 mt-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M13.9997 2.33325L17.6047 9.63659L25.6663 10.8149L19.833 16.4966L21.2097 24.5233L13.9997 20.7316L6.78967 24.5233L8.16634 16.4966L2.33301 10.8149L10.3947 9.63659L13.9997 2.33325Z"
              fill="#FDE047"
              stroke="#FDE047"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex">
            <p className="font-bold text-white">6.9</p>
            <p className="text-gray-100">/10</p>
          </div>
        </div>
        <p className="mt-4 max-w-[600px]">{description}</p>
        <Button variant={"secondary"} className="absolute right-5 top-40 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
        </Button>
        <Button variant={"secondary"} className=" flex gap-2 items-center mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3.33301 2L12.6663 8L3.33301 14V2Z"
              stroke="#18181B"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Watch Trailer
        </Button>
      </div>
    </section>
  );
}
