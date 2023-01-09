import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <h1>HOME PAGE</h1>
    </>
  );
};

export default Home;
