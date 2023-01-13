import React from "react";
import { Link } from "react-router-dom";
import API_URL from "../api/api";
import Banner from "../components/Banner";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/slider";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Banner rowID={1} title="Up Coming" fetchURL={API_URL.requestPopular} />
      <Banner rowID={2} title="Popular" fetchURL={API_URL.requestUpcoming} />
      <Banner rowID={3} title="Top Rated" fetchURL={API_URL.requestTopRated} />
      <Banner rowID={4} title="Trending" fetchURL={API_URL.requestTrending} />
      <Banner rowID={5} title="Horror" fetchURL={API_URL.requestHorror} />
      <Banner rowID={6} title="TV Shows" fetchURL={API_URL.requestTVShows} />

      <h1>HOME PAGE</h1>
    </>
  );
};

export default Home;
