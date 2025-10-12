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
  id: string;
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
  poster_path: string;
  vote_average: number;
  id: string;
  title: string;
  rating: number;
  imageUrl: string;
};

// export type kinoDetails = {
//   overview: string;
//   title: string | null | undefined;
//   popularity: number;
//   id: number;
//   description: string;
//   backdrop_path: string;
//   vote_average: number;
// };

export type initType = {
  crew: crewType[];
  cast: castType[];
  id?: number;
};

export type crewType = {
  id: number;
  name: string;
  gender: string;
  job: string;
};

export type castType = {
  [x: string]: any;
  id: number;
  name: string;
  job: string;
  order: number;
};

// export type initGenre = {
//   genre: genreType[];
// };

export type genreType = {
  id: number;
  name: string;
};

export type Text = {
  name: string;
  id: number;
  category: string;
  text: string;
};
