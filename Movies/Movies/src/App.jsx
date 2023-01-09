import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Tvshows from "./pages/Tvshows";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<Tvshows />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
