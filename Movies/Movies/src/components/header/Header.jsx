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
      <div className="container-xl justify-center mt-4 bg-slate-400 h-[800px] rounded-2xl overflow-hidden ml-auto mr-auto">
        <img
          className="w-full h-full object-cover"
          src={API_URL.IMG_Original + movie?.poster_path}
        />
      </div>
    </>
  );
};

export default Header;
