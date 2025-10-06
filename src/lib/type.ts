export type UpComing = {
  poster_path: string;
  vote_average: number;
  title: string;
  rating: number;
  imageUrl: string;
};
export type Props = {
  overview: string;
  title: string | null | undefined;
  text: string;
  description: string;
  backdrop_path: string;
  vote_average: number;
};

export type MovieType = {
  title: string;
  poster_path: string;
  vote_average: number;
  results: any;
};

export type Wicked = {
  title: string;
  minute: any;
  imageUrl: string;
};

export type MoreLike = {
  title: string;
  rating: number;
  imageUrl: string;
};

export type AnimationCard = {
  title: string;
  rating: number;
  imageUrl: string;
};

export type kinoDetails = {
  overview: string;
  title: string | null | undefined;
  popularity: number;
  id: number;
  description: string;
  backdrop_path: string;
  vote_average: number;
};
