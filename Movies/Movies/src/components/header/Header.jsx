import React, { useEffect, useState } from "react";
import API_URL from "../../api/api";

const Header = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  // console.log(movie);

  useEffect(() => {
    fetch(API_URL.base_url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  console.log(movies);
  return (
    <div className="relative w-full h-[600px]">
      <img
        className="w-full h-full object-cover"
        src={API_URL.IMG_Original + movie?.poster_path}
      />
      <div>
        <h1 className="absolute top-80 left-10 text-2xl text-white  py-2 px-4 bg-orange-600 rounded-lg">
          {movie?.release_date}
        </h1>
        <h1 className="absolute top-80 left-10 text-2xl text-white  py-2 px-4 bg-orange-600 rounded-lg">
          {movie?.title}
        </h1>
      </div>
    </div>
  );
};

export default Header;
