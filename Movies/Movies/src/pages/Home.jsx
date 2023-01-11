import React from "react";
import { Link } from "react-router-dom";
import API_URL from "../api/api";
import Banner from "../components/Banner";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Banner title="Up Coming" fetchURL={API_URL.requestPopular} />
      <Banner title="Popular" fetchURL={API_URL.requestPopular} />
      <h1>HOME PAGE</h1>
    </>
  );
};

export default Home;
