import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/navbar/Navbar";
import axios from "axios";
import API_URL from "../api/api";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL.requestPopular)
      .then((res) => setMovies(res.data.results));
  }, []);

  console.log(movies);

  return (
    <>
      <Navbar />
      <div className="grid lg:grid-cols-4 2xl:grid-cols-7 xl:grid-cols-6 p-4 lg:w-50 h-full 500 2xl:gap-6 lg:gap-4">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            img={API_URL.IMG_Original + movie.poster_path}
            release_date={`Release Date: ${movie.release_date}`}
            overview={movie.overview}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </>
  );
};

export default Movies;
