import { GenreSkeleton } from "@/components/skeleton/GenreSkeleton";
import { HomeSkeleton } from "@/components/skeleton/Home";

export default function HomeLoading() {
  return <HomeSkeleton count={10} />;
}
