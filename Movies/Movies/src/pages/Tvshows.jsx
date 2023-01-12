import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/navbar/Navbar";
import API_URL from "../api/api";
import axios from "axios";

const Tvshows = () => {
  const [tvshow, setTvshow] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL.requestTVShows)
      .then((res) => setTvshow(res.data.results));
  }, []);

  console.log(tvshow);

  return (
    <>
      <Navbar />
      <div className="grid lg:grid-cols-4 2xl:grid-cols-7 xl:grid-cols-6 p-4 lg:w-50 h-full 500 2xl:gap-6 lg:gap-4">
        {tvshow.map((tv) => (
          <Card
            key={tv.id}
            name={tv.name}
            img={API_URL.IMG_Original + tv?.poster_path}
            rating={tv.vote_average}
            overview={tv.overview}
          />
        ))}
      </div>
    </>
  );
};

export default Tvshows;
