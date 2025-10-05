import { Key } from "react";

export type UpComing = {
  title: string;
  rating: number;
  imageUrl: string;
};
export type Props = {
  text: string;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
};

export type Movie = {
  id: Key | null | undefined;
  overview: string;
  poster_path: any;
  vote_average: number;
  text: string;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
};

export type PopularMovies = {
  title: string;
  rating: number;
  imageUrl: string;
};

export type topRated = {
  title: string;
  rating: number;
  imageUrl: string;
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

export interface Movies {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}
