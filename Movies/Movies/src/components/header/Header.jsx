import axios from "axios";
import React, { useEffect, useState } from "react";
import API_URL from "../../api/api";
import Banner from "../Banner";

const Header = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios
      .get(API_URL.requestPopular)
      .then((res) => setMovies(res.data.results));
  }, []);

  return (
    <>
      <div className="max-w-[1860px] h-[800px] w-full bg-gray-600 m-auto mt-4 rounded-2xl overflow-hidden  relative">
        <img
          className=" w-full h-full bg-cover "
          src={API_URL.IMG_Original + movie?.backdrop_path}
        />
      </div>
    </>
  );
};

export default Header;
