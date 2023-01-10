import axios from "axios";
import React, { useEffect, useState } from "react";
import API_URL from "../../api/api";
import Banner from "../Banner";

const Header = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  // console.log(movie);

  // useEffect(() => {
  //   fetch(API_URL.base_url)
  //     .then((res) => res.json())
  //     .then((data) => setMovies(data.results));
  // }, []);

  useEffect(() => {
    axios
      .get(API_URL.requestPopular)
      .then((res) => setMovies(res.data.results));
  }, []);

  console.log(movies);
  return (
    <>
      <div className="container mt-4 bg-slate-400 h-[800px] rounded-2xl overflow-hidden ml-auto mr-auto">
        <img
          className="w-full h-full object-cover"
          src={API_URL.IMG_Original + movie?.poster_path}
        />
      </div>
    </>
  );
};

export default Header;

// <div className="relative w-fit h-fit">
//   <img
//     className="w-full h-full object-cover"
//     src={API_URL.IMG_Original + movie?.poster_path}
//   />
//   <div>
//     <h1 className="absolute top-80 left-10 text-2xl text-white  py-2 px-4 bg-orange-600 rounded-lg">
//       {movie?.release_date}
//     </h1>
//     <h1 className="absolute top-80 left-10 text-2xl text-white  py-2 px-4 bg-orange-600 rounded-lg">
//       {movie?.title}
//     </h1>
//   </div>
// </div>
