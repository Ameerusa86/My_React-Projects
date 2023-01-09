import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { MdOutlineMovieFilter } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-gray-700">
      <div className="w-full md:w-auto container mx-auto py-4 flex justify-between items-center">
        <Link to="/home">
          <h1 className="sm:text-sm md:text-lg lg:text-2xl font-bold text-gray-50 uppercase">
            Cinema World
          </h1>
        </Link>
        <div className="Nav-links flex space-x-10">
          <div className="flex items-center space-x-2 hoverLink ">
            <Link to="/home">
              <AiOutlineHome className="text-2xl text-white " />
            </Link>
            <Link to="/home" className="text-gray-50 ">
              HOME
            </Link>
          </div>
          <div className="flex items-center space-x-2 hoverLink">
            <Link to="/movies">
              <BiMoviePlay className="text-2xl text-white" />
            </Link>
            <Link to="/movies" className="text-gray-50">
              MOVIES
            </Link>
          </div>
          <div className="flex items-center space-x-2 hoverLink">
            <Link to="/tvshows">
              <MdOutlineMovieFilter className="text-2xl text-white" />
            </Link>
            <Link to="/tvshows" className="text-gray-50">
              TV SERIES
            </Link>
          </div>
        </div>
        <div className="lg:flex items-center space-x-2 bg-white py-1 px-2 rounded-full">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            className="right-0 outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
