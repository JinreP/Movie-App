import axios from "axios";

export const movieGenres = async () => {
  const detailsData = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?language=en`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
        accept: "application/json",
      },
    }
  );
  return detailsData.data.genres;
};

export const genreDatas = async (id: string) => {
  const genreFilter = await axios.get(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${id}&page=${1}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
        accept: "application/json",
      },
    }
  );

  return genreFilter.data;
};

export const movieDatas = async (id: string) => {
  const detailsData = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
        accept: "application/json",
      },
    }
  );
  return detailsData.data;
};

export const movieAuthors = async (id: string) => {
  const AuthorsData = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
        accept: "application/json",
      },
    }
  );
  return AuthorsData.data;
};

export const moreLikeThis = async (id: string) => {
  const moreLikeThisMovie = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1
`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
        accept: "application/json",
      },
    }
  );
  return moreLikeThisMovie.data;
};

export const searchMovie = async (id: string) => {
  const searchMovies = await axios.get(
    `https://api.themoviedb.org/3/movie/search/movie?query=${id}&language=en-US&page=${1}
`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
        accept: "application/json",
      },
    }
  );
  return searchMovies.data;
};



  