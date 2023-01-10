import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Banner title="Up Coming" />
      <h1>HOME PAGE</h1>
    </>
  );
};

export default Home;
