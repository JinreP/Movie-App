// import { initType } from "@/lib/type";
// import axios from "axios";

// const movieDatas = async (id: string) => {
//   const detailsData = await axios.get(
//     `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
//     {
//       headers: {
//         Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjkwMWUzNTJlOTFkMmU1OTcyNThhYzU1ZDM2ZmZmMiIsIm5iZiI6MTc1OTA1MDY1Ny4zMjUsInN1YiI6IjY4ZDhmYmExOTBlY2QwMDlhYWI5YTFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZd1y3tFFfxvZlPqBNIqCDw0G_aMwCZzWxffwENlwT8`,
//         accept: "application/json",
//       },
//     }
//   );
//   return detailsData.data;
// };

// const movieDetail = await movieDatas(id);
// console.log(movieDetail, " asdf");

// const movieAuthors = async (id: string) => {
//   const AuthorsData = await axios.get(
//     `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
//     {
//       headers: {
//         Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjkwMWUzNTJlOTFkMmU1OTcyNThhYzU1ZDM2ZmZmMiIsIm5iZiI6MTc1OTA1MDY1Ny4zMjUsInN1YiI6IjY4ZDhmYmExOTBlY2QwMDlhYWI5YTFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZd1y3tFFfxvZlPqBNIqCDw0G_aMwCZzWxffwENlwT8`,
//         accept: "application/json",
//       },
//     }
//   );
//   return AuthorsData.data;
// };
// const movieAuthorsId: initType = await movieAuthors(id);

// console.log(movieAuthorsId, "sdadada");
